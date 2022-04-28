<?php

namespace App\Providers;

use App\Album;
use App\Artist;
use App\Channel;
use App\Genre;
use App\Lyric;
use App\Playlist;
use App\Policies\AlbumPolicy;
use App\Policies\ArtistPolicy;
use App\Policies\ChannelPolicy;
use App\Policies\GenrePolicy;
use App\Policies\LyricPolicy;
use App\Policies\PlaylistPolicy;
use App\Policies\TrackPolicy;
use App\Track;
use App\ArtistBio;
use App\Policies\ArtistBioPolicy;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * @var array
     */
    protected $policies = [
        Track::class        => TrackPolicy::class,
        Album::class        => AlbumPolicy::class,
        Artist::class       => ArtistPolicy::class,
        Lyric::class        => LyricPolicy::class,
        Playlist::class     => PlaylistPolicy::class,
        Genre::class        => GenrePolicy::class,
        Channel::class      => ChannelPolicy::class,
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();

        //
    }
}
