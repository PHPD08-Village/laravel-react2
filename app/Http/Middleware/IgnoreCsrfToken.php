<?php

namespace App\Http\Middleware;

use Closure;

class IgnoreCsrfToken
{
    public function handle($request, Closure $next)
    {
        return $next($request);
    }
}
