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
            ['id', '=', $id]
        ];

        $first_name = $request->has('first_name') ? $request->first_name : null;
        $last_name = $request->has('last_name') ? $request->last_name : null;
        $email = $request->has('email') ? $request->email : null;
        $phone = $request->has('phone') ? $request->phone : null;
        $accepts_marketing = ($request->has('accepts_marketing') && $request->accepts_marketing) ? true : false;
        $tax_exempt = ($request->has('tax_exempt') && $request->tax_exempt) ? true : false;

        $customer = Customer::where($conditions)->first();

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

        $customer_id = $customer->id;

        $this->add_default_address($customer_id, $request);

        return [
            'customer' => $customer
        ];
    }

    function add_default_address($customer_id, $request) {

        $conditions = [
            ['customer_id', '=', $customer_id],
            ['default', '=', true]
        ];

        $address = Address::where($conditions)->first();

        if (!isset($address)) {
            $address = new Address();
        }

        $address_first_name = $request->has('default_address.first_name') ? $request->first_name : null;
        $address_last_name = $request->has('last_name') ? $request->last_name : null;
        $company = $request->has('company') ? $request->company : null;
        $address_1 = $request->has('address_1') ? $request->address_1 : null;
        $address_2 = $request->has('address_2') ? $request->address_2 : null;
        $city = $request->has('city') ? $request->city : null;
        $province = $request->has('province') ? $request->province : null;
        $country = $request->has('country') ? $request->country : null;
        $zip = $request->has('zip') ? $request->zip : null;
        $address_phone = $request->has('address_phone') ? $request->address_phone : null;
        $name = $address_first_name . ' ' . $address_last_name;
        $province_code = $request->has('province_code') ? $request->province_code : null;
        $country_code = $request->has('country_code') ? $request->country_code : null;
        $country_name = $request->has('country_name') ? $request->country_name : null;
        $is_default_address = true;

        $address->customer_id = $customer_id;
        $address->first_name = $address_first_name;
        $address->last_name = $address_last_name;
        $address->company = $company;
        $address->address1 = $address_1;
        $address->address2 = $address_2;
        $address->city = $city;
        $address->province = $province;
        $address->country = $country;
        $address->zip = $zip;
        $address->phone = $address_phone;
        $address->name = $name;
        $address->province_code = $province_code;
        $address->country_code = $country_code;
        $address->country_name = $country_name;
        $address->default = $is_default_address;
        $address->save();
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

        $customer = Customer::with(['addresses','default_address'])->where('id', $id)->first();

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
