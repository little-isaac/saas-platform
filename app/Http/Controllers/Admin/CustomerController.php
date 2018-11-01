<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Customer;

class CustomerController extends Controller {

    function createCustomer(Request $request) {

        $conditions = [
            ['id', '=', $request->id],
        ];
        $customer = Customer::where($conditions)->get()->first();
        if ($customer) {
            
        } else {
            $customer = new Customer();
            $customer->first_name = $request->first_name;
            $customer->last_name = $request->last_name;
            $customer->email = $request->email;
            $customer->password = $request->password;

            $customer->accepts_marketing = false;
            $customer->orders_count = 0;
            $customer->state = "enabled";
            $customer->total_spent = "0.00";
            $customer->last_order_id = null;
            $customer->note = null;
            $customer->verified_email = false;
            $customer->multipass_identifier = null;
            $customer->tax_exempt = false;
            $customer->phone = null;
            $customer->tags = "";
            $customer->last_order_name = null;
        }
    }

    function getAllCustomers(Request $request) {

        $customers = Customer::all();

        if ($customers) {
            return [
                'status' => true,
                'customers' => $customers,
            ];
        }
        return [
            'status' => false,
            'error' => "The page you're looking for couldn't be found"
        ];
    }

    function getCustomer(Request $request, $id) {

        $customer = Customer::find($id);
        if ($customer) {
            return [
                'status' => true,
                'customer' => $customer,
            ];
        }
        return [
            'status' => false,
            'error' => "The page you're looking for couldn't be found"
        ];
    }

}
