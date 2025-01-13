<?php

namespace App\Http\Controllers\Simon; // 控制器分類時必須修改

use App\Http\Controllers\Controller; // 控制器分類時必須修改
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class PersonalController extends Controller
{
    // 提取數據的方法
    public function getinfo()
    {
        $user = Auth::user();

        $data = DB::table('users')
            ->join('userinfo', 'userinfo.uid', '=', 'users.id')
            ->select('userinfo.*', 'users.*')
            ->where('users.id', '=', $user->id)
            ->first();

        // 將照片轉換為 Base64 編碼格式
        if ($data && $data->headshot) {
            $data->headshot = 'data:image/jpeg;base64,' . base64_encode($data->headshot);
        }

        return response()->json($data);
    }




    public function show($id)
    {
        try {
            // 使用查詢構造器來獲取數據
            $userInfo = DB::table('userinfo')->where('uid', $id)->first();

            // 將照片轉換為 Base64 編碼格式
            if ($userInfo && $userInfo->headshot) {
                $userInfo->headshot = 'data:image/jpeg;base64,' . base64_encode($userInfo->headshot);
            }

            if (!$userInfo) {
                return response()->json(['message' => 'User not found'], 404);
            }

            return response()->json($userInfo, 200, [], JSON_UNESCAPED_UNICODE);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error fetching user info'], 500);
        }
    }

    public function update(Request $request, $id)
    {
        try {
            // 清理輸入數據
            $cleanedData = array_map(function ($value) {
                return is_string($value) ? mb_convert_encoding($value, 'UTF-8', 'UTF-8') : $value;
            }, $request->all());

            // 使用查詢構造器來更新數據
            $updateCount = DB::table('userinfo')
                ->where('uid', $id)
                ->update($cleanedData);

            if ($updateCount === 0) {
                return response()->json(['message' => 'User not found or no change made'], 404);
            }

            // 獲取更新後的數據
            $updatedUserInfo = DB::table('userinfo')->where('uid', $id)->first();

            return response()->json($updatedUserInfo, 200, [], JSON_UNESCAPED_UNICODE);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Error updating user info'], 500);
        }
    }
}








// 以下為使用模型的方法
// public function show($id)
// {
//     // 使用模型來獲取數據
//     $userInfo = UserInfo::findOrFail($id);
//     return response()->json($userInfo);
// }

// public function update(Request $request, $id)
// {
//     // 使用模型來更新數據
//     $userInfo = UserInfo::findOrFail($id);
//     $userInfo->update($request->all());
//     return response()->json($userInfo);
// }
