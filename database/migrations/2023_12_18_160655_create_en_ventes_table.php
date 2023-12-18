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
        Schema::create('en_ventes', function (Blueprint $table) {
            $table->id();
            $table->integer('prix_vente');
            $table->text('description')->default('');
            $table->date('date')->default('00-00-0000');
            
            $table->timestamps();
            $table->softDeletes();

            $table->bigInteger('voiture_id')->index();
            $table->integer('point_retrait_id')->index();

            $table->foreign('voiture_id')->references('id')->on('voitures');
            $table->foreign('point_retrait_id')->references('id')->on('point_retraits');
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('en_ventes');
    }
};
