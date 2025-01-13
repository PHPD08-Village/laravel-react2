<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personalworks;
use Illuminate\Support\Facades\Log;


class PersonalworksController extends Controller
{
     // 取得所有作品
     public function index()
     {
        try {
            $works = Personalworks::all()->map(function ($work) {
                if ($work->work_image) {
                    $work->work_image = 'data:image/jpeg;base64,' . base64_encode($work->work_image);
                }
                return $work;
            });
            // 迭代每個作品，處理 work_image
            // foreach ($works as $work) {
            //     if ($work->work_image) {
            //         $work->work_image = 'data:image/jpeg;base64,' . base64_encode($work->work_image);
            //     }
            // }
            return response()->json([
                'success' => true,
                'data' => $works,
                // 'work_title' => $works->work_title,
                // 'work_image' => $works->work_image,
                // 'completion_date' => $works->completion_date,
                // 'work_category' => $works->work_category
            ]);
         } catch (\Exception $e) {
             Log::error('Error fetching projects: ' . $e->getMessage());
             return response()->json([
                 'success' => false,
                 'message' => 'Error fetching projects',
                 'error' => $e->getMessage(), // 添加錯誤訊息返回
             ], 500);
         }
     }
     // 儲存作品
     public function store(Request $request){
         try {
             $work = Personalworks::create($request->all());
             if ($request->hasFile('work_image')) {
                 $work->work_image = file_get_contents($request->file('work_image'));
             }
             $work->save();
             return response()->json([
                 'success' => true,
                 'data' => $work
             ]);
         } catch (\Exception $e) {
             Log::error('Error creating project: '. $e->getMessage());
             return response()->json([
                'success' => false,
                'message' => 'Error creating project'
             ], 500);
         }
     }
 
}
