<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Message;

class MessageController extends Controller
{
    public function sendMessage(Request $request)
    {
        $validatedData = $request->validate([
            'message' => 'required|max:255',
        ]);

        $message = Message::create($validatedData);

        return response()->json(['status' => 'Message received!', 'message' => $message]);
    }

    public function getsendMessage(Request $request)
    {
        return response()->json(['message' => 'This is a test message!']);
    }
}
