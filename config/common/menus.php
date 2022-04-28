<?php

use App\Actions\Channel\LoadChannelMenuItems;

return [
    [
        'name' => 'Channels',
        'itemsLoader' => LoadChannelMenuItems::class,
    ]
];