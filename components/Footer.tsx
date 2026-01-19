import React from 'react';
import { MapPin, Phone, Mail, Instagram, Youtube, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      desc: "The new standard of plastic surgery in Korea. Garnet Plastic Surgery is dedicated to discovering the gem-like beauty hidden within you.",
      locationTitle: "Location",
      location: "5F, I.S.A Bldg, 51 Apgujeong-ro 30-gil,\nGangnam-gu, Seoul",
      hoursTitle: "Office Hours",
      weekdays: "Weekdays",
      saturday: "Saturday",
      closed: "Sun / Holidays",
      closedLabel: "Closed"
    },
    CN: {
      desc: "韩国整形外科的新标准。嘉奈整形外科致力于发现您内心深处如宝石般隐藏的美丽。",
      locationTitle: "地址",
      location: "首尔特别市 江南区 狎鸥亭路 30街 51\nI.S.A大厦 5楼",
      hoursTitle: "诊疗时间",
      weekdays: "平日",
      saturday: "周六",
      closed: "周日 / 公休日",
      closedLabel: "休诊"
    },
    JP: {
      desc: "韓国整形の新しい基準。ガーネット整形外科は、あなたの中に隠された宝石のような美しさを発見することに専念します。",
      locationTitle: "アクセス",
      location: "ソウル特別市 江南区 狎鴎亭路 30ギル 51\nI.S.Aビル 5階",
      hoursTitle: "診療時間",
      weekdays: "平日",
      saturday: "土曜日",
      closed: "日曜日 / 祝日",
      closedLabel: "休診"
    },
    TH: {
      desc: "มาตรฐานใหม่ของศัลยกรรมตกแต่งในเกาหลี Garnet Plastic Surgery ทุ่มเทเพื่อค้นพบความงามดั่งอัญมณีที่ซ่อนอยู่ในตัวคุณ",
      locationTitle: "สถานที่ตั้ง",
      location: "ชั้น 5, อาคาร I.S.A, 51 Apgujeong-ro 30-gil,\nGangnam-gu, Seoul",
      hoursTitle: "เวลาทำการ",
      weekdays: "วันธรรมดา",
      saturday: "วันเสาร์",
      closed: "วันอาทิตย์ / วันหยุด",
      closedLabel: "ปิดทำการ"
    }
  };

  const c = content[language];

  return (
    <footer id="footer" className="bg-slate-900 text-white pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img 
                src="https://cdn.imweb.me/upload/S20240911663c2f94b4b14/96dfaf9feb9aa.png" 
                alt="Garnet Plastic Surgery" 
                className="h-12 w-auto brightness-0 invert opacity-90" 
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed break-keep whitespace-pre-line max-w-sm">
              {c.desc}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">{c.locationTitle}</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                <span className="whitespace-pre-line">{c.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span>02.517.8800</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                <span>garnetps@naver.com</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-gold">{c.hoursTitle}</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex justify-between max-w-xs border-b border-gray-800 pb-2">
                <span>{c.weekdays}</span>
                <span>10:00 AM - 07:00 PM</span>
              </li>
              <li className="flex justify-between max-w-xs border-b border-gray-800 pb-2">
                <span>{c.saturday}</span>
                <span>10:00 AM - 04:00 PM</span>
              </li>
              <li className="flex justify-between text-gold font-bold max-w-xs pt-1">
                <span>{c.closed}</span>
                <span>{c.closedLabel}</span>
              </li>
            </ul>
            
            {/* Social Icons */}
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-gold hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Garnet Plastic Surgery. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
};