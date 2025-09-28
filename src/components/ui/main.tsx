import * as React from "react";
import { User } from "lucide-react";
import {Circle,Users,Calendar} from "lucide-react"
function Main() {
  return (
    <main className="max-w-7xl mx-auto px-8 py-10">
      <div className="flex items-center gap-3">
        <User className="w-8 h-8 text-blue-500" />
        <h1 className="text-3xl font-bold text-gray-800">Patient Management</h1>
      </div>
      <h5 className="mt-2 text-gray-500 text-sm">
        Manage and view all patient records
      </h5>
      <div className="bg-white mt-3 rounded p-5 w-full border border-gray-100 h-auto flex items-center gap-3">
      
      <input
        type="text"
        placeholder="Search patient by id, name or condition..."
        className="flex-1 bg-gray-100 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded hover:bg-gray-200 transition-colors">
        <Circle className="w-4 h-4" />
        Status: All
      </button>

      <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
        <User className="w-4 h-4" />
        Add patient
      </button>

    </div>

    <div className="flex items-center gap-20 mt-20">
        <div className="flex gap-5 p-10 bg-white rounded">
            <Users/>
              <div>
                <h1>Total Patients</h1>
                <h1>4</h1>
            </div>
        </div>
        <div className="flex gap-5 p-10 bg-white rounded">
           <div className="w-6 h-6 flex items-center justify-center">
                <div className="w-6 h-6 bg-green-200 rounded-full flex items-center justify-center">
               <div className="w-3 h-3 bg-green-500 rounded-full"></div>
             </div>
            </div>
            <div>
                <h1>Active</h1>
                <h1>4</h1>
            </div>
        </div>
        <div className="flex gap-5 p-10 bg-white rounded">
        <div className="w-6 h-6 flex items-center justify-center">
        <div className="w-6 h-6 bg-red-200 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
         </div>
         </div>
            <div>
                <h1>Critical</h1>
                <h1>4</h1>
            </div>
            
        </div>
        <div className="flex gap-5 p-10 bg-white rounded">
            <Calendar/>
             <div>
                <h1>Upcoming</h1>
                <small>2</small>
            </div>
        </div>
    </div>
    </main>
  );
}

export default Main;
