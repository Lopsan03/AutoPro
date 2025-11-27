import { LucideIcon } from 'lucide-react';

export interface LocalizedString {
  en: string;
  es: string;
}

export interface ServiceItem {
  id: string;
  title: string | LocalizedString;
  description: string | LocalizedString;
  icon: LucideIcon;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  makeModel: string;
  year: string;
  serviceId: string;
  notes: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}