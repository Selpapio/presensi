import { Outlet } from "react-router-dom";
import SidebarAdmin from "./SidebarAdmin";
import Footer from "./Footer";

export default function LayoutAdmin() {
    return (
    <div className="flex">
        <SidebarAdmin />
        <div className="w-full">
        <main className="min-h-screen">
            <Outlet />
        </main>
        <Footer />
        </div>
    </div>
    );
}
