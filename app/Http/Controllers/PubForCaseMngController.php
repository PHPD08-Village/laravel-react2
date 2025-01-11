<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use App\Models\Publish;
use App\Models\Userinfo;

class PubForCaseMngController extends Controller
{
    public function getCases($userId)
    {
        try {
            $cases = DB::table('publish')
                // 用 auth()->uid 取得當前登入的使用者 ID
                // ->where('publish.uid', auth()->uid)
                ->select('*')
                ->where('publish.uid', $userId)
                ->orderBy('publish.created_at', 'desc')
                ->get();

            // 將 blob 轉換為 Base64 URL，並返回給前端讓前端能順利拿到可用的 url
            // foreach ($cases as $project) {
            //     // if ($project->user && $project->user->profile_picture) {
            //     if ($project->profile_picture) {
            //         $project->profile_picture = 'data:image/jpeg;base64,' . base64_encode($project->profile_picture);
            //     }
            // }

            // Log::info('getLatestProjects: ' . $cases->toJson());
            return response()->json($cases);
        } catch (\Exception $e) {
            // log::error('getLatestProjects: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取最新案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }

    public function toggle(Request $request)
    {
        $request->validate([
            'pid' => 'required|integer',
            'is_open' => 'required|boolean'
        ]);

        try {
            // 獲取當前 is_open 的值
            // $currentStatus = DB::table('publish')
            //     ->where('pid', $request->pid)
            //     ->value('is_open');

            $currentStatus = $request->is_open;

            $newStatus = !$currentStatus;

            // 更新 is_open 的值
            DB::table('publish')
                ->where('pid', $request->pid)
                ->update(['is_open' => $newStatus]);

            // 確認資料庫更新是否成功 
            DB::connection()->enableQueryLog();

            $updatedCase = DB::table('publish')
                ->select('*')
                ->where('pid', $request->pid)
                ->orderBy('created_at','desc')
                ->first();

            $message = $updatedCase->is_open ? "目前案件狀態為開啟" : "目前案件狀態為關閉";

            // 記錄 SQL 查詢日誌 
            $queryLog = DB::getQueryLog();
            log::info('SQL 查詢日誌: ', $queryLog);

            return response()->json([
                'message' => $message,
                'updatedCase' => $updatedCase
            ]);
            // return response()->json(['message' => $message]);
        } catch (\Exception $e) {
            log::error('toggle: ' . $e->getMessage());
            return response()->json(['message' => '無法切換案件狀態，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
