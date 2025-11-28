import React, { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'es';

const translations: Record<string, any> = {
  nav: {
    home: { en: 'Home', es: 'Inicio' },
    services: { en: 'Services', es: 'Servicios' },
    pricing: { en: 'Pricing Inquiry', es: 'Solicitud de Precio' },
    contact: { en: 'Contact', es: 'Contacto' },
  },
  header: {
    getQuote: { en: 'Get Quote', es: 'Solicitar Presupuesto' },
    requestPricing: { en: 'Request Pricing', es: 'Solicitar Precio' }
  },
  hero: {
    badge: { en: 'Now accepting new fleet customers', es: 'Aceptando nuevos clientes de flotas' },
    title1: { en: 'Professional Car Services', es: 'Servicios Profesionales de Automóviles' },
    title2: { en: 'You Can Trust', es: 'En los que Puedes Confiar' },
    description: { en: 'We provide reliable, high-quality automotive services tailored to your vehicle’s needs. Experience transparent pricing and expert care.', es: 'Ofrecemos servicios automotrices fiables y de alta calidad adaptados a las necesidades de su vehículo. Experimente precios transparentes y atención experta.' },
    viewServices: { en: 'View Our Services', es: 'Ver Nuestros Servicios' },
    getQuote: { en: 'Get a Quote', es: 'Obtener Presupuesto' },
    features: [
      { title: { en: 'Warranty Assured', es: 'Garantía Asegurada' }, desc: { en: 'All parts and labor backed by guarantee.', es: 'Todas las piezas y mano de obra respaldadas por garantía.' } },
      { title: { en: 'Fast Turnaround', es: 'Entrega Rápida' }, desc: { en: 'Same-day service for most maintenance.', es: 'Servicio el mismo día para la mayoría de mantenimientos.' } },
      { title: { en: 'Certified Experts', es: 'Expertos Certificados' }, desc: { en: 'ASE certified mechanics working on your car.', es: 'Mecánicos certificados ASE trabajando en su automóvil.' } }
    ]
  },
  servicesSection: {
    headingSmall: { en: 'What We Do', es: 'Qué Hacemos' },
    headingBig: { en: 'Comprehensive Vehicle Care', es: 'Cuidado Integral del Vehículo' },
    description: { en: 'From routine maintenance to complex repairs, our state-of-the-art facility handles it all.', es: 'Desde el mantenimiento rutinario hasta reparaciones complejas, nuestra instalación de última generación lo maneja todo.' }
  },
  inquiry: {
    title: { en: 'Get a Personalized Quote', es: 'Obtenga un Presupuesto Personalizado' },
    intro: { en: "Every vehicle is unique, and so are our service plans. Pricing depends on your specific make, model, and the services required. Fill out the form, and our team will review your needs and get back to you with an accurate estimate.", es: 'Cada vehículo es único, y también lo son nuestros planes de servicio. El precio depende de su marca, modelo y los servicios requeridos. Complete el formulario y nuestro equipo revisará sus necesidades y le proporcionará una estimación precisa.' },
    whyTitle: { en: 'Why choose AutoPro?', es: '¿Por qué elegir AutoPro?' },
    whyList: [
      { en: 'Transparent pricing with no hidden fees', es: 'Precios transparentes sin cargos ocultos' },
      { en: 'Digital inspections with photos sent to your phone', es: 'Inspecciones digitales con fotos enviadas a su teléfono' },
      { en: '12-month / 12,000-mile warranty on all repairs', es: 'Garantía de 12 meses / 12,000 millas en todas las reparaciones' },
    ],
    labels: {
      fullName: { en: 'Full Name', es: 'Nombre Completo' },
      email: { en: 'Email Address', es: 'Correo Electrónico' },
      phone: { en: 'Phone Number', es: 'Número de Teléfono' },
      year: { en: 'Vehicle Year', es: 'Año del Vehículo' },
      makeModel: { en: 'Vehicle Make & Model', es: 'Marca y Modelo' },
      serviceInterested: { en: 'Service Interested In', es: 'Servicio de Interés' },
      additionalNotes: { en: 'Additional Notes', es: 'Notas Adicionales' },
      zipCode: { en: 'ZIP Code', es: 'Código Postal' },
    },
    placeholders: {
      fullName: { en: 'John Doe', es: 'Juan Pérez' },
      email: { en: 'john@example.com', es: 'juan@ejemplo.com' },
      phone: { en: '(555) 123-4567', es: '(555) 123-4567' },
      year: { en: 'e.g. 2018', es: 'p. ej. 2018' },
      makeModel: { en: 'e.g. Toyota Camry', es: 'p. ej. Toyota Camry' },
      serviceSelect: { en: 'Select a service...', es: 'Seleccione un servicio...' },
      notes: { en: 'Describe any specific issues or noises...', es: 'Describa problemas o ruidos específicos...' },
      zipCode: { en: 'e.g. 90210', es: 'p. ej. 90210' },
    },
    sendAnother: { en: 'Send another request', es: 'Enviar otra solicitud' },
    requestReceivedTitle: { en: 'Request Received!', es: '¡Solicitud Recibida!' },
    requestReceivedDesc: { en: 'Thank you for your inquiry. One of our service advisors will contact you shortly with your personalized pricing.', es: 'Gracias por su consulta. Uno de nuestros asesores de servicio se comunicará con usted en breve con su presupuesto personalizado.' },
    privacyNotice: { en: 'We respect your privacy. Your information is only used to generate your service quote.', es: 'Respetamos su privacidad. Su información solo se usa para generar su presupuesto de servicio.' },
    continueService: { en: 'Continue to Service Selection', es: 'Continuar a Selección de Servicios' }
  },
  serviceSelection: {
    yourInformation: { en: 'Your Information', es: 'Su Información' },
    fullName: { en: 'Full Name', es: 'Nombre Completo' },
    email: { en: 'Email', es: 'Correo Electrónico' },
    phone: { en: 'Phone', es: 'Teléfono' },
    zipCode: { en: 'ZIP Code', es: 'Código Postal' },
    vehicleYear: { en: 'Vehicle Year', es: 'Año del Vehículo' },
    makeModel: { en: 'Make & Model', es: 'Marca y Modelo' },
    editInformation: { en: '← Edit Information', es: '← Editar Información' },
    selectServices: { en: 'Select Services', es: 'Seleccionar Servicios' },
    selectedServices: { en: 'Selected Services', es: 'Servicios Seleccionados' },
    backToEdit: { en: 'Back to Edit Info', es: 'Volver a Editar Información' },
    submitEstimate: { en: 'Submit Estimate Request', es: 'Enviar Solicitud de Presupuesto' },
    submitSubmitting: { en: 'Submitting...', es: 'Enviando...' },
    service: { en: 'service', es: 'servicio' },
    services: { en: 'services', es: 'servicios' },
    estimateSubmitted: { en: 'Estimate Submitted!', es: '¡Presupuesto Enviado!' },
    estimateSubmittedDesc: { en: 'Thank you for your submission. We\'ll process your request and send you a pricing estimate shortly.', es: 'Gracias por su envío. Procesaremos su solicitud y le enviaremos un presupuesto pronto.' },
    startOver: { en: 'Start Over', es: 'Comenzar de Nuevo' }
  },
  footer: {
    about: { en: 'Your trusted partner for professional automotive care. We combine advanced technology with expert craftsmanship to keep you on the road.', es: 'Su socio de confianza para el cuidado automotriz profesional. Combinamos tecnología avanzada con artesanía experta para mantenerlo en la carretera.' },
    quickLinks: { en: 'Quick Links', es: 'Enlaces Rápidos' },
    contactUs: { en: 'Contact Us', es: 'Contáctenos' },
    hours: { en: 'Hours', es: 'Horario' }
  }
};

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (path: string) => string;
}>({ lang: 'es', setLang: () => {}, t: () => '' });

export const localizeField = (field: any, lang: Lang) => {
  if (!field) return '';
  if (typeof field === 'string') return field;
  if (typeof field === 'object') {
    return field[lang] ?? field['en'] ?? '';
  }
  return '';
};

export const LanguageProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [lang, setLang] = useState<Lang>('es');

  const t = (path: string) => {
    const parts = path.split('.');
    let cur: any = translations;
    for (const p of parts) {
      if (!cur) return '';
      cur = cur[p];
    }
    if (typeof cur === 'string') return cur;
    if (typeof cur === 'object') return cur[lang] ?? cur['en'] ?? '';
    return '';
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;
