<?php

namespace App\Http\Controllers;

use App\Models\AvisClient;
use App\Models\EnLocation;
use App\Models\EnVente;
use App\Models\Faq;
use App\Models\Marque;
use App\Models\PointRetrait;
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
        //session()->flash("danger", ["title" => "Alerte", 'message' => "Message de test de notification"]);
        $top_points= PointRetrait::whereHas('Locations')->orderBy("lieu","ASC")->take(10)->get();
        $avis_clients= AvisClient::
        where('photo','!=',null)->
        where('actif',1)->
        orderBy("auteur","ASC")->take(10)->get();
        //dd($avis_clients);
        $topMarques = Marque::withCount('voitures')->whereHas('voitures')->latest()->take(6)->get();
        $topVoituresLocation = EnLocation::where('etat',1)->with('voiture.type_carburant')
        ->with('voiture.marque')->with('voiture')->where('etat',true)->latest()->take(6)->get();
        $top_faqs = Faq::where('actif','=',1)->latest()->take(10)->get();

        return Inertia::render(self::$folder . 'Index', [
            'top_points' => $top_points,
            'top_marques' => $topMarques,
            'avis_clients' => $avis_clients,
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
        $data=Faq::where('actif',true)->orderBy('question')->get();
        $this->sharePage('aides');
        return Inertia::render(self::$folder . 'Faq',[
            'faqs'=>$data
        ]);
    }
    public function getFaqs(Request $request)
    {
        $data=Faq::where('actif',true)->orderBy('question')->get();
        $this->sharePage('aides');
        return Inertia::render(self::$folder . 'Faq',[
            'faqs'=>$data
        ]);
    }
    public function showLocation($id,Request $request)
    {
        $location = EnLocation::where('etat',1)->with('voiture')
        ->with('voiture.marque')
        ->with('voiture.categorie')
        ->with('voiture.type_carburant')
        ->with('voiture.systemeSecurites')
        ->with('voiture.locationMedias')
        ->findOrFail($id);

        $locations_suggestion= EnLocation::where('etat',1)
        ->with('voiture')->where('id','!=',$id)
        ->with('voiture.marque')
        ->with('voiture.categorie')
        ->with('voiture.type_carburant')
        ->with('voiture.systemeSecurites')
        ->with('voiture.locationMedias')
        ->inRandomOrder()->limit(9)->get();
        
        return Inertia::render(self::$folder . 'ShowLocation',
        [
            'location'=>$location,
            'locations_suggestion'=>$locations_suggestion,
        ]);
    }
    public function getLocations(Request $request)
    {
        $nb_page_location=10;
        $data=EnLocation::where('etat',1)
        ->with('pointsRetrait')
        ->with('voiture.type_carburant')
        ->with('voiture.locationMedias')
        ->with('voiture.marque')->with('voiture')
        ->orderBy('date_debut_location',"desc")
        ->paginate($nb_page_location);
        
        return Inertia::render(self::$folder . 'Locations',[
            'locations'=>$data
        ]);
    }
    
    public function getAchats(Request $request)
    {
        
        self::sharePage("achats");
        $ventes=EnVente::where('en_vente',true)
        ->with('pointRetrait')
        ->with('voiture.type_carburant')
        ->with('voiture.categorie')
        ->with('voiture.medias')
        ->with('voiture.marque')
        ->with('voiture')->get();

    $vente_marques=Marque::whereHas('voitures.locationMedias')->take(9)->get();
        return Inertia::render(self::$folder . 'Achats',[
            'en_ventes'=>$ventes,
            'vente_marques'=>$vente_marques,
        ]);
    }
    public static function sharePage($page_id){
        return Inertia::share('page_id',$page_id);
    }
    public function showAchat($id,Request $request)
    {
        $vente=EnVente::where('en_vente',1)
        ->with('voiture')
        ->with('pointRetrait')
        ->with('voiture.type_carburant')
        ->with('voiture.medias')
        ->with('voiture.categorie')
        ->with('voiture.marque')
        ->findOrFail( $id );
        //dd($vente);	
        return Inertia::render(self::$folder . 'ShowAchat',[
            'vente'=>$vente,
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
        return Inertia::render(self::$folder . 'Services',[
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
