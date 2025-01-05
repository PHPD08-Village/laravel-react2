<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(Request $request)
    {
        if (Auth::check() && !Auth::user()->hasVerifiedEmail()) {
            if ($request->ajax()) {
                return response()->json(['message' => 'Your email address is not verified.'], 403);
            }
            return redirect()->route('verification.notice');
        }

        if ($request->ajax()) {
            return response()->view('auth.login', [], 200)->header('Content-Type', 'text/html');
        }
        return view('auth.login');
    }

    /**
     * Handle an incoming authentication request.
     */
    public function store(LoginRequest $request): RedirectResponse
    {
        $request->authenticate();

        $request->session()->regenerate();

        return redirect()->intended(route('dashboard', absolute: false));
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        if ($request->ajax()) {
            return response()->json(['message' => 'Successfully logged out']);
        }

        return redirect('/'); // 瀏覽器請求跳轉到首頁
    }
}
