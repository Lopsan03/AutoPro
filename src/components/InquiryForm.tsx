import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { FormStatus, InquiryFormData } from '../types';
import Button from './Button';
import { useLanguage } from '../i18n';
import { useFormContext } from '../FormContext';
import { MAKES, VEHICLE_DATA } from '../data/vehicles';

const InquiryForm: React.FC = () => {
  const [localFormData, setLocalFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    year: '',
    make: '',
    model: '',
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const { t } = useLanguage();
  const { setFormData, setCurrentStep } = useFormContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target as HTMLInputElement | HTMLSelectElement;
    setLocalFormData(prev => ({ ...prev, [name]: value }));
  };

  // vehicle data available via imports: MAKES, VEHICLE_DATA

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API call
    setTimeout(() => {
      setFormData(localFormData);
      setCurrentStep('services');
      setStatus(FormStatus.IDLE);
    }, 1500);
  };

  return (
    <section id="inquiry" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Context */}
          <div>
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-6">
                {t('inquiry.title')}
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                {t('inquiry.intro')}
              </p>
            
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-gray-900 mb-4">{t('inquiry.whyTitle')}</h4>
              <ul className="space-y-4">
                {[0,1,2,3].map((idx) => (
                  <li key={idx} className="flex items-center text-gray-700">
                    <CheckCircle size={20} className="text-green-500 mr-3" />
                    {t(`inquiry.whyList.${idx}`)}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.fullName')}</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={localFormData.fullName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                    placeholder={t('inquiry.placeholders.fullName')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.email')}</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={localFormData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                    placeholder={t('inquiry.placeholders.email')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.phone')}</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={localFormData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                    placeholder={t('inquiry.placeholders.phone')}
                  />
                </div>
                <div>
                  <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.zipCode')}</label>
                  <input
                    type="text"
                    id="zipCode"
                    name="zipCode"
                    required
                    value={localFormData.zipCode}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                    placeholder={t('inquiry.placeholders.zipCode')}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.year')}</label>
                  <select
                    id="year"
                    name="year"
                    required
                    value={localFormData.year}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-white border"
                  >
                    <option value="">{t('inquiry.placeholders.year')}</option>
                    {Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => (new Date().getFullYear() - i)).map(year => (
                      <option key={year} value={String(year)}>{year}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="make" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.makeModel')}</label>
                  <select
                    id="make"
                    name="make"
                    required
                    value={localFormData.make}
                    onChange={(e) => {
                      handleChange(e);
                      // reset model when make changes
                      setLocalFormData(prev => ({ ...prev, model: '' }));
                    }}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-white border"
                  >
                    <option value="">{t('inquiry.placeholders.makeModel')}</option>
                    {MAKES.map(make => (
                      <option key={make} value={make}>{make}</option>
                    ))}
                  </select>

                  <label htmlFor="model" className="block text-sm font-medium text-gray-700 mt-3">Model</label>
                  <select
                    id="model"
                    name="model"
                    required
                    value={localFormData.model}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-white border"
                    disabled={!localFormData.make}
                  >
                    <option value="">Select model...</option>
                    {(localFormData.make && VEHICLE_DATA[localFormData.make] || []).map(m => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <Button 
                type="submit" 
                fullWidth 
                disabled={status === FormStatus.SUBMITTING}
                className="mt-2"
              >
                {status === FormStatus.SUBMITTING ? (
                  <span className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending Request...
                  </span>
                ) : (
                  <span>
                    {t('inquiry.continueService')}
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;