<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Model\Main\User;
use Artisan;
use Auth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class RegisterController extends Controller {
	public function findOrCreateUser(Request $request) {
		$is_new_user = false;

		$conditions = [
			'name' => $request->store_name,
			'email' => $request->email,
		];

		$user = User::where($conditions)->get()->first();

		if ($user) {
			$authUser = $user;

			return [
				'status' => false,
				'user' => $authUser,
				'error' => 1,
			];

		} else {
			$authUser = new User;
			$authUser->email = $request->email;
			$authUser->name = $request->store_name;
			$authUser->shop_name = $request->store_name . ".saas-platform.com";
			$authUser->password = Hash::make($request->password);
			$authUser->save();
			$is_new_user = true;
		}

		Auth::login($authUser, true);

		Artisan::call('create:user', [
			'user_id' => $authUser->id,
		]);

		return [
			'status' => true,
			'user' => $authUser,
		];
	}
}
