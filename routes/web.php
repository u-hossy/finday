<?php

use App\Http\Controllers\BandController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ReservationController;
use App\Http\Controllers\UserController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


// ログイン前
Route::get('/', function () {
    if (Auth::check()) {
        return redirect()->route('menu');
    }
    return Inertia::render('GuestMenu');
});

// ログイン後メニュー
Route::middleware('auth')->group(function () {
    Route::get('/menu', function () {
        return Inertia::render('AuthenticatedMenu');
    })->name('menu');

    // 部屋予約
    Route::get('/reservation', [ReservationController::class, 'index'])->name('reservation.index');
    Route::get('/reservation/{id}', [ReservationController::class, 'show'])->name('reservation.show');
    Route::get('/reservation/create', [ReservationController::class, 'create'])->name('reservation.create_form');
    Route::post('/reservation/create', [ReservationController::class, 'store'])->name('reservation.store');

    // 日程調整
    // Route::get('/schedule', [\App\Http\Controllers\ScheduleController::class, 'index'])->name('schedule.index');

    // バンド管理
    // Route::get('/band', [BandController::class, 'index'])->name('band.index');

    // プロフィール
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::post('/profile', [ProfileController::class, 'update'])->name('profile.update');

    // 管理者画面
    // Route::get('/admin', [\App\Http\Controllers\AdminController::class, 'index'])->name('admin.index');
});

require __DIR__ . '/auth.php';
