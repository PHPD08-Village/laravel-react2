<?php

use App\Http\Controllers\PubForStarController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublishController;
use App\Http\Controllers\StarController;
use App\Http\Controllers\PubForHomeCaseController;
use App\Http\Controllers\FreelancerForHomeController;
use App\Http\Controllers\PubForCaseMngController;

// 將 API 路由置於開始處
Route::post('/api/submit-publish', [PublishController::class, 'publish']);
Route::get('/api/get-publishes', [PublishController::class, 'getAllPublishes']);

Route::post('/api/star', [StarController::class, 'store']);
// Route::get('/api/get-star', [StarController::class, 'getAllstar']);
// Route::get('/api/star/{uid}', [StarController::class, 'getUserInfo']);
Route::get('/api/case/{caseId}', [PubForStarController::class, 'getCaseInfo']);
// Route::get('/api/get-latest-projectsUser', [PubForHomeLatestController::class, 'getLatestProjUser']);   // 新增首頁最新案件發案人資訊 API
Route::get('/api/get-latest-projects', [PubForHomeCaseController::class, 'getLatestProjects']);   // 新增首頁最新案件案件資訊 API
Route::get('/api/get-clickhighest-projects', [PubForHomeCaseController::class, 'getCliHighestProjects']);   // 新增首頁點閱率最高案件資訊 API
Route::get('/api/get-starhighest-taker', [FreelancerForHomeController::class, 'getStarHighestTaker']);   // 新增首頁點閱率最高案件資訊 API

// Route::middleware('auth')->group(function () {
Route::get('/api/get-cases/{userId}', [PubForCaseMngController::class, 'getCases']);
Route::post('/api/get-cases/{cid}/switch-case', [PubForCaseMngController::class, 'toggle']);
// });

// React 路由的配置應該在後面
Route::get('/', function () {
    return view('index');
});

Route::get('/{pathMatch}', function () {
    return view('index');
})->where('pathMatch', ".*");

// use App\Http\Controllers\DataController;

// Route::post('/api/submit-data', [DataController::class, 'mydata']);
