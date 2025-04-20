import React, { useState } from "react";
import { client } from "../utils/axiosClient";

export default function Status() {
  const [nis, setNis] = useState("");
  const [data, setData] = useState([]);

  const getData = async (id) => {
    try {
      const res = (await client.get(`/api/formulir-pengajuan/${id}`)).data;
      setData(res.data);
    } catch (error) {
      alert(error.response.data.message || "Terjadi kesalahan");
    }
  };

  
  const getStatusColor = (status) => {
    switch (status?.toLowerCase()) {
      case "ditolak":
        return "bg-red-500 text-white";
      case "disetujui":
        return "bg-green-700 text-white";
      case "diproses":
        return "bg-yellow-500 text-black";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div>
      <section className="p-6 bg-gradient-to-r from-red-600 to-red-800 rounded-lg shadow-xl mb-8">
        <div className="flex items-center space-x-6 container mx-auto">
          <img
            className="w-24 h-24 object-cover rounded-full border-4 border-white"
            src="logo-sekolah.jpg"
            alt="Logo Sekolah"
          />
          <div className="space-y-2">
            <h1 className="text-white text-3xl font-bold text-center">
              Portal Surat Izin Sekolah
            </h1>
            <p className="text-white text-lg font-medium">
              Sistem Pengajuan Surat Izin Tidak Masuk
            </p>
          </div>
        </div>
      </section>
      <div>
        <h2 className="text-center text-4xl font-semibold text-red-500 mb-6">
          Periksa Status Pengajuan
        </h2>
        <p className="py-5 pl-10 mb-5 text-2xl text-black">
          Masukkan NIS untuk memeriksa status pengajuan surat.
        </p>
        <div className="pl-10 flex space-x-5">
          <input
            value={nis}
            onChange={(e) => setNis(e.target.value)}
            type="text"
            id="checkNIS"
            placeholder="Masukkan NIS"
            className="items-center w-min-10 p-2 border rounded-lg focus:ring-gray-500 focus:border-blue-500"
          />
          <button
            onClick={() => getData(nis)}
            className="bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Cek Status
          </button>
        </div>
        <p id="statusMessage" className="mt-4"></p>
      </div>
      <div className="container mx-auto mt-8 px-4">
        <h1 className="text-2xl font-bold text-center mb-6">
          Daftar Pengajuan
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
            <thead>
              <tr className="bg-red-600 text-white">
                <th className="py-3 px-4 text-left">NIS</th>
                <th className="py-3 px-4 text-left">Nama Lengkap</th>
                <th className="py-3 px-4 text-left">Kelas</th>
                <th className="py-3 px-4 text-left">Alasan</th>
                <th className="py-3 px-4 text-left">Tanggal Ketidakhadiran</th>
                <th className="py-3 px-4 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  <td className="border-b border-gray-200 py-3 px-4">
                    {item.id_siswa?.nis}
                  </td>
                  <td className="border-b border-gray-200 py-3 px-4">
                    {item.id_siswa?.nama}
                  </td>
                  <td className="border-b border-gray-200 py-3 px-4">
                    {item.id_siswa?.kelas}
                  </td>
                  <td className="border-b border-gray-200 py-3 px-4">
                    {item.alasan}
                  </td>
                  <td className="border-b border-gray-200 py-3 px-4">
                    {item.tgl_tidakhadir}
                  </td>
                  <td className="border-b border-gray-200 py-3 px-4">
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                        item.persetujuan?.status_persetujuan 
                      )}`}
                    >
                      {item.persetujuan?.status_persetujuan ?? "Diproses"}
                    </span>
                  </td>
                </tr>     
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
