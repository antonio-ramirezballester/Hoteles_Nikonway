<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Hotel>
 */
class HotelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "name"=>$this->faker->name(),
            "description"=>$this->faker->text(),
            "phone_number"=>$this->faker->phoneNumber(),
            "email"=>$this->faker->companyEmail()
        ];
    }
}
