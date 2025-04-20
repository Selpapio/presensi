import React, { useState } from "react";
import { client } from "../utils/axiosClient";
import { Card, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export default function Status() {
  const [nis, setNis] = useState("");
  const [data, setData] = useState([]);

  const getData = async (id) => {
    try {
      const res = (await client.get(`/api/formulir-pengajuan/${id}`)).data;
      if (Array.isArray(data) && data.length < 1) {
        toast.error("Gagal Mendapatkan Data", {
          description: "Data rekor tidak kosong, atau siswa tidak ditemukan.",
        });
      } else {
        toast.success("Berhasil", {
          description: "Data rekor berhasil diambil.",
        });
      }

      setData(res.data);
    } catch (error) {
      if (error?.response?.status === 401) {
        toast.error("Input Tidak Lengkap", {
          description: "NIS Wajib diisi.",
        });
        return;
      }

      toast.error("Gagal Mengajukan", {
        description:
          error?.response?.data?.msg || "Terjadi kesalahan pada server.",
      });
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
    <Card>
      <CardHeader>
        <h2 className="text-center text-4xl font-semibold text-red-500">
          Periksa Status Pengajuan
        </h2>
        <p className="pt-4 pb-5 pl-10 text-2xl text-black">
          Masukkan NIS untuk memeriksa status pengajuan surat.
        </p>
        <div className="flex items-center pl-10 space-x-5">
          <input
            value={nis}
            onChange={(e) => setNis(e.target.value)}
            type="text"
            id="checkNIS"
            placeholder="Masukkan NIS"
            className="items-center w-min p-2 border rounded-lg focus:ring-gray-500 focus:border-blue-500"
          />
          <Button
            onClick={() => getData(nis)}
            className="bg-red-500 text-white px-5 py-2 h-full rounded-lg hover:bg-green-600 transition duration-200"
          >
            Cek Status
          </Button>
        </div>
        <p id="statusMessage" className="mt-4"></p>
      </CardHeader>
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
    </Card>
  );
}
