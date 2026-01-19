import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

// Flag Components
const USFlag = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
    <path fill="#bd3d44" d="M0 0h640v480H0"/>
    <path stroke="#fff" strokeWidth="37" d="M0 55.3h640M0 129h640M0 202.8h640M0 276.5h640M0 350.2h640M0 424h640"/>
    <path fill="#192f5d" d="M0 0h364.8v258.5H0"/>
    <marker id="us-a" markerHeight="30" markerWidth="30">
      <path fill="#fff" d="m14.7 9.8 8.2 26.4-22.4-16.5L25 19.7l-22.5 16.5"/>
    </marker>
    <path fill="#fff" d="m14.7 9.8 8.2 26.4-22.4-16.5L25 19.7l-22.5 16.5" transform="scale(.6)"/>
  </svg>
);

const CNFlag = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
    <path fill="#de2910" d="M0 0h640v480H0z"/>
    <path fill="#ffde00" d="M96 32l18.5 57-48.5-35.2h60L77.5 89zM192 32l6.2 19-16.2-11.7h20l-16.2 11.7zM230.4 67.2l6.2 19-16.2-11.7h20l-16.2 11.7zM230.4 115.2l6.2 19-16.2-11.7h20l-16.2 11.7zM192 150.4l6.2 19-16.2-11.7h20l-16.2 11.7z"/>
  </svg>
);

const JPFlag = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full object-cover border border-gray-100">
    <path fill="#fff" d="M0 0h640v480H0z"/>
    <circle cx="320" cy="240" r="144" fill="#bc002d"/>
  </svg>
);

