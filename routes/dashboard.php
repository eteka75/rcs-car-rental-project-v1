<?php

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
        Route::get('/edit/:id', 'edit')->name('dashboard.voitures.edit');
        Route::put('/edit/:id', 'update')->name('dashboard.voitures.update');
        Route::delete('/:id', 'update')->name('dashboard.voitures.delete');
    })->middleware('web');

});

/*
Route::controller(FrontController::class)
->prefix('dashboards')->group(function () {
    Route::get('/', 'index')->name('dash.home');
    Route::post('voitures', 'getVoi');
})->middleware('jwt.verify'); 
*/