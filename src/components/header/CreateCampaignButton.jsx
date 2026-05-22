import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

export default function CreateCampaignButton() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="flex items-center gap-1.5 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-semibold px-3 h-9 rounded-lg transition-colors font-inter shadow-sm whitespace-nowrap"
      >
        <Plus className="w-4 h-4" />
        Create Campaign
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-sm p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-500" />
            </button>
            <h2 className="text-base font-semibold text-gray-900 font-inter mb-1">Create Campaign</h2>
            <p className="text-sm text-gray-500 font-inter mb-4">Start a new influencer campaign.</p>
            <input
              type="text"
              placeholder="Campaign name"
              className="w-full h-9 border border-gray-200 rounded-md px-3 text-sm outline-none focus:border-blue-400 font-inter mb-3"
            />
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-2 rounded-md font-inter transition-colors"
            >
              Create
            </button>
          </div>
        </div>
      )}
    </>
  );
}