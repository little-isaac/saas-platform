<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class VariantImages extends Migration {

    public function up() {
        Schema::create('variant_images', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->bigInteger('image_id');
            $table->bigInteger('variant_id');
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('variant_images');
    }

}
