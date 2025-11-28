import React, { useState, useEffect, useRef } from 'react';
import {
  Grid,
  List,
  Search,
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  ArrowDown,
  ChevronDown,
  ChevronUp,
  Menu,
  X,
  CheckCircle2,
  HelpCircle,
  AlertTriangle,
  AlertCircle,
  Eye,
  Lock,
  Unlock,
  Zap,
  Target,
  MousePointer2,
  MousePointerClick,
  Flame,
  Database,
  Cpu,
  Box,
  DollarSign,
  Shield,
  Smartphone,
  Activity,
  TrendingUp,
  TrendingDown,
  Terminal,
  Globe,
  Fingerprint,
  Sun,
  Moon,
  Settings,
  Thermometer,
  Hammer,
  Sword,
  Anchor,
  Coins,
  Brain,
  Trophy,
  User,
  UserX,
  Crown,
  Scroll,
  Stamp,
  Users,
  Landmark,
  FileText,
  Circle,
  Briefcase,
  GraduationCap,
  LineChart,
  Factory,
  ShieldAlert,
  CreditCard,
  Wallet,
  PieChart,
  BarChart3,
  Layers,
  XCircle,
  RefreshCcw,
  Sparkles,
  Monitor,
  MoveRight,
  Hexagon,
  Divide,
  MessageSquare,
  Scale,
  History,
  BookOpen,
  Lightbulb,
  Play,
  Minus,
  Plus,
  Battery,
  ShieldCheck,
  Package,
  Send,
  Wind,
  Rocket,
  Gavel,
} from 'lucide-react';

// ==========================================
// 0. 开场动画 (Landing) - 完整版
// ==========================================
const LandingPage = ({ onEnter }) => {
  const [narrative1Active, setNarrative1Active] = useState(false);
  const [narrative2Active, setNarrative2Active] = useState(false);
  const [doorsClosed, setDoorsClosed] = useState(false);
  const [finalHeroVisible, setFinalHeroVisible] = useState(false);
  const [entryVisible, setEntryVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // T+0.5s: 叙事1 出现
    const timer1 = setTimeout(() => {
      setNarrative1Active(true);
    }, 500);

    // T+3.5s: 叙事1 离场
    const timer2 = setTimeout(() => {
      setNarrative1Active(false);
    }, 3500);

    // T+4.0s: 叙事2 出现
    const timer3 = setTimeout(() => {
      setNarrative2Active(true);
    }, 4000);

    // T+7.0s: 叙事2 离场
    const timer4 = setTimeout(() => {
      setNarrative2Active(false);
    }, 7000);

    // T+7.5s: 开始关门 + 显示最终文案
    const timer5 = setTimeout(() => {
      setDoorsClosed(true);
      setFinalHeroVisible(true);
    }, 7500);

    // T+10.5s: 展示按钮
    const timer6 = setTimeout(() => {
      setEntryVisible(true);
    }, 10500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
      clearTimeout(timer6);
    };
  }, []);

  const handleEnter = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      onEnter();
    }, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cinzel:wght@400;700&display=swap');
        
        .landing-narrative-text {
          font-size: clamp(1.4rem, 3vw, 2rem);
          color: #ddd;
          font-weight: 500;
          letter-spacing: 0.15em;
          line-height: 1.8;
          position: absolute;
          opacity: 0;
          transform: translateZ(-100px);
          transition: all 1s cubic-bezier(0.2, 0.8, 0.2, 1);
          max-width: 800px;
          text-shadow: 0 0 10px rgba(0,0,0,0.8);
        }
        
        .landing-narrative-text.active {
          opacity: 1;
          transform: translateZ(0);
        }
        
        .landing-final-hero {
          opacity: 0;
          transition: opacity 3s ease;
          color: #fff;
          transform: translateY(20px);
          margin-bottom: 20px;
        }
        
        .landing-final-hero.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        .landing-entry-container {
          margin-top: 5rem;
          opacity: 0;
          transition: opacity 1.5s ease;
          pointer-events: auto;
          cursor: pointer;
        }
        
        .landing-entry-container.visible {
          opacity: 1;
        }
        
        .landing-transitioning {
          transform: scale(3);
          opacity: 0;
          filter: blur(20px);
          transition: all 1.2s ease-in;
        }
      `}</style>
      
      <div className={`h-screen w-full bg-black text-[#e0e0e0] relative overflow-hidden ${isTransitioning ? 'landing-transitioning' : ''}`} style={{ fontFamily: "'Noto Serif SC', serif", perspective: '1000px' }}>
        {/* 背景：暗夜微光 */}
        <div 
          className={`absolute inset-0 z-[1] transition-opacity duration-[3000ms] ${doorsClosed ? 'opacity-0' : 'opacity-100'}`}
          style={{
            background: 'radial-gradient(ellipse at center, #2a2a2a 0%, #111111 40%, #000000 80%)'
          }}
        >
          <div
            className="absolute inset-0 opacity-40 pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
            }}
          />
        </div>

        {/* 品牌与装饰 */}
        <div className="absolute top-10 left-10 z-[100]" style={{ mixBlendMode: 'difference' }}>
          <div className="text-2xl font-bold tracking-[0.1em] text-white" style={{ fontFamily: "'Noto Serif SC', serif", textShadow: '0 0 20px rgba(0,0,0,0.5)' }}>
            SHULIN | 树林
          </div>
          <div className="text-xs tracking-[0.3em] text-white/60 mt-1" style={{ fontFamily: "'Cinzel', serif" }}>
            WEEKLY REVIEW
          </div>
        </div>

        <div className="absolute bottom-10 left-10 text-sm text-white/40 tracking-[0.1em] z-[100]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          教育不是筛选，而是发现
        </div>
        <div className="absolute bottom-10 right-10 text-sm text-white/40 tracking-[0.1em] z-[100]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
          永远不要对知识失望
        </div>

        {/* 3D 大门场景 */}
        <div className="relative w-full h-full flex justify-center" style={{ transformStyle: 'preserve-3d', zIndex: 10 }}>
          {/* 左门 */}
          <div
            className="absolute top-[-10%] h-[120%] bg-[#080808] transition-transform duration-[4000ms]"
            style={{
              width: '50.5%',
              left: 0,
              transformOrigin: 'left center',
              transform: doorsClosed ? 'rotateY(0deg)' : 'rotateY(35deg)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
              background: 'linear-gradient(90deg, #000 0%, #0a0a0a 90%, #151515 100%)',
              boxShadow: 'inset -1px 0 2px rgba(255,255,255,0.15), 10px 0 50px rgba(0,0,0,0.8)'
            }}
          />

          {/* 关门后的缝隙光 */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 h-full bg-white transition-opacity duration-[2000ms] z-20`}
            style={{
              width: '4px',
              opacity: doorsClosed ? 1 : 0,
              boxShadow: '0 0 40px rgba(255,255,255,0.8), 0 0 15px rgba(255,255,255,0.6)'
            }}
          />

          {/* 右门 */}
          <div
            className="absolute top-[-10%] h-[120%] bg-[#080808] transition-transform duration-[4000ms]"
            style={{
              width: '50.5%',
              right: 0,
              transformOrigin: 'right center',
              transform: doorsClosed ? 'rotateY(0deg)' : 'rotateY(-35deg)',
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.5' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.08'/%3E%3C/svg%3E")`,
              background: 'linear-gradient(-90deg, #000 0%, #0a0a0a 90%, #151515 100%)',
              boxShadow: 'inset 1px 0 2px rgba(255,255,255,0.15), -10px 0 50px rgba(0,0,0,0.8)'
            }}
          />

          {/* 文案层 */}
          <div className="absolute inset-0 z-[50] flex flex-col justify-center items-center text-center pointer-events-none" style={{ transform: 'translateZ(50px)' }}>
            {/* 叙事1 */}
            <div className={`landing-narrative-text ${narrative1Active ? 'active' : ''}`}>
              一切的焦虑、财富、阶级<br/>
              <span style={{ fontWeight: 300, fontSize: '0.7em', opacity: 0.7, marginTop: '15px', display: 'block' }}>
                都跟这几次的技术革命有关系
              </span>
            </div>

            {/* 叙事2 */}
            <div className={`landing-narrative-text ${narrative2Active ? 'active' : ''}`}>
              系统地告诉你们<br/>
              <span style={{ fontWeight: 300, fontSize: '0.7em', opacity: 0.7, marginTop: '15px', display: 'block' }}>
                00 后为什么失去了机会
              </span>
            </div>

            {/* 最终文案 */}
            <div className={`landing-final-hero ${finalHeroVisible ? 'visible' : ''}`}>
              <h1 style={{ 
                fontSize: 'clamp(2.5rem, 5vw, 5rem)', 
                fontWeight: 500, 
                letterSpacing: '0.2em', 
                marginBottom: '2rem',
                textShadow: '0 0 20px rgba(255,255,255,0.3)',
                fontFamily: "'Noto Serif SC', serif"
              }}>
                大门正在关闭
              </h1>
              <p style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.3rem)',
                color: '#aaa',
                letterSpacing: '0.4em',
                fontWeight: 300,
                textTransform: 'uppercase',
                fontFamily: "'Noto Serif SC', serif"
              }}>
                时代只给你们留了一条缝
              </p>

              {/* 入口按钮 */}
              <div className={`landing-entry-container ${entryVisible ? 'visible' : ''}`}>
                <button
                  onClick={handleEnter}
                  className="bg-transparent border border-white/30 text-white px-10 py-4 transition-all duration-500 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  style={{
                    fontFamily: "'Noto Serif SC', serif",
                    fontSize: '1rem',
                    letterSpacing: '0.5em'
                  }}
                >
                  往哪里飞 →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// 0. 通用占位页
// ==========================================
const ComingSoonPage = ({ onNavigate, title = 'ACCESS DENIED' }) => (
  <div className="h-screen w-full bg-[#09090b] text-white flex flex-col items-center justify-center relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />
    <div className="z-10 text-center px-6">
      <Lock size={64} className="mx-auto mb-6 text-zinc-700" />
      <h1 className="text-4xl md:text-6xl font-black font-serif tracking-tighter mb-4">{title}</h1>
      <p className="text-zinc-500 font-mono text-sm tracking-widest mb-12">DATA FRAGMENT MISSING OR ENCRYPTED</p>
      <button
        onClick={() => onNavigate('directory')}
        className="group flex items-center gap-2 mx-auto border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all duration-300"
      >
        <ArrowLeft size={16} />
        <span className="text-xs font-bold uppercase tracking-widest">Return to Directory</span>
      </button>
    </div>
  </div>
);

