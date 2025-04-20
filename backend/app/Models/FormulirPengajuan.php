<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class FormulirPengajuan extends Model
{
    use HasFactory;
    protected $table = "formulir_pengajuan";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_pengajuan',
        'id_siswa',
        'jenis_surat',
        'alasan',
        'tgl_tidakhadir',
        'lampiran',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id_siswa' => 'integer',
        'tgl_tidakhadir' => 'date',
    ];

    public function idSiswa()
    {
        return $this->belongsTo(Siswa::class, "id_siswa", "id");
    }

    public function persetujuan()
    {
        return $this->hasOne(PersetujuanIzin::class, "id_pengajuan", "id");
    }
}
