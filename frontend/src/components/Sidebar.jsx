import React from "react";
import { navData } from "./../data/navData";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="flex flex-col w-64 min-h-screen text-white font-semibold bg-[#1F1F1F] shadow-lg">
      <div className="flex items-center justify-center h-35 bg-[#272727]  font-bold border-b border-gray-700">
        SDN MADYOPURO 5
      </div>

      <nav className=" flex-1 py-6 overflow-y-auto">
        <ul className=" space-y-2 px-5">
          {navData.map((item) => (
            <li key={item.link}>
              <Link
                to={item.link}
                className="flex items-center gap-3 p-3 rounded-md transition-colors duration-200 hover:bg-[#3A3A3A] hover:text-white"
              >
                <span className="text-base font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
