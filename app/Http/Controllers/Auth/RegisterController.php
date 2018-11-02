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

		$name = $request->name;

		$conditions = [
			['name', '=', $name],
		];

		$user = User::where($conditions)->get()->first();

		if ($user) {
			$authUser = $user;

			return [
				'status' => false,
				'user' => $authUser,
				'message' => 'store allready exists',
			];

		} else {
			$authUser = new User;
			$authUser->email = $request->email;
			$authUser->name = $name;
			$authUser->shop_name = $name . ".saas.com";
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
