<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class SystemeSecurite extends Model
{
    use HasFactory, SoftDeletes;

    protected $table = 'systeme_securites';

    protected $fillable = [
        'nom',  
        'description', 
        'photo' 
    ];
}
