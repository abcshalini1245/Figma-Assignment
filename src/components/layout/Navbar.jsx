
import React from 'react';
import SearchBar from '../header/SearchBar';
import UpgradeButton from '../header/UpgradeButton';
import CreateCampaignButton from '../header/CreateCampaignButton';
import ProfileMenu from '../header/ProfileMenu';
import GridMenuIcon from '../header/GridMenuIcon';

export default function Navbar({ planKey, onUpgrade }) {
  return (
    <header
      className="w-full bg-white border-b border-gray-100 flex items-center justify-between px-6 gap-3"
      style={{ height: '71px', minHeight: '71px' }}
    >
      {/* Left: Search */}
      <div className="flex-1 min-w-0 max-w-[340px]">
        <SearchBar />
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <UpgradeButton planKey={planKey} onClick={onUpgrade} />
        <CreateCampaignButton />
        <ProfileMenu />
      </div>
    </header>
  );
}