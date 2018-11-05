<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Customers extends Migration
{
   public function up()
    {
        Schema::create('customers', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->string('first_name')->nullable();
            $table->string('last_name')->nullable();
            $table->string('email')->nullable();
            $table->string('password')->nullable();
            $table->boolean('accepts_marketing')->default(false)->nullable();
            $table->integer('orders_count')->default(0)->nullable();
            $table->string('state')->default("enabled")->nullable();
            $table->float('total_spent')->default(0.00)->nullable();
            $table->biginteger('last_order_id')->nullable();
            $table->string('note')->nullable();
            $table->boolean('verified_email')->default(false)->nullable();
            $table->string('multipass_identifier')->nullable();
            $table->boolean('tax_exempt')->default(false)->nullable();
            $table->string('phone')->nullable();
            $table->string('tags')->nullable();
            $table->string('last_order_name')->nullable();
            $table->rememberToken();
            $table->timestamps();
        });
    }

    public function down()
    {
       Schema::dropIfExists('customers');
    }
}
