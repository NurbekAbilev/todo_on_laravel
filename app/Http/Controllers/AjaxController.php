<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Todo;
use Illuminate\Support\Facades\Log;


class AjaxController extends Controller
{
    function add(Request $request){

        $action = $request->input("action");

        $todo = new Todo;
        $todo->action = $action;
        $todo->done = false;
        $todo->save();

        return response()->json($todo, 200);

    }

    function all(Request $request){
        $todo = Todo::orderBy("id","desc")->get()->toArray();
        return response()->json($todo,200);
    }

    function del(Request $request){
        $arr = $request->input("ids");

        Todo::destroy($arr);

//        return response()->json($arr,200);
    }
}
