<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTimestampsToArtistsAlbumsTracks extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('albums', function (Blueprint $table) {
            if ( ! Schema::hasColumn('albums', 'created_at')) {
                $table->timestamps();
            }
        });
        Schema::table('tracks', function (Blueprint $table) {
            if ( ! Schema::hasColumn('tracks', 'created_at')) {
                $table->timestamp('created_at');
            }
            if ( ! Schema::hasColumn('tracks', 'updated_at')) {
                $table->timestamp('updated_at');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
