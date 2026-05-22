import React, { useState } from 'react';
import { LayoutGrid, X } from 'lucide-react';

export default function GridMenuIcon() {
  const [open, setOpen] = useState(false);

  const items = ['Dashboard', 'Campaigns', 'Analytics', 'Billing', 'Influencers', 'Reports'];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="w-9 h-9 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
      >
        <LayoutGrid className="w-4.5 h-4.5 text-gray-500" />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-11 bg-white border border-gray-100 rounded-xl shadow-xl w-52 z-50 p-3">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-xs font-semibold text-gray-500 font-inter uppercase tracking-wide">Menu</span>
              <button onClick={() => setOpen(false)} className="p-0.5 hover:bg-gray-100 rounded transition-colors">
                <X className="w-3.5 h-3.5 text-gray-400" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {items.map((item) => (
                <button
                  key={item}
                  className="flex flex-col items-center gap-1.5 py-3 px-2 rounded-lg hover:bg-blue-50 text-center transition-colors group"
                  onClick={() => setOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg bg-gray-100 group-hover:bg-blue-100 flex items-center justify-center transition-colors">
                    <LayoutGrid className="w-4 h-4 text-gray-400 group-hover:text-blue-500" />
                  </div>
                  <span className="text-xs font-medium text-gray-700 font-inter">{item}</span>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}