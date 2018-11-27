<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class State extends Model {

    static function GetStateName($id) {

        $state = State::find($id);
        if ($state) {
            return $state;
        }
        return null;
    }

}
