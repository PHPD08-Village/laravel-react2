<?php

namespace App\Http\Controllers;

use App\Models\UserInfo;
use Illuminate\Http\Request;

class UserInfoController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'username' => 'required|string|max:255',
            'email' => 'required|email',
            'phone' => 'required|digits:10',
        ]);

        return UserInfo::create($request->all());
    }


}
