<?php
namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

class LineController extends Controller
{
    /**
     * Redirect the user to the LINE authentication page.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function redirectToProvider()
    {
        // 跳轉到 LINE 授權頁面
        return Socialite::driver('line')->redirect();
    }

    /**
     * Handle the LINE authentication callback.
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function handleProviderCallback()
    {
        // 取得 LINE 登入回傳的用戶資料
        $user = Socialite::driver('line')->user();

        // 檢查 LINE 用戶是否提供 email，如果沒有提供，則設置為唯一的預設 email
        $email = $user->getEmail() ?: 'default_' . $user->getId() . '@line.com'; // 使用 LINE 用戶 ID 生成唯一的 email

        // 根據 LINE 返回的用戶資料建立或更新用戶
        $existingUser = User::where('line_id', $user->getId())->first();

        if ($existingUser) {
            // 如果用戶已存在，登入並重定向
            Auth::login($existingUser, true);
        } else {
            $newUser = User::updateOrCreate([
                'name' => $user->getName(),
                'email' => $email, // 使用唯一的 email
                'line_id' => $user->getId(),
                'avatar' => $user->getAvatar(),
                'password' => '',
                'email_verified_at' => now()
            ]);

            // 登入新用戶
            Auth::login($newUser, true);
        }

        // 登入後重定向到首頁或其他頁面
        return redirect()->to('/dashboard'); // 根據需求重定向
    }
}
