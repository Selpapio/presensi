    <?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {

        Schema::create('persetujuan_izin', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_pengajuan')->index();
            $table->foreign('id_pengajuan')->references('id')->on('formulir_pengajuan')->onUpdate("cascade")->onDelete("cascade");
            $table->enum('status_persetujuan', ["diterima", "ditolak"]);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('persetujuan_izin');
    }
};
