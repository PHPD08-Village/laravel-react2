<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Publish;

class PubForStarController extends Controller
{
    public function getCaseInfo($caseId, $userId)
    {

        // 目前的設計是登入用戶可以評價發案者，所以這裡的用戶是發案者，而不是接案者

        try {
            // 這裡的 'user' 是 Publish Model 的 user() 方法
            // $cases = Publish::with('user')->where('uid', $caseId)->first();
            // $cases = Publish::where('pid', $caseId)->first();    //使用pid作為主鍵
            Log::info("{$userId}");
            // 先選到合作的那一個案件
            $case = DB::table('publish')
                ->where('pid', $caseId)
                ->first();

            Log::info('開始進行判斷');
            if (!$case) {
                return response()->json(['message' => '案件不存在'], 404);
            }

            Log::info('案件存在');


            // 判斷現在的使用者是接案者還是業主
            if ($userId == $case->uid) {   // 若現在是業主要評價接案者
                Log::info('判斷是業主');

                // $bossInfo = DB::table('publish')
                //     ->leftJoin('userinfo', 'publish.uid', '=', 'userinfo.uid')
                //     ->select('publish.*', 'userinfo.username', 'userinfo.headshot')
                //     ->where('pid', $caseId)
                //     ->first();

                // if ($bossInfo->headshot) {
                //     $bossInfo->headshot = 'data:image/jpeg;base64,' . base64_encode($bossInfo->headshot);
                // }

                $targetUser = DB::table('userinfo')
                    ->leftJoin('publish', 'userinfo.uid', '=', 'publish.taker_uid')
                    ->select('publish.*', 'userinfo.nickname', 'userinfo.headshot')
                    ->where('publish.pid', $caseId)
                    ->first();

                Log::info('修圖片');

                if ($targetUser->headshot) {
                    $targetUser->headshot = 'data:image/jpeg;base64,' . base64_encode($targetUser->headshot);
                }

                // return response()->json($bossInfo);
                Log::info('要 return 了');

                return response()->json([
                    'targetUsername' => $targetUser->nickname,
                    'headshot' => $targetUser->headshot,
                    'title' => $targetUser->title,  // 這是案件的 title，因為一定是同一個案件，所以不管是透過業主或接案者都可以得到這個title
                    'target_uid' => $targetUser->taker_uid,
                    // 'username' => $bossInfo->username,
                    // \Carbon\Carbon 把 created_at 字段解析成一個 Carbon 物件，然後用 format('Y/m/d') 來格式化它，使日期以「年/月/日」的格式輸出。
                    'publish_date' => \Carbon\Carbon::parse($targetUser->created_at)->format('Y/m/d'),
                ]);
                Log::info('成功獲取用戶及案件資料: ' . $targetUser->toJson());
            } elseif ($userId == $case->taker_uid) {   // 若現在是接案者要評價業主
                // $takerInfo = DB::table('publish')
                //     ->leftJoin('userinfo', 'publish.uid', '=', 'userinfo.uid')
                //     ->select('publish.*', 'userinfo.username', 'userinfo.headshot')
                //     ->where('pid', $caseId)
                //     ->first();
                Log::info('判斷是接案者');

                $targetUser = DB::table('userinfo')
                    ->leftJoin('publish', 'userinfo.uid', '=', 'publish.uid')
                    ->select('publish.*', 'userinfo.nickname', 'userinfo.headshot')
                    ->where('publish.pid', $caseId)
                    ->first();

                Log::info('修圖片');

                if ($targetUser->headshot) {
                    $targetUser->headshot = 'data:image/jpeg;base64,' . base64_encode($targetUser->headshot);
                }
                Log::info('要 return 了');

                // return response()->json($bossInfo);
                return response()->json([
                    'targetUsername' => $targetUser->nickname,
                    'headshot' => $targetUser->headshot,
                    'title' => $targetUser->title,  // 這是案件的 title，因為一定是同一個案件，所以不管是透過業主或接案者都可以得到這個title
                    'target_uid' => $targetUser->uid,
                    // 'username' => $bossInfo->username,
                    // \Carbon\Carbon 把 created_at 字段解析成一個 Carbon 物件，然後用 format('Y/m/d') 來格式化它，使日期以「年/月/日」的格式輸出。
                    'publish_date' => \Carbon\Carbon::parse($targetUser->created_at)->format('Y/m/d'),
                ]);
                Log::info('成功獲取用戶及案件資料: ' . $targetUser->toJson());
            }
        } catch (\Exception $e) {
            Log::error('getCaseInfo: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取用戶及案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
