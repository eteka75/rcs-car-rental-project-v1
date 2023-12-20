<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use App\Http\Requests\RequestStoreVoitureRequest;
use App\Models\Voiture;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class VoitureController extends Controller
{
    private static $viewFolder = "Dashboard/Voitures";
    private static $page_id = "voitures";
    private static $page_subid = "voitures";
    private static $nbPerPage = 10;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $voitures = Voiture::latest()->get();

        return Inertia::render(self::$viewFolder . '/Index', [
            'voitures' => $voitures,
            'page_id'=>self::$page_id,
            'page_subid'=>self::$page_subid,
            'page_title'=>"Voitures",
            'page_subtitle'=>"Gestion vos voitures",
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render(self::$viewFolder . '/Create', [
            'page_id'=>"voitures",
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
        Voiture::create($data);

        return to_route('dash.voitures.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Voiture $voiture)
    {
        return Inertia::render(self::$viewFolder . '/Show', [
            'voiture' => $voiture
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Voiture $voiture)
    {
        return Inertia::render(self::$viewFolder . '/Edit', [
            'voiture' => $voiture
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Voiture $voiture)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Voiture $voiture)
    {
        $voiture->delete();
        
        return Redirect::route('voitures.index');
    }
}
