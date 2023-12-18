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
        Schema::create('location_point_retraits', function (Blueprint $table) {
            $table->id();
            $table->string('nom')->default(false)->change();;
            $table->string('photo')->default('');
            $table->text('contacts')->default('');
            $table->string('ville')->default('');
            $table->string('quartier')->default('');
            $table->string('adresse')->default('');
            $table->text('map_local')->default('');

            $table->longText('description')->default('');
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('location_point_retraits');
    }
};
