import React from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Hero: React.FC = () => {
  const { language } = useLanguage();

  // Vimeo Video ID
  const VIMEO_VIDEO_ID = "1152132551";
  
  const VIMEO_SRC = `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&autopause=0`;

  const content = {
    EN: {
      subtitle: "Garnet Plastic Surgery",
      title1: "With Sincerity,",
      title2: "Designing Beauty"
    },
    CN: {
      subtitle: "嘉奈整形外科",
      title1: "以诚挚之心，",
      title2: "设计自然之美"
    },
    JP: {
      subtitle: "ガーネット整形外科",
      title1: "真心を込めて、",
      title2: "美しさをデザインする"
    },
    TH: {
      subtitle: "Garnet Plastic Surgery",
      title1: "ด้วยความจริงใจ,",
      title2: "รังสรรค์ความงาม"
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-slate-900">
      {/* Background Video Layer (Vimeo Iframe) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          src={VIMEO_SRC}
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.78vh] -translate-x-1/2 -translate-y-1/2 opacity-100"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          title="Garnet Plastic Surgery Background"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Main Copy Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6">
        <p className="text-gold font-bold tracking-[0.3em] uppercase mb-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
          {content[language].subtitle}
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light text-white leading-[1.1] animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
          {content[language].title1}<br />
          <span className="font-bold">{content[language].title2}</span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50 z-10">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};