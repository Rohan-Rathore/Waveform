<?php

namespace App\Providers;

use App\Album;
use App\AlbumWithTracks;
use App\Channel;
use App\Services\Admin\GetAnalyticsHeaderData;
use App\Services\AppBootstrapData;
use App\Services\UrlGenerator;
use Common\Admin\Analytics\Actions\GetAnalyticsHeaderDataAction;
use Common\Core\Bootstrap\BootstrapData;
use Common\Core\Contracts\AppUrlGenerator;
use Illuminate\Database\Eloquent\Relations\Relation;
use Illuminate\Support\ServiceProvider;
use Route;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        // TEMP: disable deprecated warnings on php 7.4 until upgrade to laravel 6
        if (version_compare(PHP_VERSION, '7.4.0') >= 0) {
            error_reporting(E_ALL ^ E_DEPRECATED);
        }

        $this->app->bind(
            BootstrapData::class,
            AppBootstrapData::class
        );

        Route::bind('channel', function ($idOrSlug, \Illuminate\Routing\Route $route) {
            if ($route->getActionMethod() === 'destroy') {
                $channelIds = explode(',', $idOrSlug);
                return app(Channel::class)->whereIn('id', $channelIds)->get();
            } else if (ctype_digit($idOrSlug)) {
                return app(Channel::class)->findOrFail($idOrSlug);
            } else {
                return app(Channel::class)->where('slug', $idOrSlug)->firstOrFail();
            }
        });

        Relation::morphMap([
            Album::class => AlbumWithTracks::class,
        ]);
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            GetAnalyticsHeaderDataAction::class,
            GetAnalyticsHeaderData::class
        );

        $this->app->bind(
            AppUrlGenerator::class,
            UrlGenerator::class
        );
    }
}
