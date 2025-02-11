<?php

namespace Database\Seeders;

use App\Models\Band;
use Illuminate\Database\Seeder;

class BandsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Band::create(['name' => 'The Beatles']);
        Band::create(['name' => 'Led Zeppelin']);
        Band::create(['name' => 'Pink Floyd']);
        Band::create(['name' => 'Queen']);
        Band::create(['name' => 'The Rolling Stones']);
    }
}
