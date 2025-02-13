<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Band extends Model
{
    protected $fillable = [
        'name',
    ];

    public function bandMembers(): HasMany
    {
        return $this->hasMany(BandMember::class);
    }
}
