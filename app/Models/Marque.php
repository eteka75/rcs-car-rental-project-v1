<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Model;

class Marque extends Model
{
    use HasFactory;
    protected $fillable = [
        'nom', 
        'pays_id',
        'annee_fondation', 
        'description', 
        'site_web', 
        'logo' 
    ];

    public function pays(): BelongsTo
    {
        return $this->belongsTo(Pays::class,'pays_id');
    }
}
