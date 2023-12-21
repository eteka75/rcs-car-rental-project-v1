<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\RequestMarqueCategorieRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Categorie;
use App\Models\Pays;
use Inertia\Inertia;

class CategorieController extends Controller
{
    
    private static $viewFolder = "Dashboard/Categories";
    private static $imageFolder = "storage/datas/categories/";
    private static $page_id = "voitures";
    private static $page_subid = "categories";
    private static $nbPerPage = 10;
    /**
     * Display a listing of the resource.
     */
    public function __construct(){
        $statics=[
            'page_id' => self::$page_id,
            'page_subid' => self::$page_subid,
        ];
        Inertia::share($statics);
    }
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = self::$nbPerPage > 0 ? self::$nbPerPage : 10;

        if (!empty($keyword)) {
            $categories = Categorie::where('nom', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage)->withQueryString();
        } else {
            $categories = Categorie::latest()->paginate($perPage);
        }
       
        return Inertia::render(self::$viewFolder . '/Index', [
            'search_text' => $keyword,
            'categories' => $categories,           
            'page_title' => "Catégories",
            'page_subtitle' => "Gestion de vos catégories de voitures",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(self::$viewFolder . '/Create', [
            'page_title' => "Nouvelle catégorie",
            'page_subtitle' => "Ajouter une nouvelle catégorie de véhicule",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestMarqueCategorieRequest $request)
    {
        $data = $request->except(['photo']);

        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        Categorie::create($data);

        return to_route('dashboard.categories');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $categorie=Categorie::where('id', $id)->firstOrFail();
        $categorie_name=$categorie->nom;
        return Inertia::render(self::$viewFolder . '/Show', [
            'categorie' => $categorie,
            'page_title' => "Catégories ".$categorie_name,
            'page_subtitle' => "Affichage de détail sur ".$categorie_name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $categorie = Categorie::findOrFail($id);
        return Inertia::render(self::$viewFolder . '/Edit', [
            'categorie' => $categorie,
            'page_title' => "Edition de catégorie",
            'page_subtitle' => "Modification d'une catégorie de véhicule",
        ]);
    }
    /**
     * Export the form for editing the specified resource.
     */
    public function export(Request $request)
    {
        $categories = Categorie::all();
        return Inertia::render(self::$viewFolder . '/Export', [
            'categories' => $categories,
            'page_title' => "Export des catégories",
            'page_subtitle' => "Exportations des catégories de véhicule",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, $id){
    public function update(RequestMarqueCategorieRequest $request, $id){

        $categorie = Categorie::findOrFail($id);
        $data = $request->except('photo');
        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        $categorie->update([
            'nom' => $data['nom'],
            'description' => $data['description']
        ]);
        if(isset($data['photo']) && $data['photo']!=''){
            $categorie->update([
                'photo' => $data['photo']
            ]);  
        }
        return to_route('dashboard.categories');
    }

    public function saveLogo(FormRequest $request)
    {
        $nomLogo = '';
        if ($request->hasFile('photo')) {
            $file = $request->file('photo');
            $fileName = Str::random(40) . '.' . $file->getClientOriginalExtension();
            $destinationPath = (self::$imageFolder);
            if (!Storage::exists($destinationPath)) {
                Storage::makeDirectory($destinationPath);
            }
            $file->move($destinationPath, $fileName);
            $nomLogo = self::$imageFolder . $fileName;
        }
        return $nomLogo;
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        
        $categorie = Categorie::findOrFail($id);
        $categorie->delete();

        return to_route('dashboard.categories');
    }
}
