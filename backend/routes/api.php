<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\PengajuanController;
use App\Http\Controllers\OrangTuaController;
use App\Http\Controllers\PersetujuanIzinController;
use App\Http\Controllers\SiswaController;
use App\Http\Middleware\AdminMiddleware;
use App\Models\Autentikasi;
use App\Models\PersetujuanIzin;
// use Illuminate\Routing\RouteGroup; // Biasanya tidak perlu import ini secara manual
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route default bawaan Laravel, bisa dihapus jika tidak dipakai
// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');


// === Route untuk Siswa (Contoh Resource Controller) ===

Route::middleware(AdminMiddleware::class)->group(function () {
    
    Route::apiResource("/persetujuan-izin", PersetujuanIzinController::class);
    Route::delete("/formulir-pengajuan/{id}", [PengajuanController::class, "destroy"]);
    Route::get("/formulir-pengajuan", [PengajuanController::class, "index"]);
});

Route::apiResource("/siswa", SiswaController::class);

Route::get("/formulir-pengajuan/{id}", [PengajuanController::class, "getByNis"]);
// Route::delete("/persetujuan-izin/{id}", [PengajuanController::class, "destroy"]);

// === Route untuk Orang Tua ===
Route::post("/formulir-pengajuan", [OrangTuaController::class, "buatPengajuan"]);




// === Route untuk Admin ===

// --- Grup route dengan prefix /admin ---
// Route::prefix("/admin")->group(function () {

// Route untuk login admin (Public - Tidak perlu login)
// Method: POST
// URL: /api/admin/login


// --- Grup route di dalam /admin yang MEMERLUKAN otentikasi admin (Sanctum) --

// }); // Akhir dari grup prefix admin

Route::post('/login', [AdminController::class, 'login']);

Route::middleware(AdminMiddleware::class)->group(function () {
    Route::post('/logout', [AdminController::class, 'logout']);
    Route::get('/user', [AdminController::class, 'user']);
});


// Route::post('/Login', [AuthController::class, 'Login']);
// Route::get('/User', [AuthController::class, 'User']);
// Route::post('/Register', [AuthController::class, 'register']);
