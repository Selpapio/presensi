import React from "react";

export default function BerandaAdmin() {
  return (
    <>
      <section className="flex container flex-col mx-auto px-4 py-8">
        <div className="py-4">
          <h2 className="text-center text-4xl font-semibold text-red-500 mb-4">
            Selamat Datang di Portal Surat Izin Sekolah SD Negeri Madyopuro 5
          </h2>
        </div>
        <div className="py-4">
          <p className="text-xl w-[800px] mb-6 text-gray-700">
            Portal ini menyediakan layanan pengajuan surat izin/keterangan
            secara daring. Siswa dapat dengan mudah mengajukan izin tidak masuk
            sekolah melalui sistem ini.
          </p>
        </div>
        <div className="py-4">
          <h3 className=" text-xl font-semibold mb-4">Petunjuk Penggunaan:</h3>
          <ol className="text-xl text-gray-700 list-decimal pl-8 mb-6">
            <li className="mb-2">
              Pilih menu <b>Formulir Pengajuan</b> untuk mengisi dan mengajukan
              surat izin.
            </li>
            <li className="mb-2">
              Isi formulir dengan lengkap, termasuk alasan dan tanggal tidak
              masuk sekolah.
            </li>
            <li className="mb-2">
              Setelah pengajuan, Anda dapat memeriksa status di menu
              <b>Status Pengajuan</b>.
            </li>
            <li className="mb-2">
              Jika memerlukan bantuan lebih lanjut, kunjungi menu <b>Kontak</b>.
            </li>
          </ol>
        </div>
      </section>
    </>
  );
}
