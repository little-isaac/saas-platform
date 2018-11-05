<?php

Route::post('register.json', 'Auth\\RegisterController@findOrCreateUser');

Route::domain('{store_name}.saas-platform.com')->group(function () {
	Route::post('login.json', 'Auth\\LoginController@directLogin');

	Route::get('admin/login_page', 'Admin\\ReactController@login');

	Route::get('admin/login', 'Admin\\ReactController@login');

	Route::get('logout', 'Auth\\LoginController@logout');

	Route::group(
		['prefix' => 'admin', 'namespace' => 'Admin', 'middleware' => ['AdminCheckLogin']], function () {

			Route::get('customers.json', 'CustomerController@getAllCustomers');
			Route::group(['prefix' => 'customers'], function () {
				Route::post('create.json', 'CustomerController@createCustomer');
				Route::get('{customer_id}.json', 'CustomerController@getCustomer');
				Route::put('{customer_id}.json', 'CustomerController@updateCustomer');
				Route::delete('{customer_id}.json', 'CustomerController@deleteCustomer');
			});

			Route::get('{path?}/{id?}', 'ReactController@view');
		});
	Route::get('{path?}/{id?}', 'ReactController@view');
});

Route::get('{store_name?}/{path?}/{id?}', 'ReactController@view');
