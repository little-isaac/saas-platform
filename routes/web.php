<?php

/*
  |--------------------------------------------------------------------------
  | Web Routes
  |--------------------------------------------------------------------------
  |
  | Here is where you can register web routes for your application. These
  | routes are loaded by the RouteServiceProvider within a group which
  | contains the "web" middleware group. Now create something great!
  |
 */

Route::group(['namespace' => 'Auth'], function () {
    
    Route::post('/register.json', 'RegisterController@findOrCreateUser');

    Route::post('/login.json', 'LoginController@directLogin');

});

Route::group(['namespace' => 'Admin'], function () {

    Route::get('customers.json', 'CustomerController@getCustomers');
    Route::group(['prefix' => 'customers'], function () {
        Route::get('{customer_id}.json', 'CustomerController@getCustomer');
        Route::put('{customer_id}.json', 'CustomerController@updateCustomer');
        Route::delete('{customer_id}.json', 'CustomerController@deleteCustomer');
    });
});

Route::get('admin/{path?}/{id?}', 'Admin\\ReactController@view');