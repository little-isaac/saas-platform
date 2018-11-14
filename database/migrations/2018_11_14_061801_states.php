<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class States extends Migration
{
    public function up()
    {
        Schema::create('states', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->string('country_id');
            $table->string('name')->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
       Schema::dropIfExists('states');
    }
}
