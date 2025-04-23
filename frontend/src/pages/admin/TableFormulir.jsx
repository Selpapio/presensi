import React, { useEffect, useState } from "react";
import { client } from "../../utils/axiosClient";
import { toast } from "sonner";

export default function TableFormulir() {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const res = (await client.get("/api/formulir-pengajuan")).data;
      setData(res.data);
    } catch (error) {
      toast.error("Error", {
        description: error?.msg || "Operasi gagal.",
      });
    }
  };

  const handleSetujui = async (id) => {
    try {
      const res = (
        await client.post("/api/persetujuan-izin/", {
          id_pengajuan: id,
          status_persetujuan: "Diterima",
        })
      ).data;

      if (res) {
        toast.success("Berhasil", {
          description: "Pengajuan berhasil diterima!",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: error?.msg || "Operasi gagal.",
      });
    } finally {
      getData();
    }
  };

  const handleTolak = async (id) => {
    try {
      const res = (
        await client.post("/api/persetujuan-izin/", {
          id_pengajuan: id,
          status_persetujuan: "Ditolak",
        })
      ).data;

      if (res) {
        toast.success("Berhasil", {
          description: "Pengajuan berhasil ditolak!",
        });
      }
    } catch (error) {
      toast.error("Error", {
        description: error?.msg || "Operasi gagal.",
      });
    } finally {
      getData();
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus data ini?")) {
      try {
        const res = (await client.delete(`/api/formulir-pengajuan/${id}`)).data;
        if (res) {
          toast.success("Berhasil", {
            description: "Pengajuan berhasil dihapus!",
          });
        }
      } catch (error) {
        console.error("Error deleting data:", error);
        toast.error("Error", {
          description: error?.msg || "Operasi gagal.",
        });
      } finally {
        getData();
      }
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "ditolak":
        return "bg-red-500 text-white";
      case "diterima":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  return (
    <div className="container mx-auto mt-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-6">Daftar Pengajuan</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-lg">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="py-3 px-4 text-left">NIS</th>
              <th className="py-3 px-4 text-left">Nama Lengkap</th>
              <th className="py-3 px-4 text-left">Kelas</th>
              <th className="py-3 px-4 text-left">Jenis Surat</th>
              <th className="py-3 px-4 text-left">Alasan</th>
              <th className="py-3 px-4 text-left">Tanggal Ketidakhadiran</th>
              <th className="py-3 px-4 text-center">Lampiran</th>
              <th className="py-3 px-4 text-center">Status</th>
              <th className="py-3 px-4 text-center">Akses</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="border-b border-gray-200 py-3 px-4">
                  {item.id_siswa.nis}
                </td>
                <td className="border-b border-gray-200 py-3 px-4">
                  {item.id_siswa.nama}
                </td>
                <td className="border-b border-gray-200 py-3 px-4">
                  {item.id_siswa.kelas}
                </td>
                <td className="border-b border-gray-200 py-3 px-4">
                  {item.jenis_surat}
                </td>
                <td className="border-b border-gray-200 py-3 px-4">
                  {item.alasan}
                </td>
                <td className="border-b border-gray-200 py-3 px-4">
                  {new Date(item.tgl_tidakhadir).toLocaleDateString()}
                </td>
                <td className="border-b border-gray-200 py-3 px-4">
                  {item.lampiran ? (
                    <a
                      href={`${
                        import.meta.env.VITE_PUBLIC_LARAVEL_URL
                      }/storage/${item.lampiran}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 text-center line-clamp-1 truncate w-[200px] hover:underline"
                    >
                      Lihat Lampiran
                    </a>
                  ) : (
                    <span className="text-gray-500">Tidak Ada Lampiran</span>
                  )}
                </td>
                <td className="border-b border-gray-200 py-3 px-4">
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      item.persetujuan?.status_persetujuan
                    )}`}
                  >
                    {item.persetujuan?.status_persetujuan || "diproses"}
                  </span>
                </td>
                <td className="flex h-full space-x-3 border-b border-gray-200 py-6 px-4">
                  <button
                    onClick={() => handleTolak(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
                  >
                    Tolak
                  </button>
                  <button
                    onClick={() => handleSetujui(item.id)}
                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors duration-200 text-sm"
                  >
                    Setujui
                  </button>
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors duration-200 text-sm"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
