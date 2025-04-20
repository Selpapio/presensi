<?php

namespace App\Http\Controllers;

use App\Models\PersetujuanIzin;
use Illuminate\Http\Request;

class PersetujuanIzinController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = PersetujuanIzin::all();

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
            'id_pengajuan' => "required",
            'status_persetujuan' => "required",
        ]);

        PersetujuanIzin::create($request->all());

        return response()->json([
            "msg" => "berhasil"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = PersetujuanIzin::where("id", $id)->first();

        if (!$data) {
            return response()->json([
                "msg" => "Data  persetujuanizin tidak ditemukan"
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
            'id_pengajuan' => "required",
            'status_pengajuan' => "required",
        ]);

        $persetujuanizin = PersetujuanIzin::where("id", $id)->first();

        if (!$persetujuanizin) {
            return response()->json([
                "msg" => "Data tidak ditemukan"
            ], 404);
        }

        $persetujuanizin->update($request->all());

        return response()->json([
            "msg" => "Data berhasil diupdate"
        ]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $persetujuanizin = PersetujuanIzin::where("id", $id)->first();

        if (!$persetujuanizin) {
            return response()->json([
                "msg" => "Data tidak ditemukan"
            ], 404);
        }

        $persetujuanizin->delete();

        return response()->json([
            "msg" => "Data berhasil dihapus"
        ]);
    }
}
