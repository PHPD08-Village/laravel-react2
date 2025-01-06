<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PersonalDataController;


Route::post('/store-user', [PersonalDataController::class, 'store']); 