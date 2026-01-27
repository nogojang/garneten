import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const InteriorGallery: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    EN: {
      eyebrow: "Facility",
      title: "Class",
      titlePre: "Comfort & ",
      desc: "We have prepared a private and comfortable space to ensure your journey to beauty is as relaxing as possible.",
      labels: ["Main Lobby", "Consultation Room", "VIP Recovery Room", "Operation Room"]
    },
    CN: {
      eyebrow: "医院环境",
      title: "品位",
      titlePre: "舒适与 ",
      desc: "我们准备了私密舒适的空间，确保您的美丽之旅尽可能轻松惬意。",
      labels: ["大厅", "咨询室", "VIP 恢复室", "手术室"]
    },
    JP: {
      eyebrow: "院内施設",
      title: "品格",
      titlePre: "安らぎと ",
      desc: "美への旅路が可能な限りリラックスしたものになるよう、プライベートで快適な空間をご用意しました。",
      labels: ["メインロビー", "カウンセリングルーム", "VIP回復室", "手術室"]
    },
    TH: {
      eyebrow: "สิ่งอำนวยความสะดวก",
      title: "มีระดับ",
      titlePre: "ความสะดวกสบาย & ",
      desc: "เราได้เตรียมพื้นที่ส่วนตัวและสะดวกสบายเพื่อให้การเดินทางสู่ความงามของคุณผ่อนคลายที่สุด",
      labels: ["ล็อบบี้หลัก", "ห้องปรึกษา", "ห้องพักฟื้น VIP", "ห้องผ่าตัด"]
    }
  };

  const c = content[language];

  const images = [
    { src: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/9cd65d8976639.jpg", alt: c.labels[0], colSpan: "md:col-span-2", rowSpan: "md:row-span-2" },
    { src: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/46ad7366b5a31.jpg", alt: c.labels[1], colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/3be59b70d8c1f.jpg", alt: c.labels[2], colSpan: "md:col-span-1", rowSpan: "md:row-span-1" },
    { src: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/4ad146ded84b2.jpg", alt: c.labels[3], colSpan: "md:col-span-2", rowSpan: "md:row-span-1" },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-bold tracking-[0.2em] text-gray-400 uppercase mb-4">{c.eyebrow}</p>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-slate-900 leading-tight">
            {c.titlePre}<span className="font-bold">{c.title}</span>
          </h2>
          <div className="w-24 h-1 bg-slate-900 mx-auto mt-8" />
          <p className="mt-8 text-lg text-gray-500 break-keep max-w-2xl mx-auto">
            {c.desc}
          </p>
        </div>

        {/* Video Section */}
        <div className="w-full mb-24 pointer-events-none">
            <div className="relative w-full pt-[56.25%] bg-gray-50 rounded-sm shadow-xl overflow-hidden">
                <iframe 
                    src="https://player.vimeo.com/video/1153496080?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&autopause=0" 
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    title="Interior Video"
                />
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, idx) => (
            <div 
              key={idx} 
              className={`relative overflow-hidden group rounded-sm ${img.colSpan} ${img.rowSpan} h-full`}
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter brightness-[0.9] group-hover:brightness-100" 
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              <div className="absolute bottom-4 left-4 bg-white/90 px-4 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                <span className="text-slate-900 font-bold text-xs uppercase tracking-wide">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};