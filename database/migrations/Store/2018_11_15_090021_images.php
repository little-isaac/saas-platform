<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Images extends Migration {

    public function up() {
        Schema::create('images', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->bigInteger('imageable_id');
            $table->string('imageable_type');
            $table->integer('position')->nullable();
            $table->string('alt')->nullable();
            $table->float('width')->nullable();
            $table->float('height')->nullable();
            $table->string('src');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('images');
    }

}
