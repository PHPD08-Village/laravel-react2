<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Star;
use App\Models\UserInfo;

class StarController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                'uid' => 'required|integer',
                'averating' => 'required|numeric|min:1|max:5',
                'count' => 'required|integer',
            ]);

            // 尋找是否有已有的評價記錄，查找特定用戶
            $rating = Star::where('uid', $request->uid)->first();

            // 判斷 $rating 是否為空，如果不是空，則更新評分；如果是空則新增評分
            if ($rating) {
                // 更新已有的評分
                $rating->count += 1;
                $rating->averating = (($rating->averating * ($rating->count - 1)) + $request->averating) / $rating->count;
                $rating->updated_at = now();
            } else {
                // 新增新的評分
                $rating = new Star();
                $rating->uid = $request->uid;
                $rating->averating = $request->averating;
                // $rating->averating = $averageRating;
                $rating->count = $request->count;
                $rating->created_at = now();
                $rating->updated_at = now();
            }

            $rating->save();

            return response()->json(['message' => '評價已成功提交']);
        } catch (\Exception $e) {
            return response()->json(['message' => '評價提交失敗，請稍後再試', 'error' => $e->getMessage()]);
        }
    }

    public function getUserInfo($uid)
    {
        try {
            // 尋找特定用戶
            $userInfo = UserInfo::where('uid', $uid)->first();
            // 如果找不到用戶，返回錯誤信息
            if (!$userInfo) {
                return response()->json(['message' => '用戶不存在']);
            }
            // 若找到用戶，返回json資料
            return response()->json($userInfo);
        } catch (\Exception $e) {
            return response()->json(['message' => '無法獲取用戶資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
