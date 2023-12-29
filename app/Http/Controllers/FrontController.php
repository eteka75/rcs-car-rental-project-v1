<?php

namespace App\Http\Controllers;

use App\Models\EnLocation;
use App\Models\Faq;
use App\Models\Marque;
use App\Models\Voiture;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class FrontController extends Controller
{
    public static $folder = "Front/";
    public function index(Request $request)
    {
        session()->flash("danger", ["title" => "Alerte", 'message' => "Message de test de notification"]);
        $topMarques = Marque::where('logo','!=',null)->withCount('voitures')->whereHas('voitures')->latest()->take(6)->get();
        $topVoituresLocation = EnLocation::with('voiture.type_carburant')->with('voiture.marque')->with('voiture')->where('etat',true)->latest()->take(6)->get();
        $top_faqs = Faq::where('actif','=',1)->latest()->take(10)->get();
        return Inertia::render(self::$folder . 'Index', [
            'top_marques' => $topMarques,
            'top_locations' => $topVoituresLocation,
            'top_faqs' => $top_faqs,
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'phpVersion' => PHP_VERSION,

        ]);
    }
    public function getLocation(Request $request)
    {
        return Inertia::render('Index', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register')
        ]);
    }
}
