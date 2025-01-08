<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ApplyController extends Controller
{
    // 進行應徵的 function
    public function applyCase(Request $request)
    {
        $request->validate([
            'uid' => 'required|integer',
            'pid' => 'required|integer',
        ]);

        try {
            // $applicantUid = $request->input('applicant_uid');

            // // 確認應徵者是否存在 
            // $applicant = DB::table('userinfo')
            //     ->where('uid', $applicantUid)
            //     ->first();

            // if (!$applicant) {
            //     return response()->json(['message' => '應徵者不存在'], 404);
            // }

            // // 確認案件是否存在 
            // $project = DB::table('publish')
            //     ->where('pid', $projectId)
            //     ->first();
            // if (!$project) {
            //     return response()->json(['message' => '案件不存在'], 404);
            // }



            // 新增該應徵者至 applicants 資料表中的資料 
            DB::table('applicants')
                ->insert([
                    'uid' => $request->uid,     // 應徵者的 uid
                    'pid' => $request->pid,    // 應徵的案件的 pid
                    'created_at' => now(),      // 設定應徵時間為當前時間
                    'updated_at' => now()       // 設定更新時間為當前時間
                ]);

            Log::info('成功將資料新增至 applicants 資料表 ');
            return response()->json(['message' => '成功新增應徵者']);
        } catch (\Exception $e) {
            Log::error('應徵請求發送錯誤: ' . $e->getMessage());
            return response()->json(['error' => '無法發送應徵請求，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
