<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class FrontController extends Controller
{
    public function index(Request $request)
    {
        return Inertia::render('Index', [
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
