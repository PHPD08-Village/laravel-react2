<?php
// 這個 DataController 控制器的 store 方法負責接收、驗證、存儲數據並返回響應。這是一個簡單但功能完整的處理流程，確保了數據的有效性和完整性。
// 整體流程
// 接收請求：當前端發送數據到 /api/submit-data 路徑時，這個方法被調用。

// 驗證數據：使用 Laravel 的驗證功能確保數據格式正確。

// 存儲數據：將經過驗證的數據存儲到資料庫中。

// 返回響應：返回包含存儲數據的 JSON 響應，告訴前端操作成功。

namespace App\Http\Controllers;

// Request 類 和 Data 模型 用於處理 HTTP 請求和與資料庫進行交互
use Illuminate\Http\Request;
use App\Models\Data;

// 處理表單提交請求，驗證數據並將其存儲到資料庫中
class DataController extends Controller
{
    // 定義 mydata 方法
    public function mydata(Request $request)
    {
        // 使用 Laravel 的內置驗證功能來驗證請求中的數據
        $validatedData = $request->validate([
            // 要求 data 欄位是必需的（required）並且必須是字串（string），如果驗證失敗，Laravel 會自動返回一個錯誤響應
            'data' => 'required|string',
        ]);

        // 使用 Data 模型的 create 方法將驗證過的數據存儲到資料庫中
        // 這行代碼會創建一條新的數據記錄，並將其存儲到 data 表中
        $data = Data::create([
            'data' => $validatedData['data'],  // $validatedData['data']包含了經過驗證的 data 欄位數據
        ]);

        // 返回一個 JSON 響應，包含剛才存儲的數據，並設置 HTTP 狀態碼為 200 表示請求成功
        // $data->data 獲取了新創建的數據記錄中的 data 欄位的值
        return response()->json(['data' => $data->data], 200);
    }
}
