<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\RequestcontroleVoitureRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use App\Models\ControlVoiture;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\controle;
use Inertia\Inertia;
use App\Models\Pays;
use App\Models\Voiture;

class ControlVoitureController extends Controller
{
    private static $viewFolder = "Dashboard/Controles";
    private static $imageFolder = "storage/datas/controles_techniques/";
    private static $pageId = "voitures";
    private static $pageSubid = "controles";
    private static $nbPerPage = 10;
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $statics = [
            'page_id' => self::$pageId,
            'page_subid' => self::$pageSubid,
        ];
        Inertia::share($statics);
        $this->middleware('auth');
    }
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = self::$nbPerPage > 0 ? self::$nbPerPage : 10;
        $total = ControlVoiture::count();
        Inertia::share(['total' => $total]);

        if (!empty($keyword)) {
            $controles = ControlVoiture::where('nom_controle', 'LIKE', "%$keyword%")
                ->orWhere('date_controle', 'LIKE', "%$keyword%")
                ->orWhere('kilometrage', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage)->withQueryString();
        } else {
            $controles = ControlVoiture::latest()->paginate($perPage);
        }
        return Inertia::render(self::$viewFolder . '/Index', [
            'search_text' => $keyword,
            'controles' => $controles,
            'count' => $controles->count(),
            'page_title' => "controles",
            'page_subtitle' => "Gestion des contrôles techniques",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $voitures = Voiture::select('nom', 'id')->orderBy('nom')->get();
        Inertia::share(['voitures'=>$voitures]);

        return Inertia::render(self::$viewFolder . '/Create', [
            'page_title' => "Nouveau contrôle technique",
            'page_subtitle' => "Ajouter un nouveau contrôle technique de véhicule",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $additionalRules = [
            'nom' => ["required", "unique:controles,nom"],
        ];
        // Merge additional rules with the rules defined in the form request
        $rules = array_merge((new RequestcontroleVoitureRequest())->rules(), $additionalRules);

        // Validate the request
        $request->validate($rules);
        $data =  $request->except('logo');
        if ($request->hasFile('logo')) {
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['logo'] = $getSave;
            }
        }
        ControlVoiture::create($data);
        Session::flash(
            'success',
            [
                'title' => 'Enrégistrement effectué',
                'message' => 'Les données ont été enregistrées avec succès!',
            ]
        );

        return to_route('dashboard.controle_techniques');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $controle = ControlVoiture::with('pays')->where('id', $id)->firstOrFail();
        $controle_name = $controle->nom;
        return Inertia::render(self::$viewFolder . '/Show', [
            'controle' => $controle,
            'page_title' => "Contrôle technique " . $controle_name,
            'page_subtitle' => "Affichage de détail sur " . $controle_name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $controle = ControlVoiture::findOrFail($id);
        $controles = Voiture::select('nom', 'id')->orderBy('nom')->get();
        return Inertia::render(self::$viewFolder . '/Edit', [
            'controles' => $controles,
            'controle' => $controle,
            'page_title' => "Edition de contrôle technique",
            'page_subtitle' => "Modification d'une contrôle technique de véhicule",
        ]);
    }
    /**
     * Export the form for editing the specified resource.
     */
    public function export(Request $request)
    {
        $controles = ControlVoiture::with('pays')->get();
        return Inertia::render(self::$viewFolder . '/Export', [
            'controles' => $controles,
            'page_title' => "Export des contrôles techniques",
            'page_subtitle' => "Exportations des contrôles techniques de véhicule",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, $id){
    public function update(RequestcontroleVoitureRequest $request, $id)
    {

        $controle = ControlVoiture::findOrFail($id);
        $data = $request->except("logo");
        if ($request->hasFile('logo')) {
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['logo'] = $getSave;
            }
        }
        $controle->update([
            'nom' => $data['nom'],
            'pays_id' => $data['pays_id'],
            'annee_fondation' => $data['annee_fondation'],
            'description' => $data['description'],
            'site_web' => $data['site_web']
        ]);
        if (isset($data['logo']) && $data['logo'] != '') {
            $controle->update([
                'logo' => $data['logo']
            ]);
        }
        Session::flash(
            'info',
            [
                'title' => 'Mise à jour effectuée',
                'message' => 'Les données ont été modifiées avec succès!',
            ]
        );
        return to_route('dashboard.controle_techniques');
    }

    public function saveLogo(FormRequest $request)
    {
        $nomLogo = '';
        if ($request->hasFile('logo')) {
            $file = $request->file('logo');
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

        $controle = ControlVoiture::findOrFail($id);
        $controle->delete();
        Session::flash(
            'warning',
            [
                'title' => 'Suppression effectuée',
                'message' => "La Suppression de l'enrégistrement a été effectuée avec succès!",
            ]
        );
        return to_route('dashboard.controle_techniques');
    }
}
