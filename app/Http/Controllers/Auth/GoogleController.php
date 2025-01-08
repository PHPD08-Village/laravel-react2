<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;

class GoogleController extends Controller
{
    // 顯示登入畫面
    public function showLoginForm()
    {
        return view('auth.login');
    }

    // 重定向使用者到 Google 驗證頁面
    public function redirectToGoogle()
    {
        return Socialite::driver('google')->redirect();
    }

    // Google 驗證後的回調處理
    public function handleGoogleCallback()
    {
        $googleUser = Socialite::driver('google')->user();

        // 使用 updateOrCreate 來根據 email 查找或創建用戶
        $user = User::updateOrCreate(
            ['email' => $googleUser->getEmail()], // 使用 email 作為查詢條件
            [
                'google_id' => $googleUser->getId(),
                'name' => $googleUser->getName(),
                'avatar' => $googleUser->getAvatar(),
                'password' => '', 
                'email_verified_at' => now()
            ]
        );

        // 登入使用者
        Auth::login($user, true);

        // 轉向登入後的頁面
        return redirect()->intended('/dashboard');
    }
}
