<?php

namespace Common\Files\Providers\Backblaze;

use Mhetreramesh\Flysystem\BackblazeAdapter as BaseBackblazeAdapter;

class BackblazeAdapter extends BaseBackblazeAdapter
{
    public function __construct($client, $bucketName)
    {
        $this->client = $client;
        $this->bucketName = $bucketName;
    }

    public function getUrl($path)
    {
        return "https://f002.backblazeb2.com/file/{$this->bucketName}/$path";
    }
}
