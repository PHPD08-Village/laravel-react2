<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use App\Models\Publish;

class PubForHomeLatestController extends Controller
{
    public function getLatestProjects()
    {
        // $projects = Publish::orderBy('created_at', 'desc')->take(5)->get();
        try {
            $projects = Publish::with(['user.star'])->orderBy('created_at', 'desc')->take(5)->get();
            Log::info('getLatestProjects: ' . $projects->toJson());
            return response()->json($projects);
        } catch (\Exception $e) {
            log::error('getLatestProjects: ' . $e->getMessage());
            return response()->json(['message' => '無法獲取案件資訊，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
