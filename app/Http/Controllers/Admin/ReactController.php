<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ReactController extends Controller {
	protected $auth_routes = [
		'login',
		'login_page',
	];
	public function view(Request $request, $store_name, $path = null, $id = null) {

		if (in_array($path, $this->auth_routes)) {
			return view('pages.auth');
		}
		if ($path == "register") {
			return redirect(env('APP_PROTOCOL') . env('APP_DOMAIN') . '/register');
		}
		return view('pages.admin');
	}

	public function login(Request $request, $store_name) {

		return view('pages.auth');

	}

}
