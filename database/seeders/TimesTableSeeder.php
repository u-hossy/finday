<?php

namespace Database\Seeders;

use App\Models\Time;
use Illuminate\Database\Seeder;

class TimesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Time::create([
            'id' => 1,
            'time_id' => 1,
            'name' => '1限',
            'starts_at' => '8:50',
            'ends_at' => '10:20',
        ]);

        Time::create([
            'id' => 2,
            'time_id' => 2,
            'name' => '2限',
            'starts_at' => '10:30',
            'ends_at' => '12:00',
        ]);

        Time::create([
            'id' => 3,
            'time_id' => 3,
            'name' => '3限',
            'starts_at' => '13:00',
            'ends_at' => '14:30',
        ]);

        Time::create([
            'id' => 4,
            'time_id' => 4,
            'name' => '4限',
            'starts_at' => '14:40',
            'ends_at' => '16:10',
        ]);

        Time::create([
            'id' => 5,
            'time_id' => 5,
            'name' => '5限',
            'starts_at' => '16:20',
            'ends_at' => '17:50',
        ]);

        Time::create([
            'id' => 6,
            'time_id' => 6,
            'name' => '6限',
            'starts_at' => '18:00',
            'ends_at' => '19:30',
        ]);

        Time::create([
            'id' => 7,
            'time_id' => 7,
            'name' => '7限',
            'starts_at' => '19:30',
            'ends_at' => '21:00',
        ]);

        Time::create([
            'id' => 8,
            'time_id' => 0,
            'name' => '0限',
            'starts_at' => '7:10',
            'ends_at' => '8:40',
        ]);
    }
}
