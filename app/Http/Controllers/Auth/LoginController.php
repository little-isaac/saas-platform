<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
//use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use App\User;
use Auth;
use DB;
use Redirect;
use Artisan;

class LoginController extends Controller {

//    use AuthenticatesUsers;
//    protected $redirectTo = '/home';
//
//    public function __construct()
//    {
//        $this->middleware('guest')->except('logout');
//    }

    function directLogin(Request $request) {
        Auth::logout();
        if ($request->has('shop')) {
            return Redirect::route('login_shopify', [
                        'shop' => $request->input('shop')
            ]);
        } else {
            return redirect('/login');
        }
    }

    

}
