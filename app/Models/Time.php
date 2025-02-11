<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Time extends Model
{
    protected $fillable = [
        'time_id',
        'name',
        'starts_at',
        'ends_at',
    ];
}
