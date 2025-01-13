<?php


use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\PersonalDataController;
use App\Http\Controllers\FavoriteController;
use App\Http\Controllers\PersonalworksController;
use App\Http\Controllers\PersonalworkstestController;
use App\Http\Controllers\Simon\PublishController;

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

// 儲存作品集
Route::post('/store-works', [PersonalworksController::class, 'store']);
Route::post('/storeworks', [PersonalworkstestController::class, 'web_store']); //測試用

// 透過狀態取得案件
Route::get('/publish/status/{status}', [PublishController::class, 'getPublishByStatus']);  //取得案件狀態
Route::patch('/publish/status', [PublishController::class, 'updateStatus']);  //更新案件狀態
Route::get('/publish/status-counts', [PublishController::class, 'getStatusCounts']); //取得案件狀態數量
Route::delete('/publish/{pid}', [PublishController::class, 'destroy']); //刪除案件

// 狀態
// pending: 審核中
// active: 已刊登
// cancelled: 已取消
// completed: 已完成