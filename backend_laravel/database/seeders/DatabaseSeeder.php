<?php

namespace Database\Seeders;
use \App\Models\Room;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            HotelsTableSeeder::class
        ]);

        Room::factory(4)->create();
    }
}
