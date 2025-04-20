import { Outlet } from "react-router-dom";

export default function LayoutLogin() {
  return (
    <div className="flex">
      <div className="w-full">
        <main className="min-h-screen ">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
