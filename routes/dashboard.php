<?php

use App\Http\Controllers\Dashboard\CategorieController;
use App\Http\Controllers\Dashboard\ControlVoitureController;
use App\Http\Controllers\Dashboard\EnLocationController;
use App\Http\Controllers\Dashboard\LocationOptionController;
use App\Http\Controllers\Dashboard\LocationReductionController;
use App\Http\Controllers\Dashboard\MarqueController;
use App\Http\Controllers\Dashboard\OperationVoitureController;
use App\Http\Controllers\Dashboard\PointRetraitController;
use App\Http\Controllers\Dashboard\SystemeSecuriteController;
use App\Http\Controllers\Dashboard\TypeCarburantController;
use App\Http\Controllers\Dashboard\VoitureController;
use App\Http\Controllers\DashboardDashboardController;
use Illuminate\Support\Facades\Route;

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
    });
    
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
    });

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
    });

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
    });

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
    });

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

    /*Opérations sur voitures */
    Route::controller(OperationVoitureController::class)->prefix('operations')->group(function () {
        Route::get('/', 'index')->name('dashboard.operations');
        Route::get('/search', 'index')->name('dashboard.operations.search');
        Route::get('/new', 'create')->name('dashboard.operations.create');
        Route::post('/new', 'store')->name('dashboard.operations.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.operations.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.operations.update');
        Route::get('/export', 'export')->name('dashboard.operations.export');
        Route::get('/{id}', 'show')->name('dashboard.operations.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.operations.delete');
    });

    /*!!! Voitures en location */
    Route::controller(EnLocationController::class)->prefix('locations')->group(function () {
        Route::get('/', 'index')->name('dashboard.locations');
        Route::get('/search', 'index')->name('dashboard.locations.search');
        Route::get('/new', 'create')->name('dashboard.locations.create');
        Route::post('/new', 'store')->name('dashboard.locations.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.locations.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.locations.update');
        Route::get('/export', 'export')->name('dashboard.locations.export');
        Route::get('/{id}', 'show')->name('dashboard.locations.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.locations.delete');
    });

    /* Points de retraits */
    Route::controller(PointRetraitController::class)
        ->prefix('point_retraits')->group(function () {
        Route::get('/', 'index')->name('dashboard.point_retraits');
        Route::get('/search', 'index')->name('dashboard.point_retraits.search');
        Route::get('/new', 'create')->name('dashboard.point_retraits.create');
        Route::post('/new', 'store')->name('dashboard.point_retraits.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.point_retraits.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.point_retraits.update');
        Route::get('/export', 'export')->name('dashboard.point_retraits.export');
        Route::get('/{id}', 'show')->name('dashboard.point_retraits.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.point_retraits.delete');
    });
    /* Options de locations */
    Route::controller(LocationOptionController::class)
        ->prefix('location_options')->group(function () {
        Route::get('/', 'index')->name('dashboard.location_options');
        Route::get('/search', 'index')->name('dashboard.location_options.search');
        Route::get('/new', 'create')->name('dashboard.location_options.create');
        Route::post('/new', 'store')->name('dashboard.location_options.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.location_options.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.location_options.update');
        Route::get('/export', 'export')->name('dashboard.location_options.export');
        Route::get('/{id}', 'show')->name('dashboard.location_options.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.location_options.delete');
    });
    /* Réduction */
    Route::controller(LocationReductionController::class)
        ->prefix('reductions')->group(function () {
        Route::get('/', 'index')->name('dashboard.location_reductions');
        Route::get('/search', 'index')->name('dashboard.location_reductions.search');
        Route::get('/new', 'create')->name('dashboard.location_reductions.create');
        Route::post('/new', 'store')->name('dashboard.location_reductions.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.location_reductions.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.location_reductions.update');
        Route::get('/export', 'export')->name('dashboard.location_reductions.export');
        Route::get('/{id}', 'show')->name('dashboard.location_reductions.show');
        Route::delete('/{id}', 'destroy')->name('dashboard.location_reductions.delete');
    });

})->middleware(['auth','web']);

/*
Route::controller(FrontController::class)
->prefix('dashboards')->group(function () {
    Route::get('/', 'index')->name('dash.home');
    Route::post('voitures', 'getVoi');
})->middleware('jwt.verify'); 
*/