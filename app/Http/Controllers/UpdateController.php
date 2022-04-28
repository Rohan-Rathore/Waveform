<?php namespace App\Http\Controllers;

use Artisan;
use Cache;
use Common\Core\BaseController;
use Common\Database\MigrateAndSeed;
use Common\Settings\DotEnvEditor;
use Common\Settings\Setting;
use Exception;
use Illuminate\Contracts\View\Factory;
use Illuminate\Http\RedirectResponse;
use Illuminate\View\View;
use Schema;

class UpdateController extends BaseController {
    /**
     * @var DotEnvEditor
     */
    private $dotEnvEditor;

    /**
     * @var Setting
     */
    private $setting;

    /**
     *s @param DotEnvEditor $dotEnvEditor
     * @param Setting $setting
     */
	public function __construct(DotEnvEditor $dotEnvEditor, Setting $setting)
	{
        $this->setting = $setting;
        $this->dotEnvEditor = $dotEnvEditor;

	    if ( ! config('common.site.disable_update_auth') && version_compare(config('common.site.version'), $this->getAppVersion()) === 0) {
            $this->middleware('isAdmin');
        }
    }

    /**
     * Show update view.
     *
     * @return Factory|View
     */
    public function show()
    {
        return view('update');
    }

    /**
     * @return RedirectResponse
     */
    public function update()
	{
        @ini_set("memory_limit", "-1");
        @set_time_limit(0);

	    //fix "index is too long" issue on MariaDB and older mysql versions
        Schema::defaultStringLength(191);

        app(MigrateAndSeed::class)->execute();

        //radio provider should always be spotify
        $this->setting->where('name', 'radio_provider')->update(['value' => 'Spotify']);

        $version = $this->getAppVersion();
        $this->dotEnvEditor->write([
            'app_version' => $version,
            'billing_enabled' => true,
            'notifications_enabled' => true,
            'STATIC_FILE_DELIVERY' => null,
            'PUBLIC_DISK_DRIVER' => 'local',
            'WAVE_STORAGE_DISK' => 'uploads'
        ]);

        Cache::flush();

        return redirect('/')->with('status', 'Updated the site successfully.');
	}

    /**
     * Get new app version.
     *
     * @return string
     */
    private function getAppVersion()
    {
        try {
            return $this->dotEnvEditor->load(base_path('env.example'))['app_version'];
        } catch (Exception $e) {
            return '2.4.5';
        }
    }
}
