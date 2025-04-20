import React, { useState } from "react";
import { client } from "../utils/axiosClient";

export default function Formulir() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formData = new FormData(e.target);
      
      // Make sure field names match your backend expectations
      const res = await client.post("/api/formulir-pengajuan", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      
      alert(res.data?.msg || "Pengajuan berhasil dibuat");
      e.target.reset(); // Reset form after success
    } catch (error) {
      alert(error?.response?.data?.msg || "Terjadi kesalahan");
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="">
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
      <main className="w-full mx-auto p-5 bg-white rounded-lg shadow-md mt-5">
        <section className="form-section">
          <h2 className="text-center text-4xl font-semibold text-red-500 mb-6">
            Formulir Pengajuan
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <label className="block">
              <span className="block font-bold">NIS:</span>
              <input
                type="text"
                name="nis"  // Changed from id to name
                placeholder="Masukkan NIS"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </label>
            <label className="block">
              <span className="block font-bold">Jenis Surat:</span>
              <select
                name="jenis_surat"  // Changed from id to name
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              >
                <option value="izin">Surat Izin Tidak Masuk</option>
                <option value="sakit">Surat Izin Sakit</option>
              </select>
            </label>
            <label className="block">
              <span className="block font-bold">Alasan:</span>
              <textarea
                name="alasan"  // Changed from id to name
                placeholder="Masukkan alasan pengajuan"
                required
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                defaultValue={""}
              />
            </label>
            <label className="block">
              <span className="block font-bold">Lampiran (Opsional):</span>
              <input
                type="file"
                name="lampiran"  // Changed from id to name and from 'attachment' to 'lampiran'
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </label>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-50 bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition duration-200 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Tunggu..." : "Ajukan Surat"}
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}