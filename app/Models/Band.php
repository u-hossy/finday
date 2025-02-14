<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Band extends Model
{
    protected $fillable = [
        'name',
    ];

    public function band_members(): belongsToMany // hasMany から BelongsToManyに変えたらおかしくなった
    {
        return $this->belongsToMany(BandMember::class);
    }
}
