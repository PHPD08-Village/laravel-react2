<?php
namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use SocialiteProviders\Manager\SocialiteWasCalled;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        // 監聽 SocialiteWasCalled 事件，來註冊 Line 提供者 LINE驅動的部分
        $this->app->make('events')->listen(
            SocialiteWasCalled::class,
            \SocialiteProviders\Line\LineExtendSocialite::class
        );
    }
}
