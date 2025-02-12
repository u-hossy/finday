<?php

namespace App\Http\Controllers;

use App\Models\Band;
use App\Models\Reservation;
use App\Models\Room;
use App\Models\Time;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ReservationController extends Controller
{
    public function create(Request $request, $id) {
        $user_id = Auth::id();

        $validated = $request->validate([
            'date' => 'required|date',
            'time' => 'required|integer',
            'band_id' => 'required|exists:bands,id',
            'over_reservable' => 'required|boolean',
        ]);

        $reservation = Reservation::create([
            'date' => $validated['date'],
            'time' => $validated['time'],
            'room_id' => $id,
            'band_id' => $validated['band_id'],
            'over_reservable' => $validated['over_reservable'],
        ]);

        return Inertia::render('Reservation/Result', [
            'reservation' => $reservation,
            'userId' => $user_id,
        ]);
    }

    public function show($id) {

        $room = Room::where('id', $id)->get();
        $reservations = Reservation::with('band')->where('room_id', $id)->get();
        $times = Time::all();
        $user_id = Auth::id();

        return Inertia::render('Reservation/Show', [
            'room' => $room,
            'reservations' => $reservations,
            'times' => $times,
            'userId' => $user_id,
        ]);
    }
}

