import { Outlet } from "react-router-dom";
import { Toaster } from "./ui/sonner";

export default function LayoutLogin() {
  return (
    <div className="flex">
      <Toaster richColors position="top-center" />
      <div className="w-full">
        <main className="min-h-screen ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
