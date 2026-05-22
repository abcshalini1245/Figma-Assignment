import React from 'react';
import { Gem } from "lucide-react";

export default function UpgradeButton({ planKey, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-1.5 bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-white text-sm font-semibold px-3 h-9 rounded-lg transition-colors font-inter shadow-sm whitespace-nowrap"
    >
      
      <Gem className="w-4 h-4 text-white" />
      {planKey === 'startup' ? 'Upgrade' : 'Startup'}
    </button>
  );
}