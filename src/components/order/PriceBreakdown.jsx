
import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';
import PaymentSuccessModal from '../header/PaymentSuccessModal';

export default function PriceBreakdown({ subtotal, tax, total, onProceed }) {
  const [status, setStatus] = useState('idle'); // idle | loading | done
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    if (status !== 'idle') return;
    setStatus('loading');
    setTimeout(() => {
      setStatus('done');
      setShowModal(true);
      onProceed?.();
    }, 2000);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <div className="flex flex-col gap-1.5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-500 font-inter">Subtotal</span>
          <span className="text-sm font-medium text-gray-800 font-inter">
            ₹{Number(subtotal).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
        </div>

        <div className="flex items-center justify-between pb-3 border-b border-gray-200">
          <span className="text-sm text-gray-500 font-inter">Tax (18% GST)</span>
          <span className="text-sm font-medium text-gray-800 font-inter">
            ₹{Number(tax).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
        </div>

        <div className="flex items-center justify-between py-1">
          <span className="text-sm font-semibold text-gray-800 font-inter">Total due today</span>
          <span className="text-xl font-bold text-blue-500 font-inter">
            ₹{Number(total).toLocaleString('en-IN', { minimumFractionDigits: 2 })}
          </span>
        </div>

        <button
          onClick={handleClick}
          disabled={status !== 'idle'}
          className={`w-full flex items-center justify-center gap-2 text-white text-sm font-semibold py-2.5 rounded-md font-inter transition-all mt-1 shadow-sm
            ${status === 'idle' ? 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 cursor-pointer' : ''}
            ${status === 'loading' ? 'bg-blue-400 cursor-not-allowed' : ''}
            ${status === 'done' ? 'bg-green-500 cursor-not-allowed' : ''}
          `}
        >
          {status === 'loading' && <Loader2 className="w-4 h-4 animate-spin" />}
          {status === 'idle' && 'Proceed to Payment'}
          {status === 'loading' && 'Processing...'}
          {status === 'done' && '✓ Payment Completed'}
        </button>
      </div>

      {showModal && <PaymentSuccessModal onClose={handleCloseModal} />}
    </>
  );
}