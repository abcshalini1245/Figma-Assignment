import React from 'react';

export default function TextInput({ placeholder, value, onChange, type = 'text', error = false, className = '' }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`w-full h-8 border rounded-md px-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition-all font-inter bg-white
        ${error
          ? 'border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-100'
          : 'border-gray-200 focus:border-blue-400 focus:ring-1 focus:ring-blue-100'
        } ${className}`}
    />
  );
}