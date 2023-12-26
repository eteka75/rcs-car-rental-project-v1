<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\RequestLocationReductionRequest;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use App\Http\Controllers\Controller;
use App\Models\LocationReduction;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;


class LocationReductionController extends Controller
{


    private static $viewFolder = "Dashboard/Reductions";
    private static $imageFolder = "storage/datas/location_reductionss/";
    private static $page_id = "locations";
    private static $page_subid = "reductions";
    private static $nbPerPage = 10;
    /**
     * Display a listing of the resource.
     */
    public function __construct()
    {
        $statics = [
            'page_id' => self::$page_id,
            'page_subid' => self::$page_subid,
        ];
        Inertia::share($statics);
    }
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = self::$nbPerPage > 0 ? self::$nbPerPage : 10;
        Inertia::share(['total' => LocationReduction::count()]);

        if (!empty($keyword)) {
            $location_reductions = LocationReduction::where('nom', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage)->withQueryString();
        } else {
            $location_reductions = LocationReduction::latest()->paginate($perPage);
        }

        return Inertia::render(self::$viewFolder . '/Index', [
            'search_text' => $keyword,
            'location_reductions' => $location_reductions,
            'count' => $location_reductions->count(),
            'page_title' => "Codes de réduction",
            'page_subtitle' => "Gestion des codes de réduction sur location",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(self::$viewFolder . '/Create', [
            'page_title' => "Nouvelle option de location",
            'page_subtitle' => "Ajouter un nouvelle option de location",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $additionalRules = [
            'nom' => ["required", "unique:location_reductions,nom"],
        ];
        // Merge additional rules with the rules defined in the form request
        $rules = array_merge((new RequestLocationReductionRequest())->rules(), $additionalRules);
        $request->validate($rules);
        $data = $request->except(['photo']);

        if ($request->hasFile('photo')) {
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        LocationReduction::create($data);

        Session::flash('success',
            [
                'title' => 'Enrégistrement effectué',
                'message' => 'Les données ont été enregistrées avec succès!',
            ]
        );

        return to_route('dashboard.location_reductions');
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $location_option = LocationReduction::where('id', $id)->firstOrFail();
        $location_option_name = $location_option->nom;
        return Inertia::render(self::$viewFolder . '/Show', [
            'location_option' => $location_option,
            'page_title' => "Option de location  " . $location_option_name,
            'page_subtitle' => "Affichage de détail sur " . $location_option_name,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $location_option = LocationReduction::findOrFail($id);
        return Inertia::render(self::$viewFolder . '/Edit', [
            'sys_securite' => $location_option,
            'page_title' => "Edition d'option",
            'page_subtitle' => "Modification d'une option de location",
        ]);
    }
    /**
     * Export the form for editing the specified resource.
     */
    public function export(Request $request)
    {
        $location_reductions = LocationReduction::all();
        return Inertia::render(self::$viewFolder . '/Export', [
            'location_reductions' => $location_reductions,
            'page_title' => "Code de réduction",
            'page_subtitle' => "Liste des Code de réduction",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    //public function update(Request $request, $id){
    public function update(RequestLocationReductionRequest $request, $id)
    {

        $location_option = LocationReduction::findOrFail($id);
        $data = $request->except('photo');
        if ($request->hasFile('photo')) {
            $getSave = $this->saveLogo($request);
            if ($getSave !== '') {
                $data['photo'] = $getSave;
            }
        }
        $location_option->update([
            'nom' => $data['nom'],
            'description' => $data['description']
        ]);
        if (isset($data['photo']) && $data['photo'] != '') {
            $location_option->update([
                'photo' => $data['photo']
            ]);
        }
        Session::flash('info',
            [
                'title' => 'Mise à jour effectuée',
                'message' => 'Les données ont été modifiées avec succès!',
            ]
        );
        return to_route('dashboard.location_reductions');
    }

    public function saveLogo(Request $request)
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

        $location_option = LocationReduction::findOrFail($id);
        $location_option->delete();

        Session::flash('warning',
            [
                'title' => 'Suppression effectuée',
                'message' => "La Suppression de l'enrégistrement a été effectuée avec succès!",
            ]
        );
        return to_route('dashboard.location_reductions');
    }
}
