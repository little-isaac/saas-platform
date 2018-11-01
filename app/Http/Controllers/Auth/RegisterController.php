<?php

namespace App\Http\Controllers\Auth;

use App\User;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    
    public function findOrCreateUser(Request $request) {
        $is_new_user = false;

        $shop_name = $request->myshopify_domain;

        $conditions = [
            ['shop_name', '=', $shop_name],
        ];

        $user = User::where($conditions)->get()->first();

        if ($user) {
            $authUser = $user;
        } else {
            $authUser = new User;
            $authUser->email = $request->email;
            $authUser->shop_name = $shop_name;
            $authUser->name = str_replace(".myshopify.com","",$shop_name);
            $authUser->password = Hash::make($request->password);
            $authUser->save();
            $is_new_user = true;
        }
        Auth::login($authUser, true);

        Artisan::call('create:user', [
            'user_id' => $authUser->id
        ]);

        return $authUser;
    }
//    protected function create(array $data)
//    {
//        return User::create([
//            'name' => $data['name'],
//            'email' => $data['email'],
//            'password' => Hash::make($data['password']),
//        ]);
//    }
}
