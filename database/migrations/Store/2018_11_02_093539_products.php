<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Products extends Migration
{
    public function up()
    { 
        Schema::create('products', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->string('title');
            $table->binary('body_html');
            $table->string('vendor')->nullable();
            $table->string('product_type')->nullable();
            $table->string('handle');
            $table->string('template_suffix')->nullable();
            $table->string('tags')->nullable();
            $table->string('published_scope')->nullable();
            $table->string('published_at')->nullable();
            $table->timestamps();
        });
    }
    
    public function down()
    {
       Schema::dropIfExists('products');
    }
}
