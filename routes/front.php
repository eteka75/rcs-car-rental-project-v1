<?php
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;


Route::controller(FrontController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/a-propos', 'getApropos')->name('front.apropos');
    Route::get('/services', 'getServices')->name('front.services');
    Route::get('/contact', 'getContact')->name('front.contact');
    Route::get('/messages', 'getMessages')->name('front.messages');
    Route::get('/faq', 'getFaq')->name('front.faq');
    Route::get('/termes-et-conditions', 'getTermes')->name('front.termes');
    Route::get('/panier', 'getPanier')->name('front.panier');
    /*Voitures*/
    Route::get('/achats', 'getAchats')->name('front.achats');
    Route::get('/achats/{id}', 'showAchat')->name('front.achat');
    Route::get('/locations', 'getLocations')->name('front.locations');
    Route::get('/locations/categories', 'getCatLocations')->name('front.cat_locations');
    Route::get('/location/{id}', 'showLocation')->name('front.location');
    /* catgories voitures */
    Route::get('/categories', 'getCategories')->name('front.cat_voitures');
    Route::get('/voiture/marque/{id}', 'getMarque')->where('id', '\d+')->name('front.marq_voiture');
    Route::get('/voiture/categorie/{id}-{slug?}', 'getVCategorie')->name('front.cat_voiture');
    /*Marques*/
    
    Route::get('/marques', 'getCategories')->name('front.catvoitures');
    Route::get('/voiture/categorie/{slug}', 'getCategorie')->name('front.catvoiture');
})->middleware('web'); 


/* User profil */
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
})->middleware('throttle:6,1');

/*
Route::controller(FrontController::class)
->prefix('home')->group(function () {
    Route::get('/', 'index')->name('home');
    Route::post('voitures', 'voitures');
})->middleware('jwt.verify'); */