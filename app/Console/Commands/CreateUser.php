<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Classes\Common;

class CreateUser extends Command {

    protected $signature = 'create:user {user_id}';
    protected $description = 'This command will install new user from user id';

    public function __construct() {
        parent::__construct();
    }

    public function handle() { 
        $user_id = $this->argument("user_id");
        Common::CreateDatabase($user_id);
    }

}
