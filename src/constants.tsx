import { 
  Wrench, 
  Droplets, 
  Activity, 
  Disc, 
  Zap, 
  ThermometerSnowflake
} from 'lucide-react';
import { ServiceItem } from './types';

export const SERVICES: ServiceItem[] = [
  {
    id: 'oil-maintenance',
    title: { en: 'Oil Change & Maintenance', es: 'Cambio de Aceite y Mantenimiento' },
    description: { en: 'Keep your engine running smoothly with our premium oil change services, including filter replacement and fluid top-ups.', es: 'Mantenga su motor funcionando sin problemas con nuestros servicios premium de cambio de aceite, incluido el reemplazo del filtro y el llenado de fluidos.' },
    icon: Droplets
  },
  {
    id: 'brake-repair',
    title: { en: 'Brake Inspection & Repair', es: 'Inspección y Reparación de Frenos' },
    description: { en: 'Ensure your safety with comprehensive brake pad replacements, rotor resurfacing, and fluid checks.', es: 'Asegure su seguridad con reemplazos de pastillas, rectificado de rotores y verificación de fluidos.' },
    icon: Disc
  },
  {
    id: 'diagnostics',
    title: { en: 'Engine Diagnostics', es: 'Diagnóstico del Motor' },
    description: { en: 'Advanced computer diagnostics to identify and resolve check engine lights and performance issues accurately.', es: 'Diagnósticos informáticos avanzados para identificar y resolver la luz de verificación del motor y problemas de rendimiento con precisión.' },
    icon: Activity
  },
  {
    id: 'battery',
    title: { en: 'Battery Replacement', es: 'Reemplazo de Batería' },
    description: { en: 'Testing and replacement of car batteries to ensure reliable starts in all weather conditions.', es: 'Pruebas y reemplazo de baterías para asegurar arranques confiables en todas las condiciones climáticas.' },
    icon: Zap
  },
  {
    id: 'hvac',
    title: { en: 'AC & Heating Services', es: 'Servicios de AC y Calefacción' },
    description: { en: 'Full HVAC system service including recharge, leak detection, and compressor repair for your comfort.', es: 'Servicio completo del sistema HVAC que incluye recarga, detección de fugas y reparación de compresores para su comodidad.' },
    icon: ThermometerSnowflake
  },
  {
    id: 'general',
    title: { en: 'General Repair', es: 'Reparación General' },
    description: { en: 'From suspension work to exhaust repairs, our certified mechanics handle all major and minor vehicle repairs.', es: 'Desde trabajo en suspensión hasta reparaciones de escape, nuestros mecánicos certificados manejan todas las reparaciones mayores y menores.' },
    icon: Wrench
  }
];

export const NAV_LINKS = [
  { name: { en: 'Home', es: 'Inicio' }, href: '#home' },
  { name: { en: 'Services', es: 'Servicios' }, href: '#services' },
  { name: { en: 'Pricing Inquiry', es: 'Solicitud de Precio' }, href: '#inquiry' },
  { name: { en: 'Contact', es: 'Contacto' }, href: '#contact' },
];