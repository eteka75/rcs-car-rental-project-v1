<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('voiture_has_systeme_securites', function (Blueprint $table) {
            $table->id();
            $table->integer('voiture_id')->unsigned()->index();
            $table->integer('systeme_securite_id')->unsigned()->index();            
            
            $table->timestamps();

            $table->unique(['voiture_id','systeme_securite_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voiture_has_systeme_securites');
    }
};
