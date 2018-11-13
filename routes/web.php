<?php

Route::post('register.json', 'Auth\\RegisterController@findOrCreateUser');

Route::domain('{store_name}.saas-platform.com')->group(function () {
    Route::post('login.json', 'Auth\\LoginController@directLogin');

    Route::get('admin/login_page', 'Admin\\ReactController@login');

    Route::get('admin/login', 'Admin\\ReactController@login');

    Route::get('logout', 'Auth\\LoginController@logout');

    Route::group(['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => ['AdminCheckLogin']], function () {

        Route::get('customers.json', 'CustomerController@getAll');
        Route::group(['prefix' => 'customers'], function () {
            Route::post('create.json', 'CustomerController@addUpdate');
            Route::get('{customer_id}.json', 'CustomerController@get');
            Route::put('{customer_id}.json', 'CustomerController@addUpdate');
            Route::delete('{customer_id}.json', 'CustomerController@delete');

            Route::group(['prefix' => '{customer_id}'], function () {
                Route::get('addresses.json', 'AddressController@getAll');
                Route::post('create.json', 'AddressController@addUpdate');
                Route::get('{address_id}.json', 'CustomerController@get');
                Route::put('{address_id}.json', 'CustomerController@addUpdate');
                Route::delete('{address_id}.json', 'CustomerController@delete');
            });
        });

        Route::get('products.json', 'ProductController@getAll');
        Route::group(['prefix' => 'products'], function () {
            Route::post('create.json', 'ProductController@addUpdate');
            Route::get('{product_id}.json', 'ProductController@get');
            Route::put('{product_id}.json', 'ProductController@addUpdate');
            Route::delete('{product_id}.json', 'ProductController@delete');
        });

        Route::get('{path?}/{id?}', 'ReactController@view');
    });
    Route::get('{path?}/{id?}', 'ReactController@view');
});

Route::get('{store_name?}/{path?}/{id?}', 'ReactController@view');
