<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    public function showUsers() {
        $users = User::all();
        
        return Inertia::render('Admin/ShowUsers', [
            'users' => $users,
        ]);
    }
}
