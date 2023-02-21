<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('/hotels', 'App\Http\Controllers\HotelController@index');
Route::post('/hotels', 'App\Http\Controllers\HotelController@store');
Route::get('/hotels/{hotel}', 'App\Http\Controllers\HotelController@show');
Route::put('/hotels/{hotel}', 'App\Http\Controllers\HotelController@update');
Route::delete('/hotels/{hotel}', 'App\Http\Controllers\HotelController@destroy');

Route::get('/rooms', 'App\Http\Controllers\RoomController@index');
Route::post('/rooms', 'App\Http\Controllers\RoomController@store');
Route::get('/rooms/{room}', 'App\Http\Controllers\RoomController@show');
Route::put('/rooms/{room}', 'App\Http\Controllers\RoomController@update');
Route::delete('/rooms/{room}', 'App\Http\Controllers\RoomController@destroy');

Route::get('/employes', 'App\Http\Controllers\EmployeController@index');
Route::post('/employes', 'App\Http\Controllers\EmployeController@store');
Route::get('/employes/{employe}', 'App\Http\Controllers\EmployeController@show');
Route::put('/employes/{employe}', 'App\Http\Controllers\EmployeController@update');
Route::delete('/employes/{employe}', 'App\Http\Controllers\EmployeController@destroy');