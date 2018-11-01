<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ReactController extends Controller
{
	protected $auth_routes = [
							'login',
							'register'
						];
    public function view(Request $request ,$path = null ,$id = null){
        // return $path;
    	if(in_array($path, $this->auth_routes)){
    		return view('pages.auth');
    	}
    	return view('pages.admin');
    }
}
