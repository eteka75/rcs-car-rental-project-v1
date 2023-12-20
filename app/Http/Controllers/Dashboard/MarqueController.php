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
    private static $page_id = "marques";
    private static $nbPerPage = 10;
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $page=self::$page_id;
        $keyword = $request->get('search');
        $perPage =self::$nbPerPage>0?self::$nbPerPage:10;
        if (!empty($keyword)) {
            $marques = Article::where('titre', 'LIKE', "%$keyword%")
                ->orWhere('resume', 'LIKE', "%$keyword%")
                ->orWhere('slug', 'LIKE', "%$keyword%")
                ->orWhere('type', 'LIKE', "%$keyword%")
                ->orWhere('contenu', 'LIKE', "%$keyword%")
                ->orWhere('image', 'LIKE', "%$keyword%")
                ->orWhere('nb_view', 'LIKE', "%$keyword%")
                ->orWhere('visible', 'LIKE', "%$keyword%")
                ->orWhere('user_id', 'LIKE', "%$keyword%")
                ->orWhere('category_id', 'LIKE', "%$keyword%")
                ->latest()->paginate($perPage);
        } else {
            $marques = Marque::latest()->paginate($perPage);
        }

        return Inertia::render(self::$viewFolder . '/Index', [
            'marques' => $marques,
            'page_id'=>self::$page_id,
            'page_title'=>"Marques de voitures",
            'page_subtitle'=>"Gestion vos marques",
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
