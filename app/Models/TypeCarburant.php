<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TypeCarburant extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'type_carburants';

    protected $fillable = [
        'nom',  
        'description', 
        'photo' 
    ];
}
