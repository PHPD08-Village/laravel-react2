<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

// 使用了 Laravel 的 Eloquent ORM 來從數據庫中獲取資料
class SearchController extends Controller
{
    public function getdata()
    {
        $data = DB::table('userinfo') // 從 userinfo 資料表開始查詢資料
            ->join('publish', 'userinfo.uid', '=', 'publish.uid') // 進行資料表的連接，將 userinfo 和 publish 資料表根據 uid 欄位進行連接。'publish' 是要連接的資料表， 'userinfo.uid' 和 'publish.uid' 是連接的條件，表示這兩個欄位的值必須相等。
            ->join('star', 'userinfo.uid', '=', 'star.uid') // 進行資料表的連接，將 userinfo 和 star 資料表根據 uid 欄位進行連接。'satr' 是要連接的資料表， 'userinfo.uid' 和 'satr.uid' 是連接的條件，表示這兩個欄位的值必須相等。
            ->select('userinfo.*', 'publish.*', 'star.averating', 'star.count') // 選取 userinfo 和 publish 資料表中的欄位，.* 代表選取所有欄位
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
