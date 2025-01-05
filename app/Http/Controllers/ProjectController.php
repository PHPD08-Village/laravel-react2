<?php

namespace App\Http\Controllers;

use App\Models\Projects;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log; // 引入 Log 閉包

class ProjectController extends Controller
{
    // 取得所有作品
    public function index()
    {
        try {
            $projects = Projects::with('userinfo')->get();
            return response()->json([
                'success' => true,
                'data' => $projects
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching projects: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error fetching projects'
            ], 500);
        }
    }

    // 取得單一作品
    public function show($id)
    {
        try {
            $project = Projects::with('userinfo')->find($id);
            if (!$project) {
                return response()->json([
                    'success' => false,
                    'message' => 'Project not found'
                ], 404);
            }

            return response()->json([
                'success' => true,
                'data' => $project
            ]);
        } catch (\Exception $e) {
            Log::error('Error fetching project: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error fetching project'
            ], 500);
        }
    }

    // 新增作品
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string',
                'uid' => 'required|integer',
                'image' => 'required|string',
                'completed_at' => 'required|date',
                'category' => 'required|string'
            ]);

            $project = Projects::create($validated);

            return response()->json([
                'success' => true,
                'data' => $project
            ]);
        } catch (\Exception $e) {
            Log::error('Error creating project: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error creating project'
            ], 500);
        }
    }

    // 更新作品
    public function update(Request $request, $id)
    {
        try {
            $project = Projects::find($id);

            if (!$project) {
                return response()->json([
                    'success' => false,
                    'message' => 'Project not found'
                ], 404);
            }

            $validated = $request->validate([
                'name' => 'string',
                'uid' => 'integer',
                'image' => 'string',
                'completed_at' => 'date',
                'category' => 'string'
            ]);

            $project->update($validated);

            return response()->json([
                'success' => true,
                'data' => $project
            ]);
        } catch (\Exception $e) {
            Log::error('Error updating project: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error updating project'
            ], 500);
        }
    }

    // 刪除作品
    public function destroy($id)
    {
        try {
            $project = Projects::find($id);

            if (!$project) {
                return response()->json([
                    'success' => false,
                    'message' => 'Project not found'
                ], 404);
            }

            $project->delete();

            return response()->json([
                'success' => true,
                'message' => 'Project deleted successfully'
            ]);
        } catch (\Exception $e) {
            Log::error('Error deleting project: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error deleting project'
            ], 500);
        }
    }
}
