import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

interface SafetyFeature {
  name: string;
  category: string;
  detail: string;
  imageUrl: string;
}

interface SafetySection {
  sectionTitle: string;
  sectionSubtitle: string;
  sectionDescription?: string;
  features: SafetyFeature[];
}

export const SafetySystem: React.FC = () => {
  const { language } = useLanguage();

  const data = {
    EN: {
      eyebrow: "Safety & System",
      title: "Safety System",
      sections: [
        {
          sectionTitle: "OR Hygiene & Safety Management",
          sectionSubtitle: "Safety First",
          features: [
            { 
              name: "University-level Sterilization", 
              category: "Clean System",
              detail: "We prevent cross-infection by thoroughly sterilizing all surgical instruments through advanced autoclave and plasma sterilizers.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/fe501346c042d.jpg"
            },
            { 
              name: "CCTV Monitoring System", 
              category: "Transparency",
              detail: "We promise honest treatment without shadow doctors by operating a CCTV monitoring system that transparently reveals the entire surgical process.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/16b5dbf3c3d09.jpg"
            },
            { 
              name: "HEPA Filter Air Purification", 
              category: "Air Purification",
              detail: "We maintain a pleasant and safe sterile surgical environment 365 days a year with a HEPA filter system that removes 99.9% of fine dust and bacteria.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/0e90c322d2c89.jpg"
            },
            { 
              name: "Real-time Vital Monitoring", 
              category: "Vital Check",
              detail: "We thoroughly prepare for emergencies by checking vital signs such as respiration, pulse, and blood pressure in real-time during anesthesia.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ae6716111a37d.jpg"
            }
          ]
        },
        {
          sectionTitle: "Advanced Precision Equipment",
          sectionSubtitle: "Precision",
          sectionDescription: "For safe and perfect results, we use university-level advanced equipment to precisely analyze anatomical structures and plan surgery.",
          features: [
            { 
              name: "3D Facial CT", 
              category: "Diagnosis",
              detail: "We precisely diagnose bone structure, nerve location, and septal condition in 3D to plan surgery without errors.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/d3af7344c1b2d.jpg"
            },
            { 
              name: "Lipokit Fat Grafting System", 
              category: "Fat Grafting",
              detail: "We proceed with high-engraftment fat grafting using the Lipokit system that extracts only pure fat by blocking air contact.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/2979468ef1389.jpg"
            },
            { 
              name: "HD High-Resolution Endoscope", 
              category: "Minimally Invasive",
              detail: "We minimize tissue damage and increase precision by clearly checking internal tissues during minimal incision surgery.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/718c67ec9af95.jpg"
            }
          ]
        },
        {
          sectionTitle: "Post-op Recovery System",
          sectionSubtitle: "Care System",
          sectionDescription: "From surgery to perfect recovery, our medical team takes responsibility. Dedicated staff who know your condition best provide systematic aftercare.",
          features: [
            { 
              name: "Private Recovery Room", 
              category: "Privacy",
              detail: "We operate single-person private recovery rooms where you can focus entirely on rest without encountering other patients immediately after surgery.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/b823b75c8dfc0.jpg"
            },
            { 
              name: "1:1 Custom Aftercare", 
              category: "Management",
              detail: "Professional managers provide step-by-step customized care for skin soothing, swelling reduction, and pain management to help you return to daily life quickly.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/79d86de8a0b14.jpg"
            },
            { 
              name: "Smart Healing Therapy", 
              category: "Technology",
              detail: "We proceed with scientific management using the latest equipment such as LED therapy to promote cell regeneration and speed up recovery.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/8b760e0a96230.jpg"
            }
          ]
        },
        {
          sectionTitle: "Hyperbaric Oxygen Therapy",
          sectionSubtitle: "Premium Recovery",
          sectionDescription: "We operate a premium oxygen therapy system as a core recovery protocol to enhance the speed and quality of recovery.",
          features: [
            { 
              name: "Hyperbaric Oxygen Chamber", 
              category: "Oxygen Therapy",
              detail: "Supplying high-concentration oxygen to the body quickly reduces swelling and bruising after surgery and helps cell regeneration to shorten the recovery period.",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/3a2a0e64f835d.jpg"
            }
          ]
        }
      ]
    },
    CN: {
      eyebrow: "安全与系统",
      title: "安全系统",
      sections: [
        {
          sectionTitle: "手术室卫生与安全管理",
          sectionSubtitle: "安全至上",
          features: [
            { 
              name: "大学级灭菌系统", 
              category: "清洁系统",
              detail: "通过先进的高压灭菌器和等离子消毒器彻底消毒所有手术器械，防止交叉感染。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/fe501346c042d.jpg"
            },
            { 
              name: "CCTV 监控系统", 
              category: "透明性",
              detail: "通过CCTV监控系统透明地公开手术全过程，杜绝影子医生，承诺诚实诊疗。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/16b5dbf3c3d09.jpg"
            },
            { 
              name: "HEPA 过滤器空气净化", 
              category: "空气净化",
              detail: "通过去除99.9%微尘和细菌的HEPA过滤器系统，一年365天保持舒适、安全、无菌的手术环境。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/0e90c322d2c89.jpg"
            },
            { 
              name: "实时生命体征监测", 
              category: "生命体征检查",
              detail: "麻醉期间实时检查呼吸、脉搏、血压等生命体征，彻底应对紧急情况。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ae6716111a37d.jpg"
            }
          ]
        },
        {
          sectionTitle: "先进精密设备",
          sectionSubtitle: "精密性",
          sectionDescription: "为了安全和完美的结果，我们使用大学级先进设备精密分析解剖结构并计划手术。",
          features: [
            { 
              name: "3D 面部 CT", 
              category: "诊断",
              detail: "精密诊断骨骼结构、神经位置、鼻中隔状态等，制定无误差的手术计划。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/d3af7344c1b2d.jpg"
            },
            { 
              name: "Lipokit 脂肪移植系统", 
              category: "脂肪移植",
              detail: "使用Lipokit系统隔绝空气接触，仅提取纯净脂肪进行高存活率的脂肪移植。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/2979468ef1389.jpg"
            },
            { 
              name: "HD 高分辨率内窥镜", 
              category: "微创",
              detail: "在微创手术中清晰地确认内部组织，最大限度地减少组织损伤并提高精确度。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/718c67ec9af95.jpg"
            }
          ]
        },
        {
          sectionTitle: "术后恢复系统",
          sectionSubtitle: "护理系统",
          sectionDescription: "从手术到完美恢复，医疗团队全程负责。最了解您状态的专门人员提供系统的术后护理。",
          features: [
            { 
              name: "私人恢复室", 
              category: "隐私",
              detail: "运营单人私人恢复室，手术后无需面对其他患者，可完全专注于休息。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/b823b75c8dfc0.jpg"
            },
            { 
              name: "1:1 定制术后护理", 
              category: "管理",
              detail: "专业管理人员提供皮肤镇静、消肿、疼痛管理等阶段性定制护理，帮助您快速回归日常生活。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/79d86de8a0b14.jpg"
            },
            { 
              name: "智能愈合治疗", 
              category: "技术",
              detail: "使用LED治疗等最新设备进行科学管理，促进细胞再生并加快恢复速度。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/8b760e0a96230.jpg"
            }
          ]
        },
        {
          sectionTitle: "高压氧治疗",
          sectionSubtitle: "高端恢复",
          sectionDescription: "我们运营高端氧气治疗系统作为核心恢复方案，以提高恢复速度和质量。",
          features: [
            { 
              name: "高压氧舱", 
              category: "氧气治疗",
              detail: "向体内供应高浓度氧气，快速减少术后肿胀和淤青，并帮助细胞再生，缩短恢复期。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/3a2a0e64f835d.jpg"
            }
          ]
        }
      ]
    },
    JP: {
      eyebrow: "安全性 & システム",
      title: "安全システム",
      sections: [
        {
          sectionTitle: "手術室衛生および安全管理",
          sectionSubtitle: "安全第一",
          features: [
            { 
              name: "大学病院級の滅菌", 
              category: "清潔システム",
              detail: "先端オートクレーブとプラズマ滅菌器を通じてすべての手術器具を徹底的に滅菌し、交差感染を予防します。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/fe501346c042d.jpg"
            },
            { 
              name: "CCTVモニタリングシステム", 
              category: "明確性",
              detail: "手術の全過程を明確に公開するCCTVモニタリングシステムを運営し、代理手術のない誠実な診療を約束します。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/16b5dbf3c3d09.jpg"
            },
            { 
              name: "HEPAフィルター空気清浄", 
              category: "空気清浄",
              detail: "99.9%の微細粉塵と細菌を除去するHEPAフィルターシステムで、365日快適で安全な無菌手術環境を維持します。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/0e90c322d2c89.jpg"
            },
            { 
              name: "リアルタイムバイタルモニタリング", 
              category: "バイタルチェック",
              detail: "麻酔中の呼吸、脈拍、血圧などのバイタルサインをリアルタイムでチェックし、緊急事態に徹底的に備えます。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ae6716111a37d.jpg"
            }
          ]
        },
        {
          sectionTitle: "先端精密装備",
          sectionSubtitle: "精密性",
          sectionDescription: "安全で完璧な結果のために、大学病院級の先端装備を使用して解剖学的構造を精密に分析し、手術を計画します。",
          features: [
            { 
              name: "3D 顔面 CT", 
              category: "診断",
              detail: "骨の構造、神経の位置、鼻中隔の状態などを3Dで精密に診断し、誤差のない手術を計画します。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/d3af7344c1b2d.jpg"
            },
            { 
              name: "リポキット脂肪移植システム", 
              category: "脂肪移植",
              detail: "空気との接触を遮断して純粋な脂肪のみを抽出するリポキットシステムを使用し、生着率の高い脂肪移植を行います。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/2979468ef1389.jpg"
            },
            { 
              name: "HD 高解像度内視鏡", 
              category: "最小侵襲",
              detail: "最小切開手術時に内部組織を鮮明に確認し、組織の損傷を最小限に抑え、精密さを高めます。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/718c67ec9af95.jpg"
            }
          ]
        },
        {
          sectionTitle: "術後回復システム",
          sectionSubtitle: "ケアシステム",
          sectionDescription: "手術から完璧な回復まで、医療チームが責任を負います。お客様の状態を最もよく知る専任スタッフが体系的なアフターケアを提供します。",
          features: [
            { 
              name: "プライベート回復室", 
              category: "プライバシー",
              detail: "手術直後に他の患者と会うことなく休息に完全に集中できるよう、個室のプライベート回復室を運営しています。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/b823b75c8dfc0.jpg"
            },
            { 
              name: "1:1 オーダーメイドアフターケア", 
              category: "管理",
              detail: "専門マネージャーが肌の鎮静、腫れケア、痛み管理など段階別のオーダーメイドケアを提供し、日常生活への早期復帰をサポートします。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/79d86de8a0b14.jpg"
            },
            { 
              name: "スマートヒーリングセラピー", 
              category: "テクノロジー",
              detail: "LEDセラピーなどの最新機器を使用した科学的な管理を行い、細胞の再生を促進し、回復速度を早めます。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/8b760e0a96230.jpg"
            }
          ]
        },
        {
          sectionTitle: "高圧酸素治療",
          sectionSubtitle: "プレミアム回復",
          sectionDescription: "回復の速度と質を高めるための核心回復プロトコルとして、プレミアム酸素治療システムを運営しています。",
          features: [
            { 
              name: "高圧酸素チャンバー", 
              category: "酸素治療",
              detail: "高濃度の酸素を体内に供給し、手術後の腫れやあざを素早く抑え、細胞の再生を助けて回復期間を短縮します。",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/3a2a0e64f835d.jpg"
            }
          ]
        }
      ]
    },
    TH: {
      eyebrow: "ความปลอดภัย & ระบบ",
      title: "ระบบความปลอดภัย",
      sections: [
        {
          sectionTitle: "สุขอนามัยห้องผ่าตัด & การจัดการความปลอดภัย",
          sectionSubtitle: "ความปลอดภัยต้องมาก่อน",
          features: [
            { 
              name: "การฆ่าเชื้อระดับโรงพยาบาลมหาวิทยาลัย", 
              category: "ระบบความสะอาด",
              detail: "เราป้องกันการติดเชื้อโดยการฆ่าเชื้อเครื่องมือผ่าตัดทั้งหมดอย่างละเอียดด้วยหม้อนึ่งอัดความดันและเครื่องฆ่าเชื้อพลาสมา",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/fe501346c042d.jpg"
            },
            { 
              name: "ระบบกล้องวงจรปิด", 
              category: "ความโปร่งใส",
              detail: "เราสัญญาว่าจะทำการรักษาอย่างซื่อสัตย์โดยไม่มีแพทย์เงา ด้วยระบบกล้องวงจรปิดที่เปิดเผยกระบวนการผ่าตัดทั้งหมด",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/16b5dbf3c3d09.jpg"
            },
            { 
              name: "การกรองอากาศ HEPA Filter", 
              category: "การฟอกอากาศ",
              detail: "เรารักษาสภาพแวดล้อมการผ่าตัดที่ปลอดเชื้อและปลอดภัยตลอด 365 วัน ด้วยระบบกรอง HEPA ที่กำจัดฝุ่นละอองและแบคทีเรียได้ 99.9%",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/0e90c322d2c89.jpg"
            },
            { 
              name: "การติดตามสัญญาณชีพแบบเรียลไทม์", 
              category: "ตรวจเช็คสัญญาณชีพ",
              detail: "เราเตรียมพร้อมสำหรับเหตุฉุกเฉินอย่างละเอียดโดยการตรวจสอบสัญญาณชีพ เช่น การหายใจ ชีพจร และความดันโลหิต แบบเรียลไทม์ระหว่างการดมยาสลบ",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/ae6716111a37d.jpg"
            }
          ]
        },
        {
          sectionTitle: "อุปกรณ์ความแม่นยำสูง",
          sectionSubtitle: "ความแม่นยำ",
          sectionDescription: "เพื่อผลลัพธ์ที่ปลอดภัยและสมบูรณ์แบบ เราใช้อุปกรณ์ระดับโรงพยาบาลมหาวิทยาลัยเพื่อวิเคราะห์โครงสร้างทางกายวิภาคและวางแผนการผ่าตัดอย่างแม่นยำ",
          features: [
            { 
              name: "3D Facial CT", 
              category: "การวินิจฉัย",
              detail: "เราวินิจฉัยโครงสร้างกระดูก ตำแหน่งเส้นประสาท และสภาพผนังกั้นจมูกแบบ 3 มิติ เพื่อวางแผนการผ่าตัดโดยไม่มีข้อผิดพลาด",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/d3af7344c1b2d.jpg"
            },
            { 
              name: "ระบบฉีดไขมัน Lipokit", 
              category: "การฉีดไขมัน",
              detail: "เราทำการฉีดไขมันที่มีอัตราการติดสูงโดยใช้ระบบ Lipokit ที่สกัดเฉพาะไขมันบริสุทธิ์โดยป้องกันการสัมผัสกับอากาศ",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/2979468ef1389.jpg"
            },
            { 
              name: "กล้องเอนโดสโคป HD ความละเอียดสูง", 
              category: "แผลเล็ก",
              detail: "เราลดความเสียหายของเนื้อเยื่อและเพิ่มความแม่นยำโดยการตรวจสอบเนื้อเยื่อภายในอย่างชัดเจนระหว่างการผ่าตัดแผลเล็ก",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/718c67ec9af95.jpg"
            }
          ]
        },
        {
          sectionTitle: "ระบบการฟื้นตัวหลังผ่าตัด",
          sectionSubtitle: "ระบบดูแล",
          sectionDescription: "ตั้งแต่การผ่าตัดจนถึงการฟื้นตัวที่สมบูรณ์แบบ ทีมแพทย์ของเราจะรับผิดชอบ เจ้าหน้าที่เฉพาะทางที่รู้สภาพของคุณดีที่สุดจะให้การดูแลอย่างเป็นระบบ",
          features: [
            { 
              name: "ห้องพักฟื้นส่วนตัว", 
              category: "ความเป็นส่วนตัว",
              detail: "เราให้บริการห้องพักฟื้นส่วนตัวที่คุณสามารถจดจ่อกับการพักผ่อนได้อย่างเต็มที่โดยไม่ต้องพบเจอกับผู้ป่วยรายอื่นทันทีหลังการผ่าตัด",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/b823b75c8dfc0.jpg"
            },
            { 
              name: "การดูแลหลังผ่าตัดแบบ 1:1", 
              category: "การจัดการ",
              detail: "ผู้จัดการมืออาชีพให้การดูแลแบบกำหนดเองตามขั้นตอนสำหรับการปลอบประโลมผิว การลดบวม และการจัดการความเจ็บปวด เพื่อช่วยให้คุณกลับไปใช้ชีวิตประจำวันได้เร็วขึ้น",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/79d86de8a0b14.jpg"
            },
            { 
              name: "สมาร์ทฮีลลิ่งบำบัด", 
              category: "เทคโนโลยี",
              detail: "เราดำเนินการจัดการทางวิทยาศาสตร์โดยใช้อุปกรณ์ล่าสุด เช่น การบำบัดด้วยแสง LED เพื่อส่งเสริมการสร้างเซลล์ใหม่และเร่งการฟื้นตัว",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/8b760e0a96230.jpg"
            }
          ]
        },
        {
          sectionTitle: "การบำบัดด้วยออกซิเจนความดันสูง",
          sectionSubtitle: "การฟื้นตัวระดับพรีเมียม",
          sectionDescription: "เราใช้ระบบการบำบัดด้วยออกซิเจนระดับพรีเมียมเป็นโปรโตคอลการฟื้นตัวหลักเพื่อเพิ่มความเร็วและคุณภาพของการฟื้นตัว",
          features: [
            { 
              name: "อุโมงค์ออกซิเจนความดันสูง", 
              category: "ออกซิเจนบำบัด",
              detail: "การให้ออกซิเจนความเข้มข้นสูงแก่ร่างกายช่วยลดอาการบวมและรอยช้ำหลังผ่าตัดได้อย่างรวดเร็ว และช่วยสร้างเซลล์ใหม่เพื่อลดระยะเวลาการฟื้นตัว",
              imageUrl: "https://cdn.imweb.me/upload/S20240911663c2f94b4b14/3a2a0e64f835d.jpg"
            }
          ]
        }
      ]
    }
  };

  const c = data[language];

  return (
    <section className="py-32 md:py-48 bg-white">
      <div className="container mx-auto px-8 lg:px-24">
        <div className="mb-40 md:mb-56 text-center">
          <p className="text-gold font-bold tracking-[0.4em] uppercase text-xs md:text-sm mb-8">
            {c.eyebrow}
          </p>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-sans font-light text-slate-900 leading-tight">
            Advanced <span className="font-bold">{c.title}</span>
          </h2>
          <div className="w-[1px] h-24 md:h-32 bg-slate-200 mt-12 mx-auto"></div>
        </div>

        <div className="space-y-40 md:space-y-64">
          {c.sections.map((section, sIdx) => (
            <div key={sIdx} className="border-t border-gray-200 pt-24 md:pt-32 first:border-0 first:pt-0">
              
              <div className="mb-24 md:mb-32 max-w-4xl mx-auto text-center">
                <span className="text-gold font-bold tracking-widest uppercase text-xs md:text-sm block mb-6">
                  {section.sectionSubtitle}
                </span>
                <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8 font-sans">
                  {section.sectionTitle}
                </h3>
                {section.sectionDescription && (
                  <p className="text-gray-500 text-xl leading-relaxed break-keep font-light">
                    {section.sectionDescription}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-32 md:gap-40">
                {section.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex flex-col md:flex-row gap-16 lg:gap-32 group items-center">
                    
                    <div className="w-full md:w-1/2">
                      <div className="aspect-[16/10] w-full bg-gray-50 overflow-hidden shadow-sm">
                         <img 
                            src={feature.imageUrl} 
                            alt={feature.name}
                            className="w-full h-full object-cover transition-transform duration-[1s] group-hover:scale-105"
                          />
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 flex flex-col justify-start">
                      <div className="w-full pt-4">
                        
                        <div className="flex flex-col mb-8">
                            <span className="text-gold font-medium tracking-wide uppercase text-sm mb-4">
                            {feature.category}
                            </span>
                            <h4 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight font-sans">
                            {feature.name}
                            </h4>
                        </div>
                        
                        <p className="text-gray-600 text-lg md:text-xl leading-relaxed break-keep font-light max-w-lg">
                          {feature.detail}
                        </p>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};