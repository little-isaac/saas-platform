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
            ['id', '=', $id],
            ['customer_id', '=', $customer_id],
        ];

        $first_name = $request->has('first_name') ? $request->first_name : null;
        $last_name = $request->has('last_name') ? $request->last_name : null;
        $company = $request->has('company') ? $request->company : null;
        $address1 = $request->has('address1') ? $request->address1 : null;
        $address2 = $request->has('address2') ? $request->address2 : null;
        $city = $request->has('city') ? $request->city : null;
        $province = $request->has('province') ? $request->province : null;
        $country = $request->has('country') ? $request->country : null;
        $zip = $request->has('zip') ? $request->zip : null;
        $phone = $request->has('phone') ? $request->phone : null;
        $name = $request->has('name') ? $request->name : null;

        $province_code = $request->has('province_code') ? $request->province_code : null;
        $country_code = $request->has('country_code') ? $request->country_code : null;
        $country_name = $request->has('country_name') ? $request->country_name : null;
        $default = $request->has('default') ? $request->default : null;

        $address = Address::where($conditions)->get()->first();

        if (!$address) {
            $address = new Address();
        }


        $address->first_name = $first_name;
        $address->last_name = $last_name;
        $address->email = $company;
        $address->password = $address1;
        $address->accepts_marketing = $address2;
        $address->orders_count = 0;
        $address->state = "enabled";
        $address->total_spent = "0.00";
        $address->last_order_id = null;
        $address->note = null;
        $address->verified_email = false;
        $address->multipass_identifier = null;
        $address->tax_exempt = $tax_exempt;
        $address->phone = $phone;
        $address->tags = "";
        $address->last_order_name = null;
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
