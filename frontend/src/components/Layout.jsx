import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <main className="min-h-screen ">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
