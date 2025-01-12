<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\PersonalDataController;
use App\Http\Controllers\FavoriteController;

// Route::get('/userinfo', [UserInfoController::class, 'index']);
// Route::post('/userinfo', [UserInfoController::class, 'store']);

Route::post('/store-user', [PersonalDataController::class, 'store']); 
// 收藏案件取得
// Route::middleware('auth:api')->group(function () {
    Route::get('/cases', [FavoriteController::class, 'index']);
    Route::post('/delete-cases', [FavoriteController::class, 'destroy']);
    Route::get('/freelancers', [FavoriteController::class, 'findex']);
    Route::post('/delete-freelancers', [FavoriteController::class, 'delete']);
// });