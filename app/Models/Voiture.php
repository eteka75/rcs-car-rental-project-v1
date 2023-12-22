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
        "disponibilite",
        "etat enum",
        "couleur",
        "user_id",
        "marque_id",
        "categorie_id",
        "type_carburant_id",
    ];
    
}
