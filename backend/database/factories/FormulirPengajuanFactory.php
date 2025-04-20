<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\FormulirPengajuan;
use App\Models\Siswa;

class FormulirPengajuanFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = FormulirPengajuan::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'id_pengajuan' => fake()->word(),
            'id_siswa' => Siswa::factory(),
            'jenis_surat' => fake()->randomElement(["sakit","izin"]),
            'alasan' => fake()->text(),
            'tgl_tidakhadir' => fake()->date(),
            'lampiran' => fake()->word(),
        ];
    }
}
