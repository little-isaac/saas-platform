<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\Store\Customer;
use Auth;
use Illuminate\Http\Request;

class CustomerController extends Controller {

	function createCustomer(Request $request, $store_name, $id = 1) {

		$user_id = Auth::guard('admin')->user()->id;
		SetDatabase($user_id);

		$conditions = [
			['id', '=', $id],
		];
		$first_name = $request->has('first_name') ? $request->first_name : null;
		$last_name = $request->has('last_name') ? $request->last_name : null;
		$email = $request->has('email') ? $request->email : null;
		$phone = $request->has('phone') ? $request->phone : null;

		$accepts_marketing = ($request->has('accepts_marketing') && $request->accepts_marketing) ? true : false;
		$tax_exempt = ($request->has('tax_exempt') && $request->tax_exempt) ? true : false;

		$customer = Customer::where($conditions)->get()->first();

		if ($customer) {
			$customer->first_name = $first_name;
			$customer->last_name = $last_name;
			$customer->email = $email;

			$customer->accepts_marketing = $accepts_marketing;
			$customer->tax_exempt = $tax_exempt;
			$customer->save();

			return [
				'is_new' => false,
				'customer' => $customer,
			];
		} else {
			$customer = new Customer();

			$customer->first_name = $first_name;
			$customer->last_name = $last_name;
			$customer->email = $email;

			$customer->password = $request->has('password') ? $request->password : '';

			$customer->accepts_marketing = $accepts_marketing;
			$customer->orders_count = 0;
			$customer->state = "enabled";
			$customer->total_spent = "0.00";
			$customer->last_order_id = null;
			$customer->note = null;
			$customer->verified_email = false;
			$customer->multipass_identifier = null;
			$customer->tax_exempt = $tax_exempt;
			$customer->phone = $phone;
			$customer->tags = "";
			$customer->last_order_name = null;
			$customer->save();
			return [
				'is_new' => true,
				'customer' => $customer,
			];
		}
	}

	function getAllCustomers(Request $request) {

		$user_id = Auth::guard('admin')->user()->id;
		SetDatabase($user_id);

		$customers = Customer::paginate(50);

		return $customers;
	}

	function getCustomer(Request $request, $id) {

		$user_id = Auth::guard('admin')->user()->id;
		SetDatabase($user_id);

		$customer = Customer::find($id);
		if ($customer) {
			return [
				'status' => true,
				'customer' => $customer,
			];
		}
		return [
			'status' => false,
			'error' => "The page you're looking for couldn't be found",
		];
	}

	function deleteCustomer(Request $request, $store_name, $customer_id) {

		$user_id = Auth::guard('admin')->user()->id;
		SetDatabase($user_id);
		$customer = Customer::find($customer_id);
		if ($customer->delete()) {
			$customers = Customer::paginate(50);

			return $customers;
		}
	}

}
