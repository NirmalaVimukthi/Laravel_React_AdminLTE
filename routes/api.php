<?php

use App\Http\Controllers\Api\v1\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::controller(UserController::class)->group(function(){
    Route::post('register','register');
    Route::post('login','login');
    
    Route::get('usetdetail','userDetails')->middleware('auth:api');
    Route::post('forgotpassword','forgotpassword');
    Route::post('changepassword','changepassword');
});

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:api');
