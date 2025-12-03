import React, { createContext, useContext, useState } from 'react';

export type Lang = 'en' | 'es';

const translations: Record<string, any> = {
	nav: {
		home: { en: 'Home', es: 'Inicio' },
		services: { en: 'Services', es: 'Servicios' },
		pricing: { en: 'Pricing Inquiry', es: 'Solicitud de Precio' },
		contact: { en: 'Contact', es: 'Contacto' }
	},
	header: {
		getQuote: { en: 'Get Quote', es: 'Solicitar Presupuesto' },
		requestPricing: { en: 'Request Pricing', es: 'Solicitar Precio' }
	},
	hero: {
		badge: { en: 'Now accepting new fleet customers', es: 'Aceptando nuevos clientes de flotas' },
		title1: { en: 'Professional Car Services', es: 'Servicios Automotrices Profesionales' },
		title2: { en: 'You Can Trust', es: 'En los que Puedes Confiar' },
		description: {
			en: 'We provide reliable, high-quality automotive services tailored to your vehicle needs. Experience transparent pricing and expert care.',
			es: 'Ofrecemos servicios automotrices fiables y de alta calidad adaptados a las necesidades de su vehículo. Experimente precios transparentes y atención experta.'
		},
		viewServices: { en: 'View Our Services', es: 'Ver Nuestros Servicios' },
		getQuote: { en: 'Get a Quote', es: 'Obtener Presupuesto' },
		features: [
			{ title: { en: 'Warranty Assured', es: 'Garantía Asegurada' }, desc: { en: 'All parts and labor backed by guarantee.', es: 'Todas las piezas y mano de obra respaldadas por garantía.' } },
			{ title: { en: 'Fast Turnaround', es: 'Entrega Rápida' }, desc: { en: 'Same-day service for most maintenance.', es: 'Servicio el mismo día para la mayoría de mantenimientos.' } },
			{ title: { en: 'Certified Experts', es: 'Expertos Certificados' }, desc: { en: 'Certified mechanics working on your car.', es: 'Mecánicos certificados trabajando en su automóvil.' } }
		]
	},

	inquiry: {
		title: { en: 'Get a Personalized Quote', es: 'Obtenga un Presupuesto Personalizado' },
		intro: {
			en: 'Every vehicle is unique, and so are our service plans. Pricing depends on your specific make, model, and the services required. Fill out the form, and our team will review your needs and get back to you with an accurate estimate.',
			es: 'Cada vehículo es único, y también lo son nuestros planes de servicio. El precio depende de su marca, modelo y los servicios requeridos. Complete el formulario y nuestro equipo revisará sus necesidades y le proporcionará una estimación precisa.'
		},
		whyTitle: { en: 'Why choose Autotronica?', es: '¿Por qué elegir Autotronica?' },
		whyList: [
			{ en: 'Transparent pricing with no hidden fees', es: 'Precios transparentes sin cargos ocultos' },
			{ en: 'Digital inspections with photos sent to your phone', es: 'Inspecciones digitales con fotos enviadas a su teléfono' },
			{ en: 'Warranty on all repairs', es: 'Garantía en todas las reparaciones' }
		],
		labels: {
			fullName: { en: 'Full Name', es: 'Nombre Completo' },
			email: { en: 'Email Address', es: 'Correo Electrónico' },
			phone: { en: 'Phone Number', es: 'Número de Teléfono' },
			year: { en: 'Vehicle Year', es: 'Año del Vehículo' },
			makeModel: { en: 'Vehicle Make', es: 'Marca' },
			zipCode: { en: 'ZIP Code', es: 'Código Postal' }
		},
		continueService: { en: 'Continue to Service Selection', es: 'Continuar a Selección de Servicios' },
		add: { en: 'Add', es: 'Agregar' }
	},

	serviceSelection: {
		yourInformation: { en: 'Your Information', es: 'Su Información' },
		editInformation: { en: '← Edit Information', es: '← Editar Información' },
		selectServices: { en: 'Select Services', es: 'Seleccionar Servicios' },
		selectedServices: { en: 'Selected Services', es: 'Servicios Seleccionados' },
		backToEdit: { en: 'Back to Edit Info', es: 'Volver a Editar Información' },
		chooseLocation: { en: 'Choose Service Location', es: 'Elegir Ubicación del Servicio' },
		submitEstimate: { en: 'Submit Estimate Request', es: 'Enviar Solicitud de Presupuesto' },
		submitSubmitting: { en: 'Submitting...', es: 'Enviando...' },
		service: { en: 'service', es: 'servicio' },
		services: { en: 'services', es: 'servicios' },
		estimateSubmitted: { en: 'Estimate Submitted!', es: 'Presupuesto Enviado!' },
		estimateSubmittedDesc: { en: "Thank you for your submission. We'll process your request and send you a pricing estimate shortly.", es: 'Gracias por su envío. Procesaremos su solicitud y le enviaremos un presupuesto pronto.' },
		startOver: { en: 'Start Over', es: 'Comenzar de Nuevo' },
		serviceLocation: { en: 'Service Location', es: 'Ubicación del Servicio' },
		shop: { en: 'At Our Shop', es: 'En Nuestro Taller' },
		homeAddress: { en: 'At Your Address', es: 'En Tu Dirección' },
		date: { en: 'Date', es: 'Fecha' },
		time: { en: 'Time', es: 'Hora' },
		homeDateTimeRequired: { en: 'Please select a date and time for your home service.', es: 'Por favor seleccione una fecha y hora para el servicio en su domicilio.' },
		model: { en: 'Model', es: 'Modelo' }
	},
	footer: {
		about: { en: 'Your trusted partner for professional automotive care. We combine advanced technology with expert craftsmanship to keep you on the road.', es: 'Su socio de confianza para el cuidado automotriz profesional. Combinamos tecnología avanzada con artesanía experta para mantenerlo en la carretera.' },
		quickLinks: { en: 'Quick Links', es: 'Enlaces Rápidos' },
		contactUs: { en: 'Contact Us', es: 'Contáctenos' },
		hours: { en: 'Hours', es: 'Horario' },
		address: { en: 'Cumbres, Monterrey, Nuevo León, Mexico', es: 'Cumbres, Monterrey, Nuevo León, México' },
		phone: { en: '81 1658 5943', es: '81 1658 5943' },
		emailAddress: { en: 'autotronica.mex@gmail.com', es: 'autotronica.mex@gmail.com' },
		scheduleLine1: { en: '10:00 AM - 8:00 PM - Monday, Tuesday, Thursday, Friday', es: '10:00 AM - 8:00 PM - Lunes, Martes, Jueves, Viernes' },
		scheduleLine2: { en: '10:00 AM - 6:00 PM - Wednesday', es: '10:00 AM - 6:00 PM - Miércoles' },
		scheduleLine3: { en: '9:00 AM - 7:00 PM - Saturday', es: '9:00 AM - 7:00 PM - Sábado' }
	}
};

type LanguageContextType = {
	lang: Lang;
	setLang: (l: Lang) => void;
	t: (path: string) => string;
};

const LanguageContext = createContext({} as LanguageContextType);

export const localizeField = (field: any, lang: Lang) => {
	if (!field) return '';
	if (typeof field === 'string') return field;
	if (typeof field === 'object') return field[lang] ?? field['en'] ?? '';
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

	return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => useContext(LanguageContext);

export default LanguageContext;


