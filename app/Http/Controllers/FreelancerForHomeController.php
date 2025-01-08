<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\UserInfo;

class FreelancerForHomeController extends Controller
{
    public function getStarHighestTaker()
    { // 取得評價最高的五個接案者 
        try {
            // 使用查詢構建器聯合查詢 userinfo 和 star 表
            // $freelancers = UserInfo::with('star')->orderBy('averating', 'desc')->take(5)->get();

            $freelancers = DB::table('userinfo')
                ->leftJoin('star', 'userinfo.uid', '=', 'star.uid')
                
                // 兩個select方法都可以提取出averating和count，但差別在於一個是有值就顯示，一個是沒值就顯示0
                // ->select('userinfo.*', DB::raw('COALESCE(star.averating, 0) as averating'), DB::raw('COALESCE(star.count, 0) as count'))
                ->select('userinfo.*', 'star.averating', 'star.count')
                ->orderBy('averating', 'desc')
                ->take(10)
                ->get();

            // 將 blob 轉換為 Base64 URL，並返回給前端讓前端能順利拿到可用的 url
            foreach ($freelancers as $freelancer) {
                if ($freelancer->headshot) {
                    $freelancer->headshot = 'data:image/jpeg;base64,' . base64_encode($freelancer->headshot);
                }
                if ($freelancer->profile_back_img) {
                    $freelancer->profile_back_img = 'data:image/jpeg;base64,' . base64_encode($freelancer->profile_back_img);
                }
            }


            // Log::info('getStarHighestTaker: ' . $freelancers->toJson());
            return response()->json($freelancers);
        } catch (\Exception $e) {
            log::error('getStarHighestTaker: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取最新案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
