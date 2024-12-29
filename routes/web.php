<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\PubForStarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublishController;
use App\Http\Controllers\StarController;
use App\Http\Controllers\UserInfoController;
use App\Http\Controllers\ErrorLogController; // 添加新的控制器
use App\Http\Controllers\SearchController; // 添加新的控制器
use App\Http\Controllers\ProjectController;
// use App\Http\Controllers\PubForStarController;
use App\Http\Controllers\PubForHomeCaseController;
use App\Http\Controllers\FreelancerForHomeController;
use App\Http\Controllers\PubForCaseMngController;
use App\Http\Controllers\PersonalworksController;

use Illuminate\Foundation\Application;
use Inertia\Inertia;

// Breeze 提供的驗證路由
Route::get('/', function () {
    return Inertia::render('index', [
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

// 將現有的 API 路由置於開始處
// 案件刊登表單
Route::post('/api/submit-publish', [PublishController::class, 'publish']);
Route::get('/api/get-publishes', [PublishController::class, 'getAllPublishes']);

// 評價表單
Route::post('/api/star', [StarController::class, 'store']);
// Route::get('/api/get-star', [StarController::class, 'getAllstar']);


// 使用者資訊表單
Route::post('/api/userinfo', [UserInfoController::class, 'store']);

// 案件搜尋頁面
Route::get('/api/get-userinfo-publish', [SearchController::class, 'getdata']);

// 阿桂的記得放前面
Route::get('/api/projects', [ProjectController::class, 'index']); // 取得所有專案
Route::get('/api/projects/{id}', [ProjectController::class, 'show']); // 取得單一專案
Route::post('/api/projects', [ProjectController::class, 'store']); // 新增專案
Route::put('/api/projects/{id}', [ProjectController::class, 'update']); // 更新專案
Route::delete('/api/projects/{id}', [ProjectController::class, 'destroy']); // 刪除專案
Route::get('/api/personalworks', [PersonalworksController::class, 'index']); // 取得所有作品

// 戶長的
// Route::post('/api/star', [StarController::class, 'store']);
// Route::get('/api/get-star', [StarController::class, 'getAllstar']);
// Route::get('/api/star/{uid}', [StarController::class, 'getUserInfo']);
// Route::get('/api/case/{caseId}', [PubForStarController::class, 'getCaseInfo']);
// Route::get('/api/get-latest-projectsUser', [PubForHomeLatestController::class, 'getLatestProjUser']);   // 新增首頁最新案件發案人資訊 API
// Route::get('/api/get-latest-projects', [PubForHomeCaseController::class, 'getLatestProjects']);   // 新增首頁最新案件案件資訊 API
// Route::get('/api/get-clickhighest-projects', [PubForHomeCaseController::class, 'getCliHighestProjects']);   // 新增首頁點閱率最高案件資訊 API
// Route::get('/api/get-starhighest-taker', [FreelancerForHomeController::class, 'getStarHighestTaker']);   // 新增首頁點閱率最高案件資訊 API

// 案件管理(暫時把登入條件拿掉)
// Route::middleware('auth')->group(function () {
    // Route::get('/api/get-cases/{userId}', [PubForCaseMngController::class, 'getCases']);
    // Route::post('/api/get-cases/{cid}/switch-case', [PubForCaseMngController::class, 'toggle']);
    // });



// 登入登出功能
// Route::middleware(['auth'])->group(function () {
//     // 使用者資訊表單
//     Route::post('/api/userinfo', [UserInfoController::class, 'store']);
//     Route::get('/api/userinfo', [UserInfoController::class, 'index']);
// });

// 添加錯誤日誌的路由
Route::post('/api/log-error', [ErrorLogController::class, 'logError']);


// React 路由配置應該在後面
// 戶長的
Route::post('/api/star', [StarController::class, 'store']);
// Route::get('/api/get-star', [StarController::class, 'getAllstar']);
// Route::get('/api/star/{uid}', [StarController::class, 'getUserInfo']);
Route::get('/api/case/{caseId}', [PubForStarController::class, 'getCaseInfo']);
// Route::get('/api/get-latest-projectsUser', [PubForHomeLatestController::class, 'getLatestProjUser']);   // 新增首頁最新案件發案人資訊 API
Route::get('/api/get-latest-projects', [PubForHomeCaseController::class, 'getLatestProjects']);   // 新增首頁最新案件案件資訊 API
Route::get('/api/get-clickhighest-projects', [PubForHomeCaseController::class, 'getCliHighestProjects']);   // 新增首頁點閱率最高案件資訊 API
Route::get('/api/get-starhighest-taker', [FreelancerForHomeController::class, 'getStarHighestTaker']);   // 新增首頁點閱率最高案件資訊 API

// 案件管理(暫時把登入條件拿掉)
// Route::middleware('auth')->group(function () {
Route::get('/api/get-cases/{userId}', [PubForCaseMngController::class, 'getCases']);
Route::post('/api/get-cases/{cid}/switch-case', [PubForCaseMngController::class, 'toggle']);
// });


// 阿桂的
Route::get('/api/projects', [ProjectController::class, 'index']); // 取得所有作品
Route::get('/api/projects/{id}', [ProjectController::class, 'show']); // 取得單一作品
Route::post('/api/projects', [ProjectController::class, 'store']);
Route::put('/api/projects/{id}', [ProjectController::class, 'update']);
Route::delete('/api/projects/{id}', [ProjectController::class, 'destroy']);

// React 路由的配置應該在後面
Route::get('/', function () {
    return view('index');
});

Route::get('/{any}', function(){
    return view('index');
})->where('any', ".*");

// use App\Http\Controllers\DataController;

// Route::post('/api/submit-data', [DataController::class, 'mydata']);



