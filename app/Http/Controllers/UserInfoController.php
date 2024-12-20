<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use Illuminate\Http\Request;

class UserInfoController extends Controller
{
    public function index()
    {
        return UserInfo::all();
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:userinfo',
        ]);

        return UserInfo::create($request->all());
    }

    // 其他方法如 show, update, delete 可按需添加
}