// ==========================================
// 1. 目录页
// ==========================================
const DirectoryPage = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [hoveredCard, setHoveredCard] = useState(null);

  const chapters = [
    {
      id: '01',
      moduleId: 'layer4',
      category: 'AWAKENING',
      tag: '思维觉醒',
      title: '思维觉醒与世界的底层代码',
      subtitle: 'REBOOT / 清理大脑',
      desc: '很多人无法破局，是因为对世界的运转逻辑一无所知。苏格拉底只做一件事：击碎人们的“伪认知”。如果你连底层数据都不懂，凭什么下判断？',
      action: '点击重装思维系统',
      icon: Zap,
      size: 'hero',      // 超大块：横 2 列 + 竖 2 行
      status: 'OPEN',
    },
    {
      id: '02',
      moduleId: 'chapter2',
      category: 'HISTORY',
      tag: '被折叠的技术史',
      title: '能量与效率的暴力美学',
      subtitle: 'FOLDING / 历史跃迁',
      desc: '真正的懂历史，是用能量的逻辑去判断未来。从铁器到AI，看清人类是如何被技术一步步“折叠”的。谁掌握了能量，谁就掌握了真理。',
      action: '进入被折叠的历史',
      icon: Flame,
      size: 'tall',      // 竖向加高：两行
      status: 'OPEN',
    },
    {
      id: '03',
      moduleId: 'chapter3',
      category: 'EMPIRE',
      tag: '帝国的底层代码',
      title: '战争、税收与生存法则',
      subtitle: 'SURVIVAL / 权力逻辑',
      desc: '所有的王朝崩溃，归根结底都是没钱了。帝国的标准只有一个：去掉中间商，建立超高效率的汲取体系。',
      action: '解剖权力的账本',
      icon: Shield,
      size: 'normal',    // 普通
      status: 'OPEN',
    },
    {
      id: '04',
      moduleId: 'chapter4',
      category: 'SOCIETY',
      tag: '中国式的时空压缩',
      title: '为什么我们活得这么累？',
      subtitle: 'COMPRESSION / 生长痛',
      desc: '我们用40年跑完了西方200年的路。身体进了AI时代，脑子还在农业社会。这种"时空错位"就是痛苦和拧巴的根源。',
      action: '诊断时空错位',
      icon: Activity,
      size: 'wide',      // 横向加宽：两列
      status: 'OPEN',
    },
    {
      id: '05',
      moduleId: 'chapter6',
      category: 'ASSET',
      tag: '资产的鸿沟',
      title: '为什么00后成了"黑利一代"？',
      subtitle: 'GAP / 杠杆消失',
      desc: '最大的房产杠杆被父辈吃完了。00后的死局在于：手里只有消费，没有资产。洛克菲勒的秘密究竟是什么？',
      action: '查看资产真相',
      icon: TrendingUp,
      size: 'normal',
      status: 'OPEN',
    },
    {
      id: '06',
      moduleId: 'final_chapter',
      category: 'FUTURE',
      tag: '最后的审判',
      title: 'AI 降临与仅存的缝隙',
      subtitle: 'JUDGMENT / 降维打击',
      desc: '以前的危机是钱没了，现在的危机是人没用了。AI不是来辅助你的，是来审判你的。唯一的缝隙是：知识套利。',
      action: '直面最后审判',
      icon: Cpu,
      size: 'tall',      // 这里也给一个高卡，尾部有起伏
      status: 'OPEN',
    },
  ];
  

  

  const categories = [
    { id: 'ALL', label: '全部档案 / ALL' },
    { id: 'AWAKENING', label: '思维重装 / AWAKENING' },
    { id: 'HISTORY', label: '技术折叠 / HISTORY' },
    { id: 'EMPIRE', label: '帝国代码 / EMPIRE' },
    { id: 'SOCIETY', label: '时空压缩 / SOCIETY' },
    { id: 'ASSET', label: '资产鸿沟 / ASSET' },
    { id: 'FUTURE', label: '最后的审判 / FUTURE' },
  ];

  const filteredChapters = activeCategory === 'ALL' ? chapters : chapters.filter((c) => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-[#FF4D00] selection:text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-72 bg-white border-r border-black/5 flex flex-col h-auto md:h-screen sticky top-0 z-20">
        <div className="p-8 border-b border-black/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-[#FF4D00]" />
            <span className="font-black tracking-tighter text-xl">SHULIN.OS</span>
          </div>
          <p className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">Survival Guide v25.11</p>
        </div>

        <nav className="flex-1 p-6 space-y-2 overflow-y-auto max-h-[calc(100vh-200px)]">
          <p className="text-[10px] font-mono text-gray-400 mb-4 pl-2 uppercase tracking-widest flex items-center gap-2">
            <Database size={10} />
            Directory // 目录
          </p>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`w-full text-left px-4 py-3 text-xs font-bold tracking-wide transition-all duration-300 rounded-sm flex justify-between items-center group ${
                activeCategory === cat.id ? 'bg-[#18181B] text-white shadow-xl transform scale-[1.02]' : 'text-gray-400 hover:bg-gray-50 hover:text-[#18181B]'
              }`}
            >
              <span>{cat.label}</span>
              {activeCategory === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />}
            </button>
          ))}
        </nav>

        <div className="p-6 border-t border-black/5 bg-gray-50/50">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-2">
            <span>SYSTEM STATUS</span>
            <span className="text-[#FF4D00] animate-pulse flex items-center gap-1">
              <div className="w-1 h-1 bg-[#FF4D00] rounded-full" />
              ONLINE
            </span>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[98%] h-full bg-[#FF4D00]" />
          </div>
          <div className="mt-2 text-[10px] text-gray-300 text-center">User_ID: 00_GEN_Z</div>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-[#F4F4F5] relative">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
        />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 relative z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-serif font-black mb-3 text-[#18181B] tracking-tight">
              树林认知<span className="text-[#FF4D00]">交易所</span>.
            </h1>
            <p className="text-gray-500 text-sm font-mono tracking-wide">// SELECT A CAPSULE TO REBOOT YOUR MIND</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative group">
              <input
                type="text"
                placeholder="Search Archives..."
                className="pl-10 pr-4 py-3 bg-white border border-black/5 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] focus:outline-none text-xs font-mono w-64 transition-all shadow-sm placeholder:text-gray-300"
              />
              <Search className="absolute left-3 top-3 text-gray-300 w-4 h-4 group-focus-within:text-[#FF4D00] transition-colors" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6 pb-20">
          {filteredChapters.map((item) => {
            const colSpan =
              item.size === 'wide' ? 'md:col-span-2' : item.size === 'large' ? 'md:col-span-2 md:row-span-2' : 'md:col-span-1';
            return (
              <div
                key={item.id}
                onClick={() => item.status === 'OPEN' && item.moduleId && onNavigate(item.moduleId)}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`${colSpan} relative group perspective-1000 bg-white transition-all duration-500 ease-out overflow-hidden ${
                  item.status === 'OPEN' ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]' : 'cursor-not-allowed opacity-80'
                } border border-black/5`}
              >
                <div
                  className={`absolute top-0 left-0 w-full h-1.5 bg-[#FF4D00] transform origin-left transition-transform duration-500 z-20 ${
                    hoveredCard === item.id && item.status === 'OPEN' ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
                <div className="h-full p-8 flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-2">
                      <span
                        className={`px-2 py-1 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors ${
                          item.status === 'OPEN'
                            ? 'bg-[#F4F4F5] text-[#18181B] group-hover:bg-[#FF4D00] group-hover:text-white'
                            : 'bg-gray-100 text-gray-400'
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-mono text-gray-300 group-hover:text-[#FF4D00] transition-colors">{item.subtitle}</span>
                    </div>
                    <span className="font-mono text-3xl font-black text-gray-100 group-hover:text-[#FF4D00]/10 transition-colors">{item.id}</span>
                  </div>

                  <div className="mt-4 mb-4">
                    <h3
                      className={`font-serif font-bold text-[#18181B] leading-tight mb-4 transition-all duration-300 ${
                        item.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-4 group-hover:text-[#18181B] transition-colors border-l-2 border-transparent group-hover:border-[#FF4D00]/30 pl-0 group-hover:pl-3 duration-300">
                      {item.desc}
                    </p>
                  </div>

                  <div className="flex justify-between items-end border-t border-black/5 pt-6 group-hover:border-[#FF4D00]/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2.5 rounded-full border transition-all duration-300 ${
                          hoveredCard === item.id && item.status === 'OPEN'
                            ? 'bg-[#FF4D00] border-[#FF4D00] text-white'
                            : 'bg-white border-gray-200 text-gray-400'
                        }`}
                      >
                        <item.icon size={18} />
                      </div>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 ${
                          item.status === 'OPEN' ? 'text-[#FF4D00]' : 'text-gray-400'
                        }`}
                      >
                        {item.action}
                      </span>
                    </div>
                    <div className="text-gray-300 group-hover:text-[#FF4D00] transition-colors">
                      {item.status === 'LOCKED' ? <Lock size={16} /> : <ArrowUpRight size={16} />}
                    </div>
                  </div>
                </div>

                <item.icon
                  strokeWidth={1}
                  className={`absolute -bottom-10 -right-10 text-[#18181B] opacity-[0.02] pointer-events-none transition-all duration-700 ease-in-out ${
                    hoveredCard === item.id ? 'scale-125 rotate-12 opacity-[0.05]' : 'scale-100 rotate-0'
                  } ${item.size === 'large' ? 'w-96 h-96' : 'w-64 h-64'}`}
                />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

// ==========================================
// 2. Cognition Page
// ==========================================
const WideFactCheck = ({ id, question, highlight, details, checked, onCollect }) => (
  <div className={`my-20 border transition-all duration-700 bg-white shadow-sm overflow-hidden relative group ${checked ? 'border-[#FF4D00]' : 'border-gray-200'}`}>
    <div className="p-8 md:p-12">
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 items-start">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest mb-6 text-[#FF4D00]">
            <CheckCircle2 size={14} />
            Reality Check
          </div>
          <h3 className="text-3xl font-serif font-bold text-[#18181B] mb-8 leading-tight">{question}</h3>
          {!checked && (
            <button
              onClick={() => onCollect(id)}
              className="w-full md:w-auto px-8 py-4 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold uppercase tracking-widest hover:bg-[#18181B] hover:text白 hover:border-[#18181B] transition-all duration-300 flex items-center justify-center md:justify-start gap-3"
            >
              <span>点击揭晓底层逻辑</span>
              <ChevronDown size={16} />
            </button>
          )}
        </div>
        {checked && (
          <div className="w-full xl:flex-[1.5] animate-fade-in-right border-t xl:border-t-0 xl:border-l border-gray-100 pt-8 xl:pt-0 xl:pl-12 relative mt-0">
            <div className="bg-[#FFF5F0] p-6 rounded-sm mb-6 border-l-4 border-[#FF4D00] xl:border-0 xl:bg-transparent xl:p-0">
              <p className="text-xl font-bold text-[#18181B] leading-relaxed">{highlight}</p>
            </div>
            <div className="prose prose-sm text-gray-600 leading-relaxed max-w-none">{details}</div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const WideDeepThought = ({ id, question, intro, insight, detailList, checked, onCollect }) => (
  <div className="my-24 relative group">
    <div className={`relative z-10 bg-white border p-8 md:p-12 shadow-xl transition-all duration-700 ${checked ? 'border-[#18181B]' : 'border-gray-200'}`}>
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-2 text-[#FF4D00] text-xs font-bold font-mono uppercase tracking-widest">
          <Zap size={14} />
          Deep Dive // 深度重装
        </div>
        {checked ? (
          <span className="text-xs font-mono text-[#18181B] bg-[#FF4D00]/10 px-2 py-1 rounded">FRAGMENT ACQUIRED</span>
        ) : (
          <span className="text-xs font-mono text-gray-400">LOCKED</span>
        )}
      </div>

      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_1.2fr] gap-8 md:gap-16">
        <div className="w-full">
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-[#18181B]">{question}</h3>
          <p className="text-gray-500 leading-relaxed text-lg mb-8">{intro}</p>
          {!checked && (
            <button
              onClick={() => onCollect(id)}
              className="w-full py-5 border-2 border-[#18181B] text-[#18181B] text-sm font-bold uppercase tracking-widest hover:bg-[#FF4D00] hover:border-[#FF4D00] hover:text白 transition-all duration-300 flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#18181B] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]"
            >
              <Target size={16} />
              <span>解锁思维盲区</span>
            </button>
          )}
        </div>

        {checked && (
          <div className="animate-fade-in-up w-full">
            <div className="bg-[#18181B] text白 p-8 md:p-10 rounded-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Brain size={120} />
              </div>
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-8">
                  <span className="text-4xl font-serif text-[#FF4D00] opacity-50 leading-none">“</span>
                  <p className="text-xl font-serif italic leading-relaxed text-gray-100">{insight}</p>
                </div>
                <div className="space-y-4 text-sm text-gray-400 font-sans border-t border白/10 pt-6">
                  {detailList.map((item, idx) => (
                    <div key={idx} className="flex gap-3">
                      <span className="text-[#FF4D00] font-mono">0{idx + 1}.</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const COGNITION_SECTIONS = [
  { id: 'intro', label: '序章 / INTRO' },
  { id: 'ignorance', label: '伪认知粉碎' },
  { id: 'happiness', label: '幸福分辨率' },
  { id: 'value', label: '价值交换' },
  { id: 'next-module', label: '下一章 / NEXT' },
];

const CognitionPage = ({ onNextModule }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [collectedFragments, setCollectedFragments] = useState([]);
  const [showToast, setShowToast] = useState(null);
  const [activeSection, setActiveSection] = useState(COGNITION_SECTIONS[0].id);
  const containerRef = useRef(null);
  const TOTAL_FRAGMENTS = 3;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0;
      setReadingProgress(progress);
    };

    container.addEventListener('scroll', handleScroll);
    handleScroll();

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          setActiveSection(visible[0].target.id);
        }
      },
      { root: container, threshold: 0.3 }
    );

    COGNITION_SECTIONS.forEach((section) => {
      const el = container.querySelector(`#${section.id}`);
      if (el) observer.observe(el);
    });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const container = containerRef.current;
    if (!container) return;
    const target = container.querySelector(`#${sectionId}`);
    if (target) {
      container.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth',
      });
    }
  };

  const collectFragment = (id) => {
    if (!collectedFragments.includes(id)) {
      setCollectedFragments((prev) => [...prev, id]);
      setShowToast('Fragment Collected');
      setTimeout(() => setShowToast(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-[#FF4D00] selection:text-white flex flex-col md:flex-row h-screen">
      <div
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] transition-all duration-300 ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}
      >
        <div className="bg-[#18181B] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 text-xs font-bold font-mono border border-[#FF4D00]">
          <div className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse" />
          {showToast}
        </div>
      </div>
      <aside className="hidden md:flex w-72 h-full sticky top-0 flex-col border-r border-black/5 bg-white z-20 flex-shrink-0">
        <div
          className="p-8 border-b border-black/5 flex items-center gap-2 cursor-pointer group hover:bg-gray-50 transition-colors"
          onClick={() => onNextModule('directory')}
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-widest uppercase">BACK TO DIR</span>
        </div>
        <div className="flex-1 p-8 flex flex-col relative">
          <div>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2">
              <List size={12} />
              Section Map
            </p>
            <div className="space-y-2">
              {COGNITION_SECTIONS.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-4 py-2 text-[11px] font-bold tracking-widest rounded-sm transition-all duration-200 flex items-center justify-between ${
                    activeSection === section.id ? 'bg-[#18181B] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50 hover:text-[#18181B]'
                  }`}
                >
                  <span>{section.label}</span>
                  {activeSection === section.id && <ChevronDown size={12} className="rotate-[-90deg]" />}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Reading Progress</p>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF4D00] transition-all duration-500"
                style={{ width: `${Math.min(100, Math.round(readingProgress * 100))}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-300 mt-1">{Math.min(100, Math.round(readingProgress * 100))}%</p>
          </div>

          <div className="mt-auto mb-12">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-bold font-mono uppercase text-gray-400">Current Module</span>
              <span className="text-xl font-black text-[#18181B]">
                {collectedFragments.length}
                <span className="text-gray-300 text-sm">/{TOTAL_FRAGMENTS}</span>
              </span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#FF4D00] transition-all duration-500"
                style={{ width: `${(collectedFragments.length / TOTAL_FRAGMENTS) * 100}%` }}
              />
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-mono">Module: Cognition Loaded.</p>
          </div>
        </div>
      </aside>
      <main
        id="cognition-container"
        ref={containerRef}
        className="flex-1 relative overflow-y-auto h-full scroll-smooth"
      >
        <div className="md:hidden sticky top-0 z-30 bg-[#F4F4F5]/95 backdrop-blur border-b border-black/5 px-4 py-3 flex gap-3 overflow-x-auto">
          {COGNITION_SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-3 py-1 text-[10px] font-mono uppercase tracking-widest rounded-full border ${
                activeSection === section.id ? 'bg-[#18181B] text-white border-[#18181B]' : 'text-gray-500 border-gray-200'
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
          <header id="intro" className="mb-32 animate-fade-in-up">
            <div className="inline-block px-4 py-1 bg-[#18181B] text-white text-[10px] font-mono font-bold tracking-wider mb-8">
              MODULE 01 // COGNITION
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#18181B] leading-tight mb-10 tracking-tighter">
              你认为你知道的，
              <br />
              就真的是<span className="text-[#FF4D00]">知道</span>了吗？
            </h1>
            <div className="flex gap-8 border-l-4 border-[#FF4D00] pl-8 py-2">
              <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed max-w-2xl">
                先别急着反驳。
                <br />
                <span className="text-[#18181B] font-medium border-b-2 border-[#FF4D00]/20">思考题：何为“真正知道”？</span>
                <br />
                这也是正是苏格拉底当年在雅典街头，追问所有人的终极难题。
              </p>
            </div>
          </header>

          <article className="prose prose-lg prose-slate max-w-none">
            <div id="ignorance" className="mb-32">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-black text-gray-100">01</span>
                <h2 className="text-3xl font-serif font-bold text-[#18181B] m-0">伪认知粉碎：何为“真正知道”？</h2>
              </div>
              <WideDeepThought
                id="frag_1"
                question="如果连“体感”都可能是错的，那你其实一无所知。"
                intro="我们太容易把“情绪”当成“认知”了。"
                insight="承认“无知”，才是装进真理的第一步。"
                detailList={['情绪是廉价的，数据才是昂贵的。', '承认不懂，不丢人；装懂，才可怕。', '这也是你摆脱被收割命运的起点。']}
                checked={collectedFragments.includes('frag_1')}
                onCollect={collectFragment}
              />
            </div>
            <div id="happiness" className="mb-32 pt-16 border-t border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-black text-gray-100">02</span>
                <h2 className="text-3xl font-serif font-bold text-[#18181B] m-0">幸福的分辨率</h2>
              </div>
              <WideDeepThought
                id="frag_2"
                question="反问自己：除了有钱，你能说出第三种幸福的定义吗？"
                intro="如果你的答案只有钱，那你很容易变成偏执狂。"
                insight="如果知识储备足够，我可以给你 10 种维度的解释。"
                detailList={[
                  '自由视角：拥有“拒绝做不想做的事”的权利。',
                  '脑科学视角：内啡肽、血清素分泌达到了特定量级。',
                  '世俗视角：资产性收入 > 日常支出。',
                  '社会学视角：深度关系。',
                  '马斯克视角：宏大价值。',
                ]}
                checked={collectedFragments.includes('frag_2')}
                onCollect={collectFragment}
              />
            </div>
            <div id="value" className="mb-24 pt-16 border-t border-gray-100">
              <div className="flex items-center gap-4 mb-8">
                <span className="text-6xl font-black text-gray-100">03</span>
                <h2 className="text-3xl font-serif font-bold text-[#18181B] m-0">价值交换的本质</h2>
              </div>
              <WideFactCheck
                id="frag_3"
                question="为什么乞丐躺着赚得比你多？"
                highlight="因为他卖的是'道德确认'。这是一场隐秘但高效的价值交换。"
                details={
                  <>
                    <p>乞丐衣服越烂，卖得越好。他提供：</p>
                    <ul className="list-disc pl-5">
                      <li>对比服务</li>
                      <li>道德确认</li>
                    </ul>
                  </>
                }
                checked={collectedFragments.includes('frag_3')}
                onCollect={collectFragment}
              />
            </div>
          </article>

          <footer id="next-module" className="mt-32 pt-20 border-t-4 border-[#18181B]">
            <div className="text-center max-w-2xl mx-auto space-y-8">
              {collectedFragments.length === TOTAL_FRAGMENTS ? (
                <div className="animate-fade-in-up">
                  <div className="inline-flex items-center justify-center p-4 bg-green-50 text-green-700 rounded-full mb-6">
                    <Trophy size={32} />
                  </div>
                  <h3 className="text-4xl font-serif font-black mb-4 text-[#18181B]">Cognition Module Loaded</h3>
                </div>
              ) : (
                <div className="text-xs font-mono text-gray-400 uppercase tracking-widest">
                  Fragment Progress {collectedFragments.length}/{TOTAL_FRAGMENTS}
                </div>
              )}

              <div
                onClick={() => onNextModule('chapter2')}
                className={`text-left p-10 rounded-sm relative overflow-hidden group cursor-pointer transition-transform hover:-translate-y-1 ${
                  collectedFragments.length === TOTAL_FRAGMENTS
                    ? 'bg-[#18181B] text-white shadow-2xl'
                    : 'bg-white border border-dashed border-[#18181B]/30 text-[#18181B]'
                }`}
              >
                <div className="relative z-10">
                  <h4 className="text-2xl font-bold mb-4">历史的底层代码：暴力与剩余</h4>
                  <div
                    className={`flex items-center gap-3 font-bold border-b pb-1 inline-block ${
                      collectedFragments.length === TOTAL_FRAGMENTS ? 'text-white border-white/40' : 'text-[#18181B] border-[#18181B]/30'
                    }`}
                  >
                    <span>加载下一模块</span>
                    <ArrowRight size={16} />
                  </div>
                </div>
                {collectedFragments.length !== TOTAL_FRAGMENTS && (
                  <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle,#18181B_1px,transparent_1px)] pointer-events-none" />
                )}
              </div>

              {collectedFragments.length !== TOTAL_FRAGMENTS && (
                <p className="text-xs text-gray-400">
                  未全部收集也可以继续，建议补完三段碎片以获得完整体验。
                </p>
              )}
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
};

// ==========================================
// 3. Chapter 2：技术折叠
// ==========================================
const Chapter2Page = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [temperature, setTemperature] = useState(20);
  const thermometerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [gearSpeed, setGearSpeed] = useState('slow');
  const [isLightOn, setIsLightOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const container = document.getElementById('chapter2-container');
      if (!container) return;
      const total = container.scrollTop;
      const height = container.scrollHeight - container.clientHeight;
      setScrollProgress(total / height);
    };
    const container = document.getElementById('chapter2-container');
    if (container) container.addEventListener('scroll', handleScroll);
    return () => {
      if (container) container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMove = (clientY) => {
    if (!thermometerRef.current) return;
    const rect = thermometerRef.current.getBoundingClientRect();
    const height = rect.height;
    const relativeY = Math.min(Math.max(0, clientY - rect.top), height);
    const percentage = 1 - relativeY / height;
    setTemperature(Math.round(percentage * 1600));
    if (!hasInteracted) setHasInteracted(true);
  };

  useEffect(() => {
    const onMove = (e) => {
      if (isDragging) handleMove(e.type.includes('mouse') ? e.clientY : e.touches[0].clientY);
    };
    const onUp = () => setIsDragging(false);
    if (isDragging) {
      window.addEventListener('mousemove', onMove);
      window.addEventListener('mouseup', onUp);
      window.addEventListener('touchmove', onMove);
      window.addEventListener('touchend', onUp);
    }
    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging]);

  const getStage = () => {
    if (temperature < 100) return { name: '原始社会', desc: '等待火种...', color: 'text-gray-400', bg: 'bg-gray-900' };
    if (temperature < 800) return { name: '火的掌握', desc: '熟食 / 寿命延长', color: 'text-orange-400', bg: 'bg-orange-950' };
    if (temperature < 1200) return { name: '陶器时代', desc: '储存 / 定居', color: 'text-orange-500', bg: 'bg-orange-900' };
    return { name: '铁器革命', desc: '深耕 / 杀戮 / 帝国', color: 'text-red-500', bg: 'bg-red-900' };
  };
  const stage = getStage();

  const timelineItems = [
    { id: '01', title: '农业革命', subtitle: '铁器时代', desc: '人类第一次把地里的能量挖出来。', detail: '温度决定文明高度。1200°C 炼出了更硬的锄头（深耕）和更硬的兵器（帝国）。', icon: Hammer, side: 'left' },
    { id: '02', title: '工业革命', subtitle: '蒸汽时代', desc: '事后被确立的标志，瓦特改良了它。', detail: '热能转动能。效率的暴动。蒸汽机不仅是机器，更是时间的压缩。', icon: Settings, side: 'right' },
    { id: '03', title: '第二次工业革命', subtitle: '电气时代', desc: '爱迪生的根本发明不是灯泡，是电网。', detail: '消灭黑夜。资本家有了光，就可以让你晚上继续加班。', icon: Zap, side: 'left' },
    { id: '04', title: '信息革命', subtitle: '计算机/互联网', desc: '信息的零成本传输。', detail: '链接万物。世界被压平，认知开始分层。', icon: Database, side: 'right' },
    { id: '05', title: 'AI 革命', subtitle: '智能时代', desc: '当生产力发生质的飞跃，智能的定价即是 Token。', detail: '当生产力发生质的飞跃，智能的定价即是 Token。', icon: Brain, side: 'center', highlight: true },
  ];

  return (
    <div id="chapter2-container" className="h-screen overflow-y-auto bg-[#050505] text-gray-200 font-sans selection:bg-[#FF4D00] selection:text-black">
      <div className="fixed top-0 left-0 h-1 bg-[#FF4D00] z-50 transition-all duration-100 ease-out shadow-[0_0_15px_#FF4D00]" style={{ width: `${scrollProgress * 100}%` }} />
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-40 mix-blend-difference text-white backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNextModule('directory')}>
          <ArrowLeft size={16} />
          <span className="text-xs font-mono tracking-widest font-bold">CHAPTER 02 // HISTORY_DECODED</span>
        </div>
      </nav>

      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className={`absolute inset-0 transition-colors duration-700 opacity-20 ${stage.bg}`} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_90%)]" />
        <div className="relative z-10 w-full max-w-6xl px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full text-[#FF4D00] text-[10px] font-mono font-bold mb-8 tracking-wider">
              <Thermometer size={12} />
              <span>MISSION 01: TEMPERATURE</span>
            </div>
            <h1 className={`text-6xl md:text-8xl font-black font-serif leading-none mb-8 transition-all duration-500 ${stage.color}`}>
              {stage.name}
            </h1>
            <div className="h-24 relative">
              <p className="text-xl md:text-2xl font-light text-gray-300 border-l-4 border-[#FF4D00] pl-6 absolute top-0 left-0 w-full transition-all duration-500">
                {stage.desc}
              </p>
            </div>
            <div className="mt-12 flex items-baseline gap-3">
              <span className={`text-7xl font-mono font-bold tabular-nums transition-colors duration-300 ${temperature > 1200 ? 'text-red-500' : 'text-white'}`}>
                {temperature}
              </span>
              <span className="text-2xl text-gray-500 font-light">°C</span>
            </div>
          </div>
          <div className="h-[60vh] flex justify-center relative select-none">
            <div className={`absolute -left-48 top-[80%] -translate-y-1/2 flex items-center gap-4 transition-opacity duration-500 ${hasInteracted ? 'opacity-0' : 'opacity-100'}`}>
              <div className="text-right">
                <p className="text-white font-bold text-sm">从底部上滑</p>
                <p className="text-[#FF4D00] text-xs">感受文明温度</p>
              </div>
              <div className="text-white animate-bounce-up">
                <Fingerprint size={32} className="text-[#FF4D00]" />
              </div>
            </div>
            <div className="absolute -right-8 top-0 h-full flex flex-col justify-between text-[10px] font-mono text-gray-500 py-2">
              <span>1600°C</span>
              <span className={temperature >= 1200 ? 'text-red-500 font-bold' : ''}>1200°C (铁)</span>
              <span className={temperature >= 800 ? 'text-orange-500 font-bold' : ''}>800°C (陶)</span>
              <span className={temperature >= 100 ? 'text-yellow-500 font-bold' : ''}>100°C (火)</span>
              <span>0°C</span>
            </div>
            <div
              ref={thermometerRef}
              className="w-24 h-full bg-[#111] rounded-full border-2 border-gray-700 hover:border-gray-500 relative overflow-hidden cursor-ns-resize group shadow-[0_0_30px_rgba(255,255,255,0.05)]"
              onMouseDown={() => setIsDragging(true)}
              onTouchStart={() => setIsDragging(true)}
            >
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px)', backgroundSize: '100% 20px' }} />
              <div
                className={`absolute bottom-0 w-full transition-all duration-100 ease-out rounded-b-full ${stage.color.replace('text', 'bg')}`}
                style={{ height: `${Math.max(5, (temperature / 1600) * 100)}%`, boxShadow: `0 0 50px currentColor` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
              <div className="absolute w-full h-12 flex items-center justify-center z-30 transition-all duration-100" style={{ bottom: `calc(${Math.max(0, (temperature / 1600) * 100)}% - 24px)` }}>
                <div className="w-16 h-2 bg-white rounded-full shadow-[0_0_15px_white] group-hover:h-3 transition-all" />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 animate-bounce text-gray-500 w-full text-center">
          <ChevronDown size={24} className="mx-auto" />
        </div>
      </section>

      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8">
            历史的尺度：<span className="text-[#FF4D00]">五次跃迁</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            你们以为记住了几个名词就叫懂历史了？
            <br />
            <strong>真正的懂，是能用能量的逻辑去判断未来。</strong>
            <br />
            我们把时间拉长，看清人类是怎么一步步被技术“折叠”的。
          </p>
        </div>
        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#FF4D00]/20 -translate-x-1/2 hidden md:block" />
          <div className="space-y-24">
            {timelineItems.map((item, i) => (
              <React.Fragment key={i}>
                <div className={`flex md:flex-row flex-col items-center justify-between group ${item.side === 'center' ? 'md:justify-center' : ''}`}>
                  <div className={`w-full md:w-[45%] ${item.side === 'right' ? 'order-2 md:text-left' : 'md:text-right text-left order-2 md:order-1'}`}>
                    {item.side !== 'right' && item.side !== 'center' && (
                      <div className="hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {item.title} <span className="text-[#FF4D00] text-sm ml-2">{item.subtitle}</span>
                        </h3>
                        <p className="text-gray-400 mb-2">{item.desc}</p>
                        <p className="text-sm text-gray-500 leading-relaxed border-r-2 border-[#FF4D00] pr-4 inline-block">{item.detail}</p>
                      </div>
                    )}
                    {item.side === 'right' && <div className="hidden md:block" />}
                  </div>
                  <div
                    className={`relative z-10 flex items-center justify-center w-12 h-12 rounded-full border-4 bg-[#050505] my-4 md:my-0 order-1 md:order-2 ${
                      item.highlight ? 'border-[#FF4D00] shadow-[0_0_20px_#FF4D00] scale-125' : 'border-gray-800 group-hover:border-[#FF4D00] transition-colors'
                    }`}
                  >
                    <item.icon size={20} className={item.highlight ? 'text-[#FF4D00]' : 'text-gray-500 group-hover:text-white'} />
                  </div>
                  <div className={`w-full md:w-[45%] ${item.side === 'left' ? 'order-3 md:text-right' : 'text-left order-3'}`}>
                    {item.side === 'right' && (
                      <div className="hover:-translate-y-1 transition-transform duration-300">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {item.title} <span className="text-[#FF4D00] text-sm ml-2">{item.subtitle}</span>
                        </h3>
                        <p className="text-gray-400 mb-2">{item.desc}</p>
                        <p className="text-sm text-gray-500 leading-relaxed border-l-2 border-[#FF4D00] pl-4 inline-block">{item.detail}</p>
                      </div>
                    )}
                    {item.side === 'center' && (
                      <div className="text-center mt-6 bg-[#FF4D00]/10 p-6 border border-[#FF4D00]/30 rounded-sm">
                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                        <p className="text-[#FF4D00] font-bold italic">“{item.detail}”</p>
                      </div>
                    )}
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center px-6 py-40 bg-black border-t border-white/5 relative">
        <div className="max-w-3xl mx-auto text-center relative">
          <span className="text-4xl md:text-6xl text-white opacity-50 font-serif absolute -top-10 -left-10">“</span>
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight font-serif">
            大家的自我意识
            <br />
            能不能接受机器人比我们更厉害？
          </h2>
          <span className="text-4xl md:text-6xl text-white opacity-50 font-serif absolute -bottom-10 -right-10">”</span>
          <div className="mt-12">
            <p className="text-lg md:text-2xl font-black text-white border-4 border-[#FF4D00] bg-[#FF4D00]/20 inline-block px-8 py-4 rounded-full animate-pulse shadow-[0_0_20px_#FF4D00]">
              你得回答这个问题
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <div className="bg-[#111] p-8 rounded-sm border border-white/10 flex flex-col items-center justify-center h-96 relative overflow-hidden">
              <Scale size={80} className="text-gray-600 mb-6" />
              <div className="w-full flex justify-between px-8 text-sm font-mono">
                <div className="text-center">
                  <div className="text-[#FF4D00] font-bold text-xl mb-1">Surplus</div>
                  <div className="text-gray-500">粮食剩余</div>
                </div>
                <div className="text-center">
                  <div className="text-white font-bold text-xl mb-1">Violence</div>
                  <div className="text-gray-500">暴力机关</div>
                </div>
              </div>
              <p className="text-center text-gray-500 text-xs mt-8 font-mono">FIGURE 01: THE ORIGIN OF STATE</p>
            </div>
          </div>
          <div className="prose prose-invert prose-lg">
            <h3 className="text-[#FF4D00] font-mono text-sm font-bold uppercase tracking-widest mb-2">01. 权力的物理学</h3>
            <h2 className="text-4xl font-serif font-bold text-white mb-8">国家的逻辑：从“剩余”到“暴力”</h2>
            <p className="text-gray-300 leading-relaxed">
              生产力的爆发带来了两个关键的“剩余”：<strong>粮食剩余</strong>（吃不完）和<strong>劳力剩余</strong>（忙完农活没事干）。
              <br />
              这就出事了。当农民有了剩余，国家机器就有了收割的空间。
            </p>
            <div className="my-8 space-y-6">
              <div className="bg-white/5 border-l-2 border-[#FF4D00] p-6 rounded-r-sm">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Coins size={18} className="text-[#FF4D00]" />为什么要有税？
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">你有多余的粮食，国家说：“给我一部分。” 因为它要养一支脱产的军队（防抢劫）和官僚集团（管分配）。</p>
              </div>
              <div className="bg白/5 border-l-2 border-yellow-500 p-6 rounded-r-sm">
                <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                  <Hammer size={18} className="text-yellow-500" />为什么要有役？
                </h4>
                <p className="text-sm text-gray-400 leading-relaxed">你有多余的时间，国家说：“把你的人给我。” 修长城、修皇陵，本质上都是在消耗你的劳力剩余。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32 order-2 md:order-1">
            <div
              className="bg-[#111] p-8 rounded-sm border border-white/10 flex flex-col items-center justify-center h-96 relative overflow-hidden cursor-pointer group"
              onClick={() => setGearSpeed(gearSpeed === 'slow' ? 'fast' : 'slow')}
            >
              <div className={`absolute inset-0 bg-gradient-radial from-[#FF4D00]/10 to-transparent transition-opacity duration-500 ${gearSpeed === 'fast' ? 'opacity-100' : 'opacity-0'}`} />
              <Settings
                size={140}
                className={`text-[#FF4D00] transition-all duration-1000 ${gearSpeed === 'fast' ? 'opacity-100' : 'opacity-60'}`}
                style={{ animation: `spin ${gearSpeed === 'fast' ? '0.5s' : '4s'} linear infinite` }}
              />
              <div className="mt-8 text-center">
                <div className="text-3xl font-black text-white tabular-nums">
                  {gearSpeed === 'fast' ? '99,999' : '00,040'} <span className="text-sm font-normal text-gray-500">HP</span>
                </div>
                <div className="mt-2 inline-flex items-center gap-2 text-[#FF4D00] bg-[#FF4D00]/10 px-3 py-1 rounded-full border border-[#FF4D00]/30 animate-bounce">
                  <MousePointerClick size={14} className="-rotate-12" />
                  <span className="text-xs font-bold uppercase">点击提升效率</span>
                </div>
              </div>
            </div>
          </div>
          <div className="prose prose-invert prose-lg order-1 md:order-2">
            <h3 className="text-[#FF4D00] font-mono text-sm font-bold uppercase tracking-widest mb-2">02. 能量的暴动</h3>
            <h2 className="text-4xl font-serif font-bold text-white mb-8">
              底层逻辑：谁掌握了“旋转”，谁就掌握了<span className="text-[#FF4D00]">生产力</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              工业革命到底带来了什么？核心就一句话：<strong>把时间变快了。</strong>
              <br />
              蒸汽机的本质是“旋转”。只要有了这个不知疲倦的旋转力，人类就获得了近乎无限的动能。
            </p>
            <div className="my-8 bg-white/5 border-l-2 border-blue-500 p-6 rounded-r-sm">
              <h4 className="text-white font-bold mb-2 flex items-center gap-2">
                <Anchor size={18} className="text-blue-500" />为什么工业革命没发生在中国？
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                因为当时的中国人太便宜了。
                <br />
                <br />
                <strong>🇬🇧 英国老板逻辑：</strong>人工太贵，造机器划算。
                <br />
                <strong>🇨🇳 中国老板逻辑：</strong>人力像奴隶一样便宜，让这群人去拉纤不就行了？
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="sticky top-32">
            <div
              className={`bg-[#111] p-8 rounded-sm border border-white/10 flex flex-col items-center justify-center h-96 relative overflow-hidden cursor-pointer transition-colors duration-500 ${isLightOn ? 'bg-white/10' : ''}`}
              onClick={() => setIsLightOn(!isLightOn)}
            >
              {isLightOn ? <Sun size={64} className="text-yellow-400 animate-pulse" /> : <Moon size={64} className="text-gray-600" />}
              <div className="mt-8 text-center">
                <div className="text-2xl font-bold text-white mb-1">{isLightOn ? '工厂：007模式' : '工厂：已关闭'}</div>
                <div className="mt-2 inline-flex items-center gap-2 text-[#FF4D00] bg-[#FF4D00]/10 px-3 py-1 rounded-full border border-[#FF4D00]/30 animate-bounce">
                  <MousePointerClick size={14} className="-rotate-12" />
                  <span className="text-xs font-bold uppercase">{isLightOn ? '加班模式已激活' : '点击通电'}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="prose prose-invert prose-lg">
            <h3 className="text-[#FF4D00] font-mono text-sm font-bold uppercase tracking-widest mb-2">03. 时间的殖民</h3>
            <h2 className="text-4xl font-serif font-bold text-white mb-8">上帝说要有光，是为了让你加班</h2>
            <p className="text-gray-300 leading-relaxed">
              爱迪生的根本发明不是灯泡，是<strong>电网</strong>。
              <br />
              有了光，资本家终于攻破了黑夜的堡垒。以前天黑了只能睡觉，现在灯亮了，机器还在转。
            </p>
            <div className="bg-[#111] p-6 rounded-sm border border-white/10 my-8">
              <h4 className="text-white font-bold text-lg mb-2 flex items-center gap-2">
                <Activity size={18} className="text-[#FF4D00]" />
                西方福利的真相
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed">
                不可否认，电力的出现极大地延长了劳动时间。
                <strong>西方国家经历了这种残酷的原始积累（没日没夜一天干十几个小时），才有了今天的福利。</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-40 px-6 text-center border-t border-white/10 bg-[#080808] relative mt-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-[#FF4D00] font-mono text-xs uppercase tracking-widest mb-8 border border-[#FF4D00] px-4 py-2 rounded-sm bg-[#FF4D00]/5">
            <Lock size={14} className="animate-pulse" />
            下个等级锁定
          </div>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-8 leading-tight">
            “帝国的底层代码：
            <br />
            战争、税收与生存法则”
          </h2>
          <p className="text-gray-500 mb-16 leading-relaxed text-lg max-w-2xl mx-auto">
            为什么秦国叫“帝国”？
            <br />
            所有的王朝崩溃，归根结底，都是没钱了。
            <br />
            <strong>下一章，我们将解剖权力的账本。</strong>
          </p>
          <button
            onClick={() => onNextModule('chapter3')}
            className="group relative inline-flex items-center justify-center px-16 py-6 bg-[#FF4D00] text-black font-bold font-serif text-xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(255,77,0,0.3)] cursor-pointer"
          >
            <span className="mr-3">进入第三章：帝国代码</span>
            <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// 4. Chapter3：帝国代码 (完整版)
// ==========================================
const Chapter3Page = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  // --- 交互状态 ---
  const [stampState, setStampState] = useState('none'); // none, feudal, empire
  const [armySize, setArmySize] = useState(1); // 1万 - 100万
  const [taxBase, setTaxBase] = useState(100); // 税基百分比

  // --- 滚动监听 ---
  useEffect(() => {
    const handleScroll = () => {
      const total = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total / height);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 计算国库剩余
  const treasury = Math.max(0, 100 - (armySize * 8.5));

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1e3a8a] font-sans selection:bg-[#1e3a8a] selection:text-white overflow-x-hidden pb-20">
      {/* 顶部进度条 (墨水蓝) */}
      <div className="fixed top-0 left-0 h-1 bg-[#1e3a8a] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />

      {/* 导航 */}
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-40 bg-[#F5F5F0]/90 backdrop-blur-sm border-b border-[#1e3a8a]/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNextModule('directory')}>
          <ArrowLeft size={16} className="text-[#1e3a8a]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#1e3a8a]">CHAPTER 03 // EMPIRE_CODE</span>
        </div>
        <span className="text-[10px] font-mono text-[#1e3a8a]/50 uppercase tracking-wider hidden md:inline-block">
          The Ledger of Power
        </span>
      </nav>

      {/* --- Hero: 什么是帝国？ --- */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6 relative border-b border-[#1e3a8a]/10">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]"></div>
        <div className="text-center max-w-4xl z-10 animate-fade-in-up relative">
          {/* 装饰：档案编号 */}
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1e3a8a]/30 rounded-full text-[#1e3a8a] text-[10px] font-mono font-bold mb-8 tracking-wider bg-white shadow-sm">
            <Scroll size={12} />
            <span>ARCHIVE: 003 // AUDIT_REPORT</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] mb-10 text-[#1e3a8a] tracking-tighter">
            什么是<br/>
            <span className="text-[#B45309] relative inline-block">
              帝国?
              <span className="absolute -top-4 -right-8 text-base font-mono text-[#1e3a8a]/40 rotate-12 border border-[#1e3a8a]/20 px-2 rounded">NOT KINGDOM</span>
            </span>
          </h1>
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 shadow-sm border-l-4 border-[#1e3a8a]">
            <p className="text-xl md:text-2xl text-[#1e3a8a] leading-relaxed font-medium font-serif">
              为什么秦国叫"帝国"，而战国七雄只能叫"国"？<br/>
              帝国不是因为有个皇帝，而是因为它建立了一套<br/>
              <strong className="text-[#1e3a8a] bg-[#1e3a8a]/10 px-1">超高效率的汲取体系</strong>。
            </p>
          </div>

          <div className="mt-16 flex flex-col items-center gap-3 text-[#1e3a8a]/40 animate-bounce">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Start Audit</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      {/* --- Module 1: 去掉中间商 (盖章交互) --- */}
      <section className="py-32 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-[1fr_1.2fr] gap-20 items-center">
          {/* 左侧：文案 */}
          <div className="md:pr-8">
            <div className="text-[#B45309] font-mono text-xs font-bold mb-4 tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#B45309]"></span>
              PART 01 // THE MIDDLEMAN
            </div>
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              帝国的标准：<br/>去掉中间商
            </h2>
            <p className="text-[#1e3a8a]/70 text-lg leading-relaxed mb-8">
              秦朝统一六国的根本原因，是铁器革命带来的生产力胜利。
              但更深层的原因是，秦国重新定义了什么是"国家"。
              <br/><br/>
              <strong>真正的帝国，必须消灭中间商。</strong>
            </p>
            <div className="space-y-4 text-sm font-medium text-[#1e3a8a]/60 font-mono">
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-[#1e3a8a]/10">
                <div className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-xs">A</div>
                <span>封建制：层层分封，层层截留</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-[#B45309]/30 shadow-sm">
                <div className="w-6 h-6 bg-[#B45309] text-white rounded-full flex items-center justify-center text-xs">B</div>
                <span className="text-[#B45309] font-bold">帝国制：皇权直达，效率 MAX</span>
              </div>
            </div>
          </div>

          {/* 右侧：制度模拟器 */}
          <div className="bg-white p-10 rounded-sm shadow-xl border border-[#1e3a8a]/10 relative overflow-hidden min-h-[400px] flex flex-col">
            {/* 顶部切换 */}
            <div className="flex justify-center gap-2 mb-12 bg-[#F5F5F0] p-1 rounded-lg w-fit mx-auto">
              <button
                onClick={() => setStampState('feudal')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all font-mono
                  ${stampState === 'feudal' ? 'bg-white text-[#1e3a8a] shadow-sm' : 'text-gray-400 hover:text-[#1e3a8a]'}
                `}
              >
                封建制 (商周)
              </button>
              <button
                onClick={() => setStampState('empire')}
                className={`px-6 py-2 rounded-md text-sm font-bold transition-all font-mono
                  ${stampState === 'empire' ? 'bg-[#1e3a8a] text-white shadow-sm' : 'text-gray-400 hover:text-[#1e3a8a]'}
                `}
              >
                帝国制 (秦朝)
              </button>
            </div>

            {/* 核心演示区 */}
            <div className="flex-1 flex flex-col justify-center items-center relative">
              {stampState === 'none' && (
                <div className="text-center text-gray-300 animate-pulse">
                  <Stamp size={48} className="mx-auto mb-4 opacity-20" />
                  <p className="font-mono text-xs uppercase tracking-widest">Select System Mode</p>
                </div>
              )}
              {/* 封建制演示 */}
              {stampState === 'feudal' && (
                <div className="w-full animate-fade-in">
                  <div className="flex items-center justify-between text-gray-400 mb-8 relative">
                    <div className="text-center"><Users size={32} className="mb-2 mx-auto"/><span className="text-xs font-mono">PEOPLE</span></div>
                    <div className="h-[1px] flex-1 border-t-2 border-gray-300 border-dashed mx-4 relative">
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] bg-white px-2 text-red-400 border border-red-200 rounded font-bold">BLOCKED</span>
                    </div>
                    <div className="text-center text-[#1e3a8a]"><Landmark size={32} className="mb-2 mx-auto"/><span className="text-xs font-bold font-mono">LORD</span></div>
                    <div className="h-[1px] flex-1 bg-gray-200 mx-4"></div>
                    <div className="text-center opacity-30"><Crown size={32} className="mb-2 mx-auto"/><span className="text-xs font-mono">KING</span></div>
                  </div>
                  <div className="bg-red-50 p-4 rounded text-center border border-red-100">
                    <p className="text-xs text-gray-500 font-mono uppercase mb-1">Audit Result</p>
                    <p className="text-red-600 font-bold text-sm">中央财政空虚，动员能力极低</p>
                  </div>
                </div>
              )}

              {/* 帝国制演示 */}
              {stampState === 'empire' && (
                <div className="w-full animate-fade-in">
                  <div className="flex items-center justify-between text-[#1e3a8a] mb-8">
                    <div className="text-center"><Users size={32} className="mb-2 mx-auto"/><span className="text-xs font-bold font-mono">PEOPLE</span></div>
                    <div className="h-1 flex-1 bg-[#1e3a8a] mx-4 relative overflow-hidden rounded-full">
                      <div className="absolute inset-0 bg-white/50 animate-flow-fast"></div>
                    </div>
                    <div className="text-center text-[#B45309] scale-110"><Crown size={32} className="mb-2 mx-auto"/><span className="text-xs font-bold font-mono">EMPEROR</span></div>
                  </div>
                  <div className="bg-[#1e3a8a]/5 p-4 rounded text-center border border-[#1e3a8a]/10">
                    <p className="text-xs text-[#1e3a8a]/50 font-mono uppercase mb-1">Audit Result</p>
                    <p className="text-[#1e3a8a] font-bold text-sm">汲取效率 MAX，举国体制形成</p>
                  </div>
                </div>
              )}

              {/* 盖章特效 */}
              {stampState !== 'none' && (
                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-[6px] p-6 rotate-[-15deg] pointer-events-none whitespace-nowrap animate-stamp-in opacity-0 z-10 rounded-sm
                  ${stampState === 'feudal' ? 'border-gray-300 text-gray-300' : 'border-[#B91C1C] text-[#B91C1C]'}
                `}>
                  <span className="text-5xl font-black uppercase tracking-tighter font-serif">
                    {stampState === 'feudal' ? 'INEFFICIENT' : 'APPROVED'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* --- Module 2: 战争的账本 (算账) --- */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-[#1e3a8a]/10 bg-white relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#F5F5F0] to-transparent"></div>
        <div className="grid md:grid-cols-[1.2fr_1fr] gap-20 items-center relative z-10">
          {/* 左侧：算账交互 (纸质账本风) */}
          <div className="bg-[#F9FAFB] p-10 rounded-sm border border-gray-200 shadow-inner relative overflow-hidden">
            {/* 纹理装饰 */}
            <div className="absolute top-0 left-0 w-full h-1 bg-[repeating-linear-gradient(45deg,#1e3a8a,#1e3a8a_10px,transparent_10px,transparent_20px)] opacity-10"></div>
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2 text-[#B45309]">
                <Scale size={20} />
                <span className="font-bold font-mono tracking-wider text-sm">WAR_COST_CALC</span>
              </div>
              <div className="text-[10px] font-bold bg-white px-2 py-1 rounded border border-gray-200 text-gray-400 uppercase">
                Ming Dynasty Model
              </div>
            </div>

            <div className="mb-12">
              <div className="flex justify-between text-sm font-bold text-gray-500 mb-4 font-mono">
                <span>TROOPS</span>
                <span className="text-[#1e3a8a] text-xl">{armySize * 10} 万人</span>
              </div>
              <input
                type="range"
                min="1" max="10" step="1"
                value={armySize}
                onChange={(e) => setArmySize(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#B45309]"
              />
              <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-mono">
                <span>100k</span>
                <span>1000k</span>
              </div>
            </div>

            <div className="space-y-6 border-t border-dashed border-gray-300 pt-8">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">所需民夫 (运粮)</span>
                <span className="font-bold text-[#1e3a8a] text-xl font-serif tabular-nums">{armySize * 25} 万人</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">每日消耗粮食</span>
                <span className="font-bold text-[#1e3a8a] text-xl font-serif tabular-nums">{armySize * 350} 吨</span>
              </div>
              {/* 压力条 */}
              <div className="pt-4">
                <div className="flex justify-between text-[10px] text-gray-400 uppercase mb-1">
                  <span>Fiscal Pressure</span>
                  <span className={armySize > 6 ? 'text-red-500 font-bold' : ''}>{armySize > 6 ? 'CRITICAL' : 'STABLE'}</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${armySize > 6 ? 'bg-[#DC2626]' : 'bg-[#1e3a8a]'}`}
                    style={{ width: `${armySize * 10}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧：文案 */}
          <div className="md:pl-10">
            <div className="text-[#B45309] font-mono text-xs font-bold mb-4 tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#B45309]"></span>
              PART 02 // LOGISTICS
            </div>
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              战争的真相：<br/>别谈谋略，谈后勤
            </h2>
            <p className="text-[#1e3a8a]/70 text-lg leading-relaxed mb-6 font-medium">
              别把打仗想简单了。军队打仗，打的是后勤，打的是钱。
              <br/>一场大规模战争，意味着你要养活几十万完全不干活、只消耗的人。
            </p>
            <div className="bg-[#1e3a8a] text-white p-6 rounded-sm shadow-lg relative">
              <div className="absolute top-0 left-0 w-1 h-full bg-[#B45309]"></div>
              <p className="font-serif text-lg italic leading-relaxed opacity-90">
                "每一场胜仗背后，都是无数农民的口粮被透支。这才是战争的底层。"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Module 3: 崇祯的死局 (税基崩坏) --- */}
      <section className="py-32 px-6 max-w-6xl mx-auto border-t border-[#1e3a8a]/10">
        <div className="grid md:grid-cols-[1fr_1fr] gap-20 items-center">
          {/* 左侧：文案 */}
          <div className="md:pr-10">
            <div className="text-[#B45309] font-mono text-xs font-bold mb-4 tracking-widest flex items-center gap-2">
              <span className="w-8 h-[1px] bg-[#B45309]"></span>
              PART 03 // COLLAPSE
            </div>
            <h2 className="text-4xl font-bold text-[#1e3a8a] mb-6 leading-tight">
              崇祯的悲剧：<br/>税基崩坏
            </h2>
            <p className="text-[#1e3a8a]/70 text-lg leading-relaxed mb-8">
              所有的王朝崩溃，都是因为<strong>没钱了</strong>。
              <br/>明朝末年，李自成快打过来了，崇祯皇帝求大臣捐钱，没人理他。
              <br/>为什么？因为在册人口"消失"了（逃避赋税变成流民），税收不上来。
            </p>
            <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-sm">
              <ShieldAlert className="text-[#DC2626] shrink-0" size={24} />
              <div>
                <h4 className="text-[#DC2626] font-bold text-sm mb-1">死循环警告</h4>
                <p className="text-[#DC2626]/80 text-sm leading-relaxed">
                  没钱 &rarr; 军队哗变 &rarr; 镇压失败 &rarr; 流民更多 &rarr; 没钱
                </p>
              </div>
            </div>
          </div>

          {/* 右侧：崩塌模拟器 */}
          <div className="bg-white p-10 shadow-2xl border border-[#1e3a8a]/10 relative rounded-sm">
            <h3 className="font-bold text-[#1e3a8a] mb-8 flex items-center gap-2 text-xl">
              <TrendingDown size={24} className="text-[#B45309]" /> 国库充盈度模拟
            </h3>
            <div className="flex items-end gap-6 h-64 mb-8 border-b-2 border-[#1e3a8a]/10 pb-0 px-4">
              <div className="flex-1 bg-[#1e3a8a] h-full relative rounded-t-sm opacity-20">
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-mono">Early</span>
              </div>
              <div className="flex-1 bg-[#1e3a8a] h-full relative rounded-t-sm opacity-50" style={{ height: '60%' }}>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 font-mono">Mid</span>
              </div>
              <div className="flex-1 h-full relative rounded-t-sm flex flex-col justify-end">
                <div
                  className={`w-full transition-all duration-500 rounded-t-sm relative ${taxBase < 30 ? 'bg-[#DC2626] animate-pulse' : 'bg-[#B45309]'}`}
                  style={{ height: `${taxBase}%` }}
                >
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold font-mono tabular-nums text-[#1e3a8a]">
                    {taxBase}%
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold font-sans uppercase tracking-wider text-gray-400">
                <span>国泰民安</span>
                <span>流民四起</span>
              </div>
              <input
                type="range"
                min="0" max="100" step="1"
                value={100 - taxBase}
                onChange={(e) => setTaxBase(100 - Number(e.target.value))}
                className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#DC2626]"
              />
              <p className="text-center text-xs text-[#1e3a8a]/50 font-sans mt-2">
                拖动滑块模拟流民增加，观察国库变化
              </p>
            </div>

            {taxBase < 20 && (
              <div className="absolute inset-0 bg-[#1e3a8a]/90 backdrop-blur-[2px] flex items-center justify-center z-10 animate-fade-in">
                <div className="border-4 border-white p-6 text-center transform rotate-[-5deg] shadow-2xl bg-[#b91c1c] text-white">
                  <h2 className="text-4xl font-black uppercase mb-2 font-mono">GAME OVER</h2>
                  <p className="font-mono text-sm tracking-widest">DYNASTY COLLAPSED</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- Footer: 下一章预告 --- */}
      <footer className="py-40 px-6 text-center bg-white border-t border-gray-200 relative overflow-hidden">
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 text-gray-400 font-mono text-xs uppercase tracking-widest mb-8 border border-gray-200 px-4 py-2 rounded-full">
            <FileText size={14} />
            Coming Next
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-[#1e3a8a] mb-8 leading-tight tracking-tighter">
            为什么我们<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B45309] to-[#DC2626]">活得这么累?</span>
          </h2>
          <p className="text-gray-500 mb-16 leading-relaxed text-lg max-w-xl mx-auto">
            身体活在 2025 年的高楼大厦，脑子还停在农业社会。<br/>
            这种<strong>"时空压缩"</strong>必然带来骨骼的生长痛。
          </p>
          <button
            onClick={() => onNextModule('chapter4')}
            className="group relative inline-flex items-center justify-center px-12 py-5 bg-[#1e3a8a] text-white font-bold font-sans text-lg hover:bg-[#152c6b] transition-all shadow-xl rounded-full hover:-translate-y-1"
          >
            <span className="mr-4">进入第四章：被压缩的时空</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </footer>

    </div>
  );
};

// ==========================================
// 5. Chapter4：时空压缩
// ==========================================
const Chapter4Page = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const [revealedPool, setRevealedPool] = useState(false);
  const [showWealthSecret, setShowWealthSecret] = useState(false);
  const [speciesMode, setSpeciesMode] = useState('OLD');
  const [platformIdentity, setPlatformIdentity] = useState('CREATOR');
  const [showPlatformTruth, setShowPlatformTruth] = useState(false);
  const [soberLevel, setSoberLevel] = useState(50);
  const [showParadoxDetail, setShowParadoxDetail] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      setScrollProgress(scrollTop / (scrollHeight - clientHeight));
    };
    const container = containerRef.current;
    if (container) container.addEventListener('scroll', handleScroll);
    return () => container && container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setSoberLevel((prev) => Math.max(0, prev - 1));
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const handleNavigate = (path) => {
    if (path === 'directory') {
      onNextModule('directory');
      return;
    }
    if (path === 'chapter6') {
      onNextModule('chapter6');
    }
  };

  return (
    <div
      id="chapter4-container"
      ref={containerRef}
      className="h-screen overflow-y-auto bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-black selection:text-white relative scroll-smooth"
    >
      <div className="fixed top-0 left-0 h-1 bg-[#FF4D00] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />

      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-40 bg-[#F4F4F5]/90 backdrop-blur-sm border-b border-black/5">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => handleNavigate('directory')}>
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-mono tracking-widest font-bold uppercase">System_Diagnosis // 004</span>
        </div>
        <div className="text-[10px] font-mono font-bold text-[#FF4D00] animate-pulse">DIAGNOSING...</div>
      </nav>

      <style>{`
        .text-shadow-sm { text-shadow: 0 1px 2px rgba(0,0,0,0.1); }
        .bg-grid { background-size: 40px 40px; background-image: linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px); }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .cursor-blink { animation: blink 1s step-end infinite; }
        .reveal-btn-gradient { background: linear-gradient(45deg, #18181B, #333); }
      `}</style>

      <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />
        <div className="relative z-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono font-bold mb-8">
            <Terminal size={12} />
            <span>ROOT_ACCESS_GRANTED</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black font-serif leading-[1.1] mb-8 text-[#18181B]">
            身体在 2025，
            <br />
            脑子在 1978。
            <span className="cursor-blink w-4 h-16 bg-[#FF4D00] inline-block ml-2 align-middle" />
          </h1>
          <div className="border-l-4 border-[#FF4D00] pl-6 py-2 space-y-6 text-xl md:text-2xl text-gray-800 font-serif leading-relaxed max-w-2xl">
            <p>很多人感到痛苦，是因为身体活在 2025 年的高楼大厦里，但脑子还停在农业社会，而情绪却被困在算法编织的信息茧房里。</p>
            <p className="text-lg text-gray-500 font-sans mt-4">
              我们用 40 年跑完了西方 200 年的路。
              <br />
              这种<strong>“时空压缩”</strong>必然会带来骨骼的生长痛。
            </p>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 text-xs font-mono text-gray-400">
          <p className="uppercase tracking-widest">Pain Point Analysis:</p>
          <p className="text-black font-bold">{'>'} 45度仰望：躺不平（不甘心），卷不动（没方向）。</p>
        </div>
        <div className="absolute bottom-12 left-6 animate-bounce">
          <ArrowRight className="rotate-90 text-[#FF4D00]" size={24} />
        </div>
      </section>

      <section className="py-32 px-6 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-2 text-[#FF4D00] font-mono text-xs font-bold mb-4">
              <HelpCircle size={14} />
              <span>QUESTION 01: ALLOCATION</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              思考题：
              <br />
              凭什么在杭州洗碗，
              <br />
              比在老家工资高 3 倍？
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl bg-[#F4F4F5] p-4 rounded-sm border-l-2 border-gray-300">
              提示：难道是杭州的碗更难洗？还是杭州的洗碗工技术更好？
              <br />
              很多人想不通这个问题，所以一辈子被困在低薪里。
            </p>
            {!revealedPool ? (
              <button
                onClick={() => setRevealedPool(true)}
                className="w-full md:w-auto px-8 py-5 reveal-btn-gradient text-white font-bold text-lg shadow-xl hover:translate-y-1 transition-transform flex items-center justify-center gap-3 rounded-sm"
              >
                <Eye size={20} />
                <span>点击查看残酷真相</span>
              </button>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-8 duration-700 bg-[#F4F4F5] border-l-4 border-[#FF4D00] p-8 md:p-12">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <Database className="text-[#FF4D00]" />
                  真相：你的工资是由“体系”决定的
                </h3>
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white p-6 shadow-sm opacity-60">
                    <div className="text-xs font-mono text-gray-500 mb-2">SCENARIO A: 老家</div>
                    <p className="text-sm text-gray-600 mb-4">服务对象：生产效率较低的人群</p>
                    <div className="text-2xl font-black text-gray-400">¥ 2,000</div>
                    <p className="text-xs text-gray-400 mt-2">资金流转极慢</p>
                  </div>
                  <div className="bg-white p-6 shadow-md border-2 border-[#FF4D00] relative overflow-hidden transform scale-105">
                    <div className="absolute top-0 right-0 p-2 bg-[#FF4D00] text-white text-[10px] font-bold">HIGH EFFICIENCY</div>
                    <div className="text-xs font-mono text-[#FF4D00] mb-2">SCENARIO B: 杭州</div>
                    <p className="text-sm text-gray-600 mb-4">服务对象：工程师、金融家、高效体系</p>
                    <div className="text-2xl font-black text-[#18181B]">¥ 6,000</div>
                    <p className="text-xs text-[#FF4D00] mt-2">溢出的油水都是老家的3倍</p>
                  </div>
                </div>
                <div className="text-lg font-medium text-[#18181B] leading-relaxed border-t border-black/10 pt-6">
                  <p className="mb-4">
                    你赚多少钱，不完全取决于你干了什么，而取决于你在哪个<strong>“生产力池子”</strong>里。
                  </p>
                  <p className="text-2xl font-black italic">
                    “在大池子里做小鱼，
                    <br />
                    好过在旱坑里做大鱼。”
                  </p>
                </div>
              </div>
            )}
          </div>

          {revealedPool && (
            <div className="mt-12 space-y-4">
              <button
                onClick={() => setShowWealthSecret((prev) => !prev)}
                className="w-full flex justify-between items-center p-6 border border-black/10 hover:bg-black hover:text-white transition-all duration-300 group"
              >
                <div className="flex flex-col items-start">
                  <span className="font-bold font-mono text-sm opacity-50 mb-1">DEEP DIVE</span>
                  <span className="font-bold text-lg">财富的秘密 & 教育的悲哀</span>
                </div>
                {showWealthSecret ? <ChevronUp size={20} /> : <div className="bg-[#FF4D00] text-white p-1 rounded-full"><ChevronDown size={20} /></div>}
              </button>
              {showWealthSecret && (
                <div className="bg-black text-white p-8 animate-in fade-in">
                  <div className="mb-8">
                    <h4 className="text-[#FF4D00] font-bold mb-2">01. 原始积累的真相</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      中国这个大池子是靠“苦力”换来的。卖苦力（一亿件衬衫） → 换外汇 → 买机器 → 产业升级。
                      <br />
                      <span className="text-white border-b border-[#FF4D00]">别抱怨累。现在的繁荣，本质上是几代人当“燃料”烧出来的。</span>
                    </p>
                  </div>
                  <div className="mb-8">
                    <h4 className="text-[#FF4D00] font-bold mb-2">02. 为什么学校教不了你赚钱？</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      学校还在教你旧时代的“螺丝钉技能”，而市场需要的是“杠杆能力”（机器、人、金融、自媒体）。
                      <br />
                      在这个时代，谁能帮你提高认知效率，谁才是你真正的老师。
                    </p>
                  </div>
                  <div className="p-4 border border-white/20 bg-white/5 text-center">
                    <p className="font-serif italic text-lg">
                      “如果你连‘为什么赚钱’都不知道，
                      <br />
                      那你只能在这个庞大的机器里当一颗盲目的螺丝钉。”
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      <section className="py-32 px-6 bg-[#18181B] text-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-[#FF4D00] font-mono text-xs font-bold mb-8">
            <TrendingUp size={14} />
            <span>ROOT_CAUSE: DISCONNECTION</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-8 leading-tight">
            身体冲进了 AI 时代，
            <br />
            脑子还停在<span className="text-[#FF4D00]">农业社会</span>。
          </h2>
          <p className="text-gray-400 text-lg mb-12 max-w-2xl">
            不到 50 年，我们一口气走完了农业、工业、信息时代。
            <br />
            跑得太快了，地基不稳，灵魂跟不上。
          </p>
          <div className="grid md:grid-cols-2 gap-0 border border-white/20">
            <button
              onClick={() => setSpeciesMode('OLD')}
              className={`p-8 text-left transition-all duration-300 relative overflow-hidden group ${
                speciesMode === 'OLD' ? 'bg-white text-black' : 'bg-transparent text-gray-500 hover:bg-white/5'
              }`}
            >
              <div className="relative z-10">
                <div className="text-xs font-mono mb-2">GENERATION: 70s/80s</div>
                <h3 className="text-2xl font-bold mb-4">上一辈 (农业生存)</h3>
                <p className="text-sm leading-relaxed opacity-80">
                  本质是农民变工人。接受的是“生存教育”。
                  <br />
                  讲究熟人社会、多子多福、面子、稳定。
                </p>
              </div>
              {speciesMode === 'OLD' && <div className="absolute bottom-4 right-4 text-[#FF4D00] opacity-20"><Factory size={80} /></div>}
              {speciesMode !== 'OLD' && <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold">点击查看</div>}
            </button>
            <button
              onClick={() => setSpeciesMode('NEW')}
              className={`p-8 text-left transition-all duration-300 relative overflow-hidden group ${
                speciesMode === 'NEW' ? 'bg-[#FF4D00] text-black' : 'bg-transparent text-gray-500 hover:bg-white/5'
              }`}
            >
              <div className="relative z-10">
                <div className="text-xs font-mono mb-2">GENERATION: 00s</div>
                <h3 className="text-2xl font-bold mb-4">这一辈 (数字精神)</h3>
                <p className="text-sm leading-relaxed opacity-90 font-medium">
                  生下来就是现代人。在意精神世界。
                  <br />
                  讲究契约交换、原子化、效率、自我。
                </p>
              </div>
              {speciesMode === 'NEW' && <div className="absolute bottom-4 right-4 text-black opacity-20"><Brain size={80} /></div>}
              {speciesMode !== 'NEW' && <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center font-bold">点击查看</div>}
            </button>
          </div>
          <div className="mt-8 text-center animate-pulse text-[#FF4D00] font-mono text-sm">{'>'} CONFLICT DETECTED: 原生家庭的匮乏 vs 冷硬城市的竞争</div>
          <div className="mt-8 p-6 border-l-2 border-[#FF4D00] bg-white/5">
            <p className="text-lg">
              这就是你痛苦和拧巴的根源：
              <br />
              <strong>你的情感模式是旧的，但生存模式是新的。</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#F4F4F5]">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <div className="flex items-center gap-2 text-gray-400 font-mono text-xs font-bold mb-4">
              <Lock size={14} />
              <span>DIGITAL_FEUDALISM</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#18181B]">
              认清身份：
              <br />
              我们都是互联网地主的“长工”
            </h2>
          </div>
          <div className="relative min-h-[400px] bg-white border-2 border-black p-8 md:p-12 shadow-[8px_8px_0px_#000] flex flex-col items-center justify-center">
            {!showPlatformTruth ? (
              <div className="text-center w-full max-w-md cursor-pointer group" onClick={() => setShowPlatformTruth(true)}>
                <div className="mb-6 relative">
                  <User size={80} className="mx-auto text-gray-300 group-hover:text-black transition-colors" />
                  <HelpCircle size={32} className="absolute -top-2 -right-2 text-[#FF4D00] animate-bounce" />
                </div>
                <h3 className="text-2xl font-bold mb-2 group-hover:scale-105 transition-transform">你在做抖音、做B站...</h3>
                <p className="text-lg text-gray-500 mb-8">你觉得自己是在创业吗？</p>
                <button className="px-8 py-3 bg-black text-white font-bold rounded-full group-hover:bg-[#FF4D00] transition-colors">
                  点击揭开身份真相
                </button>
              </div>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500 w-full">
                <div className="flex justify-center mb-12">
                  <div className="inline-flex bg-[#F4F4F5] p-1 rounded-full">
                    <button
                      onClick={() => setPlatformIdentity('CREATOR')}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${platformIdentity === 'CREATOR' ? 'bg-black text-white shadow-md' : 'text-gray-400'}`}
                    >
                      幻想：我是创作者
                    </button>
                    <button
                      onClick={() => setPlatformIdentity('WORKER')}
                      className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${platformIdentity === 'WORKER' ? 'bg-[#FF4D00] text-white shadow-md' : 'text-gray-400'}`}
                    >
                      现实：我是平台工人
                    </button>
                  </div>
                </div>
                <div className="text-center">
                  {platformIdentity === 'CREATOR' ? (
                    <div className="animate-in fade-in duration-300">
                      <h3 className="text-2xl font-bold mb-2">"我要改变世界，积累粉丝"</h3>
                      <p className="text-gray-500">你以为你在利用平台...</p>
                    </div>
                  ) : (
                    <div className="animate-in fade-in duration-300">
                      <Crown size={64} className="mx-auto text-[#FF4D00] mb-4" />
                      <h3 className="text-2xl font-bold mb-2 text-[#FF4D00]">"你只是在给地主种地"</h3>
                      <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
                        国家把流量“分封”给了平台（腾讯、字节）。
                        <br />
                        你在免费生产内容，平台拿走剩余价值。它想封你就封你，算法能直接让你“社会性死亡”。
                      </p>
                      <div className="mt-6 pt-6 border-t border-gray-100 text-sm font-bold text-[#18181B]">
                        别觉得蠢。你最好先知道自己在给谁打工。
                      </div>
                    </div>
                  )}
                </div>
                <div className="mt-12 bg-gray-50 p-4 text-xs text-gray-500 font-mono text-center">
                  {'>'} SYSTEM LOG: 平台没有库存，只有刚需。没有金融危机能杀死它们了。
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-[#18181B] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="inline-block px-3 py-1 border border-[#FF4D00] text-[#FF4D00] text-xs font-mono font-bold mb-8">
            ALGORITHM_RULE
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">
            工业时代生产商品，
            <br />
            信息时代生产<span className="text-[#FF4D00] line-through decoration-white">“奶头乐”</span>。
          </h2>
          <p className="text-lg text-gray-400 mb-12">
            AI 知道你是馋鬼，比你妈更了解你。
            <br />
            当生产力过剩，人类不再需要生产，只负责<strong>“被喂养”</strong>。
          </p>
          <div className="bg-black/50 backdrop-blur-md p-8 rounded-xl border border-white/10 max-w-md mx-auto shadow-[0_0_50px_rgba(255,77,0,0.1)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xs font-mono text-gray-400">YOUR SOBER LEVEL</span>
              <span className={`text-xl font-black font-mono ${soberLevel < 20 ? 'text-[#FF4D00] animate-pulse' : 'text-white'}`}>
                {soberLevel}%
              </span>
            </div>
            <div className="h-3 bg-gray-800 rounded-full overflow-hidden mb-8 relative">
              <div
                className={`h-full transition-all duration-100 ${soberLevel < 20 ? 'bg-[#FF4D00]' : 'bg-white'}`}
                style={{ width: `${soberLevel}%` }}
              />
            </div>
            <button
              onClick={() => setSoberLevel((prev) => Math.min(100, prev + 15))}
              className="w-full py-4 bg-[#FF4D00] hover:bg-[#ff6622] text-white font-bold rounded active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Zap size={20} className="fill-current" />
              点击对抗“致幻系统”
            </button>
            <p className="mt-4 text-xs text-gray-500 font-mono leading-relaxed text-left">
              {'>'} WARNING: 清醒度正在以每秒 5% 的速度衰减。
              <br />
              {'>'} 结论: 在这个时代，保持清醒意味着你要对抗数万个顶级工程师设计的系统。这是一种极高的成本。
            </p>
          </div>
        </div>
      </section>

      <section className="py-32 px-6 bg-white border-t border-black/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-gray-400 font-mono text-xs font-bold mb-8">
            <Anchor size={14} />
            <span>THE_PARADOX</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black font-serif text-[#18181B] mb-12 leading-tight">
            既然国家这么牛，
            <br />
            为什么我还是<span className="text-[#FF4D00] underline decoration-4 underline-offset-4 decoration-black">这么累</span>？
          </h2>
          <div className="space-y-8">
            <div
              className="p-6 bg-[#F4F4F5] border-l-4 border-black cursor-pointer hover:bg-gray-200 transition-colors"
              onClick={() => setShowParadoxDetail((prev) => !prev)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold">所谓的“文化自卑”，其实就是穷。</h3>
                {showParadoxDetail ? <ChevronUp /> : <ChevronDown />}
              </div>
              {showParadoxDetail && (
                <div className="mt-4 pt-4 border-t border-black/10 text-gray-600 leading-relaxed animate-in fade-in">
                  <p className="mb-4">
                    看看《黑神话：悟空》、泡泡玛特出海、安踏收购始祖鸟。
                    <br />
                    <strong>实力，是治愈“敏感”的唯一良药。</strong>当你真正的实力（无论是个人还是国家）够强了之后，你对别人的看法就不敏感了。
                  </p>
                  <p>
                    但这一切的底牌是：<strong>供应链霸权</strong> 和 <strong>国家暴力</strong>。
                  </p>
                </div>
              )}
            </div>
            <div className="p-8 border-2 border-[#FF4D00] relative">
              <div className="absolute -top-3 left-8 bg-white px-2 text-[#FF4D00] font-bold text-sm">残酷的辩证法</div>
              <h3 className="text-2xl font-bold mb-6 text-center">供应链之所以强，因为“极度便宜”且“极度高效”</h3>
              <div className="grid md:grid-cols-2 gap-8 text-center">
                <div>
                  <div className="text-xs font-mono text-gray-400 mb-2">NATIONAL LEVEL</div>
                  <div className="font-bold text-lg">极致性价比</div>
                  <div className="text-xs text-gray-500 mt-1">= 争夺全球市场的核武器</div>
                </div>
                <div>
                  <div className="text-xs font-mono text-[#FF4D00] mb-2">INDIVIDUAL LEVEL</div>
                  <div className="font-bold text-xl text-[#FF4D00]">你的工资</div>
                  <div className="text-xs text-gray-500 mt-1">= 那个要被压缩的“成本”</div>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-gray-100 text-center text-lg font-serif">
                我们用一代人的“廉价”和“过劳”，
                <br />
                换来了国家在牌桌上的筹码。
                <br />
                <span className="font-bold block mt-2">这就是大国崛起的代价。</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-24 px-6 bg-[#18181B] text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF4D00] to-black" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 mb-12 text-gray-500 text-xs font-mono">
            <AlertCircle size={14} className="text-[#FF4D00]" />
            <span>COMING NEXT: THE CRUEL TRUTH</span>
          </div>
          <div className="grid md:grid-cols-2 gap-16 mb-16">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">
                就业市场的
                <br />
                <span className="text-[#FF4D00]">残酷真相</span>
              </h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <Factory className="text-gray-600 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">企业为什么不培养你了？</h4>
                    <p className="text-sm text-gray-400">因为供需崩塌了。1200万毕业生争夺300万岗位。我有的选，为什么不招一个现成的？</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <GraduationCap className="text-gray-600 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">你真的努力了吗？</h4>
                    <p className="text-sm text-gray-400">别骗人了。除了高三那200天，你在大学真的学了跟职业有关的事吗？</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <LineChart className="text-gray-600 shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">告别高增长时代</h4>
                    <p className="text-sm text-gray-400">GDP 10% 的时代结束了。现在是存量博弈。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center border-l border-white/10 pl-8 md:pl-12">
              <div className="bg-white/5 p-6 border border-white/10 mb-8">
                <p className="font-serif italic text-lg leading-relaxed text-gray-300">
                  “所以，你没有依靠。学校教不了你赚钱，企业不再养闲人，婚姻不再是避风港。旧秩序彻底崩塌了。”
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-sm font-bold text-[#FF4D00] uppercase tracking-widest">Is there any hope?</p>
                <h3 className="text-2xl font-bold">
                  唯一的出路：
                  <br />
                  用 AI 武装你的大脑
                </h3>
                <p className="text-gray-400 text-sm">
                  既然宏观我们改变不了，那就聊聊微观的技术革命。
                  <br />
                  这是普通人最后一次翻身的机会。
                </p>
                <button
                  onClick={() => handleNavigate('chapter6')}
                  className="mt-4 group inline-flex items-center gap-2 text-white border-b-2 border-[#FF4D00] pb-1 hover:text-[#FF4D00] transition-colors"
                >
                  <span>进入第五部分：寻找出路</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// 5. Chapter5：资产鸿沟（完整版）
// ==========================================
const Chapter6Page = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const [tycoonMode, setTycoonMode] = useState('ROCK');
  const [leverageType, setLeverageType] = useState(1);
  const [timelineYear, setTimelineYear] = useState(1998);
  const [flippedCards, setFlippedCards] = useState({ consumption: false, mainline: false, stability: false });
  const [surplusCards, setSurplusCards] = useState([
    { id: 0, title: '剩余粮食', subtitle: '农业时代', status: 'ACTIVE', reason: '温饱问题已解决，农业不再是暴利行业。' },
    { id: 1, title: '剩余劳动力', subtitle: '工业时代', status: 'ACTIVE', reason: '大问题（电商/外卖/基建）被巨头解完了。' },
    { id: 2, title: '剩余商品', subtitle: '贸易时代', status: 'ACTIVE', reason: '全球卷成红海，Temu 把价格打到了地板。' },
    { id: 3, title: '剩余注意力', subtitle: '信息时代', status: 'ACTIVE', reason: '红利属于95后。现在做自媒体是存量博弈。' },
    { id: 4, title: '剩余信用', subtitle: '金融时代', status: 'ACTIVE', reason: '负债率 GDP 400%。我们透支了未来。' },
  ]);
  const [allGone, setAllGone] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      setScrollProgress(scrollTop / (scrollHeight - clientHeight));
    };
    const container = containerRef.current;
    if (container) container.addEventListener('scroll', handleScroll);
    return () => container && container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (surplusCards.every((card) => card.status === 'GONE')) {
      setTimeout(() => setAllGone(true), 500);
    }
  }, [surplusCards]);

  const toggleFlip = (key) => {
    setFlippedCards((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSurplusClick = (index) => {
    const newCards = [...surplusCards];
    if (newCards[index].status === 'ACTIVE') {
      newCards[index].status = 'GONE';
      setSurplusCards(newCards);
    }
  };

  const onNavigate = (path) => {
    if (path === 'directory') {
      onNextModule('directory');
      return;
    }
    if (path === 'chapter7' || path === 'final_chapter') {
      onNextModule('final_chapter');
    }
  };

  return (
    <div
      id="chapter6-container"
      ref={containerRef}
      className="h-screen overflow-y-auto bg-[#F8F9FA] text-[#111] font-sans selection:bg-[#2563EB] selection:text-white relative scroll-smooth"
    >
      <div className="fixed top-0 left-0 h-1.5 bg-[#2563EB] z-50 transition-all duration-100 ease-out" style={{ width: `${scrollProgress * 100}%` }} />

      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-40 bg-[#F8F9FA]/80 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('directory')}>
          <div className="w-2 h-2 bg-[#2563EB] rounded-full group-hover:w-4 transition-all"></div>
          <span className="text-xs font-mono tracking-widest font-bold uppercase">SHULIN.OS // CH.06</span>
        </div>
        <div className="flex items-center gap-2 text-black/40 text-[10px] font-mono font-bold uppercase tracking-widest">
          Asset Gap Analysis
        </div>
      </nav>

      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .bg-grid-subtle {
          background-image: linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .glass-card {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(0, 0, 0, 0.05);
        }
        .gradient-text {
          background: linear-gradient(45deg, #111, #444);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <section className="min-h-screen flex flex-col justify-center px-8 md:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle pointer-events-none"></div>
        <div className="absolute top-20 right-[-10%] w-[600px] h-[600px] bg-[#2563EB]/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#B8FF21]/10 rounded-full blur-3xl"></div>

        <div className="relative z-10 max-w-5xl">
          <div className="inline-flex items-center gap-3 mb-12">
            <span className="w-8 h-[1px] bg-black"></span>
            <span className="text-xs font-mono uppercase tracking-widest text-gray-500">Financial Ledger</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black font-serif leading-[0.9] mb-12 text-[#111] tracking-tighter">
            资产的<br/>
            <span className="text-[#2563EB]">鸿沟</span>.
          </h1>
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 border-t border-black/10 pt-12">
            <div>
              <p className="font-mono text-xs text-gray-400 mb-2">DIAGNOSIS REPORT</p>
              <p className="font-bold text-xl">00后注定是<br/>“黑利一代”？</p>
            </div>
            <div>
              <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                为什么你们这么穷？很多人以为是因为不够努力。<br/>
                <span className="text-[#111] font-medium">其实是因为你们不懂游戏的规则。</span><br/>
                这是一本关于“杠杆”与“阶级”的残酷账本。
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-8 animate-bounce opacity-30">
          <ArrowRight className="rotate-90 text-black" size={24} />
        </div>
      </section>

      <section className="py-32 px-8 border-t border-black/5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-20">
            <div className="flex items-center gap-3 text-gray-400 font-mono text-xs font-bold uppercase tracking-widest">
              <span className="w-2 h-2 bg-[#2563EB] rounded-full"></span>
              Part 01: The Power of Leverage
            </div>
            <Landmark className="text-gray-200" size={40} />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-16 text-[#111] leading-tight">
            为什么洛克菲勒<br/>比马斯克还<span className="text-[#2563EB] italic">猛</span>？
          </h2>

          <div className="grid md:grid-cols-2 gap-20">
            <div className="relative">
              <div className="flex gap-8 mb-12">
                <button
                  onClick={() => setTycoonMode('ROCK')}
                  className={`pb-2 text-sm font-bold transition-all border-b-2 ${tycoonMode === 'ROCK' ? 'border-[#111] text-[#111]' : 'border-transparent text-gray-400'}`}
                >
                  19世纪: 洛克菲勒
                </button>
                <button
                  onClick={() => setTycoonMode('MUSK')}
                  className={`pb-2 text-sm font-bold transition-all border-b-2 ${tycoonMode === 'MUSK' ? 'border-[#111] text-[#111]' : 'border-transparent text-gray-400'}`}
                >
                  21世纪: 马斯克
                </button>
              </div>

              <div className="h-96 w-full bg-gray-50 relative rounded-sm overflow-hidden border border-gray-100">
                <div className="absolute inset-0 flex flex-col justify-between p-6 opacity-10">
                  <div className="w-full h-px bg-black"></div>
                  <div className="w-full h-px bg-black"></div>
                  <div className="w-full h-px bg-black"></div>
                  <div className="w-full h-px bg-black"></div>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 transition-all duration-700 ease-out bg-[#111] flex flex-col justify-end group"
                     style={{ height: tycoonMode === 'ROCK' ? '65%' : '35%' }}
                >
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-mono font-black text-4xl text-[#2563EB]">
                    {tycoonMode === 'ROCK' ? '2.4%' : '1.2%'}
                  </div>
                  <div className="text-white/50 text-center text-xs font-mono mb-4">OF TOTAL GDP</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-8 text-[#111]">认知的跨时代共鸣</h3>
              <div className="prose prose-lg text-gray-500 leading-relaxed">
                <p className="mb-6">
                  我读洛克菲勒给儿子的38封信，震惊地发现：<br/>
                  <span className="text-[#111] font-semibold bg-[#2563EB]/10 px-1">底层逻辑跟我讲的一模一样。</span>
                </p>
                <p>
                  真理在不同时代是互通的。<br/>
                  人类最伟大的发明不是蒸汽机，而是<br/>
                  <strong className="text-[#2563EB] text-2xl">“公司”</strong> 和 <strong className="text-[#2563EB] text-2xl">“杠杆”</strong>。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-[#F8F9FA] border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#111]">
              你手里拿的是哪种<span className="text-[#2563EB]">武器</span>？
            </h2>
            <p className="text-gray-500">选择一个层级，查看你的战斗力</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { id: 1, title: '劳动力杠杆', icon: Target, rate: 'x1', desc: '我杠杆我自己。一天只有24小时。约等于没有杠杆。', highlight: false },
              { id: 2, title: '知识杠杆', icon: Brain, rate: 'x10', desc: '判断效率更高。一套思想撬动几亿人。凝聚力即生产力。', highlight: false },
              { id: 3, title: '资本杠杆', icon: Landmark, rate: 'x100', desc: '金融市场的魔法。钱生钱。这是统治阶级的专属游戏。', highlight: true }
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setLeverageType(item.id)}
                className={`
                  p-8 border cursor-pointer transition-all duration-500 flex flex-col justify-between h-80 group relative overflow-hidden rounded-sm
                  ${leverageType === item.id
                    ? 'bg-[#111] text-white shadow-2xl scale-105 z-10'
                    : 'bg-white text-gray-400 hover:border-gray-400'}
                `}
              >
                <div>
                  <div className="flex justify-between items-start mb-8">
                    <item.icon size={32} className={leverageType === item.id ? 'text-[#2563EB]' : 'text-gray-300'} />
                    <span className="font-mono text-xs tracking-widest opacity-50">LV.{item.id}</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-4 ${leverageType === item.id ? 'text-white' : 'text-[#111]'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${leverageType === item.id ? 'text-gray-400' : 'text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity'}`}>
                    {item.desc}
                  </p>
                </div>
                <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-center">
                  <span className="text-xs font-mono">EFFICIENCY</span>
                  <span className={`font-black font-mono text-xl ${leverageType === item.id ? 'text-[#2563EB]' : 'text-gray-300'}`}>
                    {item.rate}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold mb-12">
            <History size={14} />
            <span>PART 02: THE GOLDEN AGE</span>
          </div>

          <div className="grid md:grid-cols-[1fr_1.5fr] gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight text-[#111]">
                2 年工资<br/>换 <span className="text-[#2563EB]">60 年</span>财富
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                你的父辈比你有钱，不是因为他们比你聪明，而是因为他们做对了一道题：<br/>
                <strong>坐上了一部叫“房产杠杆”的火箭。</strong>
              </p>
              <div className="p-6 bg-[#F8F9FA] border-l-4 border-[#2563EB]">
                <div className="text-sm text-gray-500 mb-2 font-mono">SIMULATION: 1998-2024</div>
                <div className="text-4xl font-black text-[#111] mb-2 tabular-nums">
                  {Math.round(30 * Math.pow(1.2, (timelineYear - 1998)))} <span className="text-lg font-normal text-gray-400">万</span>
                </div>
                <input
                  type="range"
                  min="1998" max="2024" step="1"
                  value={timelineYear}
                  onChange={(e) => setTimelineYear(Number(e.target.value))}
                  className="w-full h-1.5 bg-gray-200 rounded-full appearance-none cursor-pointer accent-[#2563EB] mt-4"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-2 font-mono">
                  <span>1998 (投入10万)</span>
                  <span>NOW (1200万+)</span>
                </div>
              </div>
            </div>

            <div className="relative h-[500px] bg-[#F8F9FA] rounded-sm border border-black/5 p-8 flex flex-col justify-end overflow-hidden group">
              <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#00000008 1px, transparent 1px)', backgroundSize: '100% 40px' }}></div>
              <div className="absolute top-8 left-8 z-10">
                <h4 className="font-bold text-[#111]">资产增长曲线</h4>
                <p className="text-xs text-gray-400 font-mono mt-1">ASSET GROWTH VS SALARY GROWTH</p>
              </div>

              <svg className="absolute inset-0 w-full h-full overflow-visible p-8" preserveAspectRatio="none">
                <path
                  d="M0,450 C150,440 300,400 500,50"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3"
                  className="drop-shadow-xl"
                />
                <circle cx={((timelineYear - 1998) / 26) * 500} cy={450 - (Math.pow(1.2, timelineYear - 1998) * 10)} r="6" fill="white" stroke="#2563EB" strokeWidth="3" />
              </svg>
              <div className="absolute top-20 right-10 text-[#2563EB] font-bold text-sm bg-white px-3 py-1 rounded shadow-sm border border-[#2563EB]/20">
                70后：房产火箭
              </div>

              <svg className="absolute inset-0 w-full h-full overflow-visible p-8 pointer-events-none">
                <path
                  d="M0,450 L500,400"
                  fill="none"
                  stroke="#999"
                  strokeWidth="2"
                  strokeDasharray="4,4"
                />
              </svg>
              <div className="absolute bottom-20 right-10 text-gray-400 font-bold text-sm">
                00后：手停口停
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-[#F4F4F5] border-t border-black/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#111]">
              00 后的<span className="line-through decoration-[#2563EB] decoration-4 text-gray-400">主线</span>崩塌
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              你们手里拿着 80 后的旧地图，却身处在 2025 年的废墟上。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { id: 'consumption', title: '我有工资，我能消费', backTitle: '死局：手停口停', backDesc: '你手里只有消费，没有资产。买房买不起，股市是韭菜。你永远无法靠资产养活自己。', icon: CreditCard },
              { id: 'mainline', title: '我要做打工皇帝', backTitle: '绝望的算术题', backDesc: '即使你燃烧殆尽，一辈子攒下 600 万。还不如 70 后做对了一次买房选择。', icon: TrendingUp },
              { id: 'stability', title: '我要考公上岸', backTitle: '铁饭碗碎了', backDesc: '未来没有绝对的稳定。如果你的效率太低，拖累了整体经济，在哪都不安全。', icon: Anchor }
            ].map((card) => (
              <div
                key={card.id}
                className="group perspective-1000 h-[420px] cursor-pointer"
                onClick={() => toggleFlip(card.id)}
              >
                <div className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${flippedCards[card.id] ? 'rotate-y-180' : ''}`}>
                  <div className="absolute inset-0 backface-hidden bg-white border border-black/5 p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-xl transition-all rounded-sm">
                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-8 group-hover:bg-[#2563EB] group-hover:text-white transition-colors">
                      <card.icon size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-[#111]">"{card.title}"</h3>
                    <div className="absolute bottom-8 text-[#2563EB] text-xs font-bold font-mono flex items-center gap-2">
                      <MousePointer2 size={12} /> 点击翻看真相
                    </div>
                  </div>
                  <div className="absolute inset-0 backface-hidden rotate-y-180 bg-[#111] text-white p-10 flex flex-col items-center justify-center text-center rounded-sm">
                    <AlertTriangle size={40} className="mb-6 text-[#2563EB]" />
                    <h3 className="text-2xl font-bold mb-6 text-white">{card.backTitle}</h3>
                    <p className="text-sm leading-relaxed text-gray-400 font-medium">
                      {card.backDesc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-8 bg-[#111] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.05]"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
            <div>
              <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs font-bold mb-4">
                <PieChart size={14} />
                <span>PART 04: NO MORE SURPLUS</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white">
                被瓜分殆尽的<span className="text-[#2563EB]">剩余</span>
              </h2>
            </div>
            <p className="text-gray-500 font-mono text-sm text-right md:text-left mt-4 md:mt-0">
              Click cards to eliminate.<br/>See what's left for you.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-16">
            {surplusCards.map((card, index) => (
              <button
                key={card.id}
                onClick={() => handleSurplusClick(index)}
                disabled={card.status === 'GONE'}
                className={`aspect-[3/4] relative cursor-pointer transition-all duration-500 group perspective-1000
                  ${card.status === 'GONE'
                    ? 'opacity-40 grayscale cursor-default'
                    : 'hover:-translate-y-2 z-10'}
                `}
              >
                <div className={`absolute inset-0 border border-white/10 bg-[#1A1A1A] flex flex-col items-center justify-center p-4 text-center transition-all duration-700 backface-hidden ${card.status === 'GONE' ? 'rotate-y-180' : ''}`}>
                  <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-6 font-mono font-bold text-sm text-gray-400">{index + 1}</div>
                  <h3 className="font-bold text-lg mb-2">{card.title}</h3>
                  <p className="text-[10px] text-gray-500 font-mono uppercase tracking-widest">{card.subtitle}</p>
                </div>

                <div className={`absolute inset-0 border border-[#2563EB]/30 bg-[#2563EB]/10 flex flex-col items-center justify-center p-4 text-center transition-all duration-700 backface-hidden rotate-y-180 ${card.status === 'GONE' ? 'opacity-100' : 'opacity-0'}`}>
                  <XCircle size={32} className="text-[#2563EB] mb-4" />
                  <h3 className="font-bold text-white mb-2 line-through decoration-[#2563EB]">{card.title}</h3>
                  <p className="text-[10px] text-gray-300 leading-snug">{card.reason}</p>
                  <div className="mt-6 text-[10px] font-mono text-[#2563EB] border border-[#2563EB] px-2 py-1 rounded">GONE</div>
                </div>
              </button>
            ))}
          </div>

          {allGone && (
            <div className="bg-white/5 p-10 border-l-4 border-[#2563EB] animate-in fade-in slide-in-from-bottom-8 duration-1000 backdrop-blur-sm">
              <h3 className="text-3xl font-black text-white mb-4">全剧终：一张空荡荡的餐桌</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                非常客观、非常冷酷地说：<span className="text-white font-bold border-b border-[#2563EB]">没有大机会了。真的没了。</span><br/>
                连 AI 都给不出别的答案。接受"没有大希望"的现实，是我们这一代人成熟的第一步。
              </p>
            </div>
          )}
        </div>
      </section>

      <footer className="py-40 px-8 bg-white border-t border-black/5 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="mb-20">
            <HelpCircle className="mx-auto text-[#2563EB] mb-8" size={64} />
            <h2 className="text-5xl md:text-7xl font-black text-[#111] mb-8 leading-tight tracking-tighter">
              那我们<br/>还能做什么？
            </h2>
            <p className="text-gray-500 text-xl leading-relaxed mb-16 font-light">
              大门正在关闭，我只给你们留了一条缝。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-left mb-24">
            <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#2563EB] transition-colors group rounded-sm">
              <h4 className="text-[#111] font-bold mb-4 flex items-center gap-2 group-hover:translate-x-1 transition-transform"><Activity size={18} className="text-[#2563EB]"/> 仅存的硬骨头</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                <strong>养老</strong>（几亿老人的安顿）和 <strong>精神安顿</strong>（13亿焦虑的心）。这是最后两个极其难啃、但还有需求的领域。
              </p>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#2563EB] transition-colors group rounded-sm">
              <h4 className="text-[#111] font-bold mb-4 flex items-center gap-2 group-hover:translate-x-1 transition-transform"><Zap size={18} className="text-[#2563EB]"/> 认知的微光</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                当房子不再是资产，<strong>金融认知</strong>是你唯一能抓住的稻草。股市即国运。不学，你就是下一个时代的文盲。
              </p>
            </div>
            <div className="bg-gray-50 p-8 border border-gray-100 hover:border-[#2563EB] transition-colors group rounded-sm">
              <h4 className="text-[#111] font-bold mb-4 flex items-center gap-2 group-hover:translate-x-1 transition-transform"><Brain size={18} className="text-[#2563EB]"/> 最后的修行</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                既然没有暴富剧本，那就回归本质：<strong>提升认知杠杆</strong>。用 AI 武装大脑，做那个"还没被替代"的少数派。
              </p>
            </div>
          </div>

          <div
            onClick={() => onNavigate('chapter7')}
            className="inline-block group cursor-pointer w-full md:w-auto"
          >
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-2 text-[#2563EB] font-mono text-xs mb-6 animate-pulse uppercase tracking-widest">
                <BookOpen size={14} />
                Next Chapter Preview
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-8 group-hover:text-[#2563EB] transition-colors text-[#111]">
                第六部分：最后的审判
              </h2>
              <p className="text-gray-500 mb-12 max-w-lg mx-auto text-lg">
                以前的危机是"钱没了"，现在的危机是"人没用了"。<br/>
                <strong>AI 不是来辅助你的，它是来审判你的。</strong>
              </p>
              <button className="px-12 py-5 bg-[#111] text-white font-bold text-lg rounded-full hover:bg-[#2563EB] transition-all shadow-2xl">
                直面审判
              </button>
            </div>
          </div>
          <p className="mt-24 text-[10px] font-mono text-gray-400 uppercase tracking-widest border-t border-gray-100 pt-8">
            SHULIN.OS // End of Chapter 06
          </p>
        </div>
      </footer>
    </div>
  );
};

// ==========================================
// 7. 最终章：最后的审判（完整版）
// ==========================================

// --- 工具函数：CSS 类名合并 ---
const cn = (...classes) => classes.filter(Boolean).join(' ');

// 1. Hero / 现实 (Reality Check)
const JudgmentSection = ({ onComplete }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleClick = () => {
    setIsRevealed(true);
    onComplete && onComplete();
  };

  const noiseWords = [
    "AI画图", "只是聊天", "写周报", "辅助工具", "不会替代人", 
    "还是得靠人", "没那么神", "炒作", "泡沫", "玩具"
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#FAFAFA] text-[#18181B] selection:bg-[#FF4D00] selection:text-white border-b border-black/5">
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ 
             backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
             backgroundSize: '40px 40px' 
           }}>
      </div>

      {!isRevealed && (
        <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
          {noiseWords.map((word, i) => (
            <div 
              key={i}
              className="absolute text-gray-200 font-bold blur-[1px] animate-pulse whitespace-nowrap"
              style={{
                top: `${Math.random() * 80 + 10}%`,
                left: `${Math.random() * 80 + 10}%`,
                fontSize: `${Math.random() * 1.5 + 1}rem`,
                transform: `rotate(${Math.random() * 40 - 20}deg)`
              }}
            >
              {word}
            </div>
          ))}
        </div>
      )}

      <div className="relative z-20 text-center max-w-4xl px-6">
        <div className="mb-8 inline-flex items-center gap-2 border border-black/5 bg-white px-4 py-1.5 rounded-full shadow-sm">
          <span className={`w-2 h-2 rounded-full ${isRevealed ? 'bg-[#FF4D00]' : 'bg-gray-400'}`}></span>
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-gray-500">
            {isRevealed ? 'Reality: LOADED' : 'Reality: CHECKING...'}
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-serif font-black tracking-tighter leading-[1.1] mb-12">
          {isRevealed ? (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              AI 不是辅助<br/>
              是<span className="text-[#FF4D00]">降维打击</span>
            </div>
          ) : (
            <div>
              你觉得 AI<br/>
              只是<span className="text-gray-400 border-b-4 border-gray-200">玩具</span>吗？
            </div>
          )}
        </h1>

        <div className="h-24 flex flex-col items-center justify-center">
          {!isRevealed ? (
            <button 
              onClick={handleClick}
              className="group relative px-8 py-4 bg-[#18181B] text-white font-bold text-lg hover:bg-[#FF4D00] transition-all duration-300 shadow-xl active:scale-95"
            >
              <span className="flex items-center gap-3">
                <MousePointer2 size={20} className="animate-bounce" />
                点击看真相
              </span>
            </button>
          ) : (
            <div className="animate-in fade-in duration-1000 flex flex-col items-center">
              <p className="text-xl font-serif text-gray-600 max-w-2xl">
                "以前比的是经验，现在比的是谁会用新杠杆。"
              </p>
              <div className="mt-8 animate-bounce text-[#FF4D00]">
                <ChevronDown size={32} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 2. 本质分析 (The Analysis)
const AutopsySection = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);

  const startScan = () => {
    if (isScanning || scanProgress === 100) return;
    setIsScanning(true);
    
    let progress = 0;
    const timer = setInterval(() => {
      progress += 2;
      setScanProgress(progress);
      if (progress >= 100) {
        clearInterval(timer);
        setIsScanning(false);
      }
    }, 20);
  };

  return (
    <div className="min-h-screen bg-white text-[#18181B] py-24 px-6 flex flex-col justify-center border-b border-black/5">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b-2 border-black pb-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-2">经验的本质</h2>
            <p className="text-gray-500">为什么"老经验"越来越不值钱？</p>
          </div>
          {scanProgress < 100 && (
            <button 
              onClick={startScan}
              disabled={isScanning}
              className="mt-4 md:mt-0 px-6 py-2 bg-black text-white font-bold text-sm hover:bg-[#FF4D00] transition-colors disabled:opacity-50"
            >
              {isScanning ? '正在分析...' : '点击分析本质'}
            </button>
          )}
        </div>

        <div className="relative h-[400px] border-2 border-[#18181B] bg-[#FAFAFA] overflow-hidden group cursor-pointer" onClick={startScan}>
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-white transition-transform"
               style={{ transform: `translateX(${-scanProgress}%)`, opacity: 1 - scanProgress/100 }}>
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
              <Brain size={48} className="text-gray-800" />
            </div>
            <h3 className="text-2xl font-bold mb-2">如果你只靠"经验"</h3>
            <p className="text-center text-gray-500 max-w-sm">
              依靠直觉、手感、记忆...<br/>
              这些东西很珍贵，但难以复制。
            </p>
          </div>

          <div className="absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#18181B] text-white translate-x-full transition-transform"
               style={{ transform: `translateX(${100 - scanProgress}%)` }}>
            <div className="w-24 h-24 border border-[#FF4D00] flex items-center justify-center mb-6 bg-[#FF4D00]/10">
              <Terminal size={48} className="text-[#FF4D00]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">AI 看到的是"语言"</h3>
            <p className="text-center text-gray-400 max-w-sm font-mono text-sm">
              一旦经验能被写成文字(Prompt)，<br/>
              AI 就能瞬间学会并执行。<br/>
              <span className="text-[#FF4D00] font-bold mt-2 block">效率提升 100倍。</span>
            </p>
          </div>

          {isScanning && (
            <div className="absolute top-0 bottom-0 w-1 bg-[#FF4D00] shadow-[0_0_20px_#FF4D00] z-10"
                 style={{ left: `${scanProgress}%` }}>
            </div>
          )}
        </div>

        <div className="mt-8 text-center min-h-[60px]">
          {scanProgress === 100 && (
            <div className="animate-in slide-in-from-bottom-2 fade-in duration-500">
               <p className="text-xl font-serif font-bold">
                 结论：凡是能被描述的经验，都会被 AI 掌握。
               </p>
               <p className="text-gray-500 text-sm mt-1">你得学会做那个"描述经验"的人，而不是干活的人。</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 3. 出路 (The Way Out)
const VoidSection = ({ onUnlock }) => {
  const [isLightsOn, setIsLightsOn] = useState(false);

  return (
    <div className={`min-h-[80vh] relative overflow-hidden transition-colors duration-1000 flex items-center justify-center px-6 ${isLightsOn ? 'bg-white' : 'bg-[#18181B]'}`}>
      {!isLightsOn && (
        <div className="text-center z-10 animate-in fade-in duration-1000">
          <p className="text-gray-500 mb-8 font-serif italic text-lg">
            "觉得卷不动了？没方向了？<br/>这是正常的，因为旧路走不通了。"
          </p>
          <button 
            onClick={() => setIsLightsOn(true)}
            className="group px-8 py-4 border border-gray-600 text-white hover:border-[#FF4D00] hover:text-[#FF4D00] transition-all rounded-full"
          >
            <span className="flex items-center gap-2">
              <Lightbulb size={20} className={isLightsOn ? "fill-current" : ""} />
              打开灯，找窗户
            </span>
          </button>
        </div>
      )}

      {isLightsOn && (
        <div className="text-center z-20 animate-in zoom-in fade-in duration-700 max-w-2xl">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FF4D00] text-white rounded-full mb-6 shadow-lg shadow-orange-200">
            <Zap size={32} />
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#18181B] mb-6">
            这是给普通人的<br/><span className="text-[#FF4D00]">生存突围指南</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            大门关上了，但窗户还在。<br/>
            这套笔记不是为了制造焦虑，而是为了给你一把梯子。<br/>
            我们称之为——<strong>知识套利</strong>。
          </p>
          <button 
            onClick={onUnlock}
            className="px-8 py-3 bg-[#18181B] text-white font-bold rounded hover:bg-[#FF4D00] transition-colors"
          >
            查看如何套利
          </button>
        </div>
      )}
    </div>
  );
};

// 4. 杠杆对比 (The Leverage)
const ValuationSection = () => {
  const [showComparison, setShowComparison] = useState(false);
  
  return (
    <div className="min-h-screen bg-[#F4F4F5] py-24 px-6 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-[#18181B] mb-4">
            算一笔<span className="text-[#FF4D00]">性价比</span>的账
          </h2>
          <p className="text-gray-500">为什么说 GPT 是你雇佣过的最便宜的顶级专家？</p>
        </div>

        <div className="bg-white border-2 border-[#18181B] p-8 md:p-12 shadow-[8px_8px_0px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="text-center opacity-50 grayscale transition-all duration-500">
              <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-2">传统专家 / 顾问</div>
              <div className="text-4xl font-black text-gray-300">¥ 500,000+</div>
              <div className="text-xs text-gray-400 mt-2">年薪成本</div>
            </div>

            <div className="text-2xl font-black text-[#FF4D00] italic">VS</div>

            <div className="text-center scale-110 transform transition-all duration-500">
              <div className="text-sm font-bold text-[#FF4D00] uppercase tracking-widest mb-2 flex items-center justify-center gap-1">
                GPT-4 / Claude <CheckCircle2 size={14} />
              </div>
              <div className="text-5xl md:text-6xl font-black text-[#18181B]">¥ 140</div>
              <div className="text-xs text-gray-500 mt-2 font-bold">月订阅费</div>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-100 pt-8 text-center">
            <button 
              onClick={() => setShowComparison(true)}
              className="px-6 py-2 border border-gray-300 rounded hover:border-black hover:bg-black hover:text-white transition-all text-sm font-bold"
            >
              {showComparison ? '已折叠观点' : '查看树林的建议'}
            </button>

            {showComparison && (
              <div className="mt-6 animate-in slide-in-from-bottom-2 fade-in">
                <p className="text-xl font-serif font-bold leading-relaxed text-[#18181B]">
                  "如果有 200 块钱，我建议你先买 GPT。<br/>
                  因为它拥有人类所有的知识，而且<span className="text-[#FF4D00]">随叫随到，永不发火</span>。"
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// 5. 套利流水线 (The Arbitrage)
const ArbitrageSection = () => {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step >= 4) {
      setStep(0);
    } else {
      setStep(prev => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-white py-24 px-6 flex flex-col justify-center border-t border-black/5">
      <div className="max-w-5xl mx-auto w-full">
        <div className="mb-16 text-center">
           <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-xs font-mono font-bold text-gray-500 mb-4">
             STRATEGY: MIDDLEMAN
           </div>
           <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">做知识的"二道贩子"</h2>
           <p className="text-gray-500 max-w-2xl mx-auto">
             你不需要成为顶级专家，你只需要把 AI 的顶级认知"搬运"过来。<br/>
             点击下方按钮，模拟一次完整的套利流程。
           </p>
        </div>

        <div className="relative border-2 border-[#18181B] bg-[#FAFAFA] p-8 md:p-12 overflow-hidden min-h-[400px] flex flex-col items-center justify-center">
          <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start relative z-10">
            <div className={`transition-all duration-500 flex flex-col items-center text-center ${step >= 1 ? 'opacity-100' : 'opacity-40'}`}>
               <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 bg-white ${step === 1 ? 'border-[#FF4D00] shadow-[0_0_20px_rgba(255,77,0,0.3)]' : 'border-gray-200'}`}>
                 <Brain size={24} className={step === 1 ? 'text-[#FF4D00]' : 'text-gray-400'} />
               </div>
               <h4 className="font-bold text-sm">你的提问</h4>
               <p className="text-xs text-gray-500 mt-2">"我不懂恋爱，<br/>怎么处理分手？"</p>
            </div>

            <div className="hidden md:flex justify-center pt-6">
              <ArrowRight size={24} className={`transition-colors ${step >= 2 ? 'text-[#FF4D00]' : 'text-gray-200'}`} />
            </div>

            <div className={`transition-all duration-500 flex flex-col items-center text-center ${step >= 2 ? 'opacity-100' : 'opacity-40'}`}>
               <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 bg-white ${step === 2 ? 'border-[#FF4D00] shadow-[0_0_20px_rgba(255,77,0,0.3)]' : 'border-gray-200'}`}>
                 <Factory size={24} className={step === 2 ? 'text-[#FF4D00]' : 'text-gray-400'} />
               </div>
               <h4 className="font-bold text-sm">AI 加工</h4>
               <p className="text-xs text-gray-500 mt-2">生成大师级心理学方案<br/>(耗时 0.01s)</p>
            </div>

            <div className="hidden md:flex justify-center pt-6">
              <ArrowRight size={24} className={`transition-colors ${step >= 3 ? 'text-[#FF4D00]' : 'text-gray-200'}`} />
            </div>

            <div className={`transition-all duration-500 flex flex-col items-center text-center ${step >= 3 ? 'opacity-100' : 'opacity-40'}`}>
               <div className={`w-16 h-16 rounded-full border-2 flex items-center justify-center mb-4 bg-white ${step === 3 ? 'border-[#FF4D00] shadow-[0_0_20px_rgba(255,77,0,0.3)]' : 'border-gray-200'}`}>
                 <Send size={24} className={step === 3 ? 'text-[#FF4D00]' : 'text-gray-400'} />
               </div>
               <h4 className="font-bold text-sm">分发变现</h4>
               <p className="text-xs text-gray-500 mt-2">发到抖音/小红书<br/>获取流量收益</p>
            </div>
          </div>

          {step === 4 && (
            <div className="absolute inset-0 z-20 bg-white/90 flex flex-col items-center justify-center animate-in zoom-in duration-300">
               <TrendingUp size={64} className="text-[#FF4D00] mb-4" />
               <h3 className="text-2xl font-black text-[#18181B] mb-2">套利成功</h3>
               <p className="text-gray-600 mb-8 font-serif">
                 "你赚的是<span className="text-[#FF4D00] font-bold mx-1">没有体验</span><br/>
                 但能讲出<span className="text-[#FF4D00] font-bold mx-1">体验级语言</span>的红利。"
               </p>
               <button onClick={() => setStep(0)} className="text-sm font-mono underline text-gray-400 hover:text-black">
                 再试一次
               </button>
            </div>
          )}

          <div className="absolute bottom-0 left-0 h-1 bg-[#FF4D00] transition-all duration-500" style={{ width: `${(step / 3) * 100}%` }}></div>
        </div>

        <div className="mt-8 text-center">
          {step < 4 && (
             <button 
               onClick={nextStep}
               className="px-8 py-3 bg-[#18181B] text-white font-bold rounded shadow-lg hover:scale-105 transition-transform active:scale-95"
             >
               {step === 0 ? '第一步：向 AI 提问' : 
                step === 1 ? '第二步：让 AI 生成方案' :
                step === 2 ? '第三步：发布内容' : '查看结果'}
             </button>
          )}
        </div>
      </div>
    </div>
  );
};

// 6. 工具进化论 (The Evolution)
const EvolutionSection = () => {
  const [activeEra, setActiveEra] = useState('brain');

  const eras = [
    { id: 'stone', icon: Hammer, label: '石器/牛', desc: '体力延伸', detail: '为了省力。效率 x 10' },
    { id: 'machine', icon: Factory, label: '蒸汽机', desc: '动力延伸', detail: '为了更快。效率 x 1000' },
    { id: 'brain', icon: Cpu, label: 'AI', desc: '脑力延伸', detail: '为了更聪明。效率 x ∞' },
  ];

  return (
    <div className="min-h-screen bg-[#F4F4F5] py-24 px-6 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
         <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">我们只剩下了"脑子"</h2>
            <p className="text-gray-500">
              人类历史，就是一部"身体逐渐退化，工具逐渐外挂化"的历史。
            </p>
         </div>

         <div className="grid md:grid-cols-3 gap-6">
            {eras.map((era) => {
              const Icon = era.icon;
              const isActive = activeEra === era.id;
              
              return (
                <div 
                  key={era.id}
                  onClick={() => setActiveEra(era.id)}
                  className={`
                    cursor-pointer p-8 border-2 transition-all duration-300 relative overflow-hidden group
                    ${isActive ? 'bg-[#18181B] border-[#18181B] text-white shadow-xl scale-105 z-10' : 'bg-white border-transparent hover:border-gray-300 text-gray-400'}
                  `}
                >
                  <div className="flex justify-between items-start mb-12">
                     <Icon size={32} className={isActive ? 'text-[#FF4D00]' : 'text-gray-300'} />
                     <span className="font-mono text-xs font-bold uppercase tracking-widest">{era.label}</span>
                  </div>
                  
                  <div className="relative z-10">
                    <h3 className={`text-2xl font-bold mb-2 ${isActive ? 'text-white' : 'text-gray-800'}`}>{era.desc}</h3>
                    <p className={`text-sm ${isActive ? 'text-gray-400' : 'text-gray-400'}`}>{era.detail}</p>
                  </div>

                  {isActive && (
                    <div className="absolute -bottom-10 -right-10 opacity-10">
                       <Icon size={150} />
                    </div>
                  )}
                </div>
              );
            })}
         </div>

         <div className="mt-12 p-8 bg-white border border-gray-200 text-center">
            <p className="text-xl font-serif font-bold text-[#18181B] mb-2">
              "现代人，本质上是悬浮在半空中的、活着的脑子。"
            </p>
            <p className="text-sm text-gray-500">
              既然身体干不过机器，那就别拼体力，只拼<span className="text-[#FF4D00] font-bold">认知</span>。
            </p>
         </div>
      </div>
    </div>
  );
};

// 7. 剩余多米诺 (The Surplus)
const SurplusSection = () => {
  const [fallenIndex, setFallenIndex] = useState(-1);

  const dominoes = [
    { title: "农业剩余", icon: Package, desc: "吃不完的粮食 -> 养活闲人" },
    { title: "分工产生", icon: Users, desc: "不用种地了 -> 去做手工业" },
    { title: "商品交换", icon: Coins, desc: "东西太多了 -> 商人出现" },
    { title: "信息爆炸", icon: Globe, desc: "内容太多了 -> 处理不过来" },
    { title: "AI 诞生", icon: Terminal, desc: "算力过剩 -> 消化信息剩余" }
  ];

  const pushDomino = () => {
    if (fallenIndex >= dominoes.length - 1) {
      setFallenIndex(-1);
      return;
    }

    let i = -1;
    const interval = setInterval(() => {
      i++;
      setFallenIndex(prev => i);
      if (i >= dominoes.length - 1) {
        clearInterval(interval);
      }
    }, 600);
  };

  return (
    <div className="min-h-screen bg-white py-24 px-6 flex flex-col justify-center border-t border-black/5">
      <div className="max-w-6xl mx-auto w-full">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">一切文明，都是"剩余"的产物</h2>
           <p className="text-gray-500">点击第一块骨牌，看懂这个世界的底层逻辑。</p>
         </div>

         <div className="flex flex-col md:flex-row gap-4 items-center justify-center min-h-[300px]">
           {dominoes.map((item, index) => {
             const isFallen = index <= fallenIndex;
             return (
               <div key={index} className="relative flex flex-col items-center group">
                 <div 
                   className={`
                     w-32 h-48 border-2 border-[#18181B] rounded bg-white flex flex-col items-center justify-center p-4 text-center transition-all duration-500 origin-bottom-left shadow-lg cursor-pointer hover:bg-gray-50
                     ${isFallen ? 'rotate-[70deg] translate-x-4 opacity-50 grayscale' : 'rotate-0 opacity-100'}
                   `}
                   onClick={index === 0 ? pushDomino : undefined}
                 >
                   <item.icon size={32} className="mb-4 text-[#18181B]" />
                   <div className="font-bold text-sm mb-2">{item.title}</div>
                 </div>
                 
                 <div className={`
                   absolute -bottom-24 w-40 text-xs text-center bg-[#18181B] text-white p-3 rounded transition-all duration-500
                   ${isFallen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}
                 `}>
                   {item.desc}
                   <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#18181B] rotate-45"></div>
                 </div>
               </div>
             );
           })}
         </div>

         <div className="mt-32 text-center">
            <button 
              onClick={pushDomino}
              className="px-8 py-3 bg-[#FF4D00] text-white font-bold rounded-full shadow-lg hover:shadow-orange-200 hover:scale-105 transition-all"
            >
              {fallenIndex === -1 ? '推倒第一块骨牌' : '重置推演'}
            </button>
            {fallenIndex === dominoes.length - 1 && (
               <p className="mt-6 font-serif text-xl font-bold animate-in fade-in">
                 "当你理解了剩余，你就看懂了人类历史。"
               </p>
            )}
         </div>
      </div>
    </div>
  );
};

// 8. 文明模拟器 (The Simulator)
const SimulatorSection = () => {
  const [simulationState, setSimulationState] = useState('idle'); // idle, running, finished
  const [logs, setLogs] = useState([]);

  const runSimulation = () => {
    setSimulationState('running');
    setLogs([]);
    
    const sequence = [
      { text: "> 初始化：村落模型 (100人)", delay: 500 },
      { text: "> 演化：农业剩余出现 -> 产生'闲人'", delay: 1500 },
      { text: "> 演化：交易需求激增 -> 发明'货币'", delay: 2500 },
      { text: "> 警告：货币超发 -> 触发'通货膨胀'", delay: 3500, alert: true },
      { text: "> 结论：通胀不是意外，是文明扩容的必然 bug。", delay: 4500, highlight: true }
    ];

    sequence.forEach(({ text, delay, alert, highlight }) => {
      setTimeout(() => {
        setLogs(prev => [...prev, { text, alert, highlight }]);
        if (delay === 4500) setSimulationState('finished');
      }, delay);
    });
  };

  return (
    <div className="min-h-screen bg-[#18181B] text-white py-24 px-6 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-12">
          <div className="inline-block px-3 py-1 bg-[#FF4D00] rounded text-xs font-bold mb-4">GPT PRO TIP</div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">别只把它当搜索框</h2>
          <p className="text-gray-400">试着把它当成"文明模拟器"。不要问"什么是通胀"，要问"请推演通胀是如何诞生的"。</p>
        </div>

        <div className="border border-gray-700 rounded-lg bg-black font-mono p-6 min-h-[300px] shadow-2xl relative overflow-hidden">
          <div className="flex gap-2 mb-4 border-b border-gray-800 pb-4">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-2 text-xs text-gray-500">Simulation Terminal v1.0</span>
          </div>

          <div className="space-y-3">
            {logs.map((log, idx) => (
              <div key={idx} className={`text-sm ${log.alert ? 'text-yellow-400' : log.highlight ? 'text-[#FF4D00] font-bold text-base' : 'text-green-400'}`}>
                {log.text}
              </div>
            ))}
            {simulationState === 'running' && (
              <div className="w-2 h-4 bg-green-400 animate-pulse inline-block ml-1"></div>
            )}
          </div>

          {simulationState === 'idle' && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
              <button 
                onClick={runSimulation}
                className="px-6 py-3 border border-green-500 text-green-500 hover:bg-green-500 hover:text-black transition-colors font-bold tracking-widest uppercase"
              >
                Start Simulation
              </button>
            </div>
          )}

           {simulationState === 'finished' && (
            <div className="mt-8 pt-4 border-t border-gray-800 text-center animate-in fade-in">
              <button 
                onClick={() => setSimulationState('idle')}
                className="text-xs text-gray-500 hover:text-white underline"
              >
                Reset System
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// 9. 生物基建 (Bio-Infrastructure)
const BioSection = () => {
  const [energy, setEnergy] = useState(30);

  const recharge = (amount) => {
    setEnergy(prev => Math.min(100, prev + amount));
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] py-24 px-6 flex flex-col justify-center">
      <div className="max-w-4xl mx-auto w-full">
         <div className="mb-12 text-center">
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">别忘了"硬件维护"</h2>
           <p className="text-gray-500">脑子是 CPU，身体是供电局。没有 ATP，再好的认知也跑不起来。</p>
         </div>

         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 text-center relative overflow-hidden">
               <div className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8">System Status</div>
               
               <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" r="88" stroke="#f3f4f6" strokeWidth="12" fill="transparent" />
                    <circle 
                      cx="96" cy="96" r="88" stroke={energy > 60 ? '#22c55e' : energy > 30 ? '#eab308' : '#ef4444'} strokeWidth="12" fill="transparent" 
                      strokeDasharray={2 * Math.PI * 88}
                      strokeDashoffset={2 * Math.PI * 88 * (1 - energy / 100)}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute text-center">
                     <div className="text-4xl font-black text-[#18181B]">{energy}%</div>
                     <div className="text-xs text-gray-400">Brain Energy</div>
                  </div>
               </div>

               <p className={`text-sm font-bold ${energy > 80 ? 'text-green-500' : 'text-gray-400'}`}>
                 {energy > 80 ? '状态：心流模式 (Flow)' : energy > 30 ? '状态：疲劳 (Low Battery)' : '状态：脑雾 (System Failure)'}
               </p>
            </div>

            <div className="space-y-4">
              <button 
                onClick={() => recharge(40)}
                className="w-full p-6 bg-white border-2 border-transparent hover:border-black transition-all flex items-center gap-4 group"
              >
                <div className="p-3 bg-blue-100 rounded-full text-blue-600 group-hover:scale-110 transition-transform"><Battery size={24} /></div>
                <div className="text-left">
                  <div className="font-bold">睡个好觉 (Sleep)</div>
                  <div className="text-xs text-gray-500">清理大脑代谢废物，恢复 ATP</div>
                </div>
              </button>

              <button 
                onClick={() => recharge(20)}
                className="w-full p-6 bg-white border-2 border-transparent hover:border-black transition-all flex items-center gap-4 group"
              >
                <div className="p-3 bg-red-100 rounded-full text-red-600 group-hover:scale-110 transition-transform"><Activity size={24} /></div>
                <div className="text-left">
                  <div className="font-bold">有氧运动 (Cardio)</div>
                  <div className="text-xs text-gray-500">提升心脏泵血，增加供氧</div>
                </div>
              </button>

              <div className="p-4 bg-gray-100 rounded text-xs text-gray-500 mt-4">
                提示：节食会导致血糖不足，直接降低智商。
              </div>
            </div>
         </div>
      </div>
    </div>
  );
};

// 10. 左右互搏 (The Dialectic)
const DialecticSection = () => {
  const [activeSide, setActiveSide] = useState('left'); // left, right, center

  return (
    <div className="min-h-screen bg-white py-24 px-6 flex flex-col justify-center border-t border-black/5">
      <div className="max-w-5xl mx-auto w-full">
         <div className="mb-16 text-center">
           <h2 className="text-3xl md:text-5xl font-serif font-bold mb-4">拒绝被洗脑</h2>
           <p className="text-gray-500">哪怕是树林说的，你也要怀疑。学会"左右互搏"，才能螺旋上升。</p>
         </div>

         <div className="grid md:grid-cols-2 gap-0 border-2 border-[#18181B] min-h-[400px]">
            <div 
              className={`p-8 flex flex-col justify-center transition-all duration-500 cursor-pointer hover:bg-gray-50 ${activeSide === 'left' ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => setActiveSide('left')}
            >
               <div className="mb-4 text-[#FF4D00] font-bold uppercase tracking-widest text-xs">Left Foot</div>
               <h3 className="text-2xl font-bold mb-4">"有人说：All in 自媒体"</h3>
               <p className="text-gray-500 text-sm leading-relaxed">
                 相信趋势，积极拥抱变化。如果不做，可能会被时代抛弃。
               </p>
               {activeSide === 'left' && <div className="mt-4 text-xs font-mono bg-[#FF4D00] text-white px-2 py-1 w-fit">CURRENT STANCE</div>}
            </div>

            <div 
              className={`p-8 flex flex-col justify-center border-t md:border-t-0 md:border-l border-[#18181B] transition-all duration-500 cursor-pointer hover:bg-gray-50 ${activeSide === 'right' ? 'opacity-100' : 'opacity-50'}`}
              onClick={() => setActiveSide('right')}
            >
               <div className="mb-4 text-gray-800 font-bold uppercase tracking-widest text-xs">Right Foot</div>
               <h3 className="text-2xl font-bold mb-4">"质疑：这是幸存者偏差？"</h3>
               <p className="text-gray-500 text-sm leading-relaxed">
                 也许只有 5% 的人适合做自媒体？如果我不是那 5% 怎么办？盲目投入风险很大。
               </p>
               {activeSide === 'right' && <div className="mt-4 text-xs font-mono bg-black text-white px-2 py-1 w-fit">CRITICAL STANCE</div>}
            </div>
         </div>

         <div className="mt-12 text-center">
            <button 
              onClick={() => setActiveSide('center')}
              className="group px-8 py-3 bg-[#18181B] text-white font-bold rounded-full hover:bg-[#FF4D00] transition-colors"
            >
              <span className="flex items-center gap-2 justify-center">
                <ShieldCheck size={18} />
                合成思考
              </span>
            </button>

            {activeSide === 'center' && (
              <div className="mt-8 p-6 bg-gray-50 border border-gray-200 animate-in slide-in-from-bottom-2 fade-in max-w-2xl mx-auto">
                 <p className="font-serif font-bold text-lg text-[#18181B]">
                   "真正的智慧，是脑子里同时存在两种相反的观点，还能正常行事。"
                 </p>
                 <p className="text-sm text-gray-500 mt-2">
                   结论：低成本试错，保持理性的乐观。不断去探索、发现自己。
                 </p>
              </div>
            )}
         </div>
      </div>
    </div>
  );
};

// 11. 终章 (The Departure)
const FinalOutroSection = ({ onNavigate }) => {
  return (
    <div className="min-h-[90vh] bg-[#0A0A0A] text-white flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
       <div className="absolute inset-0 opacity-[0.05]" 
             style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
       </div>
       <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-0"></div>

       <div className="relative z-10 max-w-2xl">
          <Wind size={64} className="mx-auto mb-8 animate-pulse text-gray-400" />
          <h2 className="text-5xl md:text-7xl font-serif font-black mb-8 leading-tight tracking-tighter">
            风起的时候<br/>
            往哪里飞？
          </h2>
          <p className="text-xl opacity-80 mb-12 font-serif text-gray-300">
            我给你们埋下了一颗种子。<br/>
            即使今天没有发芽，它也在等待一个春天。
          </p>
          
          <button 
            onClick={() => onNavigate('outro')}
            className="px-10 py-4 bg-white text-black font-bold text-lg rounded-full shadow-2xl hover:bg-[#FF4D00] hover:text-white transition-all duration-300 flex items-center gap-3 mx-auto"
          >
             <Rocket size={24} />
             出发，去行动
          </button>
       </div>

       <div className="absolute bottom-8 text-xs opacity-30 font-mono">
          SHULIN.OS - SYSTEM REBOOT COMPLETE
       </div>
    </div>
  );
};

// 主入口
const FinalChapterPage = ({ onNextModule }) => {
  const containerRef = useRef(null);

  const handleNavigate = (path) => {
    if (path === 'directory') {
      onNextModule('directory');
    } else if (path === 'outro') {
      onNextModule('outro');
    }
  };

  return (
    <div className="font-sans antialiased bg-[#FAFAFA]" ref={containerRef}>
      <div className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/5 px-6 md:px-12 py-4 flex justify-between items-center">
        <button
          onClick={() => onNextModule('directory')}
          className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#18181B] hover:text-[#FF4D00] transition-colors"
        >
          <ArrowLeft size={16} />
          返回目录
        </button>
        <span className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase">Final Chapter</span>
      </div>
      <JudgmentSection />
      <AutopsySection />
      <VoidSection onUnlock={() => {
        if (containerRef.current) {
          const target = containerRef.current.querySelector('[data-section="valuation"]');
          if (target) target.scrollIntoView({ behavior: 'smooth' });
        }
      }} />
      <div data-section="valuation"><ValuationSection /></div>
      <ArbitrageSection />
      <EvolutionSection />
      <SurplusSection />
      <SimulatorSection />
      <BioSection />
      <DialecticSection />
      <FinalOutroSection onNavigate={handleNavigate} />
    </div>
  );
};

// ==========================================
// 终端/谢幕页 (Outro) - 完整版
// ==========================================
const OutroPage = ({ onRestart }) => {
  const [isEnding, setIsEnding] = useState(false);
  const [showTrigger, setShowTrigger] = useState(true);

  useEffect(() => {
    // 自动触发谢幕动画（如果用户没有点击按钮）
    const autoTrigger = setTimeout(() => {
      if (showTrigger) {
        setIsEnding(true);
        setShowTrigger(false);
      }
    }, 2000);

    return () => clearTimeout(autoTrigger);
  }, [showTrigger]);

  const handleTrigger = () => {
    setIsEnding(true);
    setShowTrigger(false);
  };

  const handleClickAnywhere = () => {
    // 点击任意位置返回开场
    if (isEnding) {
      onRestart();
    }
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;500;700;900&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cinzel:wght@400;700&display=swap');
        
        .outro-text-line {
          opacity: 0;
          transform: translateY(20px);
          transition: all 1s ease;
          color: #fff;
        }
        
        .outro-text-history {
          font-size: clamp(0.9rem, 1.5vw, 1.2rem);
          font-weight: 300;
          letter-spacing: 0.3em;
          color: rgba(255,255,255,0.4);
          margin-bottom: 2rem;
          position: relative;
        }
        
        .outro-text-action {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          text-shadow: 0 0 30px rgba(255, 51, 51, 0.2);
        }
        
        .outro-text-philosophy {
          font-size: clamp(1.2rem, 2vw, 1.5rem);
          font-weight: 400;
          letter-spacing: 0.5em;
          color: #fff;
          padding: 10px 20px;
          border-top: 1px solid rgba(255,51,51,0.5);
          border-bottom: 1px solid rgba(255,51,51,0.5);
          margin-bottom: 4rem;
        }
        
        .outro-text-soul {
          font-size: clamp(0.9rem, 1.5vw, 1.1rem);
          font-weight: 300;
          letter-spacing: 0.15em;
          color: #eee;
          font-style: italic;
          font-family: 'Noto Serif SC', serif;
          max-width: 600px;
          line-height: 1.8;
          opacity: 0;
        }
        
        .outro-restart-btn {
          position: absolute;
          bottom: 5%;
          opacity: 0;
          pointer-events: auto;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.2);
          font-size: 0.7rem;
          letter-spacing: 0.2em;
          cursor: pointer;
          transition: all 0.5s ease 7s;
        }
        
        .outro-restart-btn:hover {
          color: #ff3333;
        }
        
        /* 激活谢幕状态 */
        .outro-ending .outro-text-history {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 3s;
        }
        
        .outro-ending .outro-text-action {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 3.5s;
        }
        
        .outro-ending .outro-text-philosophy {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 4.5s;
        }
        
        .outro-ending .outro-text-soul {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 6s;
        }
        
        .outro-ending .outro-restart-btn {
          opacity: 1;
        }
      `}</style>
      
      <div 
        className={`h-screen w-full bg-white relative overflow-hidden ${isEnding ? 'outro-ending' : ''}`}
        style={{ fontFamily: "'Noto Serif SC', serif" }}
        onClick={handleClickAnywhere}
      >
        {/* 模拟的网站内容页 (背景) */}
        <div 
          className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-[2000ms] ${isEnding ? 'scale-90 opacity-0' : ''}`}
          style={{ background: '#f5f5f5', color: '#333', zIndex: 1 }}
        >
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>SHULIN.OS</h2>
          <p style={{ color: '#666', maxWidth: '600px', textAlign: 'center', lineHeight: 1.6 }}>
            这里是网站的最后一个部分。<br/>
            当你阅读完所有内容，准备离开时...
          </p>
          
          {/* 触发收尾的按钮 */}
          {showTrigger && (
            <button
              onClick={handleTrigger}
              className="mt-10 px-10 py-4 bg-black text-white text-xl border-none cursor-pointer transition-all duration-300 hover:bg-[#ff3333] hover:scale-105"
              style={{ fontFamily: "'Noto Serif SC', serif", letterSpacing: '0.2em' }}
            >
              结束旅程 / END JOURNEY
            </button>
          )}
        </div>

        {/* 谢幕层 */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 100, perspective: '1000px', overflow: 'hidden' }}
        >
          {/* 左右门 */}
          <div
            className={`absolute top-0 h-full w-1/2 bg-[#0a0a0a] transition-transform duration-[3000ms] ${isEnding ? 'translate-x-0' : '-translate-x-full'}`}
            style={{
              left: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
              borderRight: '1px solid #222',
              zIndex: 20
            }}
          />
          
          <div
            className={`absolute top-0 h-full w-1/2 bg-[#0a0a0a] transition-transform duration-[3000ms] ${isEnding ? 'translate-x-0' : 'translate-x-full'}`}
            style={{
              right: 0,
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.6' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
              borderLeft: '1px solid #222',
              zIndex: 20
            }}
          />

          {/* 中间的红缝 */}
          <div
            className={`absolute top-0 left-1/2 -translate-x-1/2 h-full bg-[#ff3333] transition-opacity duration-500 ${isEnding ? 'opacity-100' : 'opacity-0'}`}
            style={{
              width: '2px',
              transitionDelay: '2.8s',
              boxShadow: '0 0 20px #ff3333, 0 0 50px #8a0000, 0 0 100px #8a0000',
              zIndex: 15
            }}
          />

          {/* 谢幕文案 */}
          <div 
            className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none"
            style={{ zIndex: 50 }}
          >
            {/* 1. 历史 */}
            <p className="outro-text-line outro-text-history">
              知识阶级落幕了
            </p>

            {/* 2. 现实 */}
            <h1 className="outro-text-line outro-text-action" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              用好 AI<br/>迎接新的时代
            </h1>

            {/* 3. 哲学 */}
            <div className="outro-text-line outro-text-philosophy" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              止于至善
            </div>

            {/* 4. 归途 */}
            <p className="outro-text-line outro-text-soul">
              所有复利到最后，只剩一句话：<br/>
              <span style={{ fontSize: '1.4em', color: '#fff', opacity: 1, marginTop: '15px', fontStyle: 'normal' }}>
                这个世界，开心最大。
              </span>
            </p>

            {/* 重新开始按钮 */}
            <button 
              className="outro-restart-btn"
              onClick={(e) => {
                e.stopPropagation();
                onRestart();
              }}
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              REPLAY
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

// ==========================================
// 8. 主入口
// ==========================================
const App = () => {
  const [currentModule, setCurrentModule] = useState('landing');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = (module) => {
    setCurrentModule(module);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const modules = {
    landing: <LandingPage onEnter={() => navigate('directory')} />,
    directory: <DirectoryPage onNavigate={navigate} />,
    layer4: <CognitionPage onNextModule={navigate} />,
    chapter2: <Chapter2Page onNextModule={navigate} />,
    chapter3: <Chapter3Page onNextModule={navigate} />,
    chapter4: <Chapter4Page onNextModule={navigate} />,
    chapter6: <Chapter6Page onNextModule={navigate} />,
    final_chapter: <FinalChapterPage onNextModule={navigate} />,
    outro: <OutroPage onRestart={() => navigate('landing')} />,
  };

  return (
    <div className="w-full h-full relative">
      {modules[currentModule] || <ComingSoonPage onNavigate={navigate} />}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <div className={`mb-4 flex flex-col gap-2 transition-all duration-300 origin-bottom-right ${isMenuOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}`}>
          {[
            { id: 'directory', label: '目录' },
            { id: 'layer4', label: '第一章' },
            { id: 'chapter2', label: '第二章' },
            { id: 'chapter3', label: '第三章' },
            { id: 'chapter4', label: '第四章' },
            { id: 'chapter6', label: '第五章' },
            { id: 'final_chapter', label: '最终章' },
            { id: 'outro', label: '谢幕' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => navigate(item.id)}
              className={`px-4 py-2 rounded shadow-lg text-sm font-bold font-mono tracking-wider transition-all ${
                currentModule === item.id ? 'bg-[#FF4D00] text白' : 'bg白 text黑 hover:bg-gray-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="w-14 h-14 bg-[#18181B] text白 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#FF4D00] transition-colors border-2 border-white/10"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default App;
