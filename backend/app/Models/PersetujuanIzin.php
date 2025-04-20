<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class PersetujuanIzin extends Model
{
    use HasFactory;
    protected $table = "persetujuan_izin";
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_persetujuan',
        'id_pengajuan',
        'status_persetujuan',
    ];

    public function formulirPengajuan(): BelongsTo
    {
        return $this->belongsTo(FormulirPengajuan::class, '
        ', 'id_pengajuan');
    }
}
