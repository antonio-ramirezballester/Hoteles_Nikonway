<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Hotel;

class HotelsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $hotel1=new Hotel;
        $hotel1->name="test";
        $hotel1->img="test";
        $hotel1->description="test";
        $hotel1->localization="test";
        $hotel1->save();
    }
}
