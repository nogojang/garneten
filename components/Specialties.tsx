import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SpecialtyDetail {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const SpecialtyItem: React.FC<{ item: SpecialtyDetail; index: number }> = ({ item, index }) => {
  const isEven = index % 2 !== 0;

  return (
    <div className="py-24 md:py-40 w-full border-b border-gray-100 last:border-0">
      <div className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 lg:gap-40`}>
        
        {/* Image Area */}
        <div className="w-full lg:w-1/2">
          <div className="relative aspect-[4/5] lg:aspect-[3/4] w-full overflow-hidden bg-gray-100 shadow-sm">
            <img 
              src={item.imageUrl} 
              alt={item.title} 
              className="w-full h-full object-cover transition-transform duration-[1.5s] hover:scale-105"
            />
          </div>
        </div>

        {/* Text Area */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <div className={`flex flex-col ${isEven ? 'lg:items-end lg:text-right' : 'lg:items-start lg:text-left'}`}>
            
            {/* Eyebrow */}
            <div className="flex items-center gap-6 mb-8 md:mb-12">
               {!isEven && <span className="hidden lg:block w-20 h-[1px] bg-slate-900"></span>}
               <span className="text-gold font-bold tracking-[0.3em] uppercase text-sm md:text-base">
                 {item.category}
               </span>
               {isEven && <span className="hidden lg:block w-20 h-[1px] bg-slate-900"></span>}
            </div>

            {/* Title */}
            <h3 className="text-5xl md:text-6xl lg:text-7xl font-sans font-light text-slate-900 leading-[1.1] mb-10 md:mb-12 break-keep">
              {item.title}
            </h3>

            {/* Description */}
            <p className="text-gray-500 text-lg md:text-xl leading-9 md:leading-10 font-light break-keep max-w-2xl mb-16 md:mb-20">
              {item.description}
            </p>

            {/* Structured List */}
            <div className="w-full max-w-2xl border-t border-slate-200">
              <ul className={`flex flex-col`}>
                {item.features.map((feature, idx) => (
                  <li key={idx} className={`py-6 md:py-8 border-b border-gray-100 flex items-center gap-8 group ${isEven ? 'lg:flex-row-reverse' : 'flex-row'}`}>
                    <span className="text-gold font-serif text-lg md:text-xl font-bold opacity-60">0{idx + 1}</span>
                    <span className="text-slate-800 text-lg md:text-xl font-medium tracking-wide group-hover:text-slate-900 transition-colors">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export const Specialties: React.FC = () => {
  const { language } = useLanguage();

  const data = {
    EN: {
      brand: "Garnet",
      eyebrow: "Garnet Signature",
      title: "Signature",
      desc: "Experience Garnet Plastic Surgery's unique surgical know-how completed based on thousands of clinical data cases.",
      items: [
        {
          id: "eye",
          title: "Premium Eye Surgery",
          category: "Eye Surgery",
          description: "Eyes are the windows to the soul. We analyze facial proportions and anatomical structures to create clear, defined eyes that highlight your natural beauty without looking artificial.",
          features: [
            "1:1 Customized design considering facial proportions",
            "Natural adhesion method for long-lasting double eyelids",
            "Scar-free minimal incision canthoplasty",
            "Non-incisional ptosis correction for brighter eyes"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/4d5ea5aeb2a1d.png"
        },
        {
          id: "anti-aging",
          title: "Anti-Aging & Lifting",
          category: "Anti-Aging",
          description: "Turn back time and experience elasticity rising from deep within. We lift sagging skin and fill hollow areas to restore the facial lines and skin texture of your prime.",
          features: [
            "Minimal incision SMAS facelift",
            "Premium Laser (Ulthera)",
            "Full-face fat grafting for natural volume",
            "Custom skin boosters for wrinkles and elasticity"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/20574f39b2800.png"
        },
        {
          id: "nose",
          title: "3-Dimensional Rhinoplasty",
          category: "Rhinoplasty",
          description: "We design the perfect profile line from forehead to nose tip to chin. Using 3D-CT diagnosis, we address functional issues and use autologous tissues for safe, natural lines.",
          features: [
            "Precise surgical planning via 3D-CT analysis",
            "Principle of using autologous tissues (septum, cartilage)",
            "Customized tip plasty for 3D facial effect",
            "Strong structural support preventing revision needs"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ce312197d8039.png"
        }
      ]
    },
    CN: {
      brand: "嘉奈",
      eyebrow: "嘉奈 核心项目",
      title: "核心项目",
      desc: "基于数千例临床数据，体验嘉奈整形外科独有的手术诀窍。",
      items: [
        {
          id: "eye",
          title: "臻品眼部整形",
          category: "眼部整形",
          description: "眼睛是心灵的窗户。我们分析面部比例和解剖结构，为您打造清晰、自然的双眸，突显您的个人魅力而不显做作。",
          features: [
            "考虑面部比例的1:1定制设计",
            "持久自然的自然粘连法双眼皮",
            "无疤痕微创开眼角",
            "打造明亮双眸的非切开提肌矫正"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/4d5ea5aeb2a1d.png"
        },
        {
          id: "anti-aging",
          title: "童颜抗衰 & 提升",
          category: "抗衰老",
          description: "让时光倒流，体验源自深层的紧致。提升松弛的皮肤，填充凹陷部位，恢复黄金时期的面部线条和皮肤质感。",
          features: [
            "微创SMAS拉皮手术",
            "高端激光 (超声刀)",
            "打造自然立体感的全脸脂肪填充",
            "针对皱纹和弹性的定制皮肤营养针"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/20574f39b2800.png"
        },
        {
          id: "nose",
          title: "3D 立体鼻部整形",
          category: "鼻部整形",
          description: "从额头到鼻尖再到下巴，设计完美的侧颜线条。通过3D-CT诊断解决功能性问题，并使用自体组织打造安全、自然的线条。",
          features: [
            "通过3D-CT分析进行精确的手术计划",
            "坚持使用自体组织原则 (鼻中隔, 耳软骨)",
            "打造3D面部效果的定制鼻尖整形",
            "防止修复手术的强力结构支撑"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ce312197d8039.png"
        }
      ]
    },
    JP: {
      brand: "Garnet",
      eyebrow: "Garnet シグネチャー",
      title: "診療科目",
      desc: "数千件の臨床データに基づいたガーネット整形外科ならではの手術ノウハウをご体験ください。",
      items: [
        {
          id: "eye",
          title: "プレミアム目整形",
          category: "目整形",
          description: "目は心の窓です。顔の比率と解剖学的構造を分析し、人工的ではなく自然な美しさを際立たせる、鮮明でパッチリとした目元を作ります。",
          features: [
            "顔の比率を考慮した1:1オーダーメイドデザイン",
            "解けにくく自然な自然癒着法",
            "傷跡のない最小切開目頭・目尻切開",
            "明るい目元を作る非切開目つき矯正"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/4d5ea5aeb2a1d.png"
        },
        {
          id: "anti-aging",
          title: "アンチエイジング・リフティング",
          category: "アンチエイジング",
          description: "時間を巻き戻し、深層から込み上げる弾力を体験してください。たるんだ皮膚を引き上げ、凹んだ部分を満たし、全盛期のフェイスラインと肌のキメを取り戻します。",
          features: [
            "最小切開SMASフェイスリフト",
            "プレミアムレーザー (ウルセラ)",
            "自然なボリューム感を作る全顔脂肪移植",
            "シワと弾力のためのオーダーメイドスキンブースター"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/20574f39b2800.png"
        },
        {
          id: "nose",
          title: "3D立体鼻整形",
          category: "鼻整形",
          description: "額から鼻先、顎先まで続く完璧なプロフィールラインをデザインします。3D-CT診断で機能的な問題を解決し、自家組織を使用して安全で自然なラインを完成させます。",
          features: [
            "3D-CT分析による精密な手術計画",
            "自家組織使用の原則 (鼻中隔、耳介軟骨)",
            "3D立体顔効果のためのオーダーメイド鼻尖形成",
            "再手術を防ぐ強力な構造的支持"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ce312197d8039.png"
        }
      ]
    },
    TH: {
      brand: "Garnet",
      eyebrow: "Garnet Signature",
      title: "Signature",
      desc: "สัมผัสประสบการณ์เทคนิคการผ่าตัดเฉพาะของ Garnet Plastic Surgery ที่สมบูรณ์แบบด้วยฐานข้อมูลทางคลินิกกว่าพันเคส",
      items: [
        {
          id: "eye",
          title: "ศัลยกรรมตาพรีเมียม",
          category: "ศัลยกรรมตา",
          description: "ดวงตาคือหน้าต่างของหัวใจ เราวิเคราะห์สัดส่วนใบหน้าและโครงสร้างทางกายวิภาคเพื่อสร้างดวงตาที่คมชัดและสดใส เน้นความงามตามธรรมชาติโดยไม่ดูประดิษฐ์",
          features: [
            "การออกแบบเฉพาะบุคคลแบบ 1:1 คำนึงถึงสัดส่วนใบหน้า",
            "วิธี Natural Adhesion เพื่อชั้นตาที่สวยทนทาน",
            "เปิดหัวตาและหางตาด้วยแผลเล็ก ไร้รอยแผลเป็น",
            "แก้ไขกล้ามเนื้อตาโดยไม่ต้องกรีด เพื่อดวงตาที่สดใสขึ้น"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/4d5ea5aeb2a1d.png"
        },
        {
          id: "anti-aging",
          title: "ชะลอวัย & ยกกระชับ",
          category: "ชะลอวัย",
          description: "ย้อนเวลากลับไปและสัมผัสความยืดหยุ่นจากภายในสู่ภายนอก เรายกกระชับผิวที่หย่อนคล้อยและเติมเต็มส่วนที่ตอบเพื่อคืนรูปหน้าและผิวพรรณในช่วงวัยที่ดีที่สุดของคุณ",
          features: [
            "ดึงหน้า SMAS แผลเล็ก",
            "เลเซอร์พรีเมียม (Ulthera)",
            "ฉีดไขมันทั่วหน้าเพื่อวอลลุ่มที่เป็นธรรมชาติ",
            "สกินบูสเตอร์สูตรเฉพาะเพื่อลดริ้วรอยและเพิ่มความยืดหยุ่น"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/20574f39b2800.png"
        },
        {
          id: "nose",
          title: "ศัลยกรรมจมูก 3 มิติ",
          category: "ศัลยกรรมจมูก",
          description: "เราออกแบบเส้นโปรไฟล์ที่สมบูรณ์แบบจากหน้าผากสู่ปลายจมูกและคาง ด้วยการวิเคราะห์ 3D-CT เราแก้ไขปัญหาการใช้งานและใช้เนื้อเยื่อของตนเองเพื่อรูปทรงที่ปลอดภัยและเป็นธรรมชาติ",
          features: [
            "วางแผนการผ่าตัดอย่างแม่นยำด้วยการวิเคราะห์ 3D-CT",
            "หลักการใช้เนื้อเยื่อของตนเอง (ผนังกั้นจมูก, กระดูกอ่อนใบหู)",
            "ปรับแต่งปลายจมูกเพื่อมิติใบหน้าที่สมบูรณ์",
            "โครงสร้างที่แข็งแรงป้องกันการแก้ซ้ำ"
          ],
          imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ce312197d8039.png"
        }
      ]
    }
  };

  const c = data[language];

  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-8 lg:px-24"> 
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <p className="text-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-8 md:mb-10 animate-fade-in-up">
            {c.eyebrow}
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light text-slate-900 leading-tight mb-12">
            {c.brand} <span className="font-bold">{c.title}</span>
          </h2>
          <div className="w-[1px] h-24 md:h-32 bg-slate-300 mt-8 mb-16" /> 
          <p className="text-gray-500 max-w-3xl leading-relaxed break-keep font-light text-xl md:text-2xl">
            {c.desc}
          </p>
        </div>

        {/* Content Stack */}
        <div className="flex flex-col gap-32 md:gap-48">
          {c.items.map((spec, idx) => (
            <SpecialtyItem key={spec.id} item={spec} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};