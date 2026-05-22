import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function SelectInput({ placeholder, value, onChange, options = [], error = false, disabled = false }) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`w-full h-8 border rounded-md px-3 pr-8 text-sm outline-none transition-all appearance-none font-inter bg-white cursor-pointer
          ${disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : ''}
          ${value ? 'text-gray-800' : 'text-gray-400'}
          ${error
            ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-100'
            : 'border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-100'
          }`}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
      <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
    </div>
  );
}