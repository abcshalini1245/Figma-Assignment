
import React from 'react';
import { Wallet } from 'lucide-react';

export default function WalletSection({ walletApplied, onToggleWallet, walletCredit }) {
  return (
    <div className="flex items-center justify-between py-2 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <Wallet className="w-4 h-4 text-gray-500" />
        <div>
          <p className="text-sm font-medium text-gray-800 font-inter">Wallet Balance</p>
          <p className="text-xs text-gray-400 font-inter">
            {walletApplied ? `₹${walletCredit.toLocaleString('en-IN')} applied` : '₹500.00 available'}
          </p>
        </div>
      </div>
      <button
        onClick={onToggleWallet}
        className={`text-xs font-semibold font-inter transition-colors px-2 py-1 rounded hover:bg-gray-50 ${
          walletApplied ? 'text-red-500 hover:text-red-600' : 'text-blue-500 hover:text-blue-600'
        }`}
      >
        {walletApplied ? 'Remove' : 'Apply'}
      </button>
    </div>
  );
}