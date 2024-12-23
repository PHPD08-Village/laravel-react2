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

    protected $middlewareGroups = [
        'web' => [
            \App\Http\Middleware\VerifyCsrfToken::class,
            \App\Http\Middleware\Cors::class,
            // 其他 web 中介軟體
        ],

        'api' => [
            \App\Http\Middleware\Cors::class,
            'throttle:api',
            \Illuminate\Routing\Middleware\SubstituteBindings::class,
        ],
    ];

    protected $routeMiddleware = [
        // 其他中間件...
        'auth' => \App\Http\Middleware\Authenticate::class,
        'csrf.ignore' => \App\Http\Middleware\IgnoreCsrfToken::class,
    ];
}
