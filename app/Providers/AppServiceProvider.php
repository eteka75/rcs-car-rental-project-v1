<?php

namespace App\Providers;

use Illuminate\Support\Facades\Validator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot() :void
    {
        Validator::extend('webp', function ($attribute, $value, $parameters, $validator) {
            // Votre logique de validation pour les fichiers webp
            return pathinfo($value->getClientOriginalName(), PATHINFO_EXTENSION) === 'webp';
        });
    }
}
