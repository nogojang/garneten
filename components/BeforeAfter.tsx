import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface CaseStudy {
  id: number;
  category: string;
  title: string;
  description: string;
  beforeImage: string;
  afterImage: string;
}

export const BeforeAfter: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { language } = useLanguage();

  const content = {
    EN: {
      eyebrow: "Real Results",
      title: "Before & After",
      before: "Before",
      after: "After",
      caseLabel: "Case",
      cases: [
        {
          id: 1,
          category: "Eye Surgery",
          title: "Natural Adhesion & Ptosis Correction",
          description: "Correction of sleepy-looking eyes to create defined, bright eyes without visible scarring.",
          beforeImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop", 
          afterImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop&sat=20" 
        },
        {
          id: 2,
          category: "Rhinoplasty",
          title: "3D Line Rhinoplasty",
          description: "Refining the bulbous tip and raising the bridge for a sophisticated side profile.",
          beforeImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop&sat=20"
        },
        {
          id: 3,
          category: "Anti-Aging",
          title: "Full Face Fat Grafting",
          description: "Restoring volume to hollow areas for a youthful and three-dimensional face shape.",
          beforeImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop&sat=20"
        }
      ]
    },
    CN: {
      eyebrow: "真实案例",
      title: "前后对比",
      before: "术前",
      after: "术后",
      caseLabel: "案例",
      cases: [
        {
          id: 1,
          category: "眼部整形",
          title: "自然粘连 & 提肌矫正",
          description: "矫正睡眼惺忪的眼睛，打造清晰明亮的双眸，无明显疤痕。",
          beforeImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop", 
          afterImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop&sat=20" 
        },
        {
          id: 2,
          category: "鼻部整形",
          title: "3D 侧颜鼻整形",
          description: "改善圆钝的鼻尖并垫高鼻梁，打造精致的高级侧颜。",
          beforeImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop&sat=20"
        },
        {
          id: 3,
          category: "童颜整形",
          title: "全脸脂肪填充",
          description: "填充面部凹陷部位，打造年轻且富有立体感的脸型。",
          beforeImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop&sat=20"
        }
      ]
    },
    JP: {
      eyebrow: "リアルな症例",
      title: "ビフォー・アフター",
      before: "手術前",
      after: "手術後",
      caseLabel: "症例",
      cases: [
        {
          id: 1,
          category: "目整形",
          title: "自然癒着法 & 目つき矯正",
          description: "眠そうな目を矯正し、傷跡を目立たせずに鮮明で明るい目元を作ります。",
          beforeImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop", 
          afterImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop&sat=20" 
        },
        {
          id: 2,
          category: "鼻整形",
          title: "3Dライン鼻整形",
          description: "団子鼻を改善し、鼻筋を高めて洗練された横顔を完成させます。",
          beforeImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop&sat=20"
        },
        {
          id: 3,
          category: "童顔整形",
          title: "全顔脂肪移植",
          description: "顔の凹んだ部分にボリュームを与え、若々しく立体的な顔の形を作ります。",
          beforeImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop&sat=20"
        }
      ]
    },
    TH: {
      eyebrow: "เคสรีวิว",
      title: "Before & After",
      before: "ก่อน",
      after: "หลัง",
      caseLabel: "เคส",
      cases: [
        {
          id: 1,
          category: "ศัลยกรรมตา",
          title: "Natural Adhesion & แก้ไขกล้ามเนื้อตา",
          description: "แก้ไขดวงตาที่ดูง่วงนอนให้กลายเป็นดวงตาที่คมชัดและสดใส โดยไร้รอยแผลเป็นที่สังเกตเห็นได้",
          beforeImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop", 
          afterImage: "https://images.unsplash.com/photo-1534008236688-294b08705a2d?q=80&w=1000&auto=format&fit=crop&sat=20" 
        },
        {
          id: 2,
          category: "ศัลยกรรมจมูก",
          title: "ศัลยกรรมจมูก 3D Line",
          description: "ปรับแก้ปลายจมูกที่กลมมนและเสริมดั้งจมูกเพื่อมุมข้างที่ดูดีมีระดับ",
          beforeImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1552699609-8cf73c332242?q=80&w=1000&auto=format&fit=crop&sat=20"
        },
        {
          id: 3,
          category: "ชะลอวัย",
          title: "ฉีดไขมันทั่วหน้า",
          description: "เติมเต็มวอลลุ่มในส่วนที่ตอบเพื่อรูปหน้าที่มีมิติและดูอ่อนเยาว์",
          beforeImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop",
          afterImage: "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=1000&auto=format&fit=crop&sat=20"
        }
      ]
    }
  };

  const c = content[language];
  const cases = c.cases;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % cases.length);
  }, [cases.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? cases.length - 1 : prev - 1));
    setIsPaused(true); // Pause on manual interaction
  };

  const handleManualNext = () => {
    nextSlide();
    setIsPaused(true);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); // 5 seconds per slide
      return () => clearInterval(timer);
    }
  }, [isPaused, nextSlide]);

  return (
    <section className="py-24 md:py-32 bg-slate-50">
      <div className="container mx-auto px-6 lg:px-12">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-6 animate-fade-in-up">
            {c.eyebrow}
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-light text-slate-900 leading-tight mb-8">
            Before & <span className="font-bold">After</span>
          </h2>
          <div className="w-[1px] h-16 bg-slate-300 mx-auto" />
        </div>

        {/* Slider Container */}
        <div className="relative max-w-6xl mx-auto">
          
          {/* Main Content Area */}
          <div className="relative overflow-hidden min-h-[600px] md:min-h-[500px]">
            {cases.map((item, index) => (
              <div 
                key={item.id}
                className={`absolute inset-0 w-full h-full transition-all duration-700 ease-in-out transform ${
                  index === currentSlide 
                    ? 'opacity-100 translate-x-0' 
                    : 'opacity-0 translate-x-8 pointer-events-none'
                }`}
              >
                <div className="flex flex-col lg:flex-row h-full gap-8 lg:gap-12">
                  
                  {/* Images Container */}
                  <div className="w-full lg:w-2/3 grid grid-cols-2 gap-2 md:gap-4">
                    {/* Before */}
                    <div className="relative aspect-[3/4] group overflow-hidden bg-gray-200">
                      <img 
                        src={item.beforeImage} 
                        alt={`Before ${item.title}`} 
                        className="w-full h-full object-cover filter grayscale-[30%]"
                      />
                      <div className="absolute top-4 left-4 bg-slate-900/80 text-white text-xs md:text-sm font-bold px-4 py-1.5 uppercase tracking-widest backdrop-blur-sm">
                        {c.before}
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="relative aspect-[3/4] group overflow-hidden bg-gray-200">
                      <img 
                        src={item.afterImage} 
                        alt={`After ${item.title}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 left-4 bg-gold text-white text-xs md:text-sm font-bold px-4 py-1.5 uppercase tracking-widest shadow-lg">
                        {c.after}
                      </div>
                    </div>
                  </div>

                  {/* Text Content */}
                  <div className="w-full lg:w-1/3 flex flex-col justify-center text-center lg:text-left">
                    <span className="text-gold font-bold tracking-widest uppercase text-sm mb-4 block">
                      {c.caseLabel} 0{index + 1}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-light text-slate-900 mb-2">
                      {item.category}
                    </h3>
                    <h4 className="text-xl md:text-2xl font-bold text-slate-900 mb-6">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 leading-relaxed font-light mb-8 break-keep">
                      {item.description}
                    </p>
                    <div className="hidden lg:block w-12 h-[1px] bg-slate-200 lg:mr-auto" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center lg:justify-start gap-4 mt-8 lg:absolute lg:bottom-12 lg:right-0 lg:mt-0">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2 mx-4">
              {cases.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => { setCurrentSlide(idx); setIsPaused(true); }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'bg-gold w-8' : 'bg-slate-300'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button 
              onClick={handleManualNext}
              className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};