<?php

namespace App\Http\Controllers;

use App\Models\FormulirPengajuan;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PengajuanController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = FormulirPengajuan::with(["idSiswa", "persetujuan"])->get();

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

        FormulirPengajuan::create($request->all());

        // FormulirPengajuan::create([
        //     'nis' => $request->nis,
        //     'nama' => $request->nama,
        //     'kelas' => $request->kelas,
        // ]);

        return response()->json([
            "msg" => "Formulir Pengajuan berhasil diambil"
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = FormulirPengajuan::where("id", $id)->first();

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

        $siswa = FormulirPengajuan::where("id", $id)->first();

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
        $siswa = FormulirPengajuan::where("id", $id)->first();

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

    public function getByNis($id)
    {
        $nis = $id;

        // 2. Query FormulirPengajuan using the relationship
        // We want FormulirPengajuan records WHERE the related Siswa has the specified NIS.
        $data = FormulirPengajuan::with(['idSiswa', 'persetujuan']) // Eager load the student details
            ->whereHas('idSiswa', function ($query) use ($nis) {
                // This adds a condition on the related Siswa model
                $query->where('nis', $nis);
            })
            ->get(); // Get all matching pengajuan records

        // 3. Return the data
        // It's okay to return an empty array if the student exists but has no submissions yet.
        return response()->json([
            "data" => $data
        ]);

        /*
                // Alternative Approach (Less Efficient - 2 Queries):
                // a. Find the student by NIS
                $siswa = Siswa::where('nis', $nis)->first();
        
                // b. Check if student exists
                if (!$siswa) {
                     return response()->json([
                         "msg" => "Siswa dengan NIS " . $nis . " tidak ditemukan"
                     ], 404);
                }
        
                // c. Get pengajuan for that student's ID
                $data = FormulirPengajuan::with('idSiswa')
                                          ->where('id_siswa', $siswa->id)
                                          ->get();
        
                 return response()->json([
                     "data" => $data
                 ]);
                */
    }
}
