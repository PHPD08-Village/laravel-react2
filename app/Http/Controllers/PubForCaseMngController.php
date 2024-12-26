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
                ->where('publish.uid', $userId)
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

    public function toggle($cid)
    {
        try {
            $case = Publish::find($cid);
            $case->is_open = !$case->is_open;
            $case->save();

            return response()->json($case);
        } catch (\Exception $e) {
            log::error('toggle: ' . $e->getMessage());
            return response()->json(['message' => '無法切換案件狀態，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
