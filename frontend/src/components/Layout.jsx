import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Toaster } from "./ui/sonner";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <Toaster richColors position="top-center" />
      <div className="w-full">
        <main className="min-h-screen">
          <section className="p-6 bg-gradient-to-r from-red-600 to-red-800 shadow-xl mb-8">
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
                  Sistem Pengajuan Otomatis Presensi Siswa
                </p>
              </div>
            </div>
          </section>
          <section className="px-12">
            <Outlet />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
