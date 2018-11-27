<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Model\Store\Product;
use Auth;
use Illuminate\Http\Request;

class ProductController extends Controller {

    function addUpdate(Request $request, $store_name, $id = null) {

        return $request;
        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $conditions = [
            ['id', '=', $id],
        ];

        $title = $request->has('title') ? $request->title : null;
        $body_html = $request->has('body_html') ? $request->body_html : null;
        $vendor = $request->has('vendor') ? $request->vendor : $store_name;
        $product_type = $request->has('product_type') ? $request->product_type : null;

        $handle = strtolower(str_replace(" ", "-", $title));



        $product = Product::with(['variants', 'options', 'images', 'image'])->where($conditions)->first();

        if (!isset($product)) {
            $product = new Product();
        }

        $product->title = $title;
        $product->body_html = $body_html;
        $product->vendor = $vendor;
        $product->product_type = $product_type;
        $product->handle = $handle;
        $product->save();

       return $this->add_variants($product, $request);

        return [
            'product' => $product,
        ];
    }

    function add_variants($product, $request) {

        return $request;
        $variants = $product->variants;

        if (!isset($variants)) {

            foreach ($variants as $variant) {

                if (!isset($variant)) {
                    $variant = new Variant();
                }
            }

            $price = $request->has('price') ? $request->price : null;
            $compare_at_price = $request->has('compare_at_price') ? $request->compare_at_price : null;
            $cost_per_item = $request->has('cost_per_item') ? $request->cost_per_item : null;
            $is_taxable = $request->has('is_taxable') ? $request->is_taxable : null;
            $sku = $request->has('sku') ? $request->sku : null;
            $barcode = $request->has('barcode') ? $request->barcode : null;
            $inventory_policy = $request->has('inventory_policy') ? $request->inventory_policy : null;
            $quantity = $request->has('quantity') ? $request->quantity : null;
            $is_shipping_require = $request->has('is_shipping_require') ? $request->is_shipping_require : null;
            $weight = $request->has('weight') ? $request->weight : null;
            $fulfillment_service = $request->has('fulfillment_service') ? $request->fulfillment_service : null;
        }
    }

    function getAll(Request $request) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $products = Product::paginate(50);

        return $products;
    }

    function get(Request $request, $store_name, $id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $product = Product::find($id);
        if ($product) {
            return [
                'product' => $product,
            ];
        }
        return [
            'errors' => 'Not Found',
        ];
    }

    function delete(Request $request, $store_name, $product_id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);
        $product = Product::find($product_id);
        if ($product->delete()) {
            return [
                'status' => true,
            ];
        } else {
            return [
                'status' => false,
            ];
        }
    }

}
