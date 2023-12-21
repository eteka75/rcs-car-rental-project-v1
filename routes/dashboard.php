<?php

use App\Http\Controllers\Dashboard\CategorieController;
use App\Http\Controllers\Dashboard\MarqueController;
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
        Route::get('/new', 'create')->name('dashboard.voitures.create');
        Route::post('/new', 'store')->name('dashboard.voitures.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.voitures.edit');
        Route::put('/edit/{id}', 'update')->name('dashboard.voitures.update');
        Route::delete('/{id}', 'update')->name('dashboard.voitures.delete');
    })->middleware('web');
    
    /*Marques*/
    Route::controller(MarqueController::class)->prefix('marques')->group(function () {
        Route::get('/', 'index')->name('dashboard.marques');
        Route::get('/search', 'index')->name('dashboard.marques.search');
        Route::get('/new', 'create')->name('dashboard.marques.create');
        Route::post('/new', 'store')->name('dashboard.marques.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.marques.edit');
        Route::post('/edit/{id}', 'update')->name('dashboard.marques.update');
        Route::delete('/{id}', 'destroy')->name('dashboard.marques.delete');
    })->middleware('web');

    /*Marques*/
    Route::controller(CategorieController::class)->prefix('categories')->group(function () {
        Route::get('/', 'index')->name('dashboard.categories');
        Route::get('/new', 'create')->name('dashboard.categories.create');
        Route::post('/new', 'store')->name('dashboard.categories.store');
        Route::get('/edit/{id}', 'edit')->name('dashboard.categories.edit');
        Route::put('/edit/{id}', 'update')->name('dashboard.categories.update');
        Route::delete('/{id}', 'update')->name('dashboard.categories.delete');
    })->middleware('web');

});

/*
Route::controller(FrontController::class)
->prefix('dashboards')->group(function () {
    Route::get('/', 'index')->name('dash.home');
    Route::post('voitures', 'getVoi');
})->middleware('jwt.verify'); 
*/