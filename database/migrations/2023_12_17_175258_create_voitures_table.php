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
        Schema::create('voitures', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('nom')->nullable(false)->change();
            $table->year('annee_fabrication')->default(0000);
            $table->string('photo')->default('');
            $table->integer('nombre_place',2)->unsigned()->default(0);
            $table->string('volume_coffre')->default('');
            $table->date('date_achat')->default('00-00-0000');
            $table->date('date_vente')->default('00-00-0000');           
            $table->integer('nb_place')->default(0);
            $table->string('couleur')->default('');
            $table->enum('etat',["L","A",'R','M'])->index('etat_loc_vente_rep_mag');
            $table->boolean('disponibilite')->default(true);
            $table->longText('description')->default('');
            
            $table->integer('marque_id')->nullable()->unsigned()->index();
            $table->integer('categorie_id')->nullable()->unsigned()->index();
            $table->integer('type_carburant_id')->nullable()->unsigned()->index();

            $table->timestamps();
            $table->softDeletes();

            $table->foreign('marque_id')->references('id')->on('marques');
            $table->foreign('categorie_id')->references('id')->on('categories');
            $table->foreign('type_carburant_id')->references('id')->on('type_carburants');


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('voitures');
    }
};
