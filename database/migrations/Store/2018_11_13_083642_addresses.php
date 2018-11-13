<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Addresses extends Migration {
        
    public function up() {
        Schema::create('addresses', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->integer('customer_id');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('company')->nullable();
            $table->string('address1')->nullable();
            $table->string('address2')->nullable();
            $table->string('city')->nullable();
            $table->string('province')->nullable();
            $table->string('country')->nullable();
            $table->string('zip')->nullable();
            $table->string('phone')->nullable();
            $table->string('name')->nullable();
            $table->string('province_code')->nullable();
            $table->string('country_code')->nullable();
            $table->string('country_name')->nullable();
            $table->boolean('default')->default(false);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('addresses');
    }

}
