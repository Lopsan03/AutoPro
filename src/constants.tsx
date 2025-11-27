import { 
  Wrench, 
  Droplets, 
  Activity, 
  Disc, 
  Zap, 
  ThermometerSnowflake,
  Car
} from 'lucide-react';
import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'oil-maintenance',
    title: 'Oil Change & Maintenance',
    description: 'Keep your engine running smoothly with our premium oil change services, including filter replacement and fluid top-ups.',
    icon: Droplets
  },
  {
    id: 'brake-repair',
    title: 'Brake Inspection & Repair',
    description: 'Ensure your safety with comprehensive brake pad replacements, rotor resurfacing, and fluid checks.',
    icon: Disc
  },
  {
    id: 'diagnostics',
    title: 'Engine Diagnostics',
    description: 'Advanced computer diagnostics to identify and resolve check engine lights and performance issues accurately.',
    icon: Activity
  },
  {
    id: 'tires',
    title: 'Tire Services',
    description: 'Professional tire installation, rotation, balancing, and alignment to extend tire life and improve handling.',
    icon: Car
  },
  {
    id: 'battery',
    title: 'Battery Replacement',
    description: 'Testing and replacement of car batteries to ensure reliable starts in all weather conditions.',
    icon: Zap
  },
  {
    id: 'hvac',
    title: 'AC & Heating Services',
    description: 'Full HVAC system service including recharge, leak detection, and compressor repair for your comfort.',
    icon: ThermometerSnowflake
  },
  {
    id: 'general',
    title: 'General Repair',
    description: 'From suspension work to exhaust repairs, our certified mechanics handle all major and minor vehicle repairs.',
    icon: Wrench
  }
];

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'Pricing Inquiry', href: '#inquiry' },
  { name: 'Contact', href: '#contact' },
];