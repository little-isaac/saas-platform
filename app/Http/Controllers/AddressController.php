<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Model\Country;
use App\Model\State;

class AddressController extends Controller {

    function test(Request $request) {

        $country_state = config('country_state');

        foreach ($country_state as $country => $data) {
            $country_ = Country::where('name', $country)->first();
            if (!isset($country_)) {
                $country_ = new Country();
                $country_->name = $country;
                $country_->country_code = $data['country_code'];
                $country_->phone_prefix = $data['phone_prefix'];
                $country_->save();

                foreach ($data['states'] as $state) {
                    $conditions = [
                        ['country_id', '=', $country_->id],
                        ['name', '=', $state]
                    ];

                    $state_ = State::where($conditions)->first();
                    if (!isset($state_)) {
                        $state_ = new State();
                        $state_->country_id = $country_->id;
                        $state_->name = $state;
                        $state_->save();
                    }
                }
            }
        }
    }

    function getCountry(Request $request) {

        $country = Country::all();

        return [
            'countries' => $country
        ];
    }

    function getState(Request $request, $country_id) {

        $country = Country::find($country_id);

        if ($country) {
            return [
                'states' => $country->states
            ];
        }
        return [
            'errors' => 'Not Found'
        ];
    }

}
