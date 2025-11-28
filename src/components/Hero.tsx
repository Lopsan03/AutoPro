import React from 'react';
import { ChevronDown, ShieldCheck, Clock, Award } from 'lucide-react';
import Button from './Button';
import { useLanguage } from '../i18n';

const Hero: React.FC = () => {
  const scrollToId = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Car mechanic workshop"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        <div className="absolute inset-0 hero-pattern opacity-20" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-brand-500/30 bg-brand-900/20 text-brand-300 text-sm font-medium mb-8 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-brand-500 mr-2 animate-pulse" />
          {t('hero.badge')}
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-6 leading-tight">
          {t('hero.title1')} <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-blue-400">
            {t('hero.title2')}
          </span>
        </h1>

        <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-300 mb-10 leading-relaxed">
          {t('hero.description')}
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button
            variant="primary"
            className="h-14 px-8 text-lg w-full sm:w-auto"
            onClick={() => scrollToId('services')}
          >
            {t('hero.viewServices')}
          </Button>

          <Button
            variant="outline"
            className="
              h-14 px-8 text-lg w-full sm:w-auto
              bg-white/10        /* default: translucent white background */
              text-white         /* default: white text */
              border-white/20    /* subtle light border */
              backdrop-blur-sm
              transition-all duration-200 ease-out
              hover:bg-white     /* on hover: solid white */
              hover:bg-opacity-100
              hover:text-black   /* on hover: black text */
              hover:shadow-md
            "
            onClick={() => scrollToId('inquiry')}
          >
            {t('hero.getQuote')}
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
          {[
            {
              icon: ShieldCheck,
              title: t('hero.features.0.title'),
              desc: t('hero.features.0.desc'),
            },
            {
              icon: Clock,
              title: t('hero.features.1.title'),
              desc: t('hero.features.1.desc'),
            },
            {
              icon: Award,
              title: t('hero.features.2.title'),
              desc: t('hero.features.2.desc'),
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm"
            >
              <feature.icon className="w-8 h-8 text-brand-500 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-white font-semibold">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a
          href="#services"
          onClick={(e) => { e.preventDefault(); scrollToId('services'); }}
          className="text-gray-400 hover:text-white transition-colors"
        >
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;