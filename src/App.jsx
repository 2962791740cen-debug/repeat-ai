import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft, ArrowUpRight, ChevronDown, ChevronUp,
  Lock, Database, List, CheckCircle2,
  Zap, Brain, DollarSign, TrendingUp, BarChart3,
  Scale, Gavel, RefreshCcw, Crown, FileText,
  Target, Shield, Layers, Sparkles, AlertCircle,
  Plus, Minus, Activity, Cpu, Scroll, Rocket,
  Users, Trophy, Briefcase, Terminal, Settings,
  PieChart, BookOpen, Send, Flame, Wallet,
  TrendingDown, Lightbulb, XCircle, Play
} from 'lucide-react';

// ==========================================
// 0. 开场动画 - DP大联盟版
// ==========================================
const LandingPage = ({ onEnter }) => {
  const [n1, setN1] = useState(false);
  const [n2, setN2] = useState(false);
  const [closed, setClosed] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [entryVisible, setEntryVisible] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setN1(true), 500);
    const t2 = setTimeout(() => setN1(false), 3500);
    const t3 = setTimeout(() => setN2(true), 4000);
    const t4 = setTimeout(() => setN2(false), 7000);
    const t5 = setTimeout(() => { setClosed(true); setHeroVisible(true); }, 7500);
    const t6 = setTimeout(() => setEntryVisible(true), 10500);
    return () => [t1,t2,t3,t4,t5,t6].forEach(clearTimeout);
  }, []);

  const handleEnter = () => {
    setTransitioning(true);
    setTimeout(onEnter, 1200);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Cinzel:wght@400;700&display=swap');
        .dp-narrative { font-size:clamp(1.4rem,3vw,2rem); color:#ddd; font-weight:500; letter-spacing:0.15em; line-height:1.8; position:absolute; opacity:0; transform:translateZ(-100px); transition:all 1s cubic-bezier(0.2,0.8,0.2,1); max-width:800px; text-shadow:0 0 10px rgba(0,0,0,0.8); }
        .dp-narrative.active { opacity:1; transform:translateZ(0); }
        .dp-hero { opacity:0; transition:opacity 3s ease; color:#fff; }
        .dp-hero.visible { opacity:1; }
        .dp-entry { margin-top:5rem; opacity:0; transition:opacity 1.5s ease; }
        .dp-entry.visible { opacity:1; }
        .dp-out { transform:scale(3); opacity:0; filter:blur(20px); transition:all 1.2s ease-in; }
      `}</style>

      <div className={`h-screen w-full bg-black text-[#e0e0e0] relative overflow-hidden ${transitioning ? 'dp-out' : ''}`}
        style={{ fontFamily:"'Noto Serif SC', serif", perspective:'1000px' }}>

        {/* 背景 */}
        <div className={`absolute inset-0 z-[1] transition-opacity duration-[3000ms] ${closed ? 'opacity-0' : 'opacity-100'}`}
          style={{ background:'radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a1a 40%, #000 80%)' }} />

        {/* 品牌 */}
        <div className="absolute top-10 left-10 z-[100]">
          <div className="text-2xl font-bold tracking-[0.1em] text-white" style={{ fontFamily:"'Noto Serif SC', serif" }}>DP.OS | 大联盟</div>
          <div className="text-xs tracking-[0.3em] text-white/60 mt-1" style={{ fontFamily:"'Cinzel', serif" }}>BATTLE MANUAL · 2025</div>
        </div>
        <div className="absolute bottom-10 left-10 text-sm text-white/40 tracking-[0.1em] z-[100]">规则是框架，框架之外才是战场</div>
        <div className="absolute bottom-10 right-10 text-sm text-white/40 tracking-[0.1em] z-[100]">先赢外交，再打经济</div>

        {/* 3D大门 */}
        <div className="relative w-full h-full flex justify-center" style={{ transformStyle:'preserve-3d', zIndex:10 }}>
          {/* 左门 */}
          <div className="absolute top-[-10%] h-[120%] transition-transform duration-[4000ms]"
            style={{ width:'50.5%', left:0, transformOrigin:'left center', transform:closed ? 'rotateY(0deg)' : 'rotateY(35deg)', background:'linear-gradient(90deg,#000 0%,#05050f 90%,#0a0a1e 100%)', boxShadow:'inset -1px 0 2px rgba(255,255,255,0.1),10px 0 50px rgba(0,0,0,0.8)' }} />
          {/* 门缝金光 */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 h-full transition-opacity duration-[2000ms] z-20"
            style={{ width:'4px', opacity:closed ? 1 : 0, background:'linear-gradient(180deg,transparent 0%,#D4A017 20%,#FFD700 50%,#D4A017 80%,transparent 100%)', boxShadow:'0 0 40px rgba(212,160,23,0.8),0 0 15px rgba(255,215,0,0.6)' }} />
          {/* 右门 */}
          <div className="absolute top-[-10%] h-[120%] transition-transform duration-[4000ms]"
            style={{ width:'50.5%', right:0, transformOrigin:'right center', transform:closed ? 'rotateY(0deg)' : 'rotateY(-35deg)', background:'linear-gradient(-90deg,#000 0%,#05050f 90%,#0a0a1e 100%)', boxShadow:'inset 1px 0 2px rgba(255,255,255,0.1),-10px 0 50px rgba(0,0,0,0.8)' }} />

          {/* 文案层 */}
          <div className="absolute inset-0 z-[50] flex flex-col justify-center items-center text-center" style={{ transform:'translateZ(50px)', pointerEvents:'none' }}>
            <div className={`dp-narrative ${n1 ? 'active' : ''}`}>
              经济总量，决定比赛<br/>
              <span style={{ fontWeight:300, fontSize:'0.7em', opacity:0.7, marginTop:'15px', display:'block' }}>七成的胜负</span>
            </div>
            <div className={`dp-narrative ${n2 ? 'active' : ''}`}>
              三场比赛，三次夺冠<br/>
              <span style={{ fontWeight:300, fontSize:'0.7em', opacity:0.7, marginTop:'15px', display:'block' }}>不是运气，是一套可复用的系统</span>
            </div>
            <div className={`dp-hero ${heroVisible ? 'visible' : ''}`}>
              <h1 style={{ fontSize:'clamp(2.5rem,5vw,5rem)', fontWeight:500, letterSpacing:'0.2em', marginBottom:'2rem', textShadow:'0 0 20px rgba(212,160,23,0.5)', fontFamily:"'Noto Serif SC', serif" }}>
                制胜点早已明确
              </h1>
              <p style={{ fontSize:'clamp(1rem,1.5vw,1.3rem)', color:'#aaa', letterSpacing:'0.4em', fontWeight:300 }}>
                开战之前，差距就已拉开
              </p>
              <div className={`dp-entry ${entryVisible ? 'visible' : ''}`} style={{ pointerEvents:'auto' }}>
                <button onClick={handleEnter}
                  className="bg-transparent border border-white/30 text-white px-10 py-4 transition-all duration-500 hover:bg-white hover:text-black hover:border-white"
                  style={{ fontFamily:"'Noto Serif SC', serif", fontSize:'1rem', letterSpacing:'0.5em', pointerEvents:'auto', cursor:'pointer' }}>
                  进入作战室 →
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
// 占位页
// ==========================================
const ComingSoonPage = ({ onNavigate }) => (
  <div className="h-screen w-full bg-[#09090b] text-white flex flex-col items-center justify-center">
    <Lock size={64} className="mx-auto mb-6 text-zinc-700" />
    <h1 className="text-4xl font-black font-serif tracking-tighter mb-4">ACCESS DENIED</h1>
    <p className="text-zinc-500 font-mono text-sm tracking-widest mb-12">DATA FRAGMENT MISSING OR ENCRYPTED</p>
    <button onClick={() => onNavigate('directory')} className="flex items-center gap-2 border border-zinc-800 bg-zinc-900/50 hover:bg-white hover:text-black px-8 py-3 rounded-full transition-all">
      <ArrowLeft size={16} /><span className="text-xs font-bold uppercase tracking-widest">Return to Directory</span>
    </button>
  </div>
);

// ==========================================
// 1. 目录页 - DP.OS
// ==========================================
const DirectoryPage = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [hoveredCard, setHoveredCard] = useState(null);

  const chapters = [
    { id:'01', moduleId:'ch01', category:'INTEL',     tag:'环境扫描',   title:'赛前情报总览',      subtitle:'SITUATION / 读懂战场',  desc:'四队参赛，新股市上线，经济权重70%。在开战前先读懂战场底层规则，才能在正确时间做正确的事。',                   action:'进入情报室',   icon:Database, size:'hero',   status:'OPEN' },
    { id:'02', moduleId:'ch02', category:'FORMATION', tag:'战术分工',   title:'唐的三组并行方案',  subtitle:'FORMATION / 极致效率', desc:'寒假&暑假连续两场夺冠的战术内核：极致效率+高度分工。路演组/PPT组/AI生成组，三条流水线同时开动。',          action:'解析分组策略', icon:Layers,   size:'tall',   status:'OPEN' },
    { id:'03', moduleId:'ch03', category:'CASHFLOW',  tag:'现金流',     title:'三条赚钱路径',      subtitle:'CASHFLOW / 方法论',     desc:'企业现金流最稳，股市系统可放大，Bug致富无上限。看清三条路，才能在正确时间走正确的路。',                      action:'打开钱的地图', icon:DollarSign,size:'normal', status:'OPEN' },
    { id:'04', moduleId:'ch04', category:'BATTLE',    tag:'实战案例',   title:'Bug致富·两次亲历', subtitle:'BATTLE / 非标时刻',     desc:'50w的Bug赔偿，100w的谈判逆转。天塌了，但我们没认。真实战场里的非标时刻，长什么样。',                        action:'还原战场现场', icon:Zap,       size:'wide',   status:'OPEN' },
    { id:'05', moduleId:'ch05', category:'PRICING',   tag:'定价权',     title:'标品 vs 非标品',    subtitle:'PRICING / 天花板逻辑', desc:'钻石从非标变标品后价格跌去90%。MBTI 9.9元 vs 定制方案2万一单。定价权的差异，就是收入上限的差异。',          action:'解锁定价逻辑', icon:Scale,     size:'normal', status:'OPEN' },
    { id:'06', moduleId:'final',category:'COMMAND',   tag:'行动框架',   title:'五一赛·战略方向',  subtitle:'COMMAND / 最终部署',   desc:'外交优先，轻量分组，赛中实时决策。规则是框架，框架之外才是真正的战场。先赢外交，再打经济，遇灰要价。',    action:'查看作战指令', icon:Gavel,     size:'tall',   status:'OPEN' },
  ];

  const categories = [
    { id:'ALL',       label:'全部档案 / ALL' },
    { id:'INTEL',     label:'情报分析 / INTEL' },
    { id:'FORMATION', label:'战术分工 / FORMATION' },
    { id:'CASHFLOW',  label:'现金流 / CASHFLOW' },
    { id:'BATTLE',    label:'实战案例 / BATTLE' },
    { id:'PRICING',   label:'定价权 / PRICING' },
    { id:'COMMAND',   label:'作战指令 / COMMAND' },
  ];

  const filtered = activeCategory === 'ALL' ? chapters : chapters.filter(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-[#FF4D00] selection:text-white flex flex-col md:flex-row">
      <aside className="w-full md:w-72 bg-white border-r border-black/5 flex flex-col h-auto md:h-screen sticky top-0 z-20">
        <div className="p-8 border-b border-black/5">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-4 h-4 bg-[#FF4D00]" />
            <span className="font-black tracking-tighter text-xl">DP.OS</span>
          </div>
          <p className="text-[10px] font-mono text-gray-400 tracking-widest uppercase">Battle Manual v25.05</p>
        </div>
        <nav className="flex-1 p-6 space-y-2 overflow-y-auto">
          <p className="text-[10px] font-mono text-gray-400 mb-4 pl-2 uppercase tracking-widest flex items-center gap-2">
            <Database size={10} /> Directory // 作战目录
          </p>
          {categories.map(cat => (
            <button key={cat.id} onClick={() => setActiveCategory(cat.id)}
              className={`w-full text-left px-4 py-3 text-xs font-bold tracking-wide transition-all rounded-sm flex justify-between items-center ${activeCategory === cat.id ? 'bg-[#18181B] text-white shadow-xl' : 'text-gray-400 hover:bg-gray-50 hover:text-[#18181B]'}`}>
              <span>{cat.label}</span>
              {activeCategory === cat.id && <div className="w-1.5 h-1.5 rounded-full bg-[#FF4D00]" />}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-black/5 bg-gray-50/50">
          <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-2">
            <span>SYSTEM STATUS</span>
            <span className="text-[#FF4D00] animate-pulse flex items-center gap-1"><div className="w-1 h-1 bg-[#FF4D00] rounded-full" />ONLINE</span>
          </div>
          <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden"><div className="w-[98%] h-full bg-[#FF4D00]" /></div>
          <div className="mt-2 text-[10px] text-gray-300 text-center">Team_ID: DP_LEAGUE_25</div>
        </div>
      </aside>

      <main className="flex-1 p-6 md:p-12 overflow-y-auto bg-[#F4F4F5] relative">
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{ backgroundImage:'radial-gradient(#000 1px, transparent 1px)', backgroundSize:'20px 20px' }} />
        <div className="mb-12 relative z-10">
          <h1 className="text-4xl md:text-5xl font-serif font-black mb-3 text-[#18181B] tracking-tight">
            大联盟<span className="text-[#FF4D00]">作战室</span>.
          </h1>
          <p className="text-gray-500 text-sm font-mono tracking-wide">// SELECT A MODULE TO ENTER THE BATTLEFIELD</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6 pb-20">
          {filtered.map(item => {
            const colSpan = item.size === 'wide' ? 'md:col-span-2' : 'md:col-span-1';
            const isHov = hoveredCard === item.id;
            return (
              <div key={item.id}
                onClick={() => item.status === 'OPEN' && onNavigate(item.moduleId)}
                onMouseEnter={() => setHoveredCard(item.id)} onMouseLeave={() => setHoveredCard(null)}
                className={`${colSpan} relative group bg-white transition-all duration-500 overflow-hidden border border-black/5 ${item.status === 'OPEN' ? 'cursor-pointer hover:-translate-y-1 hover:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.15)]' : 'cursor-not-allowed opacity-80'}`}>
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-[#FF4D00] transform origin-left transition-transform duration-500 z-20 ${isHov ? 'scale-x-100' : 'scale-x-0'}`} />
                <div className="h-full p-8 flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="flex flex-col items-start gap-2">
                      <span className={`px-2 py-1 text-[10px] font-mono font-bold tracking-wider uppercase transition-colors ${isHov ? 'bg-[#FF4D00] text-white' : 'bg-[#F4F4F5] text-[#18181B]'}`}>{item.tag}</span>
                      <span className="text-[10px] font-mono text-gray-300 group-hover:text-[#FF4D00] transition-colors">{item.subtitle}</span>
                    </div>
                    <span className="font-mono text-3xl font-black text-gray-100 group-hover:text-[#FF4D00]/10 transition-colors">{item.id}</span>
                  </div>
                  <div className="mt-4 mb-4">
                    <h3 className="font-serif font-bold text-[#18181B] leading-tight mb-4 text-xl md:text-2xl">{item.title}</h3>
                    <p className="text-xs md:text-sm text-gray-500 leading-relaxed line-clamp-4 group-hover:text-[#18181B] transition-colors border-l-2 border-transparent group-hover:border-[#FF4D00]/30 pl-0 group-hover:pl-3 duration-300">{item.desc}</p>
                  </div>
                  <div className="flex justify-between items-end border-t border-black/5 pt-6">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-full border transition-all duration-300 ${isHov ? 'bg-[#FF4D00] border-[#FF4D00] text-white' : 'bg-white border-gray-200 text-gray-400'}`}>
                        <item.icon size={18} />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity text-[#FF4D00]">{item.action}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-gray-300 group-hover:text-[#FF4D00] transition-colors" />
                  </div>
                </div>
                <item.icon strokeWidth={1} className={`absolute -bottom-10 -right-10 text-[#18181B] pointer-events-none transition-all duration-700 w-64 h-64 ${isHov ? 'opacity-[0.05] scale-125 rotate-12' : 'opacity-[0.02]'}`} />
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};

// ==========================================
// 可复用：情报核查 & 深度拆解
// ==========================================
const IntelFactCheck = ({ id, question, highlight, details, checked, onCollect }) => (
  <div className={`my-20 border transition-all duration-700 bg-white shadow-sm overflow-hidden ${checked ? 'border-[#FF4D00]' : 'border-gray-200'}`}>
    <div className="p-8 md:p-12">
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-12 items-start">
        <div className="flex-1 w-full">
          <div className="flex items-center gap-2 text-xs font-bold font-mono uppercase tracking-widest mb-6 text-[#FF4D00]">
            <CheckCircle2 size={14} /> Intel Check
          </div>
          <h3 className="text-3xl font-serif font-bold text-[#18181B] mb-8 leading-tight">{question}</h3>
          {!checked && (
            <button onClick={() => onCollect(id)}
              className="px-8 py-4 bg-gray-50 border border-gray-200 text-gray-600 text-sm font-bold uppercase tracking-widest hover:bg-[#18181B] hover:text-white hover:border-[#18181B] transition-all flex items-center gap-3">
              <span>点击揭晓底层逻辑</span><ChevronDown size={16} />
            </button>
          )}
        </div>
        {checked && (
          <div className="w-full xl:flex-[1.5] border-t xl:border-t-0 xl:border-l border-gray-100 pt-8 xl:pt-0 xl:pl-12">
            <div className="bg-[#FFF5F0] p-6 mb-6 border-l-4 border-[#FF4D00]">
              <p className="text-xl font-bold text-[#18181B] leading-relaxed">{highlight}</p>
            </div>
            <div className="prose prose-sm text-gray-600 leading-relaxed">{details}</div>
          </div>
        )}
      </div>
    </div>
  </div>
);

const IntelDeepDive = ({ id, question, intro, insight, detailList, checked, onCollect }) => (
  <div className="my-24 relative">
    <div className={`bg-white border p-8 md:p-12 shadow-xl transition-all duration-700 ${checked ? 'border-[#18181B]' : 'border-gray-200'}`}>
      <div className="flex justify-between items-center mb-10 pb-6 border-b border-gray-100">
        <div className="flex items-center gap-2 text-[#FF4D00] text-xs font-bold font-mono uppercase tracking-widest">
          <Zap size={14} /> Deep Dive // 深度拆解
        </div>
        {checked ? <span className="text-xs font-mono text-[#18181B] bg-[#FF4D00]/10 px-2 py-1">INTEL ACQUIRED</span>
                 : <span className="text-xs font-mono text-gray-400">LOCKED</span>}
      </div>
      <div className="flex flex-col xl:grid xl:grid-cols-[1fr_1.2fr] gap-8 md:gap-16">
        <div>
          <h3 className="text-3xl md:text-4xl font-serif font-bold mb-6 leading-tight text-[#18181B]">{question}</h3>
          <p className="text-gray-500 leading-relaxed text-lg mb-8">{intro}</p>
          {!checked && (
            <button onClick={() => onCollect(id)}
              className="w-full py-5 border-2 border-[#18181B] text-[#18181B] text-sm font-bold uppercase tracking-widest hover:bg-[#FF4D00] hover:border-[#FF4D00] hover:text-white transition-all flex items-center justify-center gap-3 shadow-[4px_4px_0px_0px_#18181B] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              <Target size={16} /><span>解锁情报盲区</span>
            </button>
          )}
        </div>
        {checked && (
          <div className="bg-[#18181B] text-white p-8 md:p-10 rounded-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10"><Brain size={120} /></div>
            <div className="relative z-10">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-4xl font-serif text-[#FF4D00] opacity-50">"</span>
                <p className="text-xl font-serif italic leading-relaxed text-gray-100">{insight}</p>
              </div>
              <div className="space-y-4 text-sm text-gray-400 border-t border-white/10 pt-6">
                {detailList.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className="text-[#FF4D00] font-mono">0{idx+1}.</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

// ==========================================
// 2. Ch01 - 赛前情报总览
// ==========================================
const INTEL_SECTIONS = [
  { id:'intro',      label:'序章 / INTRO' },
  { id:'team',       label:'队伍组建' },
  { id:'market',     label:'股市系统' },
  { id:'weight',     label:'权重分配' },
  { id:'conclusion', label:'战略结论 / NEXT' },
];

const IntelPage = ({ onNextModule }) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [collected, setCollected] = useState([]);
  const [toast, setToast] = useState(null);
  const [activeSection, setActiveSection] = useState('intro');
  const containerRef = useRef(null);
  const TOTAL = 3;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      setReadingProgress(scrollHeight > clientHeight ? scrollTop / (scrollHeight - clientHeight) : 0);
    };
    container.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver(entries => {
      const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio);
      if (visible[0]) setActiveSection(visible[0].target.id);
    }, { root:container, threshold:0.3 });
    INTEL_SECTIONS.forEach(s => { const el = container.querySelector(`#${s.id}`); if (el) observer.observe(el); });
    return () => { container.removeEventListener('scroll', onScroll); observer.disconnect(); };
  }, []);

  const scrollTo = (id) => {
    const container = containerRef.current;
    const target = container?.querySelector(`#${id}`);
    if (target) container.scrollTo({ top: target.offsetTop - 80, behavior:'smooth' });
  };

  const collectFragment = (id) => {
    if (!collected.includes(id)) {
      setCollected(prev => [...prev, id]);
      setToast('情报已收录');
      setTimeout(() => setToast(null), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-[#FF4D00] selection:text-white flex flex-col md:flex-row h-screen">
      <div className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
        <div className="bg-[#18181B] text-white px-6 py-3 rounded-full shadow-xl flex items-center gap-3 text-xs font-bold font-mono border border-[#FF4D00]">
          <div className="w-2 h-2 bg-[#FF4D00] rounded-full animate-pulse" />{toast}
        </div>
      </div>
      <aside className="hidden md:flex w-72 h-full sticky top-0 flex-col border-r border-black/5 bg-white z-20 flex-shrink-0">
        <div className="p-8 border-b border-black/5 flex items-center gap-2 cursor-pointer group hover:bg-gray-50" onClick={() => onNextModule('directory')}>
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-bold tracking-widest uppercase">BACK TO DIR</span>
        </div>
        <div className="flex-1 p-8 flex flex-col">
          <div>
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-4 flex items-center gap-2"><List size={12} />Section Map</p>
            <div className="space-y-2">
              {INTEL_SECTIONS.map(s => (
                <button key={s.id} onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-4 py-2 text-[11px] font-bold tracking-widest rounded-sm transition-all flex items-center justify-between ${activeSection === s.id ? 'bg-[#18181B] text-white shadow-lg' : 'text-gray-400 hover:bg-gray-50 hover:text-[#18181B]'}`}>
                  <span>{s.label}</span>
                  {activeSection === s.id && <ChevronDown size={12} className="rotate-[-90deg]" />}
                </button>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">Reading Progress</p>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#FF4D00] transition-all duration-500" style={{ width:`${Math.min(100,Math.round(readingProgress*100))}%` }} />
            </div>
            <p className="text-[10px] text-gray-300 mt-1">{Math.min(100,Math.round(readingProgress*100))}%</p>
          </div>
          <div className="mt-auto mb-12">
            <div className="flex justify-between items-end mb-2">
              <span className="text-[10px] font-bold font-mono uppercase text-gray-400">情报收录</span>
              <span className="text-xl font-black text-[#18181B]">{collected.length}<span className="text-gray-300 text-sm">/{TOTAL}</span></span>
            </div>
            <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full bg-[#FF4D00] transition-all duration-500" style={{ width:`${(collected.length/TOTAL)*100}%` }} />
            </div>
            <p className="text-[10px] text-gray-400 mt-2 font-mono">Module: Intel Loaded.</p>
          </div>
        </div>
      </aside>

      <main ref={containerRef} className="flex-1 relative overflow-y-auto h-full scroll-smooth">
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-24 md:py-32">
          <header id="intro" className="mb-32">
            <div className="inline-block px-4 py-1 bg-[#18181B] text-white text-[10px] font-mono font-bold tracking-wider mb-8">
              MODULE 01 // INTEL_OVERVIEW
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black text-[#18181B] leading-tight mb-10 tracking-tighter">
              参赛前，你必须<br/>先搞清楚<span className="text-[#FF4D00]">这件事</span>。
            </h1>
            <div className="flex gap-8 border-l-4 border-[#FF4D00] pl-8 py-2">
              <p className="text-xl md:text-2xl font-light text-gray-500 leading-relaxed max-w-2xl">
                参加任何比赛，第一步都不是"怎么打"，<br/>
                <span className="text-[#18181B] font-medium border-b-2 border-[#FF4D00]/20">而是"赢的标准是什么"。</span><br/>
                锁定目标，才能对齐所有资源和精力。
              </p>
            </div>
          </header>

          <section id="team" className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">01 // 队伍组建</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <h2 className="text-4xl font-serif font-black mb-8 text-[#18181B]">五一赛队伍情报</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { label:'参赛队伍', value:'四队', sub:'本届参赛规模', color:'bg-[#FF4D00]' },
                { label:'新人经验', value:'零经验', sub:'主席团塞入一名一参新人', color:'bg-[#18181B]' },
                { label:'人际关系', value:'全老熟人', sub:'五一对手都是熟悉的人', color:'bg-amber-600' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-black/5 p-6 relative overflow-hidden">
                  <div className={`w-1 h-full absolute left-0 top-0 ${item.color}`} />
                  <p className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-2">{item.label}</p>
                  <p className="text-3xl font-black text-[#18181B] mb-1">{item.value}</p>
                  <p className="text-xs text-gray-500">{item.sub}</p>
                </div>
              ))}
            </div>
            <IntelFactCheck id="f1" question="新队员零经验，是负担还是资源？"
              highlight="新手好带、听话——发挥正向。任务匹配能力，分配明确边界内的独立职责。"
              details={<p>五一赛队伍构成特殊：主席团塞入了一名零经验一参新队员。关键不是"新人能不能用"，而是"怎么用"——给他清晰边界内的独立任务，避免成为负担，争取成为增量。</p>}
              checked={collected.includes('f1')} onCollect={collectFragment} />
          </section>

          <section id="market" className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">02 // 股市系统</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <h2 className="text-4xl font-serif font-black mb-8 text-[#18181B]">新股市系统已上线</h2>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {[
                { tag:'系统更新', title:'新系统已在上海场验证', desc:'相比上届漏洞大幅减少，整体更稳定。上海场体验良好，本届可以更大胆地在股市系统上押注。', badges:['漏洞大幅减少','上海验证可用'], badgeColor:'bg-green-50 text-green-700' },
                { tag:'结算机制', title:'宣传已发·结算待定', desc:'本届宣传推文已发布，部分成员已转发点赞。结算机制尚未公布，参照上届权重70%执行。', badges:['推文已就绪','结算机制待定'], badgeColor:'bg-amber-50 text-amber-700' },
              ].map((item, i) => (
                <div key={i} className="bg-white border border-black/5 p-8">
                  <div className="text-[10px] font-mono text-[#FF4D00] font-bold uppercase tracking-widest mb-4">{item.tag}</div>
                  <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
                  <p className="text-gray-500 leading-relaxed mb-6">{item.desc}</p>
                  <div className="flex gap-3 flex-wrap">
                    {item.badges.map(b => <span key={b} className={`px-3 py-1 text-xs font-mono font-bold ${item.badgeColor}`}>{b}</span>)}
                  </div>
                </div>
              ))}
            </div>
            <IntelDeepDive id="d1" question="股市系统漏洞减少，对我们的策略有什么影响？"
              intro="上届股市漏洞多，很多队伍靠漏洞致富。新系统堵住了大部分漏洞——但这意味着扎实玩股市的正规打法反而更值钱了。"
              insight="漏洞少了，懂股市的人就更稀缺了。这是稀缺性溢价，不是坏事。"
              detailList={['IPO帮企业上市，扩大生产效率，这个玩法更稳定了','直接炒股的套利空间依然存在，上海场已验证','股市+企业双线联动，是本届最值得押注的组合策略']}
              checked={collected.includes('d1')} onCollect={collectFragment} />
          </section>

          <section id="weight" className="mb-32">
            <div className="flex items-center gap-3 mb-12">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-[10px] font-mono font-bold tracking-widest text-gray-400 uppercase">03 // 权重分配</span>
              <div className="h-px flex-1 bg-gray-200" />
            </div>
            <h2 className="text-4xl font-serif font-black mb-8 text-[#18181B]">结算权重：这就是一切的起点</h2>
            <div className="bg-white border border-black/5 p-8 mb-8">
              <div className="text-[10px] font-mono text-gray-400 mb-6 uppercase tracking-widest">历史参考权重分布</div>
              <div className="space-y-4">
                {[
                  { label:'经济总量', pct:70, color:'bg-[#FF4D00]', note:'核心战场' },
                  { label:'其他维度', pct:20, color:'bg-gray-400', note:'辅助加分' },
                  { label:'国土面积', pct:10, color:'bg-gray-200', note:'守住底线' },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-bold text-[#18181B]">{item.label}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-400">{item.note}</span>
                        <span className="text-sm font-mono font-bold">{item.pct}%</span>
                      </div>
                    </div>
                    <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width:`${item.pct}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <IntelFactCheck id="f2" question="为什么经济权重70%意味着「其他东西只要守住底线就行」？"
              highlight="当一个维度占70%，它的边际价值远超其他任何维度。把100单位资源押在经济上，比均摊强得多。"
              details={<><p className="mb-3">简单数学：经济多10分=+7总分。国土多10分=+1总分。把资源押错方向，等于自废武功。</p><p>这是目标反推策略的起点：夺冠→经济最大化→一切战术围绕搞钱展开，军事国土只保底线。</p></>}
              checked={collected.includes('f2')} onCollect={collectFragment} />
          </section>

          <section id="conclusion" className="mb-32">
            <div className="bg-[#18181B] text-white p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 opacity-5"><Database size={300} /></div>
              <div className="relative z-10">
                <div className="text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-widest mb-6">核心战略结论</div>
                <h2 className="text-4xl font-serif font-black mb-8">经济权重压倒性优势<br/>→ 一切战术围绕搞钱展开</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">军事国土只保底线即可。在开战前，所有的资源和精力都可以对齐到这一个方向上。这是整个比赛策略的出发点。</p>
                <button onClick={() => onNextModule('ch02')}
                  className="px-8 py-4 border border-white/30 text-white font-bold tracking-widest hover:bg-white hover:text-black transition-all text-sm flex items-center gap-3">
                  下一章：唐的分组方案 <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

// ==========================================
// 3. Ch02 - 唐的三组并行方案（暗色）
// ==========================================
const FormationPage = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openGroup, setOpenGroup] = useState(null);
  const [showStock, setShowStock] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const c = document.getElementById('formation-container');
      if (c) setScrollProgress(c.scrollTop / (c.scrollHeight - c.clientHeight));
    };
    document.getElementById('formation-container')?.addEventListener('scroll', handleScroll);
    return () => document.getElementById('formation-container')?.removeEventListener('scroll', handleScroll);
  }, []);

  const groups = [
    { id:1, title:'项目路演组', subtitle:'01 / PITCH', tag:'对外门面', grad:'from-orange-600 to-orange-800', members:'贸易商 2-3人 / 制造商 1-2人', require:'演讲能力 · 企业协调', desc:'负责向他方进行项目路演与洽谈，直接带入现金流。要求口才好、临场反应快，能在最短时间内说服对方。', highlight:'这是现金流的水龙头——它不开，什么都没有。', icon:Briefcase },
    { id:2, title:'PPT制作组', subtitle:'02 / MATERIAL', tag:'弹药供给', grad:'from-violet-600 to-violet-800', members:'贸易商 1人 / 制造商 1-2人', require:'PPT功底 · 美观呈现', desc:'疯狂产出路演材料，为第一组提供弹药。要求速度快且质量不能太简陋，是路演成功率的核心支撑。', highlight:'路演的成功率，70%取决于材料质量。', icon:FileText },
    { id:3, title:'AI方案生成组', subtitle:'03 / GENERATOR', tag:'项目工厂', grad:'from-teal-600 to-teal-800', members:'贸易商 1人 / 制造商 1-2人', require:'AI操作 · 创意能力', desc:'快速拍下可调用的原材料清单，喂给AI批量生成短期可落地的项目方案。目标：第3财年产出100个项目。', highlight:'目标是第3财年产出100个项目——这是真正的产能飞轮。', icon:Cpu },
  ];

  return (
    <div id="formation-container" className="h-screen overflow-y-auto bg-[#050505] text-gray-200 font-sans selection:bg-[#FF4D00] selection:text-black">
      <div className="fixed top-0 left-0 h-1 bg-[#FF4D00] z-50 transition-all duration-100" style={{ width:`${scrollProgress*100}%` }} />
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-40 text-white backdrop-blur-sm border-b border-white/5">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNextModule('directory')}>
          <ArrowLeft size={16} /><span className="text-xs font-mono tracking-widest font-bold">CHAPTER 02 // FORMATION_DECODED</span>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-16">
        <div className="inline-block px-4 py-1 border border-white/20 text-[#FF4D00] text-[10px] font-mono font-bold tracking-widest mb-8">ARCHIVE: 002 // FORMATION_REPORT</div>
        <h1 className="text-6xl md:text-8xl font-black font-serif leading-[0.9] mb-8 text-white">唐的<br/><span className="text-[#FF4D00]">分组方案</span></h1>
        <p className="text-xl text-gray-400 max-w-2xl leading-relaxed mb-4">寒假 &amp; 暑假两场比赛均以此战术取胜</p>
        <p className="text-sm text-gray-600 font-mono">制造商与贸易商双双拿下第一</p>
        <div className="mt-16 flex flex-col items-center gap-2 text-gray-600 animate-bounce">
          <span className="text-[10px] font-mono uppercase tracking-widest">Scroll to Decode</span>
          <ChevronDown size={20} />
        </div>
      </section>

      <section className="py-24 px-6 max-w-5xl mx-auto">
        <div className="border border-white/10 p-10 mb-16 relative">
          <div className="absolute -top-3 left-8 bg-[#050505] px-3 text-[#FF4D00] text-[10px] font-mono font-bold uppercase tracking-widest">核心原则</div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {['极致效率','高度分工','全员对接本国资源'].map((p,i) => (
              <div key={i}><div className="text-3xl font-black text-white mb-2">0{i+1}</div><div className="text-[#FF4D00] font-bold">{p}</div></div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-gray-400 text-sm text-center">前30分钟：落实所有现有项目，资金用到刀刃上 | 军事：只要首都存在即可</div>
        </div>

        <h2 className="text-3xl font-serif font-bold text-white mb-8">三组并行作战架构</h2>
        <div className="space-y-4 mb-16">
          {groups.map(group => (
            <div key={group.id} className="border border-white/10 bg-white/5 overflow-hidden">
              <button className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                onClick={() => setOpenGroup(openGroup === group.id ? null : group.id)}>
                <div className="flex items-center gap-6">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${group.grad} flex items-center justify-center flex-shrink-0`}>
                    <group.icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-gray-500 tracking-widest mb-1">{group.subtitle}</div>
                    <div className="text-lg font-bold text-white">{group.title}</div>
                  </div>
                  <span className={`hidden md:inline px-2 py-1 text-[10px] font-mono font-bold bg-gradient-to-r ${group.grad} text-white`}>{group.tag}</span>
                </div>
                <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${openGroup === group.id ? 'rotate-180' : ''}`} />
              </button>
              {openGroup === group.id && (
                <div className="px-6 pb-8 border-t border-white/10">
                  <div className="grid md:grid-cols-2 gap-8 pt-6">
                    <div>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">人员配置</p>
                      <p className="text-white font-bold mb-4">{group.members}</p>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">核心要求</p>
                      <p className="text-gray-300 mb-4">{group.require}</p>
                      <p className="text-[10px] font-mono text-gray-500 uppercase tracking-widest mb-2">职责说明</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{group.desc}</p>
                    </div>
                    <div className="bg-[#FF4D00]/10 border border-[#FF4D00]/30 p-6 flex items-center">
                      <div>
                        <div className="text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-widest mb-3">关键洞察</div>
                        <p className="text-white font-serif font-bold text-lg leading-relaxed">"{group.highlight}"</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border border-white/10 p-8 mb-16">
          <div className="text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-widest mb-4">协同工具</div>
          <h3 className="text-2xl font-bold text-white mb-4">Excel统一协作表</h3>
          <p className="text-gray-400 leading-relaxed">所有组员实时录入自己的进展，团队状态一览无余，信息对齐效率最大化。这是三组能并行不乱的关键——不是人管人，而是用数据对齐。</p>
        </div>

        <div className="border-l-4 border-[#FF4D00] pl-8 mb-8">
          <div className="text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-widest mb-4">叠加策略：股市操控线</div>
          <h3 className="text-2xl font-bold text-white mb-4">暑假场：企业线 × 股市线双线联动</h3>
          <p className="text-gray-400 leading-relaxed mb-6">单财年内完成10个项目路演，集中在同一垂直领域，拉升相关企业股价，再反哺股市收益。企业赚现金+股市赚差价，1+1&gt;2。</p>
          <button onClick={() => setShowStock(!showStock)} className="px-6 py-3 border border-[#FF4D00]/50 text-[#FF4D00] text-sm font-mono hover:bg-[#FF4D00] hover:text-black transition-all">
            {showStock ? '收起' : '展开双线联动逻辑 →'}
          </button>
          {showStock && (
            <div className="mt-6 grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6"><div className="text-white font-bold mb-3">企业路演 → 股价操控</div><p className="text-gray-400 text-sm">单财年10个路演 → 垂直领域股价飙升 → 提前建仓吃涨幅</p></div>
              <div className="bg-white/5 p-6"><div className="text-[#FF4D00] font-bold mb-3">双线协同效应</div><p className="text-gray-400 text-sm">企业赚现金 + 股市赚差价，两条线互相放大，最终实现1+1&gt;2的复利</p></div>
            </div>
          )}
        </div>

        <div className="mt-16 flex justify-end">
          <button onClick={() => onNextModule('ch03')} className="px-8 py-4 border border-white/20 text-white hover:bg-white hover:text-black transition-all text-sm font-bold tracking-widest flex items-center gap-3">
            下一章：三条赚钱路径 <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// 4. Ch03 - 三条赚钱路径
// ==========================================
const PathsPage = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [intensity, setIntensity] = useState(3);
  const [activePath, setActivePath] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(total / height);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const paths = [
    { id:1, title:'企业现金流', subtitle:'PATH 01', tag:'最核心·最稳定', stars:4, color:'bg-green-600', textColor:'text-green-700', bgColor:'bg-green-50', icon:Briefcase, desc:'企业拿政府资金做项目路演，或将产品卖给他国企业。是整场比赛最大的现金流来源，必须最优先保证。', details:['核心在于路演质量、企业数量与项目落地速度','是整个经济体系里最稳定、最直接的收入来源','必须有专人盯，不能因为在找其他机会就把这条路漏掉'], ceilingByIntensity:['几乎没有','10w起步','30w+','50w+','100w+'] },
    { id:2, title:'股市系统', subtitle:'PATH 02', tag:'分为炒股&IPO两路', stars:3, color:'bg-violet-600', textColor:'text-violet-700', bgColor:'bg-violet-50', icon:TrendingUp, desc:'①直接炒股：政府自炒+带企业炒，暑假末3w→10w金。②帮企业IPO上市：放大生产效率1千→1万。③IPO后再次联合投资，发挥1+1>2的杠杆效应。', details:['直接炒股：政府下场买卖，带着企业一起操作','IPO上市：把企业生产效率从1千放大到1万','本国联合投资：政府+企业共同建仓，复利效应'], ceilingByIntensity:['几乎没有','5w左右','15w左右','30w→50w','100w+（暑假场验证）'] },
    { id:3, title:'Bug致富', subtitle:'PATH 03', tag:'非标获利·无上限', stars:2, color:'bg-red-600', textColor:'text-red-700', bgColor:'bg-red-50', icon:Zap, desc:'利用规则灰色地带或系统漏洞强行要价索赔。五一场50w，暑假场100w——每一场都出现过，理论无上限。', details:['可遇不可求，但每一场比赛它都出现了','可以是起死回生的救命稻草，也可以是灭国的武器','不开口就永远只卖标品价——开口才有可能'], ceilingByIntensity:['0（没遇到）','0（没遇到）','50w（案例）','100w（案例）','理论无上限'] },
  ];

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1e3a8a] font-sans pb-20">
      <div className="fixed top-0 left-0 h-1 bg-[#1e3a8a] z-50 transition-all duration-100" style={{ width:`${scrollProgress*100}%` }} />
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-40 bg-[#F5F5F0]/90 backdrop-blur-sm border-b border-[#1e3a8a]/10">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => onNextModule('directory')}>
          <ArrowLeft size={16} className="text-[#1e3a8a]" />
          <span className="text-xs font-mono font-bold tracking-widest text-[#1e3a8a]">CHAPTER 03 // CASHFLOW_MAP</span>
        </div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center items-center px-6 border-b border-[#1e3a8a]/10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03]" />
        <div className="text-center max-w-4xl z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-[#1e3a8a]/30 rounded-full text-[#1e3a8a] text-[10px] font-mono font-bold mb-8 bg-white shadow-sm">
            <Scroll size={12} /><span>ARCHIVE: 003 // CASHFLOW_ANALYSIS</span>
          </div>
          <h1 className="text-6xl md:text-9xl font-black leading-[0.9] mb-10 text-[#1e3a8a] tracking-tighter">
            三条<br/><span className="text-[#B45309]">赚钱路径</span>
          </h1>
          <div className="max-w-2xl mx-auto bg-white/60 backdrop-blur-md p-8 shadow-sm border-l-4 border-[#1e3a8a]">
            <p className="text-xl md:text-2xl text-[#1e3a8a] leading-relaxed font-medium font-serif">目标明确之后，接下来就是拆解路径。<br/>在这个比赛里，<strong className="bg-[#1e3a8a]/10 px-1">赚钱本质上有三条路</strong>。</p>
          </div>
          <div className="mt-16 flex flex-col items-center gap-3 text-[#1e3a8a]/40 animate-bounce">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">Start Analysis</span>
            <ChevronDown size={20} />
          </div>
        </div>
      </section>

      <section className="py-24 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#1e3a8a] mb-4">三条路径对比</h2>
        <p className="text-gray-500 mb-12 font-mono text-sm">点击卡片查看详情 | 调整投入强度查看收益天花板</p>
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {paths.map(path => (
            <div key={path.id} onClick={() => setActivePath(activePath === path.id ? null : path.id)}
              className={`bg-white border-2 transition-all duration-300 cursor-pointer ${activePath === path.id ? 'border-[#1e3a8a] shadow-xl -translate-y-1' : 'border-transparent shadow-md hover:shadow-lg'}`}>
              <div className={`${path.color} p-4`}>
                <div className="flex justify-between items-center">
                  <span className="text-white text-[10px] font-mono font-bold uppercase tracking-widest">{path.subtitle}</span>
                  <path.icon size={20} className="text-white" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#1e3a8a] mb-2">{path.title}</h3>
                <div className="text-[10px] font-mono text-gray-400 mb-4">{path.tag}</div>
                <div className="flex gap-1 mb-4">
                  {[1,2,3,4,5].map(s => <div key={s} className={`h-2 flex-1 rounded-sm ${s <= path.stars ? path.color : 'bg-gray-100'}`} />)}
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{path.desc}</p>
                {activePath === path.id && (
                  <div className="mt-6 space-y-3 border-t border-gray-100 pt-6">
                    {path.details.map((d,i) => (
                      <div key={i} className="flex gap-2 text-xs text-gray-600">
                        <span className={`font-mono font-bold ${path.textColor}`}>→</span><span>{d}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-8 shadow-sm mb-12">
          <h3 className="text-2xl font-bold text-[#1e3a8a] mb-2">投入强度模拟器</h3>
          <p className="text-gray-500 text-sm mb-8">拖动滑块，查看不同投入强度下各路径的预估收益天花板</p>
          <div className="flex items-center gap-6 mb-8">
            <span className="text-[10px] font-mono text-gray-400 uppercase">投入强度</span>
            <input type="range" min={1} max={5} value={intensity} onChange={e => setIntensity(Number(e.target.value))} className="flex-1 accent-[#1e3a8a]" />
            <span className="text-2xl font-black text-[#1e3a8a] w-8">{intensity}</span>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {paths.map(path => (
              <div key={path.id} className={`p-5 ${path.bgColor}`}>
                <div className="text-[10px] font-mono text-gray-500 mb-1">{path.title}</div>
                <div className={`text-xl font-black ${path.textColor}`}>{path.ceilingByIntensity[intensity-1]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={() => onNextModule('ch04')} className="px-8 py-4 bg-[#1e3a8a] text-white font-bold tracking-widest hover:bg-[#1e3a8a]/90 transition-all text-sm flex items-center gap-3">
            下一章：Bug实战案例 <ArrowUpRight size={16} />
          </button>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// 5. Ch04 - Bug实战案例
// ==========================================
const BattlePage = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [case1Step, setCase1Step] = useState(0);
  const [case2Step, setCase2Step] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      setScrollProgress(scrollTop / (scrollHeight - clientHeight));
    };
    const c = containerRef.current;
    c?.addEventListener('scroll', handleScroll);
    return () => c?.removeEventListener('scroll', handleScroll);
  }, []);

  const case1 = [
    { title:'战前布局', desc:'和另一支队伍联手，计划一起打下某块区域。合作谈好了，分工也定了。', color:'bg-gray-700' },
    { title:'危机爆发', desc:'开战那一刻，对方的军事系统直接崩了——兵动不了，只能眼睁睁看着。我们只好独自上阵。', color:'bg-red-800' },
    { title:'关键结果', desc:'那支军事系统崩掉的队伍，因为这个Bug拿到了50w赔偿，成了那场比赛最大的赢家。', color:'bg-green-800' },
  ];

  const case2 = [
    { title:'危机爆发', desc:'第二天扩张疆土，军事系统连连失效。等意识到出问题时——已经过了两个财年。国土所剩无多，局势一片惨淡。', color:'bg-red-900' },
    { title:'关键抉择', desc:'向主席团反映，结果对方让我们——接受。当然不能就这么认了。团队选择了另一个字——改变。', color:'bg-amber-900' },
    { title:'反击行动', desc:'立刻拿出手机计算器和纸，密密麻麻地计算己方损失缺口。损失多少？缺口在哪？整整用了十分钟。', color:'bg-blue-900' },
    { title:'谈判胜利', desc:'唐主导谈判，拿着"天价赔款"方案主动出击。最终赔款落定：100w金币。', color:'bg-green-900' },
  ];

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto bg-[#F4F4F5] text-[#18181B] font-sans selection:bg-black selection:text-white scroll-smooth">
      <div className="fixed top-0 left-0 h-1 bg-[#FF4D00] z-50 transition-all duration-100" style={{ width:`${scrollProgress*100}%` }} />
      <nav className="fixed top-0 w-full px-6 py-4 flex justify-between items-center z-40 bg-[#F4F4F5]/90 backdrop-blur-sm border-b border-black/5">
        <div className="flex items-center gap-2 cursor-pointer group" onClick={() => onNextModule('directory')}>
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-mono tracking-widest font-bold uppercase">Bug_Battle // 004</span>
        </div>
        <div className="text-[10px] font-mono font-bold text-[#FF4D00] animate-pulse">CLASSIFIED</div>
      </nav>

      <section className="min-h-screen flex flex-col justify-center px-6 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-black text-white text-xs font-mono font-bold mb-8 w-fit">
          <Terminal size={12} /><span>CASE_FILES_LOADED</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black font-serif leading-[1.1] mb-8 text-[#18181B]">天塌了，<br/>但我们没认。</h1>
        <div className="border-l-4 border-[#FF4D00] pl-6 py-2 text-xl md:text-2xl text-gray-600 font-serif leading-relaxed max-w-2xl">
          <p>两次真实的Bug时刻：一次是别人拿到了50w，一次是我们逆转拿到了100w。</p>
          <p className="text-lg text-gray-400 font-sans mt-4">光说理论没感觉。来还原真实发生过的。</p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pb-32">
        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#FF4D00] flex items-center justify-center text-white font-black text-lg">01</div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">去年五一场</div>
              <h2 className="text-2xl font-serif font-black text-[#18181B]">别人捡到了</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {case1.map((step, i) => (
              <div key={i} onClick={() => setCase1Step(Math.max(case1Step, i+1))}
                className={`p-6 cursor-pointer transition-all duration-500 ${i < case1Step ? `${step.color} text-white` : 'bg-white border border-gray-200 text-gray-400'}`}>
                <div className="text-[10px] font-mono mb-2 opacity-70">STEP 0{i+1}</div>
                <div className="font-bold text-lg mb-3">{step.title}</div>
                {i < case1Step ? <p className="text-sm leading-relaxed opacity-90">{step.desc}</p> : <p className="text-sm">点击解锁</p>}
              </div>
            ))}
          </div>
          {case1Step >= 3 && (
            <div className="bg-[#18181B] text-white p-8 border-l-4 border-[#FF4D00]">
              <div className="text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-widest mb-3">战场启示</div>
              <p className="text-xl font-serif font-bold">那支军事系统崩掉的队伍，因为这个Bug拿到了<span className="text-[#FF4D00]">50w赔偿</span>，成了那场比赛最大的赢家。</p>
              <p className="text-gray-400 mt-4 text-sm">Bug不是坏事，关键是你有没有意识到它的价值，并且敢于开口要价。</p>
            </div>
          )}
        </section>

        <section className="mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-[#18181B] flex items-center justify-center text-white font-black text-lg">02</div>
            <div>
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest">去年暑假场</div>
              <h2 className="text-2xl font-serif font-black text-[#18181B]">轮到我们了</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {case2.map((step, i) => (
              <div key={i} onClick={() => setCase2Step(Math.max(case2Step, i+1))}
                className={`p-6 cursor-pointer transition-all duration-500 ${i < case2Step ? `${step.color} text-white` : 'bg-white border border-gray-200 text-gray-400'}`}>
                <div className="text-[10px] font-mono mb-2 opacity-70">STEP 0{i+1}</div>
                <div className="font-bold text-lg mb-3">{step.title}</div>
                {i < case2Step ? <p className="text-sm leading-relaxed opacity-90">{step.desc}</p> : <p className="text-sm opacity-50">→ 点击揭开下一步</p>}
              </div>
            ))}
          </div>
          {case2Step >= 4 && (
            <div className="bg-[#18181B] text-white p-8 border-l-4 border-green-400">
              <div className="text-green-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">最终结果</div>
              <p className="text-3xl font-black text-white mb-4">赔款落定：<span className="text-[#FF4D00]">100w</span> 金币</p>
              <p className="text-gray-400 leading-relaxed">这是唐的谈判在那场比赛里最极致的一次展现。我们能拿到100w，不是靠气势——是靠先把数字算清楚了，知道自己要多少、为什么是这个数。</p>
            </div>
          )}
        </section>

        <div className="bg-[#FF4D00] text-white p-10 mb-16">
          <div className="text-xs font-mono font-bold uppercase tracking-widest mb-6 opacity-70">核心洞察 / CORE INSIGHT</div>
          <h2 className="text-3xl font-serif font-black mb-6">谈判之前先算账。<br/>没有数字的要价，很容易被带着走。</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-8 border-t border-white/20 pt-8">
            {[
              { step:'01', text:'发现Bug或系统异常，第一时间内部拉齐' },
              { step:'02', text:'快速估算价值：损失多少？缺口在哪？赔偿金额怎么定？' },
              { step:'03', text:'拿着数字去谈，不开口就永远只能接受' },
            ].map(item => (
              <div key={item.step} className="flex gap-4">
                <span className="text-5xl font-black opacity-30">{item.step}</span>
                <p className="text-white/80 leading-relaxed text-sm self-center">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={() => onNextModule('ch05')} className="px-8 py-4 bg-[#18181B] text-white font-bold tracking-widest hover:bg-black transition-all text-sm flex items-center gap-3">
            下一章：标品 vs 非标品 <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 6. Ch05 - 标品 vs 非标品
// ==========================================
const PricingPage = ({ onNextModule }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const [flipped, setFlipped] = useState({ s: false, ns: false });
  const [unlockedSteps, setUnlockedSteps] = useState([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      setScrollProgress(scrollTop / (scrollHeight - clientHeight));
    };
    containerRef.current?.addEventListener('scroll', handleScroll);
    return () => containerRef.current?.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    { id:0, title:'识别空间', icon:Target, desc:'任何规则体系都存在"未写死"的地带——这是非标品的摇篮。先于他人发现它。比赛里的灰色地带、规则的模糊处、系统的异常，都是你的机会。' },
    { id:1, title:'构建叙事', icon:BookOpen, desc:'把要求变成"合理索赔"或"价值服务"，用数据和逻辑包装，让对方难以拒绝。没有数字支撑的要价，很容易被对方带着走。' },
    { id:2, title:'大胆要价', icon:Gavel, desc:'非标品的核心是：你不开口，就永远卖标品价。jc的百万赔款从拿起计算器开始——数字算清楚了，就去谈。' },
  ];

  return (
    <div ref={containerRef} className="h-screen overflow-y-auto bg-[#F8F9FA] text-[#111] font-sans selection:bg-[#2563EB] selection:text-white scroll-smooth">
      <div className="fixed top-0 left-0 h-1.5 bg-[#2563EB] z-50 transition-all duration-100" style={{ width:`${scrollProgress*100}%` }} />
      <nav className="fixed top-0 w-full px-8 py-6 flex justify-between items-center z-40 bg-[#F8F9FA]/80 backdrop-blur-md border-b border-black/5">
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNextModule('directory')}>
          <div className="w-2 h-2 bg-[#2563EB] rounded-full group-hover:w-4 transition-all" />
          <span className="text-xs font-mono tracking-widest font-bold uppercase">DP.OS // CH.05</span>
        </div>
        <span className="text-[10px] font-mono text-black/40 font-bold uppercase tracking-widest">Pricing Theory</span>
      </nav>

      <style>{`.persp { perspective:1000px; } .pres3d { transform-style:preserve-3d; } .bfh { backface-visibility:hidden; } .ry180 { transform:rotateY(180deg); }`}</style>

      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#18181B] text-white text-[10px] font-mono font-bold mb-8 w-fit">
          <Scale size={12} /><span>MODULE 05 // PRICING_THEORY</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-black font-serif leading-[1.1] mb-10 text-[#18181B]">定价权，<br/>才是<span className="text-[#2563EB]">收入上限</span>。</h1>
        <div className="border-l-4 border-[#2563EB] pl-6 py-2 text-xl text-gray-500 font-serif max-w-2xl">
          <p>" 利用比赛规则无法完全明细的空间 → 去！要！价！"</p>
          <p className="text-sm font-sans text-gray-400 mt-3">—— jc从两次切身经历中提炼的可复用核心策略</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-32">
        <section className="mb-24">
          <h2 className="text-3xl font-serif font-black text-[#18181B] mb-4">标品 vs 非标品</h2>
          <p className="text-gray-500 mb-10 text-sm">点击卡片翻转，查看另一面的定义与例子</p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="persp h-80 cursor-pointer" onClick={() => setFlipped(p => ({...p, s:!p.s}))}>
              <div className={`relative w-full h-full pres3d transition-transform duration-700 ${flipped.s ? 'ry180' : ''}`}>
                <div className="absolute inset-0 bfh bg-amber-600 text-white p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-widest opacity-70 mb-4">标品 / STANDARD</div>
                    <h3 className="text-3xl font-serif font-black mb-4">定价透明<br/>有上限</h3>
                    <p className="opacity-80 leading-relaxed">价格透明、供给稳定、定价权不在你手里。市场已经给它定好价了。</p>
                  </div>
                  <div className="text-xs opacity-50 font-mono">点击查看例子 →</div>
                </div>
                <div className="absolute inset-0 bfh ry180 bg-amber-50 border-2 border-amber-600 p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-amber-600 mb-4">例子 / EXAMPLES</div>
                    <div className="space-y-3 text-gray-700">
                      <p className="font-bold">手机 / 电子产品</p><p>同一款iPhone，你买我买，价格不会相差太多</p>
                      <p className="font-bold mt-4">天然钻石 → 人工钻石</p><p>人工钻石出现后，从数万跌至数千，因为变标品了</p>
                      <p className="font-bold mt-4">MBTI批量测评</p><p>9.9到100块一份，批量化=标品，天花板明确</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="persp h-80 cursor-pointer" onClick={() => setFlipped(p => ({...p, ns:!p.ns}))}>
              <div className={`relative w-full h-full pres3d transition-transform duration-700 ${flipped.ns ? 'ry180' : ''}`}>
                <div className="absolute inset-0 bfh bg-[#2563EB] text-white p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-widest opacity-70 mb-4">非标品 / NON-STANDARD</div>
                    <h3 className="text-3xl font-serif font-black mb-4">定价自主<br/>理论无上限</h3>
                    <p className="opacity-80 leading-relaxed">没有统一定价参照，价格由卖方主导。你开多少，就是多少。</p>
                  </div>
                  <div className="text-xs opacity-50 font-mono">点击查看例子 →</div>
                </div>
                <div className="absolute inset-0 bfh ry180 bg-blue-50 border-2 border-[#2563EB] p-8 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#2563EB] mb-4">例子 / EXAMPLES</div>
                    <div className="space-y-3 text-gray-700">
                      <p className="font-bold">玉器 / 定制咨询</p><p>同一块玉，不同时期不同人买，价格天差地别</p>
                      <p className="font-bold mt-4">企业定制测评 2万/单</p><p>和MBTI本质一样，非标溢价200倍以上</p>
                      <p className="font-bold mt-4">比赛Bug赔款</p><p>规则没有定价，主席团没有参照——你开多少就是多少</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-24">
          <h2 className="text-3xl font-serif font-black text-[#18181B] mb-4">可复用的核心思路</h2>
          <p className="text-gray-500 mb-10 text-sm">点击每一步解锁详细逻辑</p>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map(step => (
              <div key={step.id} onClick={() => setUnlockedSteps(p => p.includes(step.id) ? p : [...p, step.id])}
                className={`p-8 border-2 cursor-pointer transition-all duration-300 ${unlockedSteps.includes(step.id) ? 'border-[#2563EB] bg-[#2563EB] text-white' : 'border-gray-200 bg-white hover:border-[#2563EB]/50'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${unlockedSteps.includes(step.id) ? 'bg-white/20' : 'bg-[#2563EB]/10'}`}>
                  <step.icon size={20} className={unlockedSteps.includes(step.id) ? 'text-white' : 'text-[#2563EB]'} />
                </div>
                <div className="text-[10px] font-mono mb-2 opacity-70">STEP 0{step.id+1}</div>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                {unlockedSteps.includes(step.id) ? <p className="text-sm leading-relaxed opacity-90">{step.desc}</p> : <p className="text-sm text-gray-400">点击解锁这一步的逻辑 →</p>}
              </div>
            ))}
          </div>
        </section>

        <div className="bg-[#18181B] text-white p-10 mb-16">
          <div className="text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-widest mb-6">现实世界延伸</div>
          <h2 className="text-3xl font-serif font-black mb-6">这个逻辑普遍适用</h2>
          <p className="text-gray-400 leading-relaxed text-lg max-w-2xl mb-8">不仅限于DP比赛——阿斯丹、大学商业竞赛、企业谈判、个人服务定价，非标思维在任何存在信息不对称的场景均有效。</p>
          <div className="grid md:grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {['DP大联盟比赛','阿斯丹商赛','大学商业竞赛'].map((scene, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10">
                <div className="text-[#FF4D00] font-mono font-bold text-xs mb-2">场景 0{i+1}</div>
                <div className="font-bold text-white">{scene}</div>
                <p className="text-gray-500 text-xs mt-2">信息不对称 → 识别空间 → 非标定价</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={() => onNextModule('final')} className="px-8 py-4 bg-[#2563EB] text-white font-bold tracking-widest hover:bg-[#1d4ed8] transition-all text-sm flex items-center gap-3">
            最终章：五一赛战略方向 <ArrowUpRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 7. 最终章 - 五一赛战略方向
// ==========================================
const CommandPage = ({ onNextModule }) => {
  const [openModule, setOpenModule] = useState(null);

  const strategies = [
    { id:1, priority:'最优先', color:'bg-teal-700', border:'border-teal-700', title:'赛前外交布局', icon:Users, points:['提前与另外两队建立合作关系','合作框架内预留阴招/反转空间','外交谈判比赛场外即已开始','信任建立→联盟形成→内部博弈'], insight:'外交是乘数效应——它让你的每一步经济动作都能放大，也能让对手的每一步都打折。' },
    { id:2, priority:'重要', color:'bg-violet-600', border:'border-violet-600', title:'轻量分组策略', icon:Layers, points:['不复用上届高消耗三组打法','适度精简，降低执行消耗','条件不允许时灵活调整架构','保留快速变阵的机动性'], insight:'五一队伍只有四人+新人，强行套三组架构会过载。精简优于完美。' },
    { id:3, priority:'基础保障', color:'bg-amber-600', border:'border-amber-600', title:'新人整合带飞', icon:Trophy, points:['一参新人专人带教，任务匹配能力','分配明确边界内的独立职责','避免成为负担，争取成为增量','新手好带、听话——发挥正向'], insight:'新人不是包袱，是可以被激活的资源。关键在于给他清晰边界内的任务。' },
    { id:4, priority:'执行原则', color:'bg-red-600', border:'border-red-600', title:'赛中实时决策', icon:Zap, points:['赛前只定大框架，不死板规划','战场瞬息万变，留足决策空间','遇到Bug/漏洞，立刻启动要价','jc负责复盘，唐负责谈判执行'], insight:'计划赶不上变化。把精力留给执行，而不是死守计划。' },
  ];

  return (
    <div className="font-sans antialiased bg-[#FAFAFA]">
      <div className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b border-black/5 px-6 md:px-12 py-4 flex justify-between items-center">
        <button onClick={() => onNextModule('directory')} className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#18181B] hover:text-[#FF4D00] transition-colors">
          <ArrowLeft size={16} />返回目录
        </button>
        <span className="text-[10px] font-mono text-gray-500 tracking-[0.4em] uppercase">Final Chapter · Command</span>
      </div>

      <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 max-w-5xl mx-auto">
        <div className="inline-block px-4 py-1 bg-[#18181B] text-white text-[10px] font-mono font-bold tracking-wider mb-8 w-fit">
          FINAL CHAPTER // BATTLE_COMMAND
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-black text-[#18181B] leading-tight mb-10 tracking-tighter">
          五一赛<br/><span className="text-[#FF4D00]">战略方向</span>
        </h1>
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[{label:'赛事',value:'2025五一'},{label:'队伍规模',value:'4队+新人'},{label:'打法方向',value:'外交优先'},{label:'执行原则',value:'赛中判断'}].map((item,i) => (
            <div key={i} className="bg-white border border-black/5 p-4">
              <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-1">{item.label}</div>
              <div className="text-lg font-black text-[#18181B]">{item.value}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 max-w-5xl mx-auto">
        <h2 className="text-3xl font-serif font-black text-[#18181B] mb-12">四大行动模块</h2>
        <div className="space-y-4 mb-16">
          {strategies.map(s => (
            <div key={s.id} className={`border-l-4 ${s.border} bg-white shadow-sm overflow-hidden`}>
              <button className="w-full p-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                onClick={() => setOpenModule(openModule === s.id ? null : s.id)}>
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 ${s.color} flex items-center justify-center text-white rounded-full flex-shrink-0`}><s.icon size={18} /></div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1 text-gray-400">{s.priority}</div>
                    <div className="text-lg font-bold text-[#18181B]">0{s.id} {s.title}</div>
                  </div>
                </div>
                <ChevronDown size={20} className={`text-gray-400 transition-transform duration-300 ${openModule === s.id ? 'rotate-180' : ''}`} />
              </button>
              {openModule === s.id && (
                <div className="px-6 pb-8 border-t border-gray-100">
                  <div className="grid md:grid-cols-2 gap-8 pt-6">
                    <div className="space-y-3">
                      {s.points.map((point,i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span className="text-[#FF4D00] font-mono font-bold">→</span>
                          <span className="text-gray-600 text-sm">{point}</span>
                        </div>
                      ))}
                    </div>
                    <div className="bg-[#F4F4F5] p-6">
                      <div className="text-[10px] font-mono text-gray-400 uppercase tracking-widest mb-3">关键洞察</div>
                      <p className="text-[#18181B] font-serif font-bold leading-relaxed">"{s.insight}"</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-[#18181B] text-white p-12 mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-5"><Gavel size={300} /></div>
          <div className="relative z-10">
            <div className="text-[#FF4D00] text-xs font-mono font-bold uppercase tracking-widest mb-6">五一赛核心信念</div>
            <h2 className="text-3xl md:text-4xl font-serif font-black mb-6 leading-tight">规则是框架，<br/>框架之外才是真正的战场。</h2>
            <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-8">先赢外交，再打经济，遇灰要价，绝不轻易接受。标品路径打扎实，守住基本盘；始终有人在"看边界"，发现Bug立刻启动要价。</p>
            <div className="grid md:grid-cols-2 gap-4 border-t border-white/10 pt-8">
              {['确认得分权重，锁定核心目标','标品路径打扎实，守住基本盘','始终有人在看边界，保持敏感','谈判之前先算账，数字是底气'].map((item,i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#FF4D00] rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0">{i+1}</div>
                  <span className="text-gray-300 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <button onClick={() => onNextModule('outro')} className="px-12 py-5 bg-[#FF4D00] text-white font-bold tracking-[0.3em] hover:bg-[#e63900] transition-all text-sm flex items-center gap-3">
            <Rocket size={16} /> 完成作战手册
          </button>
        </div>
      </section>
    </div>
  );
};

// ==========================================
// 8. 谢幕页 - DP版
// ==========================================
const OutroPage = ({ onRestart }) => {
  const [ending, setEnding] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEnding(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="h-screen w-full bg-black text-white flex flex-col items-center justify-center relative overflow-hidden cursor-pointer"
      onClick={ending ? onRestart : undefined}
      style={{ fontFamily:"'Noto Serif SC', serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;500;700;900&family=Cinzel:wght@400;700&display=swap');
        .outro-fade { opacity:0; transition:opacity 2s ease; }
        .outro-fade.in { opacity:1; }
      `}</style>
      <div className={`outro-fade ${ending ? 'in' : ''} text-center px-8`}>
        <div className="text-[10px] font-mono text-white/30 tracking-[0.5em] uppercase mb-12" style={{ fontFamily:"'Cinzel', serif" }}>
          DP LEAGUE · BATTLE MANUAL · 2025
        </div>
        <h1 className="text-4xl md:text-6xl font-black mb-8 tracking-wider" style={{ textShadow:'0 0 30px rgba(255,77,0,0.5)' }}>
          制胜点早已明确
        </h1>
        <p className="text-white/40 text-lg tracking-[0.2em] mb-4">开战之前，差距就已拉开</p>
        <div className="w-16 h-px bg-[#FF4D00] mx-auto my-8" />
        <div className="space-y-2 text-white/30 text-sm">
          <p>三条赚钱路径 · 三组并行方案 · 标品与非标品</p>
          <p>外交优先 · 遇灰要价 · 谈判之前先算账</p>
        </div>
        <p className="mt-16 text-white/20 text-xs tracking-widest font-mono animate-pulse">点击任意位置重新进入</p>
      </div>
      <div className="absolute inset-0 pointer-events-none" style={{ background:'radial-gradient(ellipse at center, rgba(212,160,23,0.05) 0%, transparent 70%)' }} />
    </div>
  );
};

// ==========================================
// 9. App - 主路由
// ==========================================
const App = () => {
  const [current, setCurrent] = useState('landing');
  const navigate = (page) => setCurrent(page);

  const modules = {
    landing:   <LandingPage onEnter={() => navigate('directory')} />,
    directory: <DirectoryPage onNavigate={navigate} />,
    ch01:      <IntelPage onNextModule={navigate} />,
    ch02:      <FormationPage onNextModule={navigate} />,
    ch03:      <PathsPage onNextModule={navigate} />,
    ch04:      <BattlePage onNextModule={navigate} />,
    ch05:      <PricingPage onNextModule={navigate} />,
    final:     <CommandPage onNextModule={navigate} />,
    outro:     <OutroPage onRestart={() => navigate('landing')} />,
  };

  return (
    <div className="relative">
      {current !== 'landing' && current !== 'outro' && (
        <div className="fixed bottom-4 right-4 z-[200] flex gap-1">
          {[{id:'directory',label:'目录'},{id:'ch01',label:'01'},{id:'ch02',label:'02'},{id:'ch03',label:'03'},{id:'ch04',label:'04'},{id:'ch05',label:'05'},{id:'final',label:'终'}].map(item => (
            <button key={item.id} onClick={() => navigate(item.id)}
              className={`w-8 h-8 text-[10px] font-mono font-bold transition-all border ${current === item.id ? 'bg-[#FF4D00] text-white border-[#FF4D00]' : 'bg-white/80 text-gray-600 border-gray-200 hover:border-[#FF4D00] hover:text-[#FF4D00]'}`}>
              {item.label}
            </button>
          ))}
        </div>
      )}
      {modules[current] || <ComingSoonPage onNavigate={navigate} />}
    </div>
  );
};

export default App;
