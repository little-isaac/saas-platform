<?php

namespace App\Http\Middleware\Admin;

use Auth;
use Closure;

class CheckLogin {
	/**
	 * Handle an incoming request.
	 *
	 * @param  \Illuminate\Http\Request  $request
	 * @param  \Closure  $next
	 * @return mixed
	 */
	public function handle($request, Closure $next) {
		if (Auth::guard('admin')->check()) {
			return $next($request);
		}
		return redirect('/admin/login');

	}
}
