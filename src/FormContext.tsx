import React, { createContext, useContext, useState } from 'react';
import { InquiryFormData, SelectedService, FormContextType } from './types';

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    phone: '',
    zipCode: '',
    year: '',
    makeModel: '',
  });

  const [selectedServices, setSelectedServices] = useState<SelectedService[]>([]);
  const [currentStep, setCurrentStep] = useState<'inquiry' | 'services'>('inquiry');

  return (
    <FormContext.Provider value={{
      formData,
      setFormData,
      selectedServices,
      setSelectedServices,
      currentStep,
      setCurrentStep,
    }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error('useFormContext must be used within FormProvider');
  }
  return context;
};
