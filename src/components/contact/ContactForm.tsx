'use client';

import React, { useState } from 'react';
import { Send, CheckCircle2, Lock } from 'lucide-react';
import { INDIAN_STATES_AND_UTS } from '@/data/indianStates';
import { API_ENDPOINTS } from '@/lib/api';

export default function ContactForm() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [selectedState, setSelectedState] = useState('Maharashtra');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    const cleanPhone = mobileNumber.replace(/\D/g, '');
    if (cleanPhone.length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch(API_ENDPOINTS.CONTACT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          full_name: fullName.trim(),
          mobile_number: cleanPhone,
          state: selectedState || null,
          message: message.trim() || null,
          source_page: '/contact-us',
        }),
      });

      const data = await response.json().catch(() => null);

      if (!response.ok || !data?.success) {
        setStatus('error');
        setErrorMessage(
          data?.error || 'Unable to submit inquiry right now. Please try again.'
        );
        return;
      }

      setStatus('success');
      setFullName('');
      setMobileNumber('');
      setSelectedState('Maharashtra');
      setMessage('');
    } catch {
      setStatus('error');
      setErrorMessage('Network error. Please check your connection and try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="py-12 text-center space-y-4 animate-fade-in">
        <CheckCircle2 className="w-16 h-16 text-[#16A34A] mx-auto" />
        <h3 className="text-xl font-bold text-[#0B2545]">Enquiry Received!</h3>
        <p className="text-sm text-[#1E293B]/80 max-w-md mx-auto">
          Thank you for contacting Stock Market Mumbai. Our academic counselor will connect with you shortly.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="btn-smooth px-6 py-2.5 rounded-xl bg-[#0B2545] text-white text-xs font-bold hover:bg-[#13345E] cursor-pointer"
        >
          Send Another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errorMessage && (
        <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-xs font-semibold text-red-700">
          {errorMessage}
        </div>
      )}

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1">
          Full Name *
        </label>
        <input
          type="text"
          required
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="e.g. Rohan Deshmukh"
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] bg-white text-[#1E293B] outline-hidden"
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1">
          Mobile Number *
        </label>
        <div className="relative">
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-500">
            +91
          </span>
          <input
            type="tel"
            required
            maxLength={10}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, ''))}
            placeholder="9876543210"
            className="w-full pl-12 pr-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#16A34A] focus:ring-1 focus:ring-[#16A34A] bg-white text-[#1E293B] outline-hidden"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1">
          State
        </label>
        <select
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#16A34A] bg-white text-[#1E293B] outline-hidden"
        >
          <option value="">Select State</option>
          {INDIAN_STATES_AND_UTS.map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-[#1E293B] mb-1">
          Message / Question (Optional)
        </label>
        <textarea
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask about Basic, Our Pro, or Ultra Pro courses in Mumbai..."
          className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-[#16A34A] bg-white text-[#1E293B] outline-hidden"
        />
      </div>

      {/* NO CHECKBOX REQUIRED — direct submission as requested */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-smooth touch-target w-full py-3.5 px-6 rounded-xl text-sm font-bold text-white bg-[#16A34A] hover:bg-[#15803D] shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
      >
        <Send className="w-4 h-4" />
        <span>{status === 'submitting' ? 'Submitting...' : 'Submit'}</span>
      </button>

      <div className="flex items-center gap-2 pt-1 text-[11px] text-slate-400">
        <Lock className="w-3.5 h-3.5" />
        <span>Your details remain confidential and are used strictly for course inquiries.</span>
      </div>
    </form>
  );
}

