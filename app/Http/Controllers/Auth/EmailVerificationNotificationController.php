<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Helpers\EmailHelper;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EmailVerificationNotificationController extends Controller
{
    /**
     * Send a new email verification notification.
     */
    public function store(Request $request): RedirectResponse
    {
        if ($request->user()->hasVerifiedEmail()) {
            return redirect()->intended(route('dashboard', absolute: false));
        }

        try {
            $request->user()->sendEmailVerificationNotification();
            EmailHelper::sendEmail($request->user()->email, 'Email Verification', 'Please verify your email address.', 'yahoo');
            return back()->with('status', 'verification-link-sent');
        } catch (\Exception $e) {
            return back()->withErrors(['message' => 'Failed to send email.']);
        }
    }
}
