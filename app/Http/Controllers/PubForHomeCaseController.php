<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\Publish;

class PubForHomeCaseController extends Controller
{
    public function getLatestProjects()
    {
        // $projects = Publish::orderBy('created_at', 'desc')->take(5)->get();
        try {
            $projects = Publish::with(['user.star'])->orderBy('created_at', 'desc')->take(5)->get();

            // 將 blob 轉換為 Base64 URL，並返回給前端讓前端能順利拿到可用的 url
            foreach ($projects as $project) {
                if ($project->user && $project->user->profile_picture) {
                    $project->user->profile_picture = 'data:image/jpeg;base64,' . base64_encode($project->user->profile_picture);
                }
            }
            foreach ($projects as $project) {
                if ($project->user && $project->user->profile_back_img) {
                    $project->user->profile_back_img = 'data:image/jpeg;base64,' . base64_encode($project->user->profile_back_img);
                }
            }

            // Log::info('getLatestProjects: ' . $projects->toJson());
            return response()->json($projects);
        } catch (\Exception $e) {
            // log::error('getLatestProjects: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取最新案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }

    public function getCliHighestProjects()
    {
        // $projects = Publish::orderBy('created_at', 'desc')->take(5)->get();
        try {
            $projects = Publish::with(['user.star'])->orderBy('click_count', 'desc')->take(5)->get();

            // 將 blob 轉換為 Base64 URL，並返回給前端讓前端能順利拿到可用的 url
            foreach ($projects as $project) {
                if ($project->user && $project->user->profile_picture) {
                    $project->user->profile_picture = 'data:image/jpeg;base64,' . base64_encode($project->user->profile_picture);
                }
            }
            foreach ($projects as $project) {
                if ($project->user && $project->user->profile_back_img) {
                    $project->user->profile_back_img = 'data:image/jpeg;base64,' . base64_encode($project->user->profile_back_img);
                }
            }
            // Log::info('getCliHighestProjects: ' . $projects->toJson());
            return response()->json($projects);
        } catch (\Exception $e) {
            // log::error('getCliHighestProjects: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取點閱率最高案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
