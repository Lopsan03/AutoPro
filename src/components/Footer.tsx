import React from 'react';
import { Facebook, Twitter, Instagram, Phone, Mail, MapPin, CarFront } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { useLanguage, localizeField } from '../i18n';

const Footer: React.FC = () => {
  const { t, lang } = useLanguage();
  return (
    <footer id="contact" className="bg-slate-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center text-white">
              <CarFront size={24} className="mr-2 text-brand-500" />
              <span className="text-2xl font-bold tracking-tight">
                Auto<span className="text-brand-500">Pro</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              {t('footer.about')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map(link => (
                <li key={JSON.stringify(link.name)}>
                  <a href={link.href} className="text-base text-gray-400 hover:text-white transition-colors">
                    {localizeField(link.name, lang)}
                  </a>
                </li>
              ))}
              <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-base text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.contactUs')}</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-3 text-brand-500 flex-shrink-0" />
                <span className="text-sm">
                  1234 Motorway Blvd<br />
                  Suite 100<br />
                  Automotive City, AC 90210
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-3 text-brand-500 flex-shrink-0" />
                <span className="text-sm">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-3 text-brand-500 flex-shrink-0" />
                <span className="text-sm">service@autopro.com</span>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">{t('footer.hours')}</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span className="text-white">7:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span className="text-white">8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span className="text-brand-500">Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} AutoPro Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;