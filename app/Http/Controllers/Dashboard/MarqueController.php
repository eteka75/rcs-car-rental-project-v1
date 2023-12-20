<?php

namespace App\Http\Controllers\Dashboard;

use App\Models\Marque;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class MarqueController extends Controller
{
    private static $viewFolder = "Dashboard/Marques";
    private static $page_id = "voitures";
    private static $page_subid = "marques";
    private static $nbPerPage = 10;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $keyword = $request->get('search');
        $perPage =self::$nbPerPage>0?self::$nbPerPage:10;

        if (!empty($keyword)) {
            $marques = Marque::where('nom', 'LIKE', "%$keyword%")
                ->orWhere('description', 'LIKE', "%$keyword%")
                ->orWhere('annee_fondation', 'LIKE', "%$keyword%")
                ->orWhere('site_web', 'LIKE', "%$keyword%")
                ->orWhere('logo', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage);
        } else {
            $marques = Marque::latest()->paginate($perPage);
        }

        return Inertia::render(self::$viewFolder . '/Index', [
            'marques' => $marques,
            'page_id'=>self::$page_id,
            'page_subid'=>self::$page_subid,
            'page_title'=>"Marques",
            'page_subtitle'=>"Gestion vos marques de voitures",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(self::$viewFolder . '/Create', [
            'page_id'=>"marques",
            'page_title'=>"Nouvelle voiture",
            'page_subtitle'=>"Ajouter une nouvelle voiture",
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RequestStoreVoitureRequest $request)
    {
        $data = $request->validated();
        Marque::create($data);

        return to_route('dash.marques.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Marque $marque)
    {
        return Inertia::render(self::$viewFolder . '/Show', [
            'voiture' => $voiture
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Marque $marque)
    {
        return Inertia::render(self::$viewFolder . '/Edit', [
            'voiture' => $voiture
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Marque $marque)
    {
        //
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
