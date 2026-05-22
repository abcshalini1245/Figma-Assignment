import React from 'react';
import { X, RotateCcw } from 'lucide-react';

export default function CouponChip({ code, discount, type = 'delete', onRemove }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded-full border-2 border-blue-500 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-blue-500" />
        </div>
        <div>
          <span className="text-xs font-semibold text-gray-800 font-inter">{code}</span>
          {discount && (
            <span className="text-xs text-gray-400 font-inter ml-2">{discount}</span>
          )}
        </div>
      </div>
      <button onClick={onRemove} className="p-1 hover:bg-gray-100 rounded transition-colors">
        {type === 'delete' ? (
          <X className="w-3.5 h-3.5 text-gray-400" />
        ) : (
          <RotateCcw className="w-3.5 h-3.5 text-gray-400" />
        )}
      </button>
    </div>
  );
}