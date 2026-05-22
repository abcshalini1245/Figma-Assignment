
import React from 'react';
import WalletSection from './WalletSection';
import CouponSection from './CouponSection';
import PriceBreakdown from './PriceBreakdown';
import { ArrowUpCircle } from "lucide-react";

export default function OrderSummaryCard({
  plan, planKey,
  appliedCoupons, couponRules,
  walletApplied, onToggleWallet, walletCredit,
  subtotal, tax, total,
  onUpgradePlan, onApplyCoupon, onRemoveCoupon, onProceed
}) {
  return (
    <div className="flex flex-col gap-3">

      {/* Top card: plan info + upgrade button */}
      <div className="bg-white rounded-[10px] flex flex-col" style={{ padding: '16px' }}>
        <h2 className="text-base font-semibold text-gray-900 font-inter mb-3">Order Summary</h2>

        {/* Plan info row — light blue bordered box */}
        <div className="border border-blue-100 rounded-xl px-4 py-3 flex items-center justify-between mb-3 bg-white">
          {/* Price + enrollments */}
          <div>
            <div className="flex items-baseline gap-1">
              <span className="text-2xl font-bold text-gray-900 font-inter">
                ₹{plan.price.toLocaleString('en-IN')}
              </span>
              <span className="text-sm text-gray-400 font-inter">/month</span>
            </div>
            <p className="text-xs text-gray-400 font-inter mt-0.5">
              Includes {plan.enrollments} credits/mo.
            </p>
          </div>

          {/* Selected plan badge */}
          <div className="text-right">
            <p className="text-[9px] font-semibold text-blue-500 font-inter uppercase tracking-widest leading-tight">SELECTED PLAN</p>
            <p className="text-xl font-bold text-gray-900 font-inter leading-snug mt-0.5">{plan.name}</p>
          </div>
        </div>

        {/* Upgrade / Downgrade */}
        <button
          onClick={onUpgradePlan}
          className="flex items-center gap-2 text-sm font-semibold text-blue-500 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 transition-colors font-inter border border-blue-200 rounded-full px-4 py-2.5 w-full justify-center"
        >
          <ArrowUpCircle className="w-[16px] h-[16px] text-[#3B82F6] stroke-[2]" />
          {planKey === 'startup' ? 'Upgrade to Growth Plan' : 'Switch to Startup Plan'}
        </button>
      </div>

      {/* Bottom card: wallet, coupons, price breakdown */}
      <div className="bg-white rounded-[10px] flex flex-col" style={{ padding: '16px' }}>
        {/* Wallet */}
        <WalletSection
          walletApplied={walletApplied}
          onToggleWallet={onToggleWallet}
          walletCredit={walletCredit}
        />

        {/* Coupons */}
        <div className="py-2 border-b border-gray-100">
          <CouponSection
            appliedCoupons={appliedCoupons}
            couponRules={couponRules}
            onApply={onApplyCoupon}
            onRemove={onRemoveCoupon}
          />
        </div>

        {/* Price Breakdown */}
        <div className="mt-2">
          <PriceBreakdown
            subtotal={subtotal}
            tax={tax}
            total={total}
            onProceed={onProceed}
          />
        </div>
      </div>

    </div>
  );
}