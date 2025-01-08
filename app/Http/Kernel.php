<?php

namespace App\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    // app/Http/Kernel.php

    protected $middleware = [
        \App\Http\Middleware\Cors::class,
        // 其他中介軟體
    ];

    // app/Http/Kernel.php

    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\Cors::class,
            \App\Http\Middleware\VerifyCsrfToken::class,  // 確保保護 CSRF
            \Illuminate\Session\Middleware\StartSession::class,  // 啟動 session
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,
            // 其他 web 中介軟體
        ],

        'api' => [
            \App\Http\Middleware\Cors::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
            \Laravel\Sanctum\Http\Middleware\EnsureFrontendRequestsAreStateful::class,  // 確保 Sanctum 認證
        ],
    ];
}
