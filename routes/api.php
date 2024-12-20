<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserInfoController;

Route::get('/userinfo', [UserInfoController::class, 'index']);
Route::post('/userinfo', [UserInfoController::class, 'store']);

