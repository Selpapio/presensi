<?php

namespace App\Http\Controllers;

use App\Models\Siswa;
use Illuminate\Http\Request;

class SiswaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = Siswa::all();

        return response()->json([
            "data" => $data
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'nis' => "required",
            'nama' => "required",
        ]);

        Siswa::create($request->all());

        // Siswa::create([
        //     'nis' => $request->nis,
        //     'nama' => $request->nama,
        //     'kelas' => $request->kelas,
        // ]);

        return response()->json([
            "msg" => "Siswa berhasil diambil"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Siswa::where("id", $id)->first();

        if (!$data) {
            return response()->json([
                "msg" => "Data  siswa tidak ditemukan"
            ], 404);
        }

        return response()->json([
            "data" => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'nis' => "required",
            'nama' => "required",
            'kelas' => "required",
        ]);

        $siswa = Siswa::where("id", $id)->first();

        if (!$siswa) {
            return response()->json([
                "msg" => "Data tidak ditemukan"
            ], 404);
        }

        $siswa->update($request->all());

        return response()->json([
            "msg" => "Data berhasil diupdate"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $siswa = Siswa::where("id", $id)->first();

        if (!$siswa) {
            return response()->json([
                "msg" => "Data tidak ditemukan"
            ], 404);
        }

        $siswa->delete();

        return response()->json([
            "msg" => "Data berhasil dihapus"
        ]);
    }
}
