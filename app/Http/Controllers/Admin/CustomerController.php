<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Store\Customer;
use App\Model\Store\Address;

class CustomerController extends Controller {

    function addUpdate(Request $request, $store_name, $id = null) {

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

        if (!isset($customer)) {
            $customer = new Customer();
        }

        $customer->first_name = $first_name;
        $customer->last_name = $last_name;
        $customer->email = $email;
        $customer->phone = $phone;
        $customer->accepts_marketing = $accepts_marketing;
        $customer->tax_exempt = $tax_exempt;
        $customer->password = $request->has('password') ? $request->password : '';
        $customer->orders_count = 0;
        $customer->state = "enabled";
        $customer->total_spent = "0.00";
        $customer->last_order_id = null;
        $customer->note = null;
        $customer->verified_email = false;
        $customer->multipass_identifier = null;
        $customer->tags = "";
        $customer->last_order_name = null;
        $customer->save();

        
//        $address = new Address();
//        $address->customer_id = $customer->id;
//        $address->first_name = $first_name;
//        $address->last_name = $last_name;
//        $address->company = $company;
//        $address->address1 = $address1;
//        $address->address2 = $address2;
//        $address->city = $city;
//        $address->province = $province;
//        $address->country = $country;
//        $address->zip = $zip;
//        $address->phone = $phone;
//        $address->name = $name;
//        $address->province_code = $province_code;
//        $address->country_code = $country_code;
//        $address->country_name = $country_name;
//        $address->default = $default;


        return [
            'customer' => $customer
        ];
    }

    function getAll(Request $request) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $customers = Customer::paginate(50);

        return $customers;
    }

    function get(Request $request, $store_name, $id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $customer = Customer::find($id);
        if ($customer) {
            return [
                'customer' => $customer,
            ];
        }
        return [
            'errors' => 'Not Found'
        ];
    }

    function delete(Request $request, $store_name, $customer_id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);
        $customer = Customer::find($customer_id);
        if ($customer->delete()) {
            return [
                'status' => true
            ];
        } else {
            return [
                'status' => false
            ];
        }
    }

}
