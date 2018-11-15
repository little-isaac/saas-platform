<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class OptionValues extends Migration
{
    public function up()
    {
        Schema::create('option_values', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->bigInteger('option_id');
            $table->string('value');
            $table->timestamps();
        });
    }

    public function down()
    {
       Schema::dropIfExists('option_values');
    }
}
