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




    // 儲存數據的方法
    public function edit(Request $request)
    {
        $updated = DB::table('userinfo')
            ->where('id', $request->input('id'))
            ->update([
                'name' => $request->input('name'),
                'avatar' => $request->input('avatar'),
                'nickname' => $request->input('nickname'),
                'location' => $request->input('location'),
                'job_title' => $request->input('job_title'),
                'job_status' => $request->input('job_status') ? true : false
            ]);

        if ($updated) {
            return response()->json(['message' => 'User info updated successfully']);
        }
        return response()->json(['message' => 'User not found'], 404);
    }
}
