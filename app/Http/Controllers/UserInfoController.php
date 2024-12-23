<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use Illuminate\Http\Request;

class UserInfoController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function store(Request $request)
    {
        $request->validate([
            'email' => 'required|email|unique:userinfo',
        ]);

        return UserInfo::create($request->all());
    }

    public function index()
    {
        return UserInfo::all();
    }
}
