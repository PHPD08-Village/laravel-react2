<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class NotificationController extends Controller
{
    public function getUserNotifications($userId)   // 這裡的 userId 是代表請求通知用戶的 ID
    {
        try {
            // 確認用戶是否存在 
            $targetUser = DB::table('userinfo')
                ->where('uid', $userId)
                ->first();

            if (!$targetUser) {
                return response()->json(['message' => '用戶不存在'], 404);
            }

            // 獲取通知中所有關聯的資訊 
            $notificationDetail = DB::table('notifications')
                ->join('publish', 'notifications.pid', '=', 'publish.pid')
                ->join('userinfo', 'notifications.uid', '=', 'userinfo.uid')
                ->select(
                    'notifications.*',
                    'publish.title',
                    'userinfo.nickname',
                    'userinfo.email'
                )
                ->where('notifications.target_uid', $userId)
                ->orderBy('notifications.created_at', 'desc')
                ->get();

            // Log::info('成功獲取通知資料' . $notificationDetail);
            return response()->json($notificationDetail);
        } catch (\Exception $e) {
            Log::error('通知資料獲取失敗: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取通知資料，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
