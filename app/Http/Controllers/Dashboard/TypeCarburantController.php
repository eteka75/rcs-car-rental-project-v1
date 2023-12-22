<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\RequestTypeCarburantRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use App\Models\TypeCarburant;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class TypeCarburantController extends Controller
{
    
    private static $viewFolder = "Dashboard/Carburants";
    private static $imageFolder = "storage/datas/carburants/";
    private static $page_id = "voitures";
    private static $page_subid = "carburants";
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
            $carburants = TypeCarburant::where('nom', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage)->withQueryString();
        } else {
            $carburants = TypeCarburant::latest()->paginate($perPage);
        }
       
        return Inertia::render(self::$viewFolder . '/Index', [
            'search_text' => $keyword,
            'carburants' => $carburants,           
            'page_title' => "Types de carburant",
            'page_subtitle' => "Gestion des types de carburant",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(self::$viewFolder . '/Create', [
            'page_title' => "Nouveau type de carburant",
            'page_subtitle' => "Ajouter un nouveau type de carburant",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestTypeCarburantRequest $request)
    {
        $data = $request->except(['photo']);

        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        TypeCarburant::create($data);

        return to_route('dashboard.carburants');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $carburant=TypeCarburant::where('id', $id)->firstOrFail();
        $carburant_name=$carburant->nom;
        return Inertia::render(self::$viewFolder . '/Show', [
            'categorie' => $carburant,
            'page_title' => "Type  ".$carburant_name,
            'page_subtitle' => "Affichage de détail sur ".$carburant_name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $carburant = TypeCarburant::findOrFail($id);
        return Inertia::render(self::$viewFolder . '/Edit', [
            'carburant' => $carburant,
            'page_title' => "Edition de type de carburant",
            'page_subtitle' => "Modification d'un type de carburant",
        ]);
    }
    /**
     * Export the form for editing the specified resource.
     */
    public function export(Request $request)
    {
        $carburants = TypeCarburant::all();
        return Inertia::render(self::$viewFolder . '/Export', [
            'categories' => $carburants,
            'page_title' => "Export des catégories",
            'page_subtitle' => "Exportations des catégories de véhicule",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, $id){
    public function update(RequestTypeCarburantRequest $request, $id){

        $carburant = TypeCarburant::findOrFail($id);
        $data = $request->except('photo');
        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        $carburant->update([
            'nom' => $data['nom'],
            'description' => $data['description']
        ]);
        if(isset($data['photo']) && $data['photo']!=''){
            $carburant->update([
                'photo' => $data['photo']
            ]);  
        }
        return to_route('dashboard.carburants');
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
        
        $carburant = TypeCarburant::findOrFail($id);
        $carburant->delete();

        return to_route('dashboard.carburants');
    }
}
