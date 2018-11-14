<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Countries extends Migration
{
    public function up()
    {
        Schema::create('countries', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->string('name');
            $table->string('country_code')->nullable();
            $table->string('phone_prefix')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
       Schema::dropIfExists('countries');
    }
}
