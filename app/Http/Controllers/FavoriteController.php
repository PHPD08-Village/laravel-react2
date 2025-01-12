<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FavoriteCase;
use App\Models\FavoriteFreelancer;
use App\Models\UserInfo;

class FavoriteController extends Controller
{
     // 取得指定使用者的收藏案件
     public function index(Request $request)
     {
         // $userId = $request->user()->id; // Laravel 的使用者驗證功能
         $userId = 6; // 暫時設定為 6
 
         $savedCases = FavoriteCase::where('user_id', $userId)  //user_id
             ->with('publish') // 透過關聯取得案件詳細資料
             ->get();
 
         return response()->json($savedCases);
     }


     //刪除收藏案件
    public function destroy(Request $request)
    {
        // $userId = $request->user()->id; // 確認目前登入的使用者
        $userId = 6; // 暫時設定為 6
        $caseIds = $request->input('ids');

        if (empty($caseIds) || !is_array($caseIds)) {
            return response()->json(['message' => '無效的請求'], 400);
        }

        FavoriteCase::where('user_id', $userId)
            ->whereIn('id', $caseIds)
            ->delete();

        return response()->json(['message' => '刪除成功']);
    }

    // 取得收藏使用者
    public function findex(Request $request)
    {
        // $userId = $request->user()->id; // Laravel 的使用者驗證功能
        $userId = 6; // 暫時設定為 6

        $savedFreelancer = FavoriteFreelancer::where('user_id', $userId)  //user_id
            ->with(['user' => function($query) {
                $query->select('uid', 'username', 'job_title','location','rating'); // 只選擇需要的欄位
            }]) // 透過關聯取得接案者詳細資料
            ->get();

        return response()->json($savedFreelancer);
    }


    //刪除收藏案件
   public function delete(Request $request)
   {
       // $userId = $request->user()->id; // 確認目前登入的使用者
       $userId = 6; // 暫時設定為 6
       $fuserIds = $request->input('ids');

       if (empty($fuserIds) || !is_array($fuserIds)) {
           return response()->json(['message' => '無效的請求'], 400);
       }

       FavoriteFreelancer::where('user_id', $userId)
           ->whereIn('id', $fuserIds)
           ->delete();

       return response()->json(['message' => '刪除成功']);
   }
}
