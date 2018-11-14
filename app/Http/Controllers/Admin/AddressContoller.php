<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;
use App\Model\Store\Address;

class AddressContoller extends Controller {

    function addUpdate(Request $request, $store_name, $customer_id, $id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $conditions = [
            ['customer_id', '=', $customer_id],
            ['id', '=', $id]
        ];

        $address = Address::where($conditions)->first();

        if (!isset($address)) {
            $address = new Address();
        }

        $address_first_name = $request->has('first_name') ? $request->first_name : null;
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

        return [
            'address' => $address,
        ];
    }

    function getAll(Request $request, $store_name, $customer_id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $conditions = [
            ['id', '=', $id],
            ['customer_id', '=', $customer_id],
        ];

        $address = Address::where($conditions)->get();

        return $address;
    }

    function get(Request $request, $store_name, $store_name, $customer_id, $id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $conditions = [
            ['id', '=', $id],
            ['customer_id', '=', $customer_id],
        ];
        $address = Address::where($conditions)->get()->first();
        if ($address) {
            return [
                'customer_address' => $address,
            ];
        }
        return [
            'errors' => 'Not Found'
        ];
    }

    function delete(Request $request, $store_name, $store_name, $customer_id, $id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $conditions = [
            ['id', '=', $id],
            ['customer_id', '=', $customer_id],
        ];
        $address = Address::where($conditions)->get()->first();

        if ($address->delete()) {
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
