<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BandMember extends Model
{
    protected $fillable = [
        'band_id',
        'user_id',
    ];
}
