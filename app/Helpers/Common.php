<?php

if (!function_exists('SetDatabase')) {

    function SetDatabase($user_id) {
        DB::disconnect(env('STORES_DB_CONNECTION'));
        Config::set('database.connections.' . env('STORES_DB_CONNECTION') . '.database', env('STORES_DB_PREFIX') . $user_id);
    }

}

if (!function_exists('DisconnectDatabase')) {

    function DisconnectDatabase() {
        DB::disconnect(env('STORES_DB_CONNECTION'));
    }

}

if (!function_exists('CreateDatabase')) {

    function CreateDatabase($user_id) {
        $database_name = env('STORES_DB_PREFIX') . $user_id;
        $query = "SELECT SCHEMA_NAME FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME =  ?";
        $db = DB::select($query, [$database_name]);

        if (empty($db)) {
            DB::statement('CREATE DATABASE ' . $database_name);
        } else {
            
        }
        SetDatabase($user_id);
        $tables = \DB::connection(env('STORES_DB_CONNECTION'))->select("SHOW TABLES LIKE 'migrations%'");

        if (count($tables) <= 0) {
            $exitCode_migrate = Artisan::call('migrate:install', [
                        '--env' => App::environment(),
                        '--database' => env('STORES_DB_CONNECTION'),
            ]);
        };

        $exitCode_migrate = Artisan::call('migrate', [
                    '--env' => App::environment(),
                    '--database' => env('STORES_DB_CONNECTION'),
                    '--path' => 'database/migrations/Store'
        ]);

        $exitCode_seed = Artisan::call('db:seed', [
                    '--env' => App::environment(),
                    '--class' => 'CommonStoreSeeder',
                    '--database' => env('STORES_DB_CONNECTION')
        ]);

        return true;
    }

}
