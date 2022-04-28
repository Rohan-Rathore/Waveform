<?php

namespace Common\Core\Policies;

use App\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class TagPolicy
{
    use HandlesAuthorization;

    public function index(User $user)
    {
        return $user->hasPermission('tags.view');
    }

    public function show(User $user)
    {
        return $user->hasPermission('tags.view');
    }
}
