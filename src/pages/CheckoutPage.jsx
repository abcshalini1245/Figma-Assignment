
import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import BillingForm from '../components/billing/BillingForm';
import OrderSummaryCard from '../components/order/OrderSummaryCard';
import { ArrowLeft } from 'lucide-react';

const PLANS = {
  startup: { name: 'Startup', price: 4999, enrollments: '5,000' },
  growth: { name: 'Growth', price: 9999, enrollments: '20,000' },
};

const COUPON_RULES = {
  WELCOME20: { label: '20% off on your first order', discount: 0.20 },
  ANNUAL50: { label: '50% off on annual plan', discount: 0.50 },
};

export default function CheckoutPage() {
  const [plan, setPlan] = useState('startup');
  const [appliedCoupons, setAppliedCoupons] = useState(['WELCOME20', 'ANNUAL50']);
  const [walletApplied, setWalletApplied] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [activeStep, setActiveStep] = useState(2);

  const basePrice = PLANS[plan].price;

  // Apply the highest discount coupon
  const maxDiscount = appliedCoupons.reduce((max, code) => {
    const rule = COUPON_RULES[code];
    return rule ? Math.max(max, rule.discount) : max;
  }, 0);

  const discountedPrice = Math.round(basePrice * (1 - maxDiscount));
  const walletCredit = walletApplied ? 500 : 0;
  const subtotal = Math.max(0, discountedPrice - walletCredit);
  const tax = Math.round(subtotal * 0.18 * 100) / 100;
  const total = (subtotal + tax).toFixed(2);

  const handleUpgradePlan = () => {
    setPlan((p) => (p === 'startup' ? 'growth' : 'startup'));
  };

  const handleApplyCoupon = (code) => {
    if (!appliedCoupons.includes(code)) {
      setAppliedCoupons((prev) => [...prev, code]);
    }
  };

  const handleRemoveCoupon = (code) => {
    setAppliedCoupons((prev) => prev.filter((c) => c !== code));
  };

  return (
    <div className="min-h-screen font-inter" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Full-width header */}
      <Navbar planKey={plan} onUpgrade={handleUpgradePlan} />

      <div className="max-w-[1120px] mx-auto px-4 pb-6">
       
        {/* Back to plans */}
        <div className="flex items-center gap-1.5 mb-3">
          <ArrowLeft className="w-3.5 h-3.5 text-gray-500" />
          <button
            onClick={() => window.history.back()}
            className="text-xs font-medium text-gray-500 hover:text-gray-700 font-inter transition-colors"
          >
            Back to plans
          </button>
        </div>

        {/* Success banner */}
        {showSuccess && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 text-sm font-medium px-4 py-3 rounded-md font-inter flex items-center justify-between">
            <span>✓ Details saved! Redirecting to payment...</span>
            <button onClick={() => setShowSuccess(false)} className="text-green-500 hover:text-green-700 text-lg leading-none">×</button>
          </div>
        )}

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-4 items-start">
          {/* Left: Billing Form */}
          <div className="w-full lg:flex-[3.5] shadow-sm border border-gray-100 rounded-[10px]">
            <BillingForm onSave={() => setShowSuccess(true)} />
          </div>

          {/* Right: Order Summary */}
          <div className="w-full lg:flex-[2]">
            <OrderSummaryCard
              plan={PLANS[plan]}
              planKey={plan}
              appliedCoupons={appliedCoupons}
              couponRules={COUPON_RULES}
              walletApplied={walletApplied}
              onToggleWallet={() => setWalletApplied((w) => !w)}
              walletCredit={walletCredit}
              subtotal={subtotal}
              tax={tax}
              total={total}
              onUpgradePlan={handleUpgradePlan}
              onApplyCoupon={handleApplyCoupon}
              onRemoveCoupon={handleRemoveCoupon}
              onProceed={() => { setShowSuccess(true); setActiveStep(3); }}
            />
          </div>
        </div>

      </div>
    </div>
  );
}