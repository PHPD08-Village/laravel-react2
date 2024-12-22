<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Publish;

class PubForStarController extends Controller
{
    public function getCaseInfo($caseId)
    {
        try {
            $case = Publish::with('user')->where('uid', $caseId)->first();
            if (!$case) {
                return response()->json(['message' => '案件不存在'], 404);
            }
            return response()->json([
                'title' => $case->title,
                'user_name' => $case->user->name,
                'profile_picture' => $case->user->profile_picture,
                'publish_date' => $case->created_at->format('Y/m/d'),
            ]);
        } catch (\Exception $e) {
            return response()->json(['message' => '無法獲取案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
