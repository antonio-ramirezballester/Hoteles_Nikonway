<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
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
            "type"=>$this->faker->randomElement(["Premium", "Silver", "Platinum", "Gold"]),
            "description"=>$this->faker->text(),
            "price"=>$this->faker->numberBetween(200,5000),
            "hotel_id"=>$this->faker->randomElement([1,2,3,4,5,6,7,8,9,10])
        ];
    }
}
