<?php

namespace App\Http\Controllers\Simon;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Publish;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;

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
            $publish->status = 'pending';  // 設定預設狀態為 'pending'
            $publish->save();

            return response()->json(['message' => '資料已成功提交'], 200);
        } catch (\Exception $e) {
            // 捕捉異常並記錄錯誤
            Log::error('Error saving publish data: ' . $e->getMessage());
            return response()->json(['message' => '提交數據時發生錯誤'], 500);
        }
    }

    public function getAllPublishes(Request $request)
    {
        // try {
        //     $publishes = Publish::all();
        //     return response()->json($publishes);
        // } catch (\Exception $e) {
        //     Log::error('Error fetching publishes: ' . $e->getMessage());
        //     return response()->json(['message' => '獲取數據時發生錯誤'], 500);
        // }

        $caseId = $request->query('caseId');

        try {
            $cases = DB::table('publish')
                ->select('pid', 'title', 'contact_name', 'location', 'budget', 'phone', 'completion_time', 'require_code', 'email', 'details')
                ->where('pid', $caseId)
                ->first();

            if (!$cases) {
                return response()->json(['message' => '案件不存在'], 404);
            }

            return response()->json([
                'pid' => $cases->pid,
                'title' => $cases->title,
                'contact_name' => $cases->contact_name,
                'location' => $cases->location,
                'budget' => $cases->budget,
                'phone' => $cases->phone,
                'completion_time' => $cases->completion_time,
                'require_code' => $cases->require_code,
                'email' => $cases->email,
                'details' => $cases->details,
            ]);
            Log::info('getCaseInfo: ' . $cases->toJson());
        } catch (\Exception $e) {
            Log::error('案件資料獲取失敗: ' . $e->getMessage());
            return response()->json(['message' => '獲取案件資料時發生錯誤'], 500);
        }
    }

    // 更新特定案件
    // public function update(Request $request, $id)
    // {
    //     $request->validate([
    //         'title' => 'required|string|max:255',
    //         'contact_name' => 'required|string|max:255',
    //         'location' => 'required|string|max:255',
    //         'budget' => 'required|numeric',
    //         'phone' => 'required|string|max:255',
    //         'completion_time' => 'required|date',
    //         'require_code' => 'string|max:255',
    //         'email' => 'required|string|email|max:255',
    //         'details' => 'required|string',
    //     ]);

    //     try {
    //         $project = Publish::find($id);
    //         $project->update($request->all());

    //         return redirect()->route('publish.index')->with('success', '案件已成功更新');
    //     } catch (\Exception $e) {
    //         Log::error('Error updating publish data: ' . $e->getMessage());
    //         return back()->withErrors(['message' => '更新數據時發生錯誤']);
    //     }
    // }

    public function update(Request $request)
    {
        $request->validate([
            'pid'=> 'required|integer',
            'title' => 'required|string|max:255',
            'contact_name' => 'required|string|max:255',
            'location' => 'required|string|max:255',
            'budget' => 'required|numeric',
            'phone' => 'required|string|max:255',
            'completion_time' => 'required|date',
            'require_code' => 'string|max:255',
            'email' => 'required|string|email|max:255',
            'details' => 'required|string',
        ]);

        try {
            $project = DB::table('publish')
            ->select('*')
            ->where('pid', $request->pid)
            ->update($request->all());

            return response()->json(['message' => '案件已成功更新']);
        } catch (\Exception $e) {
            Log::error('Error updating publish data: ' . $e->getMessage());
            return back()->withErrors(['message' => '更新數據時發生錯誤']);
        }
    }
    // 透過狀態取得案件
    public function getPublishByStatus(Request $request, $status)
    {
        $validStatuses = ['pending', 'active', 'cancelled', 'completed'];

        if (!in_array($status, $validStatuses)) {
            return response()->json(['message' => '無效的狀態'], 400);
        }

        try {
            $cases = Publish::where('status', $status)->get();

            if ($cases->isEmpty()) {
                return response()->json(['message' => '無相關案件'], 404);
            }

        return response()->json($cases, 200);
        } catch (\Exception $e) {
            Log::error('Error fetching cases by status: ' . $e->getMessage());
            return response()->json(['message' => '獲取案件時發生錯誤'], 500);
        }
    }
    // 更新案件狀態
    public function updateStatus(Request $request)
    {
        $request->validate([
            'pid' => 'required|integer',
            'status' => 'required|string|in:pending,active,cancelled,completed',
        ]);

        try {
            $publish = Publish::find($request->pid);

            if (!$publish) {
                return response()->json(['message' => '案件不存在'], 404);
            }

            $publish->status = $request->status;
            $publish->save();

            return response()->json(['message' => '案件狀態已成功更新'], 200);
        } catch (\Exception $e) {
            Log::error('Error updating case status: ' . $e->getMessage());
            return response()->json(['message' => '更新案件狀態時發生錯誤'], 500);
        }
    }
    // 統計不同狀態的案件數量
    public function getStatusCounts()
    {
        try {
            $counts = Publish::select('status', DB::raw('count(*) as total'))
                ->groupBy('status')
                ->get();

            return response()->json($counts, 200);
        } catch (\Exception $e) {
            Log::error('Error fetching status counts: ' . $e->getMessage());
            return response()->json(['message' => '獲取案件統計時發生錯誤'], 500);
        }
    }
    // 刪除指定案件
    public function destroy($pid)
    {
        try {
            // 找到指定案件
            $publish = Publish::find($pid);
        
            // 如果案件不存在，返回錯誤
            if (!$publish) {
                return response()->json(['message' => '案件不存在'], 404);
            }
        
            // 刪除案件
            $publish->delete();
        
            return response()->json(['message' => '案件已成功刪除'], 200);
        } catch (\Exception $e) {
            Log::error('Error deleting case: ' . $e->getMessage());
            return response()->json(['message' => '刪除案件時發生錯誤'], 500);
        }
    }

}
