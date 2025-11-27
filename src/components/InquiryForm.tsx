import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { SERVICES } from '../constants';
import { InquiryFormData, FormStatus } from '../types';
import Button from './Button';
import { useLanguage, localizeField } from '../i18n';

const InquiryForm: React.FC = () => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    makeModel: '',
    year: '',
    serviceId: '',
    notes: ''
  });

  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);
  const { t, lang } = useLanguage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);

    // Simulate API call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        makeModel: '',
        year: '',
        serviceId: '',
        notes: ''
      });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus(FormStatus.IDLE), 5000);
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
            {status === FormStatus.SUCCESS ? (
              <div className="absolute inset-0 bg-white flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle size={40} className="text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600">
                  Thank you for your inquiry. One of our service advisors will contact you shortly with your personalized pricing.
                </p>
                <button 
                  onClick={() => setStatus(FormStatus.IDLE)}
                  className="mt-8 text-brand-600 font-medium hover:text-brand-700 underline"
                >
                  Send another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.fullName')}</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      required
                      value={formData.fullName}
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
                      value={formData.email}
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
                      value={formData.phone}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                      placeholder={t('inquiry.placeholders.phone')}
                    />
                  </div>
                  <div>
                    <label htmlFor="year" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.year')}</label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      required
                      value={formData.year}
                      onChange={handleChange}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                      placeholder={t('inquiry.placeholders.year')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="makeModel" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.makeModel')}</label>
                  <input
                    type="text"
                    id="makeModel"
                    name="makeModel"
                    required
                    value={formData.makeModel}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                    placeholder={t('inquiry.placeholders.makeModel')}
                  />
                </div>

                <div>
                  <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.serviceInterested')}</label>
                  <select
                    id="serviceId"
                    name="serviceId"
                    value={formData.serviceId}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                  >
                    <option value="">{t('inquiry.placeholders.serviceSelect')}</option>
                    {SERVICES.map(s => (
                      <option key={s.id} value={s.id}>{localizeField(s.title, lang)}</option>
                    ))}
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="notes" className="block text-sm font-medium text-gray-700">{t('inquiry.labels.additionalNotes')}</label>
                  <textarea
                    id="notes"
                    name="notes"
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 py-3 px-4 bg-gray-50 border"
                    placeholder={t('inquiry.placeholders.notes')}
                  />
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
                    <span className="flex items-center">
                      {t('header.requestPricing')} <Send size={18} className="ml-2" />
                    </span>
                  )}
                </Button>
                
                <div className="flex items-start mt-4 p-3 bg-blue-50 rounded-md text-xs text-blue-800">
                  <AlertCircle size={14} className="mr-2 mt-0.5 flex-shrink-0" />
                  {t('inquiry.privacyNotice')}
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InquiryForm;