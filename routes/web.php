<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublishController;
use App\Http\Controllers\StarController;

// 將 API 路由置於開始處
Route::post('/api/submit-publish', [PublishController::class, 'publish']);
Route::get('/api/get-publishes', [PublishController::class, 'getAllPublishes']);

Route::post('/api/star', [StarController::class, 'store']);
// Route::get('/api/get-star', [StarController::class, 'getAllstar']);



// React 路由的配置應該在後面
Route::get('/', function () {
    return view('index');
});

Route::get('/{pathMatch}', function(){
    return view('index');
})->where('pathMatch', ".*");

// use App\Http\Controllers\DataController;

// Route::post('/api/submit-data', [DataController::class, 'mydata']);


