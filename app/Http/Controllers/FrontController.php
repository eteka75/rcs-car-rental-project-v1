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
    public static $pageCat = "location";
    public function __construct(){
        Inertia::share([
            'page_cat'=>self::$pageCat
        ]);
    }
    public function index(Request $request)
    {
        session()->flash("danger", ["title" => "Alerte", 'message' => "Message de test de notification"]);
        $topMarques = Marque::
        //where('logo','!=',null)->
        withCount('voitures')->whereHas('voitures')->latest()->take(6)->get();
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
    public function getApropos(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Apropos',[
            'data'=>$data
        ]);
    }
    public function getContact(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Contact',[
            'data'=>$data
        ]);
    }
    public function getMessages(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Messages',[
            'data'=>$data
        ]);
    }
    public function getFaq(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Faq',[
            'data'=>$data
        ]);
    }
    public function showLocation($id,Request $request)
    {
        $location = EnLocation::with('voiture')
        ->with('voiture.marque')
        ->with('voiture.categorie')
        ->with('voiture.type_carburant')
        ->with('voiture.systemeSecurites')
        ->with('voiture.locationMedias')
        ->findOrFail($id);
        return Inertia::render(self::$folder . 'ShowLocation',
        [
            'location'=>$location
        ]);
    }
    public function getLocations(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Locations',[
            'data'=>$data
        ]);
    }
    
    public function getAchats(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Achats',[
            'data'=>$data
        ]);
    }
    public function showAchat($id,Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'ShowAchat',[
            'data'=>$data
        ]);
    }
   
 
    
    public function getTermes(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Termes',[
            'data'=>$data
        ]);
    }
    public function getServices(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Termes',[
            'data'=>$data
        ]);
    }
    public function getPanier(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Panier',[
            'data'=>$data
        ]);
    }
    public function getCatLocations(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'CatLocations',[
            'data'=>$data
        ]);
    }
    public function getMarque(Request $request)
    {
        $data=[];
        return Inertia::render(self::$folder . 'Marques',[
            'data'=>$data
        ]);
    }
}
