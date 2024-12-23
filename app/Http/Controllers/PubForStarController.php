<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Publish;

class PubForStarController extends Controller
{
    public function getCaseInfo($caseId)
    {
        try {
            // 這裡的 'user' 是 Publish Model 的 user() 方法
            // $case = Publish::with('user')->where('uid', $caseId)->first();
            $case = Publish::where('cid', $caseId)->first();    //使用cid作為主鍵
            
            if (!$case) {
                return response()->json(['message' => '案件不存在'], 404);
            }
            
            return response()->json([
                'title' => $case->title,
                'publisher_uid' => $case->uid,
                // 這裡的 username 是 UserInfo Model 的 name 欄位
                'username' => $case->user->username,
                'profile_picture' => $case->user->profile_picture,
                'publish_date' => $case->created_at->format('Y/m/d'),
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => '無法獲取案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
