<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('hotels', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('img')->default("https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png");
            $table->string('description')->default("No description");
            $table->string('localization')->default("Palma");
            $table->string('phone_number')->default("No phone number");
            $table->string('email')->default("No email");
            // TODO: Añadir equipamiento al los hoteles
            // $table->json('equipament');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('hotels');
    }
};
