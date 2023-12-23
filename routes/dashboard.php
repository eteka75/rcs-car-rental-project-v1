<?php

use App\Http\Controllers\Dashboard\CategorieController;
use App\Http\Controllers\Dashboard\ControlVoitureController;
use App\Http\Controllers\Dashboard\MarqueController;
use App\Http\Controllers\Dashboard\SystemeSecuriteController;
use App\Http\Controllers\Dashboard\TypeCarburantController;
use App\Http\Controllers\Dashboard\VoitureController;
use App\Http\Controllers\DashboardDashboardController;
use App\Http\Controllers\FrontController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('dashboard')->middleware(['auth', 'verified'])->group(function () {

    /*Dashboard*/
    Route::controller(DashboardDashboardController::class)->group(function () {
        Route::get('/', 'index')->name('dashboard');
    });
    
    /*Voitures*/
    Route::controller(VoitureController::class)->prefix('voitures')->group(function () {
        Route::get('/', 'index')->name('dashboard.voitures');
        Route::get('/search', 'index')->name('dashboard.voitures.search');
        Route::get('/new', 'create')->name('dashboard.voitures.create');
        Route::post('/new', 'store')->name('dashboard.voitures.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.voitures.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.voitures.update');
        Route::get('/export', 'export')->name('dashboard.voitures.export');
        Route::get('/{id}', 'show')->name('dashboard.voitures.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.voitures.delete');
    })->middleware('web');
    
    /*Marques*/
    Route::controller(MarqueController::class)->prefix('marques')->group(function () {
        Route::get('/', 'index')->name('dashboard.marques');
        Route::get('/search', 'index')->name('dashboard.marques.search');
        Route::get('/new', 'create')->name('dashboard.marques.create');
        Route::post('/new', 'store')->name('dashboard.marques.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.marques.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.marques.update');
        Route::get('/export', 'export')->name('dashboard.marques.export');
        Route::get('/{id}', 'show')->name('dashboard.marques.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.marques.delete');
    })->middleware('web');

    /*Marques*/
    Route::controller(CategorieController::class)->prefix('categories')->group(function () {
        Route::get('/', 'index')->name('dashboard.categories');
        Route::get('/search', 'index')->name('dashboard.categories.search');
        Route::get('/new', 'create')->name('dashboard.categories.create');
        Route::post('/new', 'store')->name('dashboard.categories.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.categories.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.categories.update');
        Route::get('/export', 'export')->name('dashboard.categories.export');
        Route::get('/{id}', 'show')->name('dashboard.categories.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.categories.delete');
    })->middleware('web');

    /*Type de carburant*/
    Route::controller(TypeCarburantController::class)->prefix('carburants')->group(function () {
        Route::get('/', 'index')->name('dashboard.carburants');
        Route::get('/search', 'index')->name('dashboard.carburants.search');
        Route::get('/new', 'create')->name('dashboard.carburants.create');
        Route::post('/new', 'store')->name('dashboard.carburants.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.carburants.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.carburants.update');
        Route::get('/export', 'export')->name('dashboard.carburants.export');
        Route::get('/{id}', 'show')->name('dashboard.carburants.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.carburants.delete');
    })->middleware('web');

    /*Système de sécurités*/
    Route::controller(SystemeSecuriteController::class)->prefix('sys_securites')->group(function () {
        Route::get('/', 'index')->name('dashboard.sys_securites');
        Route::get('/search', 'index')->name('dashboard.sys_securites.search');
        Route::get('/new', 'create')->name('dashboard.sys_securites.create');
        Route::post('/new', 'store')->name('dashboard.sys_securites.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.sys_securites.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.sys_securites.update');
        Route::get('/export', 'export')->name('dashboard.sys_securites.export');
        Route::get('/{id}', 'show')->name('dashboard.sys_securites.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.sys_securites.delete');
    })->middleware('web');

    /*Controles Techniques*/
    Route::controller(ControlVoitureController::class)->prefix('controle_techniques')->group(function () {
        Route::get('/', 'index')->name('dashboard.controle_techniques');
        Route::get('/search', 'index')->name('dashboard.controle_techniques.search');
        Route::get('/new', 'create')->name('dashboard.controle_techniques.create');
        Route::post('/new', 'store')->name('dashboard.controle_techniques.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.controle_techniques.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.controle_techniques.update');
        Route::get('/export', 'export')->name('dashboard.controle_techniques.export');
        Route::get('/{id}', 'show')->name('dashboard.controle_techniques.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.controle_techniques.delete');
    })->middleware('web');

});

/*
Route::controller(FrontController::class)
->prefix('dashboards')->group(function () {
    Route::get('/', 'index')->name('dash.home');
    Route::post('voitures', 'getVoi');
})->middleware('jwt.verify'); 
*/