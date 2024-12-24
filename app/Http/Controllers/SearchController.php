<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class SearchController extends Controller
{
    public function getdata()
    {
        $data = DB::table('userinfo')
            ->join('publish', 'userinfo.uid', '=', 'publish.uid')
            ->select('userinfo.*', 'publish.*')
            ->get();

        // 後端創建一個 API 路由，用來將 blob 類型的圖片數據轉換為可用的圖片 URL 並返回給前端。
        // 前端，通過 API 獲取資料，並將圖片 URL 傳遞給 <img> 標籤來顯示圖片
        // 將 blob 轉換為 Base64 URL 
        foreach ($data as $user) {
            if ($user->headshot) {
                $user->headshot = 'data:image/jpeg;base64,' . base64_encode($user->headshot);
            }
        }

        return response()->json($data);
    }
}
