<?php

namespace Common\Tags;

use App\Tag as AppTag;
use Common\Core\BaseController;
use Common\Database\Paginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class TagController extends BaseController
{
    /**
     * @var Request
     */
    private $request;

    /**
     * @param Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * @return JsonResponse
     */
    public function index()
    {
        $this->authorize('index', Tag::class);

        $tag = app(class_exists(AppTag::class) ? AppTag::class : Tag::class);

        $paginator = (new Paginator($tag, $this->request->all()));

        if ($type = $paginator->param('type')) {
            $paginator->where('type', $type);
        }

        if ($notType = $paginator->param('notType')) {
            $paginator->where('type', '!=', $notType);
        }

        $pagination = $paginator->paginate();

        return $this->success(['pagination' => $pagination]);
    }
}
