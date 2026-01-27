import React, { useState } from 'react';
import { Instagram, Youtube, X } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const FloatingSocialBar: React.FC = () => {
  const { language } = useLanguage();
  const [isWeChatModalOpen, setIsWeChatModalOpen] = useState(false);

  // SVG for KakaoTalk
  const KakaoIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 3C5.373 3 0 7.184 0 12.344c0 3.236 2.11 6.13 5.344 7.777-.245.908-1.56 5.567-1.61 5.926-.01.077.014.152.062.204.048.052.116.08.185.076.242-.016 3.86-2.65 4.54-3.117 1.132.164 2.308.25 3.52.25 6.627 0 12-4.184 12-9.344C24 7.184 18.627 3 12 3z"/>
    </svg>
  );

  // SVG for WhatsApp
  const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
    </svg>
  );

  // SVG for LINE
  const LineIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
      <path d="M12 2C6.486 2 2 5.676 2 10.212c0 4.536 4.486 8.212 10 8.212.84 0 1.66-.1 2.44-.28.43-.1.97.12 1.15.54l.43 1.02c.16.38.64.53 1.01.32.12-.07.66-.39 1.63-1.07 1.83-1.28 3.34-3.09 3.34-5.53C22 5.676 17.514 2 12 2z"/>
    </svg>
  );

  // SVG for WeChat
  const WeChatIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
       <path d="M8.696 16.32c4.32 0 7.82-3.23 7.82-7.22 0-3.98-3.5-7.22-7.82-7.22S.875 5.12.875 9.1c0 2.22 1.09 4.2 2.78 5.5-.12.44-.45 1.59-.51 1.83-.07.26-.26 1.02.94.56l2.63-1.46c.62.17 1.28.28 1.97.28zm8.13-2.61c-3.5 0-6.34 2.62-6.34 5.84 0 3.23 2.84 5.84 6.34 5.84.56 0 1.1-.09 1.6-.23l2.13 1.18c.97.37.82-.24.76-.45l-.42-1.48c1.37-1.05 2.25-2.66 2.25-4.45 0-3.22-2.84-5.84-6.34-5.84z"/>
    </svg>
  );

  interface SocialLink {
    name: string;
    icon: React.ReactNode;
    href?: string;
    action?: () => void;
  }

  const getLinks = (): SocialLink[] => {
    const common = {
      kakao: { name: 'KakaoTalk', icon: <KakaoIcon />, href: 'https://pf.kakao.com/_wiGxfxj' },
      youtube: { name: 'YouTube', icon: <Youtube size={28} />, href: 'https://youtube.com/@garnet_ps?si=_Xxk4YnHtO8sjxX3' },
    };

    const instagrams = {
      global: { name: 'Instagram', icon: <Instagram size={28} />, href: 'https://www.instagram.com/garnetps_global/' },
      jp: { name: 'Instagram', icon: <Instagram size={28} />, href: 'https://www.instagram.com/garnetps_jp' }
    };

    const line = { name: 'LINE', icon: <LineIcon />, href: 'https://line.me/R/ti/p/@019eoscw?ts=01191629&oat_content=url' };
    const whatsapp = { name: 'WhatsApp', icon: <WhatsAppIcon />, href: 'https://wa.me/message/DBIBCUBGMD2QD1' };
    const wechat = { name: 'WeChat', icon: <WeChatIcon />, action: () => setIsWeChatModalOpen(true) };

    // EN: WhatsApp, KakaoTalk, YouTube, Instagram (Global)
    if (language === 'EN') {
      return [whatsapp, common.kakao, common.youtube, instagrams.global];
    }
    
    // CN: WeChat, KakaoTalk, YouTube, Instagram (Global)
    if (language === 'CN') {
      return [wechat, common.kakao, common.youtube, instagrams.global];
    }
    
    // JP: LINE, KakaoTalk, YouTube, Instagram (JP)
    if (language === 'JP') {
      return [line, common.kakao, common.youtube, instagrams.jp];
    }
    
    // TH: LINE, KakaoTalk, YouTube, Instagram (Global)
    if (language === 'TH') {
      return [line, common.kakao, common.youtube, instagrams.global];
    }

    // Default Fallback (EN)
    return [whatsapp, common.kakao, common.youtube, instagrams.global];
  };

  const links = getLinks();

  return (
    <>
      {/* Floating Bar */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-40 flex flex-col rounded-l-xl overflow-hidden shadow-2xl">
        {links.map((link, idx) => (
          <button
            key={`${link.name}-${idx}`}
            onClick={() => {
              if (link.action) {
                link.action();
              } else if (link.href) {
                window.open(link.href, '_blank', 'noopener,noreferrer');
              }
            }}
            className="group flex items-center justify-center w-14 h-14 bg-slate-900 text-white hover:bg-gold transition-colors duration-300 border-b border-white/10 last:border-0"
            title={link.name}
            aria-label={link.name}
          >
            {link.icon}
          </button>
        ))}
      </div>

      {/* WeChat Modal */}
      {isWeChatModalOpen && (
        <div 
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-fade-in-up"
            onClick={() => setIsWeChatModalOpen(false)}
        >
           <div 
              className="bg-white p-8 rounded-sm shadow-2xl relative max-w-sm w-full text-center"
              onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside modal
           >
              <button 
                  onClick={() => setIsWeChatModalOpen(false)} 
                  className="absolute top-4 right-4 text-gray-400 hover:text-slate-900 transition-colors"
                  aria-label="Close Modal"
              >
                <X size={24} />
              </button>
              
              <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#07C160] rounded-full flex items-center justify-center text-white mb-4">
                      <WeChatIcon />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-slate-900">Garnet Plastic Surgery</h3>
                  <p className="text-sm text-gray-500 mb-6">Scan QR Code to Chat</p>
                  
                  <div className="bg-gray-50 p-4 border border-gray-100 rounded-sm mb-4 w-full aspect-square flex items-center justify-center">
                     <img 
                        src="https://cdn.imweb.me/upload/S20240911663c2f94b4b14/35be257ab8d4a.jpg" 
                        alt="WeChat QR Code" 
                        className="w-full h-full object-contain" 
                     />
                  </div>
                  <p className="text-xs text-gray-400">ID: garnetchina100</p>
              </div>
           </div>
        </div>
      )}
    </>
  );
};