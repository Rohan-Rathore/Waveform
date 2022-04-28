<?php namespace App\Services\Search;

use App\User;

class UserSearch {


    /**
     * Search users in local database.
     *
     * @param string  $q
     * @param int     $limit
     *
     * @return array
     */
    public function search($q, $limit = 10)
    {
        $users = User::where('email', 'like', $q.'%')
                     ->orWhere('username', 'like', $q.'%')
                     ->select('email', 'username', 'first_name', 'last_name', 'id', 'avatar')
                     ->limit($limit)
                     ->get();

        foreach($users as $user) {
            $user->followersCount;
        }

        return $users->toArray();
    }
}
