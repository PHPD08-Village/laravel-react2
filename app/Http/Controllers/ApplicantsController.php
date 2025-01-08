<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Models\Applicants;

class ApplicantsController extends Controller
{
    // 獲取 applicants 資料表的資料
    public function getProjectApplicants($projectId)
    {
        try {
            $applicants = DB::table('applicants')
                ->join('userinfo', 'applicants.uid', '=', 'userinfo.uid')
                ->join('publish', 'applicants.pid', '=', 'publish.pid')
                ->leftJoin('star', 'applicants.uid', '=', 'star.uid')
                ->select(
                    'applicants.*',
                    'userinfo.username',
                    'userinfo.headshot',
                    'userinfo.email',
                    'userinfo.introduction',
                    'userinfo.location',
                    'publish.title',
                    'publish.budget',
                    DB::raw('COALESCE(star.averating, 0) as averating'), // 若無資料則為0 
                    DB::raw('COALESCE(star.count, 0) as count') // 若無資料則為0
                )
                ->where('applicants.pid', $projectId)
                ->orderBy('applicants.created_at', 'desc')
                ->get();

            // 將 blob 轉換為 Base64 URL，並返回給前端讓前端能順利拿到可用的 url
            foreach ($applicants as $applicant) {
                // if ($project->user && $project->user->headshot) {
                if ($applicant->headshot) {
                    $applicant->headshot = 'data:image/jpeg;base64,' . base64_encode($applicant->headshot);
                }
            }

            Log::info('getLatestProjects: ' . $applicants->toJson());
            return response()->json($applicants);
        } catch (\Exception $e) {
            log::error('getProjectApplicants: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取最新案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }

    // public function getProjectTitle($projectId)
    // {
    //     try {
    //         $projectTitle = DB::table('publish')
    //             ->select('title')
    //             ->where('pid', $projectId)
    //             ->first();

    //         Log::info('getProjectTitle: ' . $projectTitle);
    //         return response()->json($projectTitle);
    //     } catch (\Exception $e) {
    //         Log::error('getProjectTitle: ' . $e->getMessage());
    //         return response()->json(['message' => '無法獲取案件標題，請稍後再試', 'error' => $e->getMessage()]);
    //     }
    // }
}
