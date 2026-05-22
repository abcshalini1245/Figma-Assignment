


import React, { useState, useRef, useEffect } from "react";
import {
  User,
  Settings,
  LogOut,

} from "lucide-react";

export default function ProfileMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (
    <div className="relative flex items-center gap-4" ref={ref}>
      
      {/* Profile + Hamburger Pill */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        {/* Avatar */}
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-blue-500 flex items-center justify-center shrink-0">
          <User className="w-4 h-4 text-white" />
        </div>

        {/* Hamburger */}
        <div className="flex flex-col gap-1 justify-center">
          <span className="block w-4 h-[2px] bg-gray-500 rounded-full" />
          <span className="block w-4 h-[2px] bg-gray-500 rounded-full" />
          <span className="block w-4 h-[2px] bg-gray-500 rounded-full" />
        </div>
      </button>

      
      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 top-14 bg-white border border-gray-100 rounded-2xl shadow-xl w-52 z-50 py-2 overflow-hidden">
          
          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <User className="w-4 h-4 text-gray-400" />
            Profile
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <Settings className="w-4 h-4 text-gray-400" />
            Settings
          </button>

          <div className="my-1 border-t border-gray-100" />

          <button className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-500 hover:bg-red-50 transition-colors">
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
}