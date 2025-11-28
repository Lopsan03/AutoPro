import React, { useState, useEffect } from 'react';
import { ChevronDown, Check, Trash2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SERVICES } from '../constants';
import { FormStatus, SelectedService } from '../types';
import Button from './Button';
import { useLanguage, localizeField } from '../i18n';
import { useFormContext } from '../FormContext';

const ServiceSelection: React.FC = () => {
  const { formData, selectedServices, setSelectedServices, setCurrentStep } = useFormContext();
  const { lang, t } = useLanguage();
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  // Initialize EmailJS on component mount
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const toggleCategory = (categoryId: string) => {
    const newExpanded = new Set(expandedCategories);
    if (newExpanded.has(categoryId)) {
      newExpanded.delete(categoryId);
    } else {
      newExpanded.add(categoryId);
    }
    setExpandedCategories(newExpanded);
  };

  const addService = (serviceId: string, serviceTitle: string) => {
    const alreadyExists = selectedServices.some(s => s.serviceId === serviceId);
    if (!alreadyExists) {
      setSelectedServices([...selectedServices, { serviceId, title: serviceTitle }]);
    }
  };

  const removeService = (serviceId: string) => {
    setSelectedServices(selectedServices.filter(s => s.serviceId !== serviceId));
  };

  const handleSubmit = async () => {
    setStatus(FormStatus.SUBMITTING);

    try {
      // Format selected services for email
      const servicesText = selectedServices
        .map(s => s.title)
        .join(', ');

      // Send final email with form data + selected services
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          zip_code: formData.zipCode,
          year: formData.year,
          make: formData.make,
          model: formData.model,
          services: servicesText || 'No services selected',
        }
      );

      setStatus(FormStatus.SUCCESS);
      setTimeout(() => {
        setCurrentStep('inquiry');
        setStatus(FormStatus.IDLE);
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus(FormStatus.IDLE);
      alert('Failed to submit services. Please try again.');
    }
  };

  if (status === FormStatus.SUCCESS) {
    return (
      <section className="min-h-screen bg-white py-24">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-green-600" />
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{t('serviceSelection.estimateSubmitted')}</h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('serviceSelection.estimateSubmittedDesc')}
          </p>
          <Button onClick={() => setCurrentStep('inquiry')}>
            {t('serviceSelection.startOver')}
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-gray-50 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Summary Box */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('serviceSelection.yourInformation')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="text-sm font-medium text-gray-500">{t('serviceSelection.fullName')}</label>
              <p className="text-lg text-gray-900 font-semibold">{formData.fullName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">{t('serviceSelection.email')}</label>
              <p className="text-lg text-gray-900 font-semibold">{formData.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">{t('serviceSelection.phone')}</label>
              <p className="text-lg text-gray-900 font-semibold">{formData.phone}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">{t('serviceSelection.zipCode')}</label>
              <p className="text-lg text-gray-900 font-semibold">{formData.zipCode}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">{t('serviceSelection.vehicleYear')}</label>
              <p className="text-lg text-gray-900 font-semibold">{formData.year}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">{t('serviceSelection.makeModel')}</label>
              <p className="text-lg text-gray-900 font-semibold">{`${formData.make} ${formData.model}`.trim()}</p>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep('inquiry')}
            className="mt-6 text-brand-600 hover:text-brand-700 font-medium text-sm"
          >
            {t('serviceSelection.editInformation')}
          </button>
        </div>

        {/* Selected Services */}
        {selectedServices.length > 0 && (
          <div className="bg-blue-50 border border-blue-200 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">{t('serviceSelection.selectedServices')} ({selectedServices.length})</h3>
            <div className="space-y-2">
              {selectedServices.map((service) => (
                <div key={service.serviceId} className="flex items-center justify-between bg-white p-3 rounded-lg">
                  <span className="text-gray-900 font-medium">{service.title}</span>
                  <button
                    onClick={() => removeService(service.serviceId)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Service Categories */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{t('serviceSelection.selectServices')}</h3>
          <div className="space-y-4">
            {SERVICES.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleCategory(service.id)}
                  className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center flex-1">
                    <service.icon size={24} className="text-brand-600 mr-4" />
                    <div className="text-left">
                      <h4 className="font-semibold text-gray-900">
                        {localizeField(service.title, lang)}
                      </h4>
                      <p className="text-sm text-gray-600 mt-1">
                        {localizeField(service.description, lang)}
                      </p>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    className={`text-gray-400 transition-transform ${
                      expandedCategories.has(service.id) ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {expandedCategories.has(service.id) && (
                  <div className="border-t border-gray-200 bg-gray-50 p-4">
                    <button
                      onClick={() => addService(service.id, localizeField(service.title, lang))}
                      disabled={selectedServices.some(s => s.serviceId === service.id)}
                      className="w-full flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <span className="font-medium text-gray-900">
                        {localizeField(service.title, lang)}
                      </span>
                      {selectedServices.some(s => s.serviceId === service.id) ? (
                        <Check size={20} className="text-green-600" />
                      ) : (
                        <span className="text-brand-600 font-semibold">+ Add</span>
                      )}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button
            variant="outline"
            fullWidth
            onClick={() => setCurrentStep('inquiry')}
          >
            {t('serviceSelection.backToEdit')}
          </Button>
          <Button
            fullWidth
            disabled={selectedServices.length === 0 || status === FormStatus.SUBMITTING}
            onClick={handleSubmit}
          >
            {status === FormStatus.SUBMITTING ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {t('serviceSelection.submitSubmitting')}
              </span>
            ) : (
              `${t('serviceSelection.submitEstimate')} (${selectedServices.length} ${selectedServices.length === 1 ? t('serviceSelection.service') : t('serviceSelection.services')})`
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSelection;
