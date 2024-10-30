<?php

use Illuminate\Support\Facades\Route;


Route::get('/{any}', function () {
    return View::make('welcome');  // Renders the Laravel view that contains the React root div
})->where('any', '.*');

Route::get('/', function () {
    return view('welcome');
});
