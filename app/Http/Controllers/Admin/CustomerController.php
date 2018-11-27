<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Store\Address;
use App\Model\Store\Customer;
use App\Model\Country;
use App\Model\State;

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

        $customer = Customer::with(['addresses', 'default_address'])->where($conditions)->first();

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

        $this->add_default_address($customer, $request);

        return [
            'customer' => $customer,
        ];
    }

    function add_default_address($customer, $request) {

        $default_address_first_name = '';
        $default_address_last_name = '';
        $default_address_company = '';
        $default_address1 = '';
        $default_address2 = '';
        $default_address_city = '';
        $default_address_province_name = '';
        $default_address_country_name = '';
        $default_address_zip = '';
        $default_address_phone = '';
        $default_address_name = '';
        $default_address_province_code = '';
        $default_address_country_code = '';

        $address = $customer->default_address;

        if (!isset($address)) {
            $address = new Address();
        }

        $default_address = $request->has('default_address') ? $request->default_address : null;
        if ($default_address) {
            $default_address_first_name = (isset($default_address['first_name'])) ? $default_address['first_name'] : '';
            $default_address_last_name = (isset($default_address['last_name'])) ? $default_address['last_name'] : '';
            $default_address_name = $default_address_first_name . ' ' . $default_address_last_name;

            $default_address_company = (isset($default_address['company'])) ? $default_address['company'] : '';
            $default_address1 = (isset($default_address['address1'])) ? $default_address['address1'] : '';
            $default_address2 = (isset($default_address['address2'])) ? $default_address['address2'] : '';
            $default_address_city = (isset($default_address['city'])) ? $default_address['city'] : '';

            $country_id = (isset($default_address['country'])) ? $default_address['country'] : '';
            $province_id = (isset($default_address['province'])) ? $default_address['province'] : '';

            $province_data = State::getStateName($province_id);
            $default_address_province_name = (isset($province_data)) ? $province_data->name : '';
            $default_address_province_code = (isset($province_data)) ? $province_data->state_code : '';

            $country_data = Country::getCountryName($country_id);
            $default_address_country_name = (isset($country_data)) ? $country_data->name : '';
            $default_address_country_code = (isset($country_data)) ? $country_data->country_code : '';

            $default_address_zip = (isset($default_address['zip'])) ? $default_address['zip'] : '';
            $default_address_phone = (isset($default_address['phone'])) ? $default_address['phone'] : '';
        }

        $address->customer_id = $customer->id;
        $address->first_name = $default_address_first_name;
        $address->last_name = $default_address_last_name;
        $address->company = $default_address_company;
        $address->address1 = $default_address1;
        $address->address2 = $default_address2;
        $address->city = $default_address_city;
        $address->province = $default_address_province_name;
        $address->province_code = $default_address_province_code;
        $address->country = $default_address_country_name;
        $address->country_name = $default_address_country_name;
        $address->country_code = $default_address_country_code;
        $address->zip = $default_address_zip;
        $address->phone = $default_address_phone;
        $address->name = $default_address_name;
        $address->default = true;
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

        $customer = Customer::where('id', $customer_id)->first();

        if ($customer->addresses()->delete() && $customer->delete()) {
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
