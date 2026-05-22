
import React, { useState } from 'react';
import FormField from '../common/FormField';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const STATES = ['Maharashtra', 'Karnataka', 'Delhi', 'Tamil Nadu', 'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'West Bengal'];
const CITIES = {
  Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
  Karnataka: ['Bangalore', 'Mysore', 'Hubli'],
  Delhi: ['New Delhi', 'Dwarka', 'Rohini'],
  'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai'],
  Gujarat: ['Ahmedabad', 'Surat', 'Vadodara'],
  Rajasthan: ['Jaipur', 'Jodhpur', 'Udaipur'],
  'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra'],
  'West Bengal': ['Kolkata', 'Howrah', 'Durgapur'],
};

const EMPTY_FORM = {
  companyName: '', email: '', gst: '', tan: '',
  premises: '', street: '', state: '', city: '', country: '', pinCode: '',
};

export default function BillingForm({ onSave }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [errors, setErrors] = useState({});

  const set = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    setErrors((er) => ({ ...er, [key]: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.companyName.trim()) newErrors.companyName = 'Required';
    if (!form.email.trim()) newErrors.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Invalid email';
    if (!form.state) newErrors.state = 'Required';
    if (!form.city) newErrors.city = 'Required';
    if (!form.country.trim()) newErrors.country = 'Required';
    if (!form.pinCode.trim()) newErrors.pinCode = 'Required';
    return newErrors;
  };

  const handleSave = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    onSave(form);
  };

  const handleCancel = () => {
    setForm(EMPTY_FORM);
    setErrors({});
  };

  const cityOptions = form.state ? (CITIES[form.state] || []) : [];

  return (
    <div className="bg-white rounded-[10px] flex flex-col" style={{ padding: '54px', gap: '8px' }}>
      <div className="mb-0.5">
        <h2 className="text-base font-semibold text-gray-900 font-inter">Review your details</h2>
      </div>

      <p className="text-xs font-medium text-gray-700 font-inter">Billing Information</p>

      {/* Row 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <FormField label="Company Name" error={errors.companyName}>
          <TextInput placeholder="Company name" value={form.companyName} onChange={set('companyName')} error={!!errors.companyName} />
        </FormField>
        <FormField label="Email" error={errors.email}>
          <TextInput placeholder="admin@yourcompany.com" type="email" value={form.email} onChange={set('email')} error={!!errors.email} />
        </FormField>
      </div>

      {/* Row 2 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <FormField label="GST Number (Optional)">
          <TextInput placeholder="GST Number" value={form.gst} onChange={set('gst')} />
        </FormField>
        <FormField label="PAN Number (Optional)">
          <TextInput placeholder="pAN Number" value={form.tan} onChange={set('pan')} />
        </FormField>
      </div>

      {/* Row 3 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <FormField label="Premises/House no.">
          <TextInput placeholder="Premises/House no." value={form.premises} onChange={set('premises')} />
        </FormField>
        <FormField label="Street">
          <TextInput placeholder="Street" value={form.street} onChange={set('street')} />
        </FormField>
      </div>

      {/* Row 4 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <FormField label="State" error={errors.state}>
          <SelectInput placeholder="Select state" value={form.state} onChange={set('state')} options={STATES} error={!!errors.state} />
        </FormField>
        <FormField label="City" error={errors.city}>
          <SelectInput
            placeholder={form.state ? 'Select city' : 'Select state first'}
            value={form.city}
            onChange={set('city')}
            options={cityOptions}
            error={!!errors.city}
            disabled={!form.state}
          />
        </FormField>
      </div>

      {/* Row 5 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <FormField label="Country" error={errors.country}>
          <TextInput placeholder="India" value={form.country} onChange={set('country')} error={!!errors.country} />
        </FormField>
        <FormField label="Pin Code" error={errors.pinCode}>
          <TextInput placeholder="Pincode" value={form.pinCode} onChange={set('pinCode')} error={!!errors.pinCode} />
        </FormField>
      </div>

      {/* Actions */}
      <div className="flex items-center justify-end gap-3 mt-1 pt-2 border-t border-gray-100">
        <button
          onClick={handleCancel}
          className="text-sm font-medium text-gray-500 hover:text-gray-800 font-inter transition-colors px-3 h-9 rounded-md hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white text-sm font-medium px-5 h-9 rounded-md transition-colors font-inter shadow-sm"
        >
          Save Details
        </button>
      </div>
    </div>
  );
}