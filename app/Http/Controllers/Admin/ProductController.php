<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Auth;
use App\Model\Store\Product;

class ProductController extends Controller {

    function addUpdate(Request $request, $store_name, $id = null) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);

        $conditions = [
            ['id', '=', $id]
        ];

        $title = $request->has('title') ? $request->title : null;
        $body_html = $request->has('body_html') ? $request->body_html : null;
        $vendor = $request->has('vendor') ? $request->vendor : $store_name;
        $product_type = $request->has('product_type') ? $request->product_type : null;

        $handle = strtolower(str_replace(" ", "-", $title));
        $product = Product::where($conditions)->get()->first();

        if (!isset($product)) {
            $product = new Product();
        }

        $product->title = $title;
        $product->body_html = $body_html;
        $product->vendor = $vendor;
        $product->product_type = $product_type;
        $product->handle = $handle;
        $product->save();

        return [
            'product' => $product
        ];
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
            'errors' => 'Not Found'
        ];
    }

    function delete(Request $request, $store_name, $product_id) {

        $user_id = Auth::guard('admin')->user()->id;
        SetDatabase($user_id);
        $product = Product::find($product_id);
        if ($product->delete()) {
            return [
                'status' => true
            ];
        } else {
            return [
                'status' => false
            ];
        }
    }

}
