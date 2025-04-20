<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\FormulirPengajuan;
use App\Models\PersetujuanIzin;

class PersetujuanIzinFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = PersetujuanIzin::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'id_persetujuan' => fake()->word(),
            'id_pengajuan' => FormulirPengajuan::factory()->create()->id_pengajuan,
            'status_persetujuan' => fake()->randomElement(["diterima","ditolak"]),
        ];
    }
}
