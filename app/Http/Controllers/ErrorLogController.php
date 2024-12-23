<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ErrorLogController extends Controller
{
    public function logError(Request $request)
    {
        $error = $request->input('error');
        $errorInfo = $request->input('errorInfo');

        Log::channel('react')->error('Frontend Error:', ['error' => $error, 'errorInfo' => $errorInfo]);

        return response()->json(['status' => 'error logged'], 200);
    }
}

