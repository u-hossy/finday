<?php

namespace Database\Seeders;

use App\Models\Room;
use Illuminate\Database\Seeder;

class RoomsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Room::create([
            'name' => 'N101部室',
            'useable' => true,
            'who_has_key' => null, // 例として1を設定
        ]);

        Room::create([
            'name' => 'N102文化会',
            'useable' => true,
            'who_has_key' => null, // 例として2を設定
        ]);
    }
}
