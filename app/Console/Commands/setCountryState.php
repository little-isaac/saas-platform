<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class setCountryState extends Command {

    protected $signature = 'set:country_state';
    protected $description = 'Command description';

    public function __construct() {
        parent::__construct();
    }

    public function handle() {
        $country_state = config('country_state');
    }

}
