<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * 
     */
     /*$table->integer('tarif_location_heure')->default(0);
        $table->integer('tarif_location_journalier')->default(0);
        $table->integer('tarif_location_hebdomadaire')->default(0);
        */
    public function up(): void
    {
        Schema::create('voiture_media', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom')->nullable(false)->change();
            $table->year('annee_fabrication')->default(0000);
            $table->string('photo')->default('');
            $table->integer('nombre_place',2)->unsigned()->default(0);
            $table->string('volume_coffre')->default('');
            $table->date('date_achat')->default('00-00-0000');
            $table->date('date_vente')->default('00-00-0000');           
            $table->integer('nb_place')->default('');
            $table->string('couleur')->default('');
            $table->longText('description')->default('');

            $table->integer('marque_id')->nullable()->unsigned();
            $table->integer('categorie_id')->nullable()->unsigned();
            $table->integer('carburant_id')->nullable()->unsigned();

            $table->index('marque_id', 'categorie_id','carburant_id');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voiture_media');
    }
};
