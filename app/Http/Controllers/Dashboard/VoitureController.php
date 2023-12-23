<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\RequestVoitureRequest;
use App\Models\Categorie;
use App\Models\Marque;
use App\Models\SystemeSecurite;
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
        $sys_securites=SystemeSecurite::orderBy("nom","asc")->select('nom','id')->get();
        Inertia::share([
            'marques'=> $marques,
            'sys_securites'=> $sys_securites,
            'categories'=> $categories,
            'type_carburants'=> $type_carburants
        ]);

        return Inertia::render(self::$viewFolder . '/Create', [            
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
        //dd($request->all());
        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        $data['date_achat']=$this->converDateToDB($request->input('date_achat'));
       
        $sys_sec_ids=$data['systeme_securite'];
        if($data['date_achat']==null){
            unset($data['date_achat']);
            //$data['date_achat']="00-00-0000 00:00:00";
        }
        //dd($data);
        $voiture=Voiture::create($data);
        $voiture->systemeSecurites()->attach($sys_sec_ids);
        Session::flash('success',
        [
            'title'=>'Enrégistrement effectué',
            'message'=>'Les données ont été enregistrées avec succès!',
        ]
        );

        return to_route('dashboard.voitures');
    }

    public function converDateToDB($date){
        $dateObj = \DateTime::createFromFormat('d/m/Y', $date);
        if ($dateObj === false) {
            return false;
        }
        return $dateObj->format('Y-m-d');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $voiture=Voiture::with('systemeSecurites')->with('categorie')->with('marque')->with('type_carburant')->where('id', $id)->firstOrFail();
        $voiture_name=$voiture->nom;
        return Inertia::render(self::$viewFolder . '/Show', [
            'voiture' => $voiture,
            'page_title' => $voiture_name,
            'page_subtitle' => "Affichage de détail sur ".$voiture_name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $voiture = Voiture::with('systemeSecurites')->with('categorie')->with('marque')->with('type_carburant')->findOrFail($id);
        $marques=Marque::orderBy("nom","asc")->select('nom','id')->get();
        $categories=Categorie::orderBy("nom","asc")->select('nom','id')->get();
        $type_carburants=TypeCarburant::orderBy("nom","asc")->select('nom','id')->get();
        $sys_securites=SystemeSecurite::orderBy("nom","asc")->select('nom','id')->get();
        Inertia::share([
            'sys_securites'=> $sys_securites,
            'marques'=> $marques,
            'categories'=> $categories,
            'type_carburants'=> $type_carburants
        ]);

        return Inertia::render(self::$viewFolder . '/Edit', [
            'voiture' => $voiture,
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
        $voiture = Voiture::findOrFail($id);
        $data = $request->except('photo');
        if($request->hasFile('photo')){
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        $data['date_achat']=$this->converDateToDB($request->input('date_achat'));
        //dd($data);
        $voiture->update($data);
        if(isset($data['photo']) && $data['photo']!=''){
            $voiture->update([
                'photo' => $data['photo']
            ]);  
        }
        $sys_sec_ids=$data['systeme_securite'];
        $voiture->systemeSecurites()->sync($sys_sec_ids);
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
        
        $voiture = Voiture::findOrFail($id);
        $voiture->delete();

        Session::flash('warning',
        [
            'title'=>'Suppression effectuée',
            'message'=>"La Suppression de l'enrégistrement a été effectuée avec succès!",
        ]
        );
        return to_route('dashboard.voitures');
    }
}
