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
        Schema::create('en_locations', function (Blueprint $table) {
            $table->id();
            $table->integer('tarif_location_heure')->default(0);
            $table->integer('tarif_location_hebdomadaire')->default(0);
            $table->integer('tarif_location_journalier')->default(0);
            $table->integer('tarif_location_mensuel')->default(0);
            $table->dateTime('date_debut_location');
            $table->dateTime('date_fin_location');

            $table->integer('point_retrait_id')->unique()->index('pr_voiture');
            $table->integer('voiture_id')->unique()->index('voiture');

            $table->longText('conditions')->default('');
            $table->longText('description')->default('');

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('voiture_id')->references('id')->on('voitures');
            $table->foreign('point_retrait_id')->references('id')->on('point_retraits');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('en_locations');
    }
};
