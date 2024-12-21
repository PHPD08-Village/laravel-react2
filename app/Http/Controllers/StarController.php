<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Star;

class StarController extends Controller
{
    public function store(Request $request)
    {
        try {
            $request->validate([
                // 'uid' => 'nullable|integer',
                'uid' => 'required|integer',
                // 'professionalism' => 'required|integer|between:1,5',
                // 'responseSpeed' => 'required|integer|between:1,5',
                // 'cooperation' => 'required|integer|between:1,5',
                'averating' => 'required|numeric|min:1|max:5',
                'count' => 'required|integer',
            ]);

            // $averageRating = ($request->professionalism + $request->responseSpeed + $request->cooperation) / 3;
            // $averageRating = round($averageRating, 5);
            // $request->averating = $averageRating;

            // 尋找是否有已有的評價記錄，查找特定用戶
            $rating = Star::where('uid', $request->uid)->first();

            // 判斷 $rating 是否為空，如果不是空，則更新評分；如果是空則新增評分
            if ($rating) {
                // 更新已有的評分
                $rating->count += 1;
                $rating->averating = (($rating->averating * ($rating->count - 1)) + $request->averating) / $rating->count;
                // $rating->averating = (($rating->averating * ($rating->count - 1)) + $averageRating) / $rating->count;
                $rating->updated_at = now();
            } else {
                // 新增新的評分
                $rating = new Star();
                $rating->uid = $request->uid;
                $rating->averating = $request->averating;
                // $rating->averating = $averageRating;
                $rating->count = $request->count;
                $rating->created_at = now();
                $rating->updated_at = now();
            }

            $rating->save();

            return response()->json(['message' => '評價已成功提交']);
        } catch (\Exception $e) {
            return response()->json(['message' => '評價提交失敗，請稍後再試', 'error' => $e->getMessage()]);
        }
    }
}
