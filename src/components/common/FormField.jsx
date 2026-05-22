import React from 'react';

export default function FormField({ label, children, error }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs font-medium text-gray-600 font-inter">{label}</label>
      {children}
      {error && <span className="text-xs text-red-500 font-inter">{error}</span>}
    </div>
  );
}