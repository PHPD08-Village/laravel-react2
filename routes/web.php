<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ErrorLogController;

// 以下是 柯基 的
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Auth\GoogleController;
use App\Http\Controllers\Auth\LineController;
// 以上是 柯基 的

// 以下是村民的
use App\Http\Controllers\Simon\PublishController;
use App\Http\Controllers\Simon\UserInfoController;
use App\Http\Controllers\Simon\SearchController;
use App\Http\Controllers\Simon\PersonalController;
// 以上是村民的

// 以下是的阿桂的
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PersonalworksController;
use App\Http\Controllers\PersonalDataController;
// 以上是的阿桂的

// 以下是戶長的
use App\Http\Controllers\ApplicantsController;
use App\Http\Controllers\PubForStarController;
use App\Http\Controllers\StarController;
use App\Http\Controllers\PubForHomeCaseController;
use App\Http\Controllers\FreelancerForHomeController;
use App\Http\Controllers\PubForCaseMngController;
use App\Http\Controllers\AssignTakerController;
use App\Http\Controllers\ApplyController;
// 以上是戶長的


// 將現有的 API 路由置於開始處

// 以下是 柯基 的 登入註冊
Route::get('/dashboard', function () {
    return redirect('/');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Google 登入的重定向路由
Route::get('login/google', [GoogleController::class, 'redirectToGoogle'])->name('login.google');
// Google 登入後的回調路由
Route::get('login/google/callback', [GoogleController::class, 'handleGoogleCallback']);

// Line 的路由
Route::get('login/line', [LineController::class, 'redirectToProvider'])->name('login.line');;
Route::get('login/line/callback', [LineController::class, 'handleProviderCallback']);
require __DIR__ . '/auth.php'; // 載入 auth.php 中的路由
// 以上是 柯基 的



// 以下是村民的
// 案件刊登表單
Route::post('/api/submit-publish', [PublishController::class, 'publish']);
Route::get('/api/get-publishes', [PublishController::class, 'getAllPublishes']);
// 使用者資訊表單
Route::post('/api/userinfo', [UserInfoController::class, 'store']);
// 案件搜尋頁面
Route::get('/api/get-userinfo-publish', [SearchController::class, 'getdata']);
// 更新瀏覽次數
Route::post('/api/click-count', [SearchController::class, 'updateViewCount']);
// 處理 "收藏案件" 請求
Route::post('/api/add-casefavorite', [SearchController::class, 'addCaseFavorite']);
// 處理 "接案" 請求
Route::post('/api/take-case', [SearchController::class, 'takeCase']);
// 處理 "收藏接案者" 請求
Route::post('/api/add-favorite', [SearchController::class, 'addFavorite']);
// 處理 "委託" 請求
Route::post('/api/assignment', [SearchController::class, 'assignment']);
// 個人編輯頁面
Route::post('/api/personal-edit', [PersonalController::class, 'edit']);
Route::middleware('auth')->get('/api/personal-info', [PersonalController::class, 'getinfo']);
// Route::get('/api/personal-info', [PersonalController::class, 'getinfo']);
// 以上是村民的



// 以下是的阿桂的記得放前面
Route::get('/api/projects', [ProjectController::class, 'index']); // 取得所有專案
Route::get('/api/projects/{id}', [ProjectController::class, 'show']); // 取得單一專案
Route::post('/api/projects', [ProjectController::class, 'store']); // 新增專案
Route::put('/api/projects/{id}', [ProjectController::class, 'update']); // 更新專案
Route::delete('/api/projects/{id}', [ProjectController::class, 'destroy']); // 刪除專案
Route::get('/api/personalworks', [PersonalworksController::class, 'index']); // 取得所有作品
Route::post('/api/store-user', [PersonalDataController::class, 'store']); // 新增使用者資料
Route::get('/api/userdata/{uid}', [PersonalDataController::class, 'show']); // 取得單一使用者
// 以上是的阿桂



// 以下是戶長的
Route::post('/api/star', [StarController::class, 'store']);
Route::get('/api/get-star', [StarController::class, 'getAllstar']);
Route::get('/api/star/{uid}', [StarController::class, 'getUserInfo']);
Route::get('/api/case/{caseId}', [PubForStarController::class, 'getCaseInfo']);
// Route::get('/api/get-latest-projectsUser', [PubForHomeLatestController::class, 'getLatestProjUser']);   // 新增首頁最新案件發案人資訊 API
Route::get('/api/get-latest-projects', [PubForHomeCaseController::class, 'getLatestProjects']);   // 新增首頁最新案件案件資訊 API
Route::get('/api/get-clickhighest-projects', [PubForHomeCaseController::class, 'getCliHighestProjects']);   // 新增首頁點閱率最高案件資訊 API
Route::get('/api/get-starhighest-taker', [FreelancerForHomeController::class, 'getStarHighestTaker']);   // 新增首頁點閱率最高案件資訊 API
Route::get('/api/get-project-applicants/{pid}',[ApplicantsController::class,'getProjectApplicants']);   // 獲取選妃頁面的應徵者
// Route::get('/api/get-project-title/{selectedPid}',[ApplicantsController::class,'getProjectTitle']);    // 獲取選妃頁面的當前案件的標題 
Route::post('/api/assign-taker/{selectedPid}',[AssignTakerController::class, 'assignTaker']);   // 委託接案者
Route::post('/api/send-thanks-note/{selectedPid}',[AssignTakerController::class,'sendThanksNote']);     // 發送感謝函
Route::post('/api/apply-case',[ApplyController::class, 'applyCase']);
// 新增首頁最新案件案件資訊 API
Route::get('/api/get-latest-projects', [PubForHomeCaseController::class, 'getLatestProjects']);   
// 新增首頁點閱率最高案件資訊 API
Route::get('/api/get-clickhighest-projects', [PubForHomeCaseController::class, 'getCliHighestProjects']);   
// 新增首頁點閱率最高案件資訊 API
Route::get('/api/get-starhighest-taker', [FreelancerForHomeController::class, 'getStarHighestTaker']);   
// 獲取選妃頁面的應徵者
Route::get('/api/get-project-applicants/{pid}',[ApplicantsController::class,'getProjectApplicants']);   
// 獲取選妃頁面的當前案件的標題 
// Route::get('/api/get-project-title/{selectedPid}',[ApplicantsController::class,'getProjectTitle']);    
// 委託接案者
Route::post('/api/assignment/',[SearchController::class, 'assignment']);   
// "確認"委託接案者(在選妃頁面用的)
Route::post('/api/assign-taker/{selectedPid}',[AssignTakerController::class, 'assignTaker']);   
// 發送感謝函
Route::post('/api/send-thanks-note/{selectedPid}',[AssignTakerController::class,'sendThanksNote']);     
// 應徵案件
Route::post('/api/apply-case',[ApplyController::class, 'applyCase']);
// 收藏或取消收藏接案者
Route::post('/api/toggle-favorite', [SearchController::class, 'toggleFavorite']);
// 確認收藏狀態
Route::post('/api/check-favorite', [SearchController::class, 'checkFavorite']);
// 更新案件
Route::post('/api/update-publish', [PublishController::class, 'update']);
// 案件管理(暫時把登入條件拿掉)
// Route::middleware('auth')->group(function () {
Route::get('/api/get-cases/{userId}', [PubForCaseMngController::class, 'getCases']);
// 案件管理頁面開關按鍵
Route::post('/api/get-cases/switch-case', [PubForCaseMngController::class, 'toggle']);    // 案件管理頁面
// });
// 以上是戶長的


// 添加錯誤日誌的路由
Route::post('/api/log-error', [ErrorLogController::class, 'logError']);

// React 路由的配置應該在後面
Route::get('/', function () {
    return view('index');
});

// NotFond 頁面 
Route::get('/{any}', function () {
    return view('index');
})->where('any', ".*");