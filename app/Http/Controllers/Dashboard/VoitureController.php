<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\RequestVoitureRequest;
use App\Models\Categorie;
use App\Models\Marque;
use App\Models\TypeCarburant;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Voiture;
use Illuminate\Support\Str;
use Inertia\Inertia;

class VoitureController extends Controller
{
   
    private static $viewFolder = "Dashboard/Voitures";
    private static $imageFolder = "storage/datas/voitures/";
    private static $page_id = "voitures";
    private static $page_subid = "voitures";
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
            $voitures = Voiture::where('nom', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage)->withQueryString();
        } else {
            $voitures = Voiture::latest()->paginate($perPage);
        }
       
        return Inertia::render(self::$viewFolder . '/Index', [
            'search_text' => $keyword,
            'voitures' => $voitures,           
            'page_title' => "Voitures",
            'page_subtitle' => "Gestion voitures",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $marques=Marque::orderBy("nom","asc")->select('nom','id')->get();
        $categories=Categorie::orderBy("nom","asc")->select('nom','id')->get();
        $type_carburants=TypeCarburant::orderBy("nom","asc")->select('nom','id')->get();
        Inertia::share([
            'marques'=> $marques,
            'categories'=> $categories,
            'type_carburants'=> $type_carburants
        ]);

        return Inertia::render(self::$viewFolder . '/Create', [
            'marques'=> $marques,
            'categories'=> $categories,
            'type_carburants'=> $type_carburants,
            'page_title' => "Nouvelle voiture",
            'page_subtitle' => "Ajouter une nouvelle voiture",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestVoitureRequest $request)
    {
        $data = $request->except(['photo']);
        dd($request->all());
        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        Voiture::create($data);
        Session::flash('success',
        [
            'title'=>'Enrégistrement effectué',
            'message'=>'Les données ont été enregistrées avec succès!',
        ]
        );

        return to_route('dashboard.voitures');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $sys_securite=Voiture::where('id', $id)->firstOrFail();
        $sys_securite_name=$sys_securite->nom;
        return Inertia::render(self::$viewFolder . '/Show', [
            'sys_securite' => $sys_securite,
            'page_title' => "Système de sécurité  ".$sys_securite_name,
            'page_subtitle' => "Affichage de détail sur ".$sys_securite_name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $sys_securite = Voiture::findOrFail($id);
        return Inertia::render(self::$viewFolder . '/Edit', [
            'sys_securite' => $sys_securite,
            'page_title' => "Edition de voiture",
            'page_subtitle' => "Modification d'une voiture",
        ]);
    }
    /**
     * Export the form for editing the specified resource.
     */
    public function export(Request $request)
    {
        $voitures = Voiture::all();
        return Inertia::render(self::$viewFolder . '/Export', [
            'voitures' => $voitures,
            'page_title' => "Voitures",
            'page_subtitle' => "Liste de voitures",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, $id){
    public function update(RequestVoitureRequest $request, $id){

        $sys_securite = Voiture::findOrFail($id);
        $data = $request->except('photo');
        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        $sys_securite->update([
            'nom' => $data['nom'],
            'description' => $data['description']
        ]);
        if(isset($data['photo']) && $data['photo']!=''){
            $sys_securite->update([
                'photo' => $data['photo']
            ]);  
        }
        Session::flash('info',
        [
            'title'=>'Mise à jour effectuée',
            'message'=>'Les données ont été modifiées avec succès!',
        ]
        );
        return to_route('dashboard.voitures');
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
        
        $sys_securite = Voiture::findOrFail($id);
        $sys_securite->delete();

        Session::flash('warning',
        [
            'title'=>'Suppression effectuée',
            'message'=>"La Suppression de l'enrégistrement a été effectuée avec succès!",
        ]
        );
        return to_route('dashboard.voitures');
    }
}
