<?php namespace App\Http\Controllers;

use App;
use App\Http\Requests\ModifyTracks;
use App\Services\Tracks\CrupdateTrack;
use App\Services\Tracks\PaginateTrackComments;
use App\Track;
use Common\Comments\Comment;
use Common\Comments\LoadChildComments;
use Common\Core\BaseController;
use Common\Database\Paginator;
use Common\Settings\Settings;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Storage;

class TrackController extends BaseController {

	/**
	 * @var Track
	 */
	private $track;

    /**
     * @var Request
     */
    private $request;

    /**
     * @param Track $track
     * @param Request $request
     */
    public function __construct(Track $track, Request $request)
	{
		$this->track = $track;
        $this->request = $request;
    }

	/**
	 * @return JsonResponse
	 */
	public function index()
	{
        $this->authorize('index', Track::class);

	    $paginator = (new Paginator($this->track, $this->request->all(), 'pagination.track_count'));
	    $paginator->with('album');
	    $paginator->withCount('plays');
	    $paginator->setDefaultOrderColumns('spotify_popularity', 'desc');

	    return $this->success(['pagination' => $paginator->paginate()]);
	}

	/**
	 * @param  int  $id
	 * @return JsonResponse
	 */
	public function show($id)
	{
	    $track = $this->track
            ->with('album.artist', 'album.tracks.artists', 'tags', 'genres')
            ->withCount('comments', 'plays', 'reposts', 'likes')
            ->findOrFail($id);

	    $this->authorize('show', $track);

        if (app(Settings::class)->get('player.track_comments')) {
            $comments = app(PaginateTrackComments::class)->execute($track);
        }

	    return $this->success([
	        'track' => $track,
            'comments' => isset($comments) ? $comments : []
        ]);
	}

    /**
     * @param int $id
     * @param ModifyTracks $validate
     * @return JsonResponse
     */
	public function update($id, ModifyTracks $validate)
	{
		$track = $this->track->findOrFail($id);

		$this->authorize('update', $track);

        $track = app(CrupdateTrack::class)->execute($this->request->all(), $track, $this->request->get('album'));

        return $this->success(['track' => $track]);
	}

    /**
     * @param ModifyTracks $validate
     * @return JsonResponse
     */
    public function store(ModifyTracks $validate)
    {
        $this->authorize('store', Track::class);

        $track = app(CrupdateTrack::class)->execute($this->request->all(), null, $this->request->get('album'));

        return $this->success(['track' => $track]);
    }

	/**
	 * @return mixed
	 */
	public function destroy()
	{
		$this->authorize('destroy', Track::class);

        $this->validate($this->request, [
            'ids'   => 'required|array',
            'ids.*' => 'required|integer'
        ]);

        $this->track->destroy($this->request->get('ids'));

        // delete waves
        $paths = array_map(function($id) {
            return "waves/{$id}.json";
        }, $this->request->get('ids'));
        $this->track->getWaveStorageDisk()->delete($paths);

	    return $this->success();
	}
}
