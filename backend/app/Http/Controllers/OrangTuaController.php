<?php

namespace App\Http\Controllers;

use App\Models\FormulirPengajuan;
use App\Models\Siswa;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class OrangTuaController extends Controller
{
    public function buatPengajuan(Request $request)
    {

        $request->validate([
            "nis" => "required",
            "jenis_surat" => "required",
            "alasan" => "required",
            "lampiran" => "nullable|file|mimes:pdf,jpg,jpeg,png|max:2048",
        ]);


        $siswa = Siswa::where("nis", $request->nis)->first();

        if (!$siswa) {
            return response()->json([
                "msg" => "Siswa tidak ditemukan"
            ], 404);
        }

        $lampiran_path = null;
        if ($request->hasFile('lampiran')) {
            $lampiran_path = $request->file("lampiran")->store("lampiran", "public");
        }

        $pengajuan = FormulirPengajuan::create([
            'id_siswa' => $siswa->id,
            'jenis_surat' => $request->jenis_surat,
            'alasan' => $request->alasan,
            'tgl_tidakhadir' => now(),
            'lampiran' => $lampiran_path
        ]);


        return response()->json([
            "msg" => "Pengajuan berhasil dibuat",
            "siswa" => $siswa,
            "pengajuan" => $pengajuan
        ]);
    }
}
