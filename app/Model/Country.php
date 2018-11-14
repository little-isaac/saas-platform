<?php

namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    public function states() {
        return $this->hasMany("App\Model\State");
    }
}
