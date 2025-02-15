<?php

namespace App\Http\Controllers;

use App\Models\Band;
use App\Models\BandMember;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class BandController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $bands = Band::with('users')->get();

        return Inertia::render('Bands/Index', [
            'bands' => $bands,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
        ]);

        $band = Band::create([
            'name' => $request->name,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $band = Band::with('band_members')->find($id);
        $users = User::all();

        return Inertia::render('Bands/Edit', [
            'band' => $band,
            'status' => session('status'),
            'users' => $users,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'band_members' => ['required', 'array'],
            'band_members.*' => ['exists:users,id'],
        ]);

        $band = Band::findOrFail($id);

        $band->name = $request->name;
        $band->save();

        $band->band_members()->sync($request->band_members);

        return Redirect::route('bands.edit', $band->id)->with('success', 'バンド情報が更新されました。');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $band = Band::findOrFail($id);

        $band->delete();
        return Redirect::route('band.index')->with('success', 'バンドが削除されました。');
    }
}
