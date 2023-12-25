<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\RequestEnLocationRequest;
use App\Models\EnLocation;
use App\Models\PointRetrait;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Session;
use App\Http\Controllers\Controller;
use App\Models\locationVoiture;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use App\Models\Voiture;
use Inertia\Inertia;

class EnLocationController extends Controller
{

    private static $viewFolder = "Dashboard/Locations";
    private static $imageFolder = "storage/datas/location_voitures/";
    private static $pageId = "locations";
    private static $pageSubid = "locations";
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
        $total = EnLocation::count();
        Inertia::share(['total' => $total]);

        if (!empty($keyword)) {
            $locations = EnLocation::with('voiture')
                ->with('pointRetrait')
                ->orWhere('tarif_location_heure', 'LIKE', "%$keyword%")
                ->orWhere('tarif_location_hebdomadaire', 'LIKE', "%$keyword%")
                ->orWhere('tarif_location_journalier', 'LIKE', "%$keyword%")
                ->orWhere('tarif_location_mensuel', 'LIKE', "%$keyword%")
                ->orWhere('date_debut_location', 'LIKE', "%$keyword%")
                ->orWhere('date_fin_location', 'LIKE', "%$keyword%")
                ->orWhere('conditions', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->orWhereHas('voiture', function ($query) use ($keyword) {
                    $query->where('nom', 'like', "%{$keyword}%")
                        ->orWhere('description', 'like', "%{$keyword}%");
                })
                ->orWhereHas('pointRetrait', function ($query) use ($keyword) {
                    $query->where('lieu', 'like', "%{$keyword}%");
                    $query->where('wille', 'like', "%{$keyword}%");
                        //->orWhere('description', 'like', "%{$keyword}%");
                })
                ->latest()->paginate($perPage)->withQueryString();
        } else {
            $locations = EnLocation::with('voiture')->latest()->paginate($perPage);
        }
        return Inertia::render(self::$viewFolder . '/Index', [
            'search_text' => $keyword,
            'locations' => $locations,
            'count' => $locations->count(),
            'page_title' => "Locations",
            'page_subtitle' => "Gestion des locations de voitures",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $voitures = Voiture::orderBy('nom')->get();//select('nom', 'id')->
        $points = PointRetrait::select('lieu', 'id')->orderBy('lieu')->get();
        
        Inertia::share([
            'voitures' => $voitures,
            'point_retraits' => $points
        ]);

        return Inertia::render(self::$viewFolder . '/Create', [
            'page_title' => "Nouvelle location",
            'page_subtitle' => "Ajouter une nouvelle location de voiture",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestEnLocationRequest $request)
    {
        $data = $request->except('fichier');
        if ($request->hasFile('fichier')) {
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['fichier'] = $getSave;
            }
        }
        $userId = \Auth::id() ?? '0';
        $data['user_id'] = $userId;
        $data['date_debut_location'] = $this->converDateToDB($data['date_debut_location']);
        $data['date_fin_location'] = $this->converDateToDB($data['date_fin_location']);
        $points = $data['point_retraits'];
        $location=EnLocation::create($data);
        $location->pointsRetrait()->attach($points);
        Session::flash(
            'success',
            [
                'title' => 'Enrégistrement effectué',
                'message' => 'Les données ont été enregistrées avec succès!',
            ]
        );

        return to_route('dashboard.locations');
    }

    public function converDateToDB($date)
    {
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
        $location = EnLocation::with('voiture')->where('id', $id)->firstOrFail();
        $location_name = $location->nom;
        return Inertia::render(self::$viewFolder . '/Show', [
            'location' => $location,
            'page_title' => "Location " . $location_name,
            'page_subtitle' => "Affichage de détail sur " . $location_name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $location = EnLocation::with('voiture')->findOrFail($id);
        $voitures = Voiture::select('nom', 'id')->orderBy('nom')->get();
        Inertia::share(['voitures' => $voitures]);
        return Inertia::render(self::$viewFolder . '/Edit', [
            'location' => $location,
            'page_title' => "Edition d'une location",
            'page_subtitle' => "Modification d'une location de voiture",
        ]);
    }
    /**
     * Export the form for editing the specified resource.
     */
    public function export(Request $request)
    {
        $locations = EnLocation::with('voiture')->get();
        return Inertia::render(self::$viewFolder . '/Export', [
            'locations' => $locations,
            'page_title' => "Export des locations",
            'page_subtitle' => "Exportations des locations de voitures",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, $id){
    public function update(RequestEnLocationRequest $request, $id)
    {

        $location = EnLocation::findOrFail($id);
        $data = $request->except("logo");
        if ($request->hasFile('fichier')) {
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['fichier'] = $getSave;
            }
        }
        $data['date_location'] = $this->converDateToDB($data['date_location']);

        $location->update($data);
        if (isset($data['fichier']) && $data['fichier'] != '') {
            $location->update([
                'fichier' => $data['fichier']
            ]);
        }
        Session::flash(
            'info',
            [
                'title' => 'Mise à jour effectuée',
                'message' => 'Les données ont été modifiées avec succès!',
            ]
        );
        return to_route('dashboard.locations');
    }

    public function saveLogo(FormRequest $request)
    {
        $nomLogo = '';
        if ($request->hasFile('fichier')) {
            $file = $request->file('fichier');
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

        $location = EnLocation::findOrFail($id);
        $location->delete();
        Session::flash(
            'warning',
            [
                'title' => 'Suppression effectuée',
                'message' => "La Suppression de l'enrégistrement a été effectuée avec succès!",
            ]
        );
        return to_route('dashboard.locations');
    }
}
