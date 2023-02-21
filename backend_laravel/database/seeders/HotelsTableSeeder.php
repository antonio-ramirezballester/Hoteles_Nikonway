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
        // $hotel1=new Hotel;
        // $hotel1->name="test";
        // $hotel1->img="https://www.essscan.es/php/wp-content/uploads/test.png";
        // $hotel1->description="test";
        // $hotel1->localization="test";
        // $hotel1->phone_number="123456789";
        // $hotel1->email="test@nikonway.com";
        // $hotel1->save();

        $hotel1=new Hotel;
        $hotel1->name="Hotel Calatraba";
        $hotel1->img="https://media-cdn.holidaycheck.com/w_768,h_432,c_fill,q_auto,f_auto/ugc/images/d702ab5b-707c-3396-b2cc-884b4ab69716";
        $hotel1->description="Welcome to this intimate and atypical island home, which is part of the seafront of Palma, in the historic heart of the city. You will sleep in rooms and suites loft style, with stunning sea views and to Palma's bay.";
        $hotel1->localization="Palma";
        $hotel1->phone_number="971728110";
        $hotel1->email="calatrava@nikonway.com";
        $hotel1->save();
    }
}
