<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserInfo;
use Illuminate\Support\Facades\Log;

class PersonalDataController extends Controller
{
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
}
