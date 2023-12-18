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
        Schema::create('locations', function (Blueprint $table) {
            $table->id();
            $table->dateTime('date_debut_location');
            $table->dateTime('date_fin_location');

            $table->integer('montant_location');
            $table->integer('location_assurance_id');
            
            $table->integer('location_reduction_id')->unsigned()->index()->nullable();
            $table->integer('location_assurance_id')->unsigned()->index()->nullable();
            $table->integer('voiture_id')->unsigned()->index();
            $table->integer('transaction_id')->unsigned()->index();
            
            $table->timestamps();
            $table->softDeletes();            

            $table->foreign('voiture_id')->references('id')->on('voitures');
            $table->foreign('point_retrait_id')->references('id')->on('point_retraits');
            $table->foreign('location_assurance_id')->references('id')->on('location_assurances');
            $table->foreign('location_reduction_id')->references('id')->on('location_assurances');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('locations');
    }
};
