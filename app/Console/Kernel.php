<?php

namespace App\Console;

use App\Console\Commands\CachePaginationCounts;
use App\Console\Commands\ResetDemoAdminAccount;
use App\Console\Commands\SeedSampleData;
use App\Console\Commands\TruncateMusicData;
use App\Console\Commands\UpdateAllChannelsContent;
use Common\Generators\Action\GenerateAction;
use Common\Generators\Controller\GenerateController;
use Common\Generators\Model\GenerateModel;
use Common\Generators\Policy\GeneratePolicy;
use Common\Generators\Request\GenerateRequest;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        CachePaginationCounts::class,
        ResetDemoAdminAccount::class,
        TruncateMusicData::class,
        SeedSampleData::class,
        UpdateAllChannelsContent::class,

        GenerateController::class,
        GenerateModel::class,
        GeneratePolicy::class,
        GenerateRequest::class,
        GenerateAction::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
         $schedule->command('pagination:cache')->daily();
         $schedule->command('channels:update')->daily();

         if (config('common.site.demo')) {
             $schedule->command(ResetDemoAdminAccount::class)->daily();
         }
    }

    /**
     * Register the Closure based commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        require base_path('routes/console.php');
    }
}
