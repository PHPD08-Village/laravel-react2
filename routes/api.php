<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\PersonalDataController;

Route::get('/userinfo', [UserInfoController::class, 'index']);
Route::post('/userinfo', [UserInfoController::class, 'store']);

Route::post('/store-user', [PersonalDataController::class, 'store']); 