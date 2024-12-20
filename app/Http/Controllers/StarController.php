<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Star;

class StarController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'uid' => 'nullable|integer',
            'averating' => 'required|numeric|min:1|max:5',
            'count' => 'required|integer',
        ]);

        // 尋找是否有已有的評價記錄
        $rating = Star::where('uid', $request->uid)->first();

        if ($rating) {
            // 更新已有的評分
            $rating->count += 1;
            $rating->averating = (($rating->averating * ($rating->count - 1)) + $request->averating) / $rating->count;
            $rating->updated_at = now();
        } else {
            // 新增新的評分
            $rating = new Star();
            $rating->uid = $request->uid;
            $rating->averating = $request->averating;
            $rating->count = $request->count;
            $rating->created_at = now();
            $rating->updated_at = now();
        }

        $rating->save();

        return response()->json(['message' => 'Rating saved successfully']);
    }
}
