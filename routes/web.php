<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ReservationController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function() {
    if (Auth::check()) {
        return redirect()->route('menu');
    }
    return Inertia::render('Landing');
});

Route::get('menu', function() {
    return Inertia::render('AuthenticatedMenu');
})->middleware('auth')->name('menu');

// いずれ部屋一覧ページを作成する
// Route::get('/room', [ReservationController::class, ''])->name('');

Route::get('/room/{id}', [ReservationController::class, 'show'])->name('reservation.show');

Route::middleware(['auth'])->group(function () {
    Route::post('/room/{id}', [ReservationController::class, 'create'])->name('reservation.create');
});

Route::middleware(['auth'])->group(function () {
    Route::get('/admin/users', [AdminController::class, 'showUsers'])->name('admin.show_user');
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

require __DIR__.'/auth.php';
