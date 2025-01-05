<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Models\Publish;

class PubForHomeCaseController extends Controller
{
    public function getLatestProjects()
    {
        // $projects = Publish::orderBy('created_at', 'desc')->take(5)->get();
        try {
            // $projects = Publish::with(['user.star'])->orderBy('created_at', 'desc')->take(5)->get();

            $projects = DB::table('publish')
                ->leftJoin('userinfo', 'publish.uid', '=', 'userinfo.uid')
                ->leftJoin('star', 'publish.uid', '=', 'star.uid')
                // 兩個select方法都可以提取出averating和count，但差別在於一個是有值就顯示，一個是沒值就顯示0
                // ->select('userinfo.*', DB::raw('COALESCE(star.averating, 0) as averating'), DB::raw('COALESCE(star.count, 0) as count'))
                ->select(
                    'publish.*', 
                    'userinfo.headshot', 
                    'userinfo.username', 
                    DB::raw('COALESCE(star.averating, 0) as averating'), 
                    DB::raw('COALESCE(star.count, 0) as count'), 
                    )
                ->orderBy('publish.created_at', 'desc')
                ->take(10)
                ->get();

            // 將 blob 轉換為 Base64 URL，並返回給前端讓前端能順利拿到可用的 url
            foreach ($projects as $project) {
                // if ($project->user && $project->user->headshot) {
                if ($project->headshot) {
                    $project->headshot = 'data:image/jpeg;base64,' . base64_encode($project->headshot);
                }
            }
            // foreach ($projects as $project) {
            //     if ($project->profile_back_img) {
            //         $project->user->profile_back_img = 'data:image/jpeg;base64,' . base64_encode($project->user->profile_back_img);
            //     }
            // }

            Log::info('Projects: ' . $projects->toJson());

            return response()->json($projects);
        } catch (\Exception $e) {
            // log::error('getLatestProjects: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取最新案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }

    public function getCliHighestProjects()
    {
        try {
            // $projects = Publish::with(['user.star'])->orderBy('click_count', 'desc')->take(5)->get();

            $projects = DB::table('publish')
                ->leftJoin('userinfo', 'publish.uid', '=', 'userinfo.uid')
                ->leftJoin('star', 'publish.uid', '=', 'star.uid')
                // 兩個select方法都可以提取出averating和count，但差別在於一個是有值就顯示，一個是沒值就顯示0
                // ->select('userinfo.*', DB::raw('COALESCE(star.averating, 0) as averating'), DB::raw('COALESCE(star.count, 0) as count'))
                ->select(
                    'publish.*', 
                    'userinfo.headshot', 
                    'userinfo.username', 
                    DB::raw('COALESCE(star.averating, 0) as averating'), 
                    DB::raw('COALESCE(star.count, 0) as count'), 
                    )
                ->orderBy('publish.click_count', 'desc')
                ->take(10)
                ->get();

            // 將 blob 轉換為 Base64 URL，並返回給前端讓前端能順利拿到可用的 url
            foreach ($projects as $project) {
                // if ($project->user && $project->user->headshot) {
                if ($project->headshot) {
                    $project->headshot = 'data:image/jpeg;base64,' . base64_encode($project->headshot);
                }
            }
            
            // foreach ($projects as $project) {
            //     if ($project->headshot) {
            //         $project->headshot = 'data:image/jpeg;base64,' . base64_encode($project->user->headshot);
            //     }
            // }
            // foreach ($projects as $project) {
            //     if ($project->user && $project->user->profile_back_img) {
            //         $project->user->profile_back_img = 'data:image/jpeg;base64,' . base64_encode($project->user->profile_back_img);
            //     }
            // }
            // Log::info('getCliHighestProjects: ' . $projects->toJson());
            return response()->json($projects);
        } catch (\Exception $e) {
            log::error('getCliHighestProjects: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取點閱率最高案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
