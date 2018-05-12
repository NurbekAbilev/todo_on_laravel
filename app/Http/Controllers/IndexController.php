<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;

class IndexController extends Controller
{
    //
    function main(Request $request){
        return view("main");
    }
}
