<?php

namespace App\Http\Controllers\Simon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Publish;
use Illuminate\Support\Facades\Log;

class PublishController extends Controller
{
    public function publish(Request $request)
    {
        // 驗證請求數據
        $request->validate([
            'uid' => 'nullable|integer', // 確保 uid 允許為空
            'title' => 'required|string|max:255',
            'contact_name' => 'required|string|max:255',
            'completion_time' => 'required|date',
            'budget' => 'required|numeric',
            'location' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'details' => 'required|string',
            'require_code' => 'string|max:255', // 可選的欄位
        ]);

        try {
            // 創建新的 Publish 實例並保存數據
            $publish = new Publish();
            $publish->uid = $request->input('uid');     // 新增 uid 欄位的賦值
            $publish->title = $request->input('title');
            $publish->contact_name = $request->input('contact_name');
            $publish->completion_time = $request->input('completion_time');
            $publish->budget = $request->input('budget');
            $publish->location = $request->input('location');
            $publish->phone = $request->input('phone');
            $publish->email = $request->input('email');
            $publish->details = $request->input('details');
            $publish->require_code = $request->input('require_code');
            $publish->save();

            return response()->json(['message' => '資料已成功提交'], 200);
        } catch (\Exception $e) {
            // 捕捉異常並記錄錯誤
            Log::error('Error saving publish data: ' . $e->getMessage());
            return response()->json(['message' => '提交數據時發生錯誤'], 500);
        }
    }

    public function getAllPublishes()
    {
        try {
            $publishes = Publish::all();
            return response()->json($publishes);
        } catch (\Exception $e) {
            Log::error('Error fetching publishes: ' . $e->getMessage());
            return response()->json(['message' => '獲取數據時發生錯誤'], 500);
        }
    }

    // 更新特定案件
    public function update(Request $request, $id)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'contact_name' => 'required|string|max:255',
            'completion_time' => 'required|date',
            'budget' => 'required|numeric',
            'location' => 'required|string|max:255',
            'phone' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
            'details' => 'required|string',
            'require_code' => 'string|max:255',
        ]);

        try {
            $project = Publish::find($id);
            $project->update($request->all());

            return redirect()->route('publish.index')->with('success', '案件已成功更新');
        } catch (\Exception $e) {
            Log::error('Error updating publish data: ' . $e->getMessage());
            return back()->withErrors(['message' => '更新數據時發生錯誤']);
        }
    }
}
