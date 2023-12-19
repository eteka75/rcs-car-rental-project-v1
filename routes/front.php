<?php
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FrontController;


Route::controller(FrontController::class)->group(function () {
    Route::get('/', 'index')->name('home');
    Route::get('/location-voiture', 'getLocation')->name('location.voiture');
    Route::get('/achat-voiture', 'getLocation')->name('achat.voiture');
    Route::get('/faq', 'getFaq')->name('faq.index');
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