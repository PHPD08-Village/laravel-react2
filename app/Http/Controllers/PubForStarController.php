<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Publish;

class PubForStarController extends Controller
{
    public function getCaseInfo($caseId)
    {

        // 目前的設計是登入用戶可以評價發案者，所以這裡的用戶是發案者，而不是接案者

        try {
            // 這裡的 'user' 是 Publish Model 的 user() 方法
            // $cases = Publish::with('user')->where('uid', $caseId)->first();
            // $cases = Publish::where('pid', $caseId)->first();    //使用pid作為主鍵

            $cases = DB::table('publish')
                ->leftJoin('userinfo', 'publish.uid', '=', 'userinfo.uid')
                ->select('publish.*', 'userinfo.username', 'userinfo.headshot')
                ->where('pid', $caseId)
                ->first();


            if (!$cases) {
                return response()->json(['message' => '案件不存在'], 404);
            }

            if ($cases->headshot) {
                $cases->headshot = 'data:image/jpeg;base64,' . base64_encode($cases->headshot);
            }

            $targetUser = DB::table('userinfo')
                ->leftJoin('publish', 'userinfo.uid', '=', 'publish.taker_uid')
                ->select('userinfo.nickname','userinfo.headshot')
                ->where('publish.pid', $caseId)
                ->first();

                if ($targetUser->headshot) {
                    $targetUser->headshot = 'data:image/jpeg;base64,' . base64_encode($targetUser->headshot);
                }

            // return response()->json($cases);
            return response()->json([
                'targetUsername'=>$targetUser->nickname,
                'headshot' => $targetUser->headshot,
                'title' => $cases->title,
                'publisher_uid' => $cases->taker_uid,
                'username' => $cases->username,
                // \Carbon\Carbon 把 created_at 字段解析成一個 Carbon 物件，然後用 format('Y/m/d') 來格式化它，使日期以「年/月/日」的格式輸出。
                'publish_date' => \Carbon\Carbon::parse($cases->created_at)->format('Y/m/d'),
            ]);
            // Log::info('getCaseInfo: ' . $cases->toJson());
        } catch (\Exception $e) {
            Log::error('getCaseInfo: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
