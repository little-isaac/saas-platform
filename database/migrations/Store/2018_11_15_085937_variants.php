<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class Variants extends Migration {

    public function up() {
        Schema::create('variants', function (Blueprint $table) {
            $table->bigincrements('id');
            $table->bigInteger('product_id');
            $table->string('title')->nullable();
            $table->float('price')->nullable();
            $table->float('sku')->nullable();
            $table->integer('position')->nullable();
            $table->string('inventory_policy')->nullable();
            $table->float('compare_at_price')->nullable();
            $table->string('fulfillment_service')->nullable();
            $table->string('inventory_management')->nullable();
            $table->string('option1')->nullable();
            $table->string('option2')->nullable();
            $table->string('option3')->nullable();
            $table->boolean('taxable')->default(false);
            $table->string('barcode')->nullable();
            $table->float('grams')->nullable();
            $table->bigInteger('image_id')->nullable();
            $table->float('weight')->nullable();
            $table->string('weight_unit')->nullable();
            $table->bigInteger('inventory_item_id')->nullable();
            $table->integer('inventory_quantity')->nullable();
            $table->integer('old_inventory_quantity')->nullable();
            $table->boolean('requires_shipping')->default(false);
            $table->timestamps();
        });
    }

    public function down() {
        Schema::dropIfExists('variants');
    }

}
