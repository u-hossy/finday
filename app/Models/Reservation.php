<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    protected $fillable = [
        'date',
        'time',
        'room_id',
        'band_id',
        'over_reservable',
    ];
}
