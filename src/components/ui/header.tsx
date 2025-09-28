import * as React from "react";
import { ChevronDown } from "lucide-react";

function Header() {
  return (
    <nav className="w-full bg-white border-b border-gray-300 shadow-sm p-1">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <ul className="flex-1">
          <li className="text-2xl font-bold text-gray-800 tracking-wide cursor-pointer">
            Patient Management
          </li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="relative">
            <select className="appearance-none bg-gray-100 border border-gray-300 p-2 pr-8 rounded-lg cursor-pointer hover:bg-gray-200 transition-all duration-200">
              <option>Nurse View</option>
              <option>Doctor View</option>
              <option>Admin View</option>
            </select>
            <ChevronDown
              className="w-5 h-5 text-gray-500 absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none"
            />
          </div>

          <div className="text-right">
            <h3 className="font-semibold text-gray-900 text-lg cursor-pointer">
              Dr. Sarah Johnson
            </h3>
            <h5 className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full border border-green-300 shadow-sm inline-flex items-center justify-center mt-1">
              Nurse
            </h5>
          </div>

          <div className="bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg text-lg font-bold cursor-pointer hover:bg-blue-600 transition-colors">
            SJ
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
