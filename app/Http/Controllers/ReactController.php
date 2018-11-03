<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReactController extends Controller {
	protected $auth_routes = [
		'register',
	];
	public function view(Request $request, $store_name = null, $path = null, $id = null) {
		// return $path;

		if ($store_name !== null && $path == "login") {
			return redirect(
				env('APP_PROTOCOL') . $store_name . "." . env('APP_DOMAIN') . "/admin/login");
		}

		if (in_array($path, $this->auth_routes) || $store_name == "register") {
			if ($store_name !== null && $store_name !== "register") {
				return redirect(
					env('APP_PROTOCOL') . env('APP_DOMAIN') . "/register");
			} else {

				return view('pages.auth');
			}
		}
		return view('pages.site');
	}
}
