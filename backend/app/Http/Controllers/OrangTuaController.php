<?php

namespace App\Http\Controllers;

use App\Models\FormulirPengajuan;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str; // Import class Str

class OrangTuaController extends Controller
{
    public function buatPengajuan(Request $request)
    {
        // Validasi input
        $request->validate([
            "nis" => "required",
            "jenis_surat" => "required",
            "alasan" => "required",
            "lampiran" => "nullable|file|mimes:pdf,jpg,jpeg,png|max:2048", // Validasi file
        ]);

        // Cari siswa berdasarkan NIS
        $siswa = Siswa::where("nis", $request->nis)->first();

        if (!$siswa) {
            return response()->json([
                "msg" => "Siswa tidak ditemukan"
            ], 404);
        }

        // Simpan file lampiran jika ada
        $path = null;
        if ($request->hasFile('lampiran')) {
            $file = $request->file('lampiran');
            $fileName = Str::random(10) . '.' . $file->getClientOriginalExtension(); // Generate nama unik
            $path = $file->storeAs('storage/app/private', $fileName); // Simpan di storage/app/public/lampiran
            $path = str_replace('public/', 'storage/', $path); // Ubah path agar sesuai dengan URL publik
        }

        // Buat pengajuan baru
        $pengajuan = FormulirPengajuan::create([
            'id_siswa' => $siswa->id,
            'jenis_surat' => $request->jenis_surat,
            'alasan' => $request->alasan,
            'tgl_tidakhadir' => now(),
            'lampiran' => $path, // Simpan path file
        ]);

        // Response JSON
        return response()->json([
            "msg" => "Pengajuan berhasil dibuat",
            "siswa" => $siswa,
            "pengajuan" => $pengajuan
        ]);
    }
}