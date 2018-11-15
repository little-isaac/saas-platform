<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Tags extends Migration
{
   public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->bigInteger('tagable_id');
            $table->string('tagable_type');
            $table->string('value');
            $table->timestamps();
        });
    }

    public function down()
    {
       Schema::dropIfExists('tags');
    }
}