const THFlag = () => (
  <svg viewBox="0 0 640 480" className="w-full h-full object-cover">
    <path fill="#f4f5f8" d="M0 0h640v480H0z"/>
    <path fill="#2d2a4a" d="M0 160h640v160H0z"/>
    <path fill="#a51931" d="M0 0h640v80H0zm0 400h640v80H0z"/>
  </svg>
);

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const content = {
    EN: {
      links: [
        { name: 'Surgeon', href: '#director' },
        { name: 'Specialties', href: '#specialties' },
        { name: 'Cases', href: '#cases' },
        { name: 'Safety', href: '#safety' },
        { name: 'Facility', href: '#interior' },
      ],
      consultation: 'Consultation'
    },
    CN: {
      links: [
        { name: '医疗团队', href: '#director' },
        { name: '核心项目', href: '#specialties' },
        { name: '真实案例', href: '#cases' },
        { name: '安全系统', href: '#safety' },
        { name: '医院环境', href: '#interior' },
      ],
      consultation: '咨询预约'
    },
    JP: {
      links: [
        { name: '医療チーム', href: '#director' },
        { name: '診療科目', href: '#specialties' },
        { name: '症例写真', href: '#cases' },
        { name: '安全システム', href: '#safety' },
        { name: '院内施設', href: '#interior' },
      ],
      consultation: 'カウンセリング'
    },
    TH: {
      links: [
        { name: 'ศัลยแพทย์', href: '#director' },
        { name: 'ความเชี่ยวชาญ', href: '#specialties' },
        { name: 'เคสรีวิว', href: '#cases' },
        { name: 'ความปลอดภัย', href: '#safety' },
        { name: 'สิ่งอำนวยความสะดวก', href: '#interior' },
      ],
      consultation: 'ปรึกษาเรา'
    }
  };

  const getActiveFlag = () => {
    switch (language) {
      case 'CN': return <CNFlag />;
      case 'JP': return <JPFlag />;
      case 'TH': return <THFlag />;
      default: return <USFlag />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#home" 
          className="block"
          onClick={(e) => handleNavClick(e, '#home')}
        >
          <img 
            src="https://cdn.imweb.me/upload/S20240911663c2f94b4b14/96dfaf9feb9aa.png" 
            alt="Garnet Plastic Surgery" 
            className="h-10 md:h-14 w-auto transition-all duration-300" 
          />
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {content[language].links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`text-sm font-bold tracking-wider hover:text-gold transition-colors ${
                isScrolled ? 'text-slate-800' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}

          {/* Language Switcher (Flags) */}
          <div className="flex items-center gap-3 border-l border-r px-4 border-gray-300/30">
             <button 
               onClick={() => setLanguage('EN')} 
               className={`transition-opacity hover:opacity-100 ${language === 'EN' ? 'opacity-100 ring-2 ring-gold rounded-sm' : 'opacity-50'}`}
               title="English"
             >
               <div className="w-6 h-4"><USFlag /></div>
             </button>
             <button 
               onClick={() => setLanguage('CN')} 
               className={`transition-opacity hover:opacity-100 ${language === 'CN' ? 'opacity-100 ring-2 ring-gold rounded-sm' : 'opacity-50'}`}
               title="Chinese"
             >
               <div className="w-6 h-4"><CNFlag /></div>
             </button>
             <button 
               onClick={() => setLanguage('JP')} 
               className={`transition-opacity hover:opacity-100 ${language === 'JP' ? 'opacity-100 ring-2 ring-gold rounded-sm' : 'opacity-50'}`}
               title="Japanese"
             >
               <div className="w-6 h-4"><JPFlag /></div>
             </button>
             <button 
               onClick={() => setLanguage('TH')} 
               className={`transition-opacity hover:opacity-100 ${language === 'TH' ? 'opacity-100 ring-2 ring-gold rounded-sm' : 'opacity-50'}`}
               title="Thai"
             >
               <div className="w-6 h-4"><THFlag /></div>
             </button>
          </div>

          <a
            href="#footer"
            onClick={(e) => handleNavClick(e, '#footer')}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-bold transition-all uppercase ${
              isScrolled
                ? 'bg-slate-900 text-white hover:bg-slate-700'
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white hover:text-slate-900'
            }`}
          >
            <Phone size={14} />
            {content[language].consultation}
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          {/* Mobile Language Dropdown Container */}
          <div className="relative">
            <button 
                onClick={() => {
                  setMobileLangOpen(!mobileLangOpen);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center justify-center w-8 h-6 overflow-hidden rounded-sm ring-1 transition-all ${
                  isScrolled ? 'ring-slate-200' : 'ring-white/30'
                }`}
              >
                {getActiveFlag()}
            </button>

            {/* Mobile Dropdown List */}
            {mobileLangOpen && (
              <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl border border-gray-100 py-2 w-32 flex flex-col gap-1 z-50 animate-fade-in-up">
                 <button 
                   onClick={() => { setLanguage('EN'); setMobileLangOpen(false); }} 
                   className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left ${language === 'EN' ? 'bg-gray-50' : ''}`}
                 >
                    <div className="w-5 h-3.5 shadow-sm overflow-hidden flex-shrink-0"><USFlag /></div>
                    <span className="text-sm font-bold text-slate-700">English</span>
                 </button>
                 <button 
                   onClick={() => { setLanguage('CN'); setMobileLangOpen(false); }} 
                   className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left ${language === 'CN' ? 'bg-gray-50' : ''}`}
                 >
                    <div className="w-5 h-3.5 shadow-sm overflow-hidden flex-shrink-0"><CNFlag /></div>
                    <span className="text-sm font-bold text-slate-700">中文</span>
                 </button>
                 <button 
                   onClick={() => { setLanguage('JP'); setMobileLangOpen(false); }} 
                   className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left ${language === 'JP' ? 'bg-gray-50' : ''}`}
                 >
                    <div className="w-5 h-3.5 shadow-sm overflow-hidden flex-shrink-0"><JPFlag /></div>
                    <span className="text-sm font-bold text-slate-700">日本語</span>
                 </button>
                 <button 
                   onClick={() => { setLanguage('TH'); setMobileLangOpen(false); }} 
                   className={`flex items-center gap-3 px-4 py-2 hover:bg-gray-50 transition-colors w-full text-left ${language === 'TH' ? 'bg-gray-50' : ''}`}
                 >
                    <div className="w-5 h-3.5 shadow-sm overflow-hidden flex-shrink-0"><THFlag /></div>
                    <span className="text-sm font-bold text-slate-700">ไทย</span>
                 </button>
              </div>
            )}
          </div>

          <button
            className={`p-2 rounded-md ${isScrolled ? 'text-slate-800' : 'text-white'}`}
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setMobileLangOpen(false);
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden p-6 flex flex-col gap-4 animate-fade-in-down">
          {content[language].links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-800 text-lg font-medium hover:text-gold transition-colors block py-2 border-b border-gray-50"
              onClick={(e) => handleNavClick(e, link.href)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#footer"
            className="mt-2 w-full bg-slate-900 text-white text-center py-3 rounded-sm font-bold tracking-widest uppercase"
            onClick={(e) => handleNavClick(e, '#footer')}
          >
            {content[language].consultation}
          </a>
        </div>
      )}
    </header>
  );
};