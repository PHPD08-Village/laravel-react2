<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array
     */
    protected $except = [
        // 單獨排除路由
        // 'api/send-message',
        // 'api/test',
        // 'api/submit-publish',
        'api/*', // 或者排除所有路由以測試
    ];
}
