<?php

use App\Http\Controllers\BandController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('menu');
    }
    return Inertia::render('Landing');
});

Route::get('menu', function () {
    return Inertia::render('AuthenticatedMenu');
})->middleware('auth')->name('menu');

// いずれ部屋一覧ページを作成する
// Route::get('/room', [ReservationController::class, ''])->name('');

Route::get('/rooms/{id}', [ReservationController::class, 'show'])->name('reservation.show');

Route::middleware(['auth'])->group(function () {
    Route::post('/rooms/{id}', [ReservationController::class, 'create'])->name('reservation.create');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/users', [UserController::class, 'index'])->name('admin.show_user');
});

Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/bands', [BandController::class, 'index'])->name('band.index');
    Route::get('/bands/{id}', [BandController::class, 'edit'])->name('band.edit');
    Route::patch('/bands/{id}', [BandController::class, 'update'])->name('band.update');
    Route::delete('/bands/{id}', [BandController::class, 'destroy'])->name('band.destroy');
});

require __DIR__ . '/auth.php';
