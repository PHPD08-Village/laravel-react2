<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use App\Http\Controllers\PublishController;
use App\Http\Controllers\StarController;
use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\ErrorLogController; // 添加新的控制器

// 將 API 路由置於開始處
// 案件刊登表單
Route::post('/api/submit-publish', [PublishController::class, 'publish']);
Route::get('/api/get-publishes', [PublishController::class, 'getAllPublishes']);

// 評價表單
Route::post('/api/star', [StarController::class, 'store']);
// Route::get('/api/get-star', [StarController::class, 'getAllstar']);

// 使用者資訊表單
Route::post('/apo/userinfo', [UserInfoController::class, 'store']);
Route::get('/api/userinfo', [UserInfoController::class, 'index']);

// 登入登出功能
Route::middleware(['auth'])->group(function () {
    // 使用者資訊表單
    Route::post('/api/userinfo', [UserInfoController::class, 'store']);
    Route::get('/api/userinfo', [UserInfoController::class, 'index']);
});

// 添加錯誤日誌的路由
Route::post('/api/log-error', [ErrorLogController::class, 'logError']);

// React 路由的配置應該在後面
Route::get('/', function () {
    return view('index');
});

Route::get('/{any}', function(){
    return view('index');
})->where('any', ".*");

// use App\Http\Controllers\DataController;

// Route::post('/api/submit-data', [DataController::class, 'mydata']);
