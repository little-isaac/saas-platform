<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Auth;
use Illuminate\Http\Request;
use Redirect;

class LoginController extends Controller {

	function logout(Request $request, $store_name) {
		Auth::guard('admin')->logout();
		return redirect('/login');
	}

	function directLogin(Request $request, $store_name) {

		Auth::guard('admin')->logout();

		$conditions = [
			'name' => $store_name,
			'email' => $request->email,
			'password' => $request->password,
		];

		// $user = User::where($conditions)->get()->first();

		if (Auth::guard('admin')->attempt($conditions)) {
			return [
				"status" => true,
			];
			// return redirect('/admin/dashboard');
			// return Auth::guard('admin')->user();
			// $authUser = $user;
			// Auth::guard('admin')->login($authUser, true);
		} else {
			return redirect('/login');
		}
	}

}
