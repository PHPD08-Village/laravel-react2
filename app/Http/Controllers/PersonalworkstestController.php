<?php



namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Personalworks;
use App\Models\Personalworkstest;
use Illuminate\Support\Facades\Log;


class PersonalworkstestController extends Controller
{

    // 測試儲存作品集
    public function web_store(Request $request)
    {
        try {
            $work = Personalworkstest::create($request->all());
            if ($request->hasFile('work_image')) {
                $work->work_image = file_get_contents($request->file('work_image'));
            }
            $work->save();
            return response()->json([
                'success' => true,
                'data' => $work
            ]);
        } catch (\Exception $e) {
            Log::error('Error creating project: ' . $e->getMessage());
            return response()->json([
                'success' => false,
                'message' => 'Error creating project'
            ], 500);
        }
    }
}
