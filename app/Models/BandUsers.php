<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class BandUsers extends Model
{
    protected $table = 'band_users';

    protected $fillable = [
        'band_id',
        'user_id',
    ];
}