<?php

namespace Database\Seeders;
use \App\Models\Hotel;
use \App\Models\Room;
use \App\Models\Employe;

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

        Hotel::factory(9)->create();
        Room::factory(50)->create();
        Employe::factory(240)->create();

    }
}
