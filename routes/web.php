<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PublishController;

Route::post('/api/submit-publish', [PublishController::class, 'publish']);
Route::get('/api/get-publishes', [PublishController::class, 'getAllPublishes']);

Route::get('/', function () {
    return view('index');
});

Route::get('/{pathMatch}', function(){
    return view('index');
})->where('pathMatch', ".*");

// use App\Http\Controllers\DataController;

// Route::post('/api/submit-data', [DataController::class, 'mydata']);


