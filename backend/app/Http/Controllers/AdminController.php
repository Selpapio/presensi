<?php

namespace App\Http\Controllers;

use App\Models\Admin; // Pastikan model Admin di-import
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AdminController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'username' => 'required|string', // Tambahkan tipe data jika perlu
            'password' => 'required|string', // Tambahkan tipe data jika perlu
        ]);

        // Cari admins berdasarkan username
        $admin = Admin::where('username', $request->username)->first();

        // Cek apakah admin ditemukan DAN password cocok
        if (!$admin || !Hash::check($request->password, $admin->password)) {
            // Jika tidak cocok, lempar exception validasi
            throw ValidationException::withMessages([
                // Lebih baik gunakan key spesifik seperti 'username' atau 'password'
                // atau key umum seperti 'credentials' atau 'error' daripada 'msg'
                'credentials' => ['Username atau password yang diberikan salah.'],
            ]);
        }

        // Hapus token lama jika ada (opsional, tergantung strategi token Anda)
        $admin->tokens()->delete();

        // Buat token Sanctum baru untuk admin
        $token = $admin->createToken("sanctum_token"); // Anda bisa beri nama token yang lebih spesifik jika mau

        // Kirim response JSON jika berhasil
        return response()->json([
            'status' => true, // Indikator sukses
            'message' => 'Login berhasil', // Pesan sukses
            'token' => $token->plainTextToken, // Kirim plain text token ke client
            'token_type' => 'Bearer', // Standar tipe token
            'admin' => [ // Kirim data admin yang relevan (jangan kirim password!)
                'id' => $admin->id,
                'username' => $admin->username,
                // Tambahkan field lain jika perlu, misal: 'name' => $admin->name
            ]
        ], 200); // Kode status HTTP 200 OK
    }

    // Anda mungkin butuh method logout juga
    public function logout(Request $request)
    {
        // Revoke token yang digunakan untuk request ini
        $request->user()->currentAccessToken()->delete();

        return response()->json([
            'status' => true,
            'message' => 'Logout berhasil'
        ], 200);
    }

    public function user()
    {
        $user = auth("sanctum")->user();

        if (!$user) {
            return response()->json([
                'status' => false,
                'message' => 'User belum login'
            ], 401);
        }

        return response()->json([
            'status' => true,
            'user' => $user,
            'message' => 'User berhasil diambil'
        ], 200);
    }
}
