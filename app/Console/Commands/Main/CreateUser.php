<?php

namespace App\Console\Commands\Main;

use Illuminate\Console\Command;

class CreateUser extends Command {

    protected $signature = 'create:user {user_id}';
    protected $description = 'This command will install new user from user id';

    public function __construct() {
        parent::__construct();
    }

    public function handle() { 
        CreateDatabase($this->argument("user_id"));
    }

}
