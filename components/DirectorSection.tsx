import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export const DirectorSection: React.FC = () => {
  const [shouldPlay, setShouldPlay] = useState(false);
  const videoSectionRef = useRef<HTMLDivElement>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setShouldPlay(true);
          observer.disconnect(); // Play once when visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
    );

    if (videoSectionRef.current) {
      observer.observe(videoSectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const content = {
    EN: {
      headerTitle1: "With Sincerity,",
      headerTitle2: "Designing Beauty",
      quote: "\"True beauty is not about changing who you are, but discovering the natural charm hidden within. Garnet Plastic Surgery promises honest care and safety above all, delivering natural beauty that stands the test of time.\"",
      position: "Representative Director",
      name: "Dr. In-Soo Baek",
      eduTitle: "Education & Career",
      eduList: [
        "M.D., Korea University College of Medicine",
        "M.S. in Plastic Surgery, Korea University Graduate School",
        "Intern and Resident, Korea University Medical Center and National Medical Center",
        "Board Certified Plastic Surgeon, National Medical Center",
        "Former Representative Director, Jewelry Plastic Surgery"
      ],
      academicTitle: "Academic Activities",
      academicList: [
        "Member, Korean Society of Plastic and Reconstructive Surgeons",
        "Member, Korean Society for Aesthetic Plastic Surgery",
        "Member, Korean Cleft Palate-Craniofacial Association",
        "Member, Facial Contouring Research Society (KSPRS)",
        "Member, Eye Plastic Surgery Research Society (KSPRS)",
        "Member, Rhinoplasty Research Society (KSPRS)",
        "Member, Anti-aging Plastic Surgery Research Society (KSPRS)"
      ],
      welcomeSub: "Welcome Message",
      welcomeTitle: "Greetings from Dr. Baek"
    },
    CN: {
      headerTitle1: "以诚挚之心，",
      headerTitle2: "设计自然之美",
      quote: "“真正的美丽不是改变现在的你，而是发现隐藏在其中的自然魅力。嘉奈整形外科承诺，以诚实和安全为首要原则，为您打造经得起时间考验的自然之美。”",
      position: "代表院长",
      name: "白寅秀 院长",
      eduTitle: "学历与经历",
      eduList: [
        "高丽大学医学院 毕业",
        "高丽大学研究生院 整形外科 硕士/博士",
        "高丽大学医疗院 整形外科 专科医生",
        "国立医疗院 整形外科 专科医生",
        "前 Jewelry整形外科 代表院长"
      ],
      academicTitle: "学术活动",
      academicList: [
        "大韩整形外科学会 正式会员",
        "大韩美容整形外科学会 正式会员",
        "大韩头颅面部整形外科学会 正式会员",
        "大韩整形外科学会 面部轮廓整形研究会 会员",
        "大韩整形外科学会 眼部整形研究会 会员",
        "大韩整形外科学会 鼻部整形研究会 会员",
        "大韩整形外科学会 抗衰老整形研究会 会员"
      ],
      welcomeSub: "欢迎致辞",
      welcomeTitle: "白寅秀院长的问候"
    },
    JP: {
      headerTitle1: "真心を込めて、",
      headerTitle2: "美しさをデザインする",
      quote: "「真の美しさとは、自分を変えることではなく、内に秘められた自然な魅力を発見することです。ガーネット整形外科は、何よりも誠実な診療と安全を約束し、時間が経っても変わらない自然な美しさをお届けします。」",
      position: "代表院長",
      name: "ペク・インス 院長",
      eduTitle: "学歴・経歴",
      eduList: [
        "高麗大学医学部 卒業",
        "高麗大学大学院 整形外科 修士/博士",
        "高麗大学医療院 整形外科 専門医",
        "国立医療院 整形外科 専門医",
        "前 ジュエリー整形外科 代表院長"
      ],
      academicTitle: "学会活動",
      academicList: [
        "大韓整形外科学会 正会員",
        "大韓美容整形外科学会 正会員",
        "大韓頭蓋顔面整形外科学会 正会員",
        "大韓整形外科学会 顔面輪郭整形研究会 会員",
        "大韓整形外科学会 目整形研究会 会員",
        "大韓整形外科学会 鼻整形研究会 会員",
        "大韓整形外科学会 アンチエイジング整形研究会 会員"
      ],
      welcomeSub: "ご挨拶",
      welcomeTitle: "ペク・インス院長からのご挨拶"
    },
    TH: {
      headerTitle1: "ด้วยความจริงใจ,",
      headerTitle2: "รังสรรค์ความงาม",
      quote: "\"ความงามที่แท้จริงไม่ใช่การเปลี่ยนแปลงตัวตนของคุณ แต่คือการค้นพบเสน่ห์ตามธรรมชาติที่ซ่อนอยู่ภายใน Garnet Plastic Surgery สัญญาว่าจะให้การดูแลอย่างซื่อสัตย์และคำนึงถึงความปลอดภัยเป็นสำคัญ เพื่อมอบความงามที่เป็นธรรมชาติและยั่งยืน\"",
      position: "ผู้อำนวยการ",
      name: "นพ. แบค อิน-ซู",
      eduTitle: "การศึกษาและประวัติการทำงาน",
      eduList: [
        "จบการศึกษาแพทยศาสตร์บัณฑิต มหาวิทยาลัยโคเรีย",
        "มหาบัณฑิตและดุษฎีบัณฑิต สาขาศัลยศาสตร์ตกแต่ง มหาวิทยาลัยโคเรีย",
        "แพทย์ประจำบ้าน ศูนย์การแพทย์มหาวิทยาลัยโคเรีย",
        "ศัลยแพทย์ตกแต่งเฉพาะทาง ศูนย์การแพทย์แห่งชาติ",
        "อดีตผู้อำนวยการ Jewelry Plastic Surgery"
      ],
      academicTitle: "กิจกรรมทางวิชาการ",
      academicList: [
        "สมาชิกสมาคมศัลยแพทย์ตกแต่งและเสริมสร้างแห่งเกาหลี (KSPRS)",
        "สมาชิกสมาคมศัลยกรรมความงามแห่งเกาหลี (KSAPS)",
        "สมาชิกสมาคมศัลยกรรมความงามกะโหลกศีรษะและใบหน้า",
        "สมาชิกกลุ่มวิจัยศัลยกรรมโครงหน้า (KSPRS)",
        "สมาชิกกลุ่มวิจัยศัลยกรรมตา (KSPRS)",
        "สมาชิกกลุ่มวิจัยศัลยกรรมจมูก (KSPRS)",
        "สมาชิกกลุ่มวิจัยศัลยกรรมชะลอวัย (KSPRS)"
      ],
      welcomeSub: "ข้อความต้อนรับ",
      welcomeTitle: "คำทักทายจาก นพ. แบค อิน-ซู"
    }
  };
  
  const c = content[language];

  // Vimeo Video ID based on Language
  // defaulting TH to EN video since none provided
  const videoIds = {
    EN: "1154215554",
    CN: "1154228818",
    JP: "1154228779",
    TH: "1154215554" 
  };

  const VIMEO_VIDEO_ID = videoIds[language];

  const vimeoSrc = shouldPlay 
    ? `https://player.vimeo.com/video/${VIMEO_VIDEO_ID}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&background=1`
    : ""; 

  return (
    <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 relative max-w-[1400px]">
        
        {/* Header Section: Title & Quote */}
        <div className="flex flex-col items-center mb-20 lg:mb-32">
          <div className="w-full max-w-6xl text-left pl-4 lg:pl-0">
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-slate-900 mb-8 leading-[1.1]">
              {c.headerTitle1} <br />
              <span className="font-bold">{c.headerTitle2}</span>
            </h2>
            <p className="text-slate-600 text-xl md:text-2xl leading-relaxed font-light max-w-4xl">
              {c.quote}
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-16">
          
          {/* Left Column: Image */}
          <div className="w-full lg:w-7/12 flex justify-center lg:justify-end px-4 lg:px-0"> 
             <div className="relative w-full lg:max-w-none flex justify-center lg:justify-end">
                <img
                  src="https://cdn.imweb.me/upload/S20240911663c2f94b4b14/414d910e06223.png"
                  alt="Dr. In-Soo Baek"
                  className="w-full max-w-[500px] lg:max-w-[90%] h-auto object-contain z-10 relative drop-shadow-2xl rounded-sm"
                />
             </div>
          </div>

          {/* Right Column: Name & Lists */}
          <div className="w-full lg:w-5/12 pt-4 lg:pt-12 px-4 lg:pr-12">
            
            {/* Name Block */}
            <div className="mb-12 border-l-4 border-slate-900 pl-6 py-2">
              <p className="text-gold font-bold text-sm tracking-widest uppercase mb-3">{c.position}</p>
              <h3 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-none">{c.name}</h3>
            </div>

            {/* Credentials Stack */}
            <div className="flex flex-col gap-12">
              {/* Education & Career */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5 pb-2 border-b border-gray-300 inline-block pr-8">
                  {c.eduTitle}
                </h3>
                <ul className="space-y-3">
                  {c.eduList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed font-medium text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Academic Activities */}
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-5 pb-2 border-b border-gray-300 inline-block pr-8">
                  {c.academicTitle}
                </h3>
                <ul className="space-y-3">
                  {c.academicList.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-2.5 flex-shrink-0" />
                      <span className="text-slate-700 leading-relaxed font-medium text-base md:text-lg">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div ref={videoSectionRef} className="mt-24 lg:mt-32 w-full max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="text-gold font-bold tracking-widest uppercase text-sm block mb-3">
              {c.welcomeSub}
            </span>
            <h3 className="text-3xl md:text-4xl font-light text-slate-900">
              {c.welcomeTitle}
            </h3>
          </div>
          
          <div className="flex flex-col gap-4">
            <div className="relative w-full pt-[56.25%] bg-slate-900 rounded-sm shadow-xl overflow-hidden">
               {shouldPlay && (
                <iframe 
                  src={vimeoSrc}
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Garnet Plastic Surgery Director Video"
                />
               )}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};