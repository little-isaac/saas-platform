<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Country;
use App\Model\State;

class AddressController extends Controller
{
    function getCountry(Request $request) {

        $country = Country::all();

        return $country;
    }

    function getState(Request $request, $current_country) {

        $state = State::find($id)->get();
        
        if ($customer) {
            return [
                'customer' => $customer,
            ];
        }
        return [
            'errors' => 'Not Found'
        ];
    }
}
