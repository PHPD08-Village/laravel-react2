<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // 從請求中獲取登錄憑證
        $credentials = $request->only('email', 'password');

        // 登錄邏輯
        if (Auth::attempt($credentials)) {
            $user = Auth::user();
            $user->login_status = 'online';
            $user->save();
            return response()->json(['message' => 'Login successful']);
        }

        // 登錄失敗邏輯
        return response()->json(['message' => 'Login failed'], 401);
    }

    // 使用者登出
    public function logout()
    {
        $user = Auth::user();
        $user->login_status = 'offline';
        $user->save();

        Auth::logout();
        return response()->json(['message' => 'Logout successful']);
    }
}
