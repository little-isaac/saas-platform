<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Options extends Migration {

    public function up() {
        Schema::create('options', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->bigInteger('product_id');
            $table->string('name')->nullable();
            $table->integer('position')->nullable();
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('options');
    }

}
