<?php

namespace App\Listeners;

use Common\Auth\Events\UserAvatarChanged;
use Illuminate\Contracts\Queue\ShouldQueue;
use League\ColorExtractor\Color;
use League\ColorExtractor\ColorExtractor;
use League\ColorExtractor\Palette;

class GenerateProfileHeaderColors implements ShouldQueue
{
    /**
     * @param  UserAvatarChanged  $event
     * @return void
     */
    public function handle(UserAvatarChanged $event)
    {
        $palette = Palette::fromFilename(url($event->user->avatar));

        $extractor = new ColorExtractor($palette);
        $colors = $extractor->extract(2);

        $colors = array_map(function($intColor) {
            return Color::fromIntToHex($intColor);
        }, array_reverse($colors));

        $event->user->profile->header_colors = json_encode($colors);
        $event->user->profile->save();
    }
}
