<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Siswa;
use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // User::factory(10)->create();

        // User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);

        $admins = [
            [
                'username' => 'admin',
                'password' => Hash::make('sdnmadyopuro5')
            ],
        ]; // Added semicolon here

        $siswas = [
            [
                'nis' => "1234",
                'nama' => "budi",
                'kelas' => "1a"
            ],
        ];

        $admins = [
            [
                'username' => 'admin',
                'password' => Hash::make('sdnmadyopuro5')
            ],
        ]; // Added semicolon here

        foreach ($admins as $admin) {
            Admin::create($admin); // Removed the unnecessary comma here
        }

        foreach ($siswas as $siswa) {
            Siswa::create($siswa);
        }
    }
}
