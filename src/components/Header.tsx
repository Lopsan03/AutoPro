import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '../data/Imagen_de_WhatsApp_2025-11-27_a_las_10.37.40_f36d7afe-removebg-preview.png';
import { NAV_LINKS } from '../constants';
import Button from './Button';
import { useLanguage, localizeField } from '../i18n';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToInquiry = () => {
    setIsOpen(false);
    const element = document.getElementById('inquiry');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div
            className="flex-shrink-0 flex items-center cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src={logoImg} alt="AutoPro" className="h-14 w-auto rounded-md" />
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-sm font-medium transition-colors hover:text-brand-500 ${scrolled ? 'text-gray-700' : 'text-gray-100'}`}
                >
                  {localizeField(link.name, lang)}
                </a>
              ))}
            </nav>
            <div className="flex items-center pl-4 border-l border-gray-300/30 space-x-3">
              <button
                onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
                className={`text-sm font-medium px-3 py-2 rounded-md ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Change language"
              >
                {lang === 'es' ? 'English' : 'Español'}
              </button>

              <Button 
                onClick={scrollToInquiry}
                variant={scrolled ? 'primary' : 'secondary'} 
                className={!scrolled ? "bg-white text-brand-700 hover:bg-gray-100" : ""}
              >
                {t('header.getQuote')}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${scrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl absolute w-full left-0">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-brand-600 hover:bg-gray-50 rounded-md border-b border-gray-100 last:border-0"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {localizeField(link.name, lang)}
              </a>
            ))}
            <div className="p-4 mt-2">
              <div className="space-y-3">
                <Button fullWidth onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
                  {lang === 'es' ? 'English' : 'Español'}
                </Button>
                <Button fullWidth onClick={scrollToInquiry}>
                  {t('header.requestPricing')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;