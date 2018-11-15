<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\Store\Address;
use App\Model\Store\Customer;
use Auth;
use Illuminate\Http\Request;

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
            'customer' => $customer,
        ];
    }

    function add_default_address($customer_id, $request) {

        $conditions = [
            ['customer_id', '=', $customer_id],
            ['default', '=', true],
        ];

        $address = Address::where($conditions)->first();

        if (!isset($address)) {
            $address = new Address();
        }

        $default_address = $request->has('default_address') ? $request->default_address : null;
        if ($default_address) {
            $default_address_first_name = (isset($default_address['first_name'])) ? $default_address['first_name'] : null;
            $default_address_last_name = (isset($default_address['last_name'])) ? $default_address['last_name'] : null;
            $default_address_company = (isset($default_address['company'])) ? $default_address['company'] : null;
            $default_address1 = (isset($default_address['address1'])) ? $default_address['address1'] : null;
            $default_address2 = (isset($default_address['address2'])) ? $default_address['address2'] : null;
            $default_address_city = (isset($default_address['city'])) ? $default_address['city'] : null;
            $default_address_province = (isset($default_address['province'])) ? $default_address['province'] : null;
            $default_address_country = (isset($default_address['country'])) ? $default_address['country'] : null;
            $default_address_zip = (isset($default_address['zip'])) ? $default_address['zip'] : null;
            $default_address_phone = (isset($default_address['phone'])) ? $default_address['phone'] : null;
            $default_address_name = $default_address_first_name . ' ' . $default_address_last_name;
            $default_address_province_code = (isset($default_address['province_code'])) ? $default_address['province_code'] : null;
            $default_address_country_code = (isset($default_address['country_code'])) ? $default_address['country_code'] : null;
            $default_address_country_name = (isset($default_address['country_name'])) ? $default_address['country_name'] : null;
            $is_default_address = true;
        }



        $address->customer_id = $customer_id;
        $address->first_name = $default_address_first_name;
        $address->last_name = $default_address_last_name;
        $address->company = $default_address_company;
        $address->address1 = $default_address1;
        $address->address2 = $default_address2;
        $address->city = $default_address_city;
        $address->province = $default_address_province;
        $address->country = $default_address_country;
        $address->zip = $default_address_zip;
        $address->phone = $default_address_phone;
        $address->name = $default_address_name;
        $address->province_code = $default_address_province_code;
        $address->country_code = $default_address_country_code;
        $address->country_name = $default_address_country_name;
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

        $customer = Customer::with(['addresses', 'default_address'])->where('id', $id)->first();

        if ($customer) {
            return [
                'customer' => $customer,
            ];
        }
        return [
            'errors' => 'Not Found',
        ];
    }

    function delete(Request $request, $store_name, $customer_id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);
        $customer = Customer::find($customer_id);
        if ($customer->delete()) {
            return [
                'status' => true,
            ];
        } else {
            return [
                'status' => false,
            ];
        }
    }

}
