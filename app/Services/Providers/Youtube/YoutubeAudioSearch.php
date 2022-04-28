<?php namespace App\Services\Providers\Youtube;

use App;
use App\Track;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\ConnectException;
use Log;
use GuzzleHttp\Client;
use Common\Settings\Settings;
use App\Services\HttpClient;

class YoutubeAudioSearch {

    /**
     * @var Client
     */
    private $httpClient;

    /**
     * @var Settings
     */
    private $settings;

    /**
     * @param Settings $settings
     */
    public function __construct(Settings $settings) {
        $this->settings = $settings;

        $this->httpClient = new HttpClient([
            'headers' =>  ['Referer' => url('')],
            'base_uri' => 'https://www.googleapis.com/youtube/v3/',
            'exceptions' => true
        ]);
    }

    /**
     * @param int $trackId
     * @param string $artistName
     * @param string $trackName
     * @return array
     */
    public function search($trackId, $artistName, $trackName)
    {
        $params = $this->getParams($artistName, $trackName);

        try {
            $response = $this->httpClient->get('search', ['query' => $params]);
        } catch (ConnectException $e) {
            // connection timeouts happen sometimes,
            // there's no need to do anything extra
            return [];
        }

        $formatted = $this->formatResponse($response);

        if ($this->settings->get('youtube.store_id') && count($formatted)) {
            app(Track::class)->where('id', $trackId)->update(['youtube_id' => $formatted[0]['id']]);
        }

        return $formatted;
    }

    private function getParams($artist, $track)
    {
        $append = '';

        //if "live" track is not being requested, append "video" to search
        //query to prefer music videos over lyrics and live videos.
        if ( ! str_contains(strtolower($track), '- live')) {
            //$append = 'video';
        }

        $params = [
            'q' => "$artist - $track $append",
            'key' => $this->settings->getRandom('youtube_api_key'),
            'part' => 'snippet',
            'fields' => 'items(id(videoId), snippet(title))',
            'maxResults' => 3,
            'type' => 'video',
            'videoEmbeddable' => 'true',
            'videoCategoryId' => 10, //music
            'topicId' => '/m/04rlf' //music (all genres)
        ];

        $regionCode = $this->settings->get('youtube.region_code');

        if ($regionCode && $regionCode !== 'none') {
            $params['regionCode'] = strtoupper($regionCode);
        }

        return $params;
    }

    /**
     * Format and normalize youtube response for use in our app.
     *
     * @param array $response
     * @return array
     */
    private function formatResponse($response) {

        $formatted = [];

        if ( ! isset($response['items'])) return $formatted;

        return array_map(function($item) {
            return ['title' => $item['snippet']['title'], 'id' => $item['id']['videoId']];
        }, $response['items']);
    }
}
