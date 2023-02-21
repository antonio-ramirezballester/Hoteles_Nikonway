<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Employe>
 */
class EmployeFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            "name"=>$this->faker->firstName(),
            "surnames"=>$this->faker->lastName(),
            "job"=>$this->faker->randomElement(["Manager", "Receptionist", "Housekeeper", "Doorman", "Bellboy", "Valet parking", "Life guard", "Security guard", "Barman", "Waiter", "Chef", "Cleaner"]),
            "salary"=>$this->faker->numberBetween(1500,50000),
            "hotel_id"=>$this->faker->randomElement([1,2,3,4,5,6,7,8,9,10])
        ];
    }
}
