<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class PointRetrait extends Model
{
    use HasFactory, SoftDeletes;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'en_locations';
    protected $fillable = [
        'ville',
        'lieu',
        'contacts',
        'quartier',
        'adresse',
        'map_local',
        'map_local',
        'description',
    ];

}
