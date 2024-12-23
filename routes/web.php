<?php

use Illuminate\Http\Request;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
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



// use Illuminate\Http\Request;
// use App\Http\Controllers\PublishController;
// use App\Http\Controllers\StarController;
// use App\Http\Controllers\UserInfoController;

// 將 API 路由置於開始處
// 案件刊登表單
// Route::post('/api/submit-publish', [PublishController::class, 'publish']);
// Route::get('/api/get-publishes', [PublishController::class, 'getAllPublishes']);

// // 評價表單
// Route::post('/api/star', [StarController::class, 'store']);
// // Route::get('/api/get-star', [StarController::class, 'getAllstar']);

// // 使用者資訊表單
// Route::post('/apo/userinfo', [UserInfoController::class, 'store']);
// Route::get('/api/userinfo', [UserInfoController::class, 'index']);


// Route::middleware(['auth'])->group(function () {
//     // 使用者資訊表單
//     Route::post('/api/userinfo', [UserInfoController::class, 'store']);
//     Route::get('/api/userinfo', [UserInfoController::class, 'index']);
// });

// // React 路由的配置應該在後面
// Route::get('/', function () {
//     return view('index');
// });

// Route::get('/{pathMatch}', function(){
//     return view('index');
// })->where('pathMatch', ".*");

// // use App\Http\Controllers\DataController;

// // Route::post('/api/submit-data', [DataController::class, 'mydata']);