<?php

namespace Database\Seeders;

use App\Models\Reservation;
use Illuminate\Database\Seeder;

class ReservationTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $reservations = [
            [
                'date' => '2025-02-11',
                'time' => 1,
                'room_id' => 1,
                'band_id' => 1,
                'over_reservable' => false,
            ],
            [
                'date' => '2025-02-12',
                'time' => 2,
                'room_id' => 2,
                'band_id' => 2,
                'over_reservable' => true,
            ],
            [
                'date' => '2025-02-13',
                'time' => 3,
                'room_id' => 1,
                'band_id' => 3,
                'over_reservable' => false,
            ],
            [
                'date' => '2025-02-14',
                'time' => 4,
                'room_id' => 2,
                'band_id' => 4,
                'over_reservable' => true,
            ],
            [
                'date' => '2025-02-15',
                'time' => 5,
                'room_id' => 1,
                'band_id' => 5,
                'over_reservable' => false,
            ],
        ];

        // データベースに挿入
        foreach ($reservations as $reservation) {
            Reservation::create($reservation);
        }
    }
}
