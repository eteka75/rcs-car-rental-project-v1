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
        Schema::create('location_has_location_options', function (Blueprint $table) {
            $table->id();
            $table->integer('location_id')->unsigned()->index();
            $table->integer('location_option_id')->unsigned()->index();            
            
            $table->timestamps();

            $table->unique(['location_id','location_option_id']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('location_has_location_options');
    }
};
