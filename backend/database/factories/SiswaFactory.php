<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Siswa;

class SiswaFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Siswa::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'nis' => fake()->word(),
            'nama' => fake()->word(),
            'kelas' => fake()->randomElement(["1a","1b","2a","2b","3a","3b","4a","4b","5a","5b","6a","6b."]),
        ];
    }
}
