<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

namespace App\Classes;

use Config;
use DB;
use Artisan;
use App;

class Common {

    static function get_user_name($user_id) {
        return "app_user_" . $user_id;
    }

    static function get_connection_name() {
        return "AWSRDS_stores";
    }

    static function get_username_name() {
        return 'flits_live';
    }

    static function get_db_name($user_id) {
        return "shopify_app_" . $user_id;
    }

    static function SetDatabase($user_id) {
        DB::disconnect(self::get_connection_name());
        Config::set('database.connections.' . self::get_connection_name() . '.database', self::get_db_name($user_id));
        Config::set('database.connections.' . self::get_connection_name() . '.username', self::get_username_name());
    }

    static function disconnectDatabase() {
        DB::disconnect(self::get_connection_name());
    }

    static function CreateDatabase($user_id) {
        self::create_db($user_id);
        self::create_user($user_id);
    }

    static function create_db($user_id) {
        $database_name = self::get_db_name($user_id);
        $query = "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME =  ?";
        $db = DB::select($query, [$database_name]);

        if (empty($db)) {
            DB::statement('CREATE DATABASE ' . $database_name);
//            $command->info($database_name . " Database Created Successfully!!!!");
        } else {
//            $command->info($database_name . 'db already exists!');
        }
        DB::disconnect(self::get_connection_name());
        Config::set('database.connections.' . self::get_connection_name() . '.database', $database_name);
        Config::set('database.connections.' . self::get_connection_name() . '.username', self::get_username_name());
//        $command->info($database_name);
        $tables = \DB::connection(self::get_connection_name())->select("SHOW TABLES LIKE 'migrations%'");

//        echo Schema::connection(self::get_connection_name())->hasTable('migrations');
        if (count($tables) <= 0) {
            $exitCode_migrate = Artisan::call('migrate:install', [
                        '--env' => App::environment(),
                        '--database' => self::get_connection_name(),
            ]);
        };

        $exitCode_migrate = Artisan::call('migrate', [
                    '--env' => App::environment(),
                    '--database' => self::get_connection_name(),
                    '--path' => 'database/migrations/app'
        ]);

        $exitCode_seed = Artisan::call('db:seed', [
                    '--env' => App::environment(),
                    '--class' => 'CommonStoreSeeder',
                    '--database' => self::get_connection_name()
        ]);
//        $command->info($exitCode_migrate);
//        $command->info($exitCode_seed);
//        Log::info('exitCode of migration : ' . $exitCode_migrate);
//        Log::info('exitCode of seed : ' . $exitCode_seed);
        return true;
    }

    static function create_user($user_id) {
        $user_name = self::get_user_name($user_id);
        $query = "Select * FROM mysql.user WHERE User = ?";
        $db_user = DB::select($query, [$user_name]);
        if (empty($db_user)) {
//            $this->info($user_name . " User Created Successfully!!!!");
        } else {
//            $this->info($user_name . " Exist");
        }
        return true;
    }

    static function delete_user($user_id) {
        $database_name = self::get_db_name($user_id);
        DB::statement('drop schema ' . $database_name);
    }

}
