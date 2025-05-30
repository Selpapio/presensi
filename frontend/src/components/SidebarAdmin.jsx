import { Link } from "react-router-dom";
import { navDataAdmin } from "../data/navAdmin";
import { client } from "../utils/axiosClient";
import { Button } from "./ui/button";

export default function SidebarAdmin() {
  const handleLogout = async () => {
    localStorage.removeItem("token");
    try {
      await client.post("/api/logout");
    } catch (error) {
      console.log(error);
    } finally {
      location.replace("/login");
    }
  };
  return (
    <aside className="flex flex-col w-[300px] min-h-screen text-white font-semibold bg-[#1F1F1F] shadow-lg">
      <div className="flex items-center justify-center h-20 bg-[#272727] text-2xl font-bold border-b border-gray-700">
        ADMIN
      </div>

      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-2 px-4">
          {navDataAdmin.map((item) => (
            <li key={item.link}>
              <Link
                to={`${item.link}`}
                className="flex items-center gap-3 p-3 rounded-md transition-colors duration-200 hover:bg-[#3A3A3A] hover:text-000"
              >
                <span className="text-base font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="border-t border-gray-700 py-4 px-4">
        <Button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 w-full h-full text-lg"
        >
          Logout
        </Button>
      </div>
    </aside>
  );
}
