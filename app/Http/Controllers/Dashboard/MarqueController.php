<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Requests\RequestMarqueVoitureRequest;
use Illuminate\Support\Facades\Redirect;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use App\Models\Marque;
use Inertia\Inertia;
use App\Models\Pays;

class MarqueController extends Controller
{
    private static $viewFolder = "Dashboard/Marques";
    private static $imageFolder = "storage/datas/marques/";
    private static $page_id = "voitures";
    private static $page_subid = "marques";
    private static $nbPerPage = 10;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage = self::$nbPerPage > 0 ? self::$nbPerPage : 10;

        if (!empty($keyword)) {
            $marques = Marque::where('nom', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->orWhere('annee_fondation', 'LIKE', "%$keyword%")
                ->orWhere('site_web', 'LIKE', "%$keyword%")
                ->orWhere('logo', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage)->withQueryString();
        } else {
            $marques = Marque::latest()->paginate($perPage);
        }

        return Inertia::render(self::$viewFolder . '/Index', [
            'search_text' => $keyword,
            'marques' => $marques,
            'page_id' => self::$page_id,
            'page_subid' => self::$page_subid,
            'page_title' => "Marques",
            'page_subtitle' => "Gestion vos marques de voitures",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $pays = Pays::select('nom_fr_fr', 'id')->orderBy('nom_fr_fr')->get();
        return Inertia::render(self::$viewFolder . '/Create', [
            'pays' => $pays,
            'page_id' => self::$page_id,
            'page_title' => "Nouvelle marque",
            'page_subtitle' => "Ajouter une nouvelle marque de véhicule",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestMarqueVoitureRequest $request)
    {
        $data = $request->except('logo');
        $getSave = $this->saveLogo($request);

        if ($getSave !== '') {
            $data['logo'] = $getSave;
        }
        Marque::create($data);

        return to_route('dashboard.marques');
    }

    /**
     * Display the specified resource.
     */
    public function show(Marque $marque)
    {
        return Inertia::render(self::$viewFolder . '/Show', [
            'voiture' => $marque
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $marque = Marque::findOrFail($id);
        $pays = Pays::select('nom_fr_fr', 'id')->orderBy('nom_fr_fr')->get();
        return Inertia::render(self::$viewFolder . '/Edit', [
            'pays' => $pays,
            'marque' => $marque,
            'page_id' => self::$page_id,
            'page_title' => "Edition de marque",
            'page_subtitle' => "Modifcation d'une marque de véhicule",
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(RequestMarqueVoitureRequest $request, $id)
    {
        $marque = Marque::findOrFail($id);
        $data = $request->except('logo');
       // dd($request->all());
        $getSave = $this->saveLogo($request);
        if ($getSave !== '') {
            $data['logo'] = $getSave;
        }
        $marque->update($data);
        return to_route('dashboard.marques');
    }

    public function saveLogo(Request $request)
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
    public function destroy(Marque $marque)
    {
        $marque->delete();

        return Redirect::route('dashboard.marques');
    }
}
