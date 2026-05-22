import React from 'react';
import { X, CheckCircle } from 'lucide-react';

export default function PaymentSuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-sm p-8 relative text-center animate-in fade-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>

        {/* Success icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>

        <h2 className="text-xl font-bold text-gray-900 font-inter mb-1">Payment Successful 🎉</h2>
        <p className="text-sm text-gray-500 font-inter mb-6">
          Your plan has been activated. Welcome aboard!
        </p>

        <div className="bg-gray-50 rounded-xl p-4 text-left mb-6">
          <div className="flex justify-between text-sm font-inter mb-1">
            <span className="text-gray-500">Transaction ID</span>
            <span className="text-gray-800 font-medium">#TXN{Math.floor(Math.random() * 900000) + 100000}</span>
          </div>
          <div className="flex justify-between text-sm font-inter">
            <span className="text-gray-500">Status</span>
            <span className="text-green-600 font-semibold">Confirmed</span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2.5 rounded-lg font-inter transition-colors"
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}