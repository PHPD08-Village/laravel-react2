<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class AssignTakerController extends Controller
{
    // 進行接案者的委託
    public function assignTaker(Request $request, $projectId)
    {
        try {
            $takerUid = $request->input('taker_uid');

            // 確認案件是否存在 
            $project = DB::table('publish')
                ->where('pid', $projectId)
                ->first();

            if (!$project) {
                return response()->json(['message' => '案件不存在'], 404);
            }

            // 獲取用戶名稱 
            $taker = DB::table('userinfo')
                ->where('uid', $takerUid)
                ->first();
            if (!$taker) {
                return response()->json(['message' => '用戶不存在'], 404);
            }

            // 更新 `taker_uid` 欄位
            DB::table('publish')
                ->where('pid', $projectId)
                ->update(['taker_uid' => $takerUid]);

            $message = $request->input('message', "恭喜您成功接案「{$project->title}」！請與我聯繫洽談詳細資訊：{$project->email}");

            // 新增通知
            DB::table('notifications')
                ->insert([
                    'uid' => $project->uid,
                    'target_uid' => $takerUid,
                    'pid' => $projectId,
                    'message' => $message,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);

            Log::info('confirmTaker: 合作者已添加到此案件' . $projectId);
            return response()->json(['message' => '已成功委託' . ($taker->username), 'username' => $taker->username]);
        } catch (\Exception $e) {
            Log::error('assignCollaborator: ' . $e->getMessage());
            return response()->json(['message' => '無法分配 collaborator，請稍後再試', 'error' => $e->getMessage()]);
        }
    }

    public function sendThanksNote(Request $request, $projectId)
    {
        try {
            $applicantUid = $request->input('applicant_uid');

            // 確認應徵者是否存在 
            $applicant = DB::table('userinfo')
                ->where('uid', $applicantUid)
                ->first();

            if (!$applicant) {
                return response()->json(['message' => '應徵者不存在'], 404);
            }

            // 確認案件是否存在 
            $project = DB::table('publish')
                ->where('pid', $projectId)
                ->first();
            if (!$project) {
                return response()->json(['message' => '案件不存在'], 404);
            }

            // 如果前端請求沒有提供 message 的值，會直接以下面這個內容(預設值) 送出
            $message = $request->input('message', "感謝您應徵「{$project->title}」！經考慮後認為您的專長或設計風格非我司所需，謝謝您的應徵！");

            // 發送感謝函(新增到通知資料表)
            DB::table('notifications')
                ->insert([
                    'uid' => $project->uid,
                    'target_uid' => $applicantUid,
                    'pid' => $projectId,
                    'message' => $message,
                    'created_at' => now(),
                    'updated_at' => now()
                ]);

            // 刪除該應徵者在 applicants 資料表中的資料 
            DB::table('applicants')
                ->where('uid', $applicantUid)
                ->where('pid', $projectId)
                ->delete();


            Log::info('sendThankYouNote: 成功發送感謝函給 ' . $applicant->username);
            return response()->json(['message' => '成功發送感謝函給 ' . $applicant->username, 'username' => $applicant->username]);
        } catch (\Exception $e) {
            Log::error('sendThankYouNote: ' . $e->getMessage());
            return response()->json(['message' => '無法發送感謝函，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
