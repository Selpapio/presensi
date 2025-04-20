import React, { useState } from "react";
import { client } from "../utils/axiosClient";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";

export default function Formulir() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [jenisSurat, setJenisSurat] = useState("");

  const handleFileChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setSelectedFile(event.target.files[0]);
    } else {
      setSelectedFile(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!jenisSurat) {
      toast.error("Input Tidak Lengkap", {
        description: "Silakan pilih Jenis Surat.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(e.target);
      formData.append("jenis_surat", jenisSurat);
      formData.append("lampiran", selectedFile);

      const res = await client.post("/api/formulir-pengajuan", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Berhasil", {
        description: res.data?.msg || "Pengajuan berhasil dibuat.",
      });
      e.target.reset();
      setJenisSurat("");
    } catch (error) {
      toast.error("Gagal Mengajukan", {
        description:
          error?.response?.data?.msg || "Terjadi kesalahan pada server.",
      });
      console.error("Submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pb-12">
      <Card className="">
        <section className="form-section">
          <CardHeader className="text-center text-4xl font-semibold text-red-500 mb-6">
            Formulir Pengajuan
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <label className="flex flex-col space-y-3">
                <span className="block font-bold">NIS:</span>
                <input
                  type="text"
                  name="nis"
                  placeholder="Masukkan NIS"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                />
              </label>
              <label className="flex flex-col space-y-3">
                <span className="block font-bold">Jenis Surat:</span>
                <Select
                  value={jenisSurat}
                  onValueChange={setJenisSurat}
                  required
                  name="jenis_surat"
                >
                  <SelectTrigger className="w-full py-6 cursor-pointer border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500">
                    <SelectValue placeholder="Jenis Surat" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="izin">Surat Izin Tidak Masuk</SelectItem>
                    <SelectItem value="sakit">Surat Izin Sakit</SelectItem>
                  </SelectContent>
                </Select>
              </label>
              <label className="flex flex-col space-y-3">
                <span className="block font-bold">Alasan:</span>
                <textarea
                  name="alasan"
                  placeholder="Masukkan alasan pengajuan"
                  required
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  defaultValue={""}
                />
              </label>
              <label className="flex flex-col space-y-3">
                <span className="block font-bold">Lampiran (Opsional):</span>
                <div className="">
                  <Input
                    onChange={handleFileChange}
                    id="picture"
                    className="w-full pb-8 pt-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    type="file"
                  />
                </div>{" "}
              </label>
              <Button
                type="submit"
                disabled={isSubmitting}
                className={`w-50 bg-red-500 text-white font-bold py-3 rounded-md hover:bg-red-600 transition duration-200 ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isSubmitting && <Loader className="animate-spin" />}
                {isSubmitting ? "Tunggu..." : "Ajukan Surat"}
              </Button>
            </form>
          </CardContent>
        </section>
      </Card>
    </div>
  );
}
