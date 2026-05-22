
import React, { useState } from 'react';
import { Tag } from 'lucide-react';

export default function CouponSection({ appliedCoupons, couponRules, onApply, onRemove }) {
  const [inputVal, setInputVal] = useState('');
  const [error, setError] = useState('');

  const handleApply = () => {
    const code = inputVal.trim().toUpperCase();
    if (!code) { setError('Enter a coupon code'); return; }
    if (!couponRules[code]) { setError('Invalid coupon code'); return; }
    if (appliedCoupons.includes(code)) { setError('Coupon already applied'); return; }
    onApply(code);
    setInputVal('');
    setError('');
  };

  const handleCardToggle = (code) => {
    if (appliedCoupons.includes(code)) {
      onRemove(code);
    } else {
      onApply(code);
    }
  };

  return (
    <div>
      {/* Section label */}
      <div className="flex items-center gap-2 mb-2">
        <Tag className="w-4 h-4 text-gray-500" />
        <p className="text-sm font-semibold text-gray-700 font-inter">Apply Coupon</p>
      </div>

      {/* Input row */}
      <div className="flex gap-0 mb-1 border border-gray-200 rounded-lg overflow-hidden">
        <input
          type="text"
          placeholder="Enter coupon code"
          value={inputVal}
          onChange={(e) => { setInputVal(e.target.value); setError(''); }}
          onKeyDown={(e) => e.key === 'Enter' && handleApply()}
          className="flex-1 h-9 px-3 text-sm text-gray-800 placeholder:text-gray-400 outline-none font-inter bg-white uppercase"
        />
        <button
          onClick={handleApply}
          className="px-4 h-9 text-sm font-semibold text-blue-500 hover:text-blue-700 hover:bg-blue-50 font-inter transition-colors border-l border-gray-200 flex-shrink-0"
        >
          Apply
        </button>
      </div>
      {error && <p className="text-xs text-red-500 font-inter mb-2 mt-1">{error}</p>}

      {/* Coupon radio cards */}
      <div className="mt-2 space-y-1.5">
        {Object.entries(couponRules).map(([code, rule]) => {
          const isSelected = appliedCoupons.includes(code);
          return (
            <button
              key={code}
              onClick={() => handleCardToggle(code)}
              className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg border transition-all text-left ${
                isSelected
                  ? 'border-blue-400 bg-blue-50'
                  : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="min-w-0">
                <span className="text-sm font-semibold text-gray-800 font-inter">{code}</span>
                <span className="text-xs text-gray-400 font-inter ml-2">{rule.label}</span>
              </div>
              {/* Radio indicator */}
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-3 transition-colors ${
                isSelected ? 'border-blue-500' : 'border-gray-300'
              }`}>
                {isSelected && <div className="w-2 h-2 rounded-full bg-blue-500" />}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}