<?php

namespace App\Model\Store;

use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    protected $connection = "stores";
    
    protected $hidden = ["remember_token","password"];
    
    public function default_address()
    {
        return $this->hasOne('App\Model\Store\Address')->where('default',true);
    }
    
    public function addresses() {
        return $this->hasMany("App\Model\Store\Address");
    }
}
