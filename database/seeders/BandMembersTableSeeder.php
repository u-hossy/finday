<?php

namespace Database\Seeders;

use App\Models\BandMember;
use Illuminate\Database\Seeder;

class BandMembersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $bandMembers = [
            ['band_id' => 1, 'user_id' => 1],
            ['band_id' => 1, 'user_id' => 2],
            ['band_id' => 1, 'user_id' => 3],
            ['band_id' => 1, 'user_id' => 4],
            ['band_id' => 1, 'user_id' => 5],
            ['band_id' => 2, 'user_id' => 6],
            ['band_id' => 2, 'user_id' => 7],
            ['band_id' => 2, 'user_id' => 8],
            ['band_id' => 2, 'user_id' => 9],
            ['band_id' => 2, 'user_id' => 10],
            ['band_id' => 3, 'user_id' => 11],
            ['band_id' => 3, 'user_id' => 12],
            ['band_id' => 3, 'user_id' => 13],
            ['band_id' => 3, 'user_id' => 14],
            ['band_id' => 3, 'user_id' => 15],
            ['band_id' => 4, 'user_id' => 16],
            ['band_id' => 4, 'user_id' => 17],
            ['band_id' => 4, 'user_id' => 18],
            ['band_id' => 4, 'user_id' => 19],
            ['band_id' => 4, 'user_id' => 20],
            ['band_id' => 5, 'user_id' => 21],
            ['band_id' => 5, 'user_id' => 22],
            ['band_id' => 5, 'user_id' => 23],
            ['band_id' => 5, 'user_id' => 24],
            ['band_id' => 5, 'user_id' => 25],
        ];

        foreach ($bandMembers as $member) {
            BandMember::create($member);
        }
    }
}
