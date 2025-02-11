<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {

        $this->call(BandsTableSeeder::class);
        $this->call(BandMembersTableSeeder::class);
        $this->call(ReservationTableSeeder::class);
        $this->call(RoomsTableSeeder::class);
        $this->call(TimesTableSeeder::class);
        User::factory(50)->create();

    }
}
