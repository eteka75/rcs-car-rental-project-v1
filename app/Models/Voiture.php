<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Voiture extends Model
{
    use HasFactory, SoftDeletes;
    protected $fillable = [
        "nom",
        "photo",
        "annee_fabrication",
        "nb_place",
        "volume_coffre",
        "description",
        "date_achat",
        "couleur",
        "user_id",
        "disponibilite",
        "puissance_moteur",
        "type_transmission",
        "dimenssions",
        "consommation",
        "capacite_reservoir",
        "emission_co2",
        "type_eclairage",
        "type_suspenssion",
        "technologies_a_bord",
        "etat",
        "marque_id",
        "categorie_id",
        "type_carburant_id",
    ];
    
}
