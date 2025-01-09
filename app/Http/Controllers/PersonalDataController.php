<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserInfo;
use Illuminate\Support\Facades\Log;

class PersonalDataController extends Controller
{
    // 儲存個人資料
   public function store(Request $request)
    {
        // 確保請求接受 JSON 回應
        $request->headers->set('Accept', 'application/json');

        // 驗證表單輸入
        $request->validate([
            'username' => 'required|string|max:255',
            'nickname' => 'nullable|string|max:255',
            // 'status' => 'required|string',
            // 'role' => 'required|string',
            // 'region' => 'required|string',
            // 'phone' => 'required|string|max:20',
            'email' => 'nullable|string|max:255',
            // 'line_id' => 'nullable|string|max:255',
            // 'desired_region' => 'required|string',
            // 'desired_type' => 'required|string',
        ]);

        // 儲存資料
        try {
            UserInfo::create([
                'username' => $request->username,
                'nickname' => $request->nickname,
                // 'status' => $request->status,
                // 'role' => $request->role,
                // 'region' => $request->region,
                // 'phone' => $request->phone,
                'email' => $request->email,
                // 'line_id' => $request->line_id,
                // 'desired_region' => $request->desired_region,
                // 'desired_type' => $request->desired_type,
            ]);
             // 記錄成功訊息
            Log::info('資料儲存成功', ['data' => $request->all()]);

            return response()->json(['message' => '資料儲存成功']);
        }
        catch (\Exception $e) {
             // 記錄錯誤訊息到日誌檔案
             Log::error('資料儲存失敗', [
                'error' => $e->getMessage(),
                'trace' => $e->getTraceAsString(),
                'input' => $request->all()
            ]);

            return response()->json(['error' => '儲存資料失敗', 'message' => $e->getMessage()], 500);
        }
    }
    // 取得個人資料
    public function show($uid)
    {
        try {
            $userinfo = UserInfo::find($uid);
            if (!$userinfo) {
                return response()->json([
                    'success' => false,
                    'message' => 'User not found'
                ], 404);
            }
            // 將圖片設為 base64 格式
            if ($userinfo->headshot) {
                $userinfo->headshot = 'data:image/jpeg;base64,' . base64_encode($userinfo->headshot);
            }

            return response()->json([
                'success' => true,
                'data' => $userinfo
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching user: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error fetching user'
            ], 500);
        }
    }
}
