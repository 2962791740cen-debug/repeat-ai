import React, { useState, useEffect, useRef } from 'react';
import {
  ChevronDown, ChevronUp, RotateCcw, Layers,
  Target, Search, CheckCircle, Circle, ArrowUpRight, Star,
  BookMarked, GitBranch, Brain, Cpu, Repeat
} from 'lucide-react';

// ── Global styles (always mounted) ───────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    /* ── fonts ── */
    @import url('https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@300;400;500;700&family=Playfair+Display:ital,wght@0,400;0,600;1,400&display=swap');

    /* ── reset ── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html, body, #root { height: 100%; overflow: hidden; }
    body { font-family: 'Noto Serif SC', serif; }

    /* ══ LANDING ═══════════════════════════════════════════════════════════ */
    .ra-landing {
      position: fixed; inset: 0; background: #0D0A05;
      display: flex; align-items: center; justify-content: center;
      overflow: hidden;
    }
    .ra-out { transform: scale(2.5); opacity: 0; filter: blur(15px);
               transition: all 1.2s ease-in; }

    .ra-phrase {
      position: absolute; left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      color: #C9A227; font-size: clamp(1.1rem, 2.5vw, 1.8rem);
      letter-spacing: 0.25em; text-align: center; opacity: 0;
      transition: opacity 1.2s ease, transform 1.2s ease;
      white-space: nowrap; text-shadow: 0 0 30px rgba(201,162,39,0.5);
    }
    .ra-phrase.show { opacity: 1; transform: translate(-50%, -50%); }
    .ra-phrase.hide { opacity: 0; transform: translate(-50%, -60%); }

    .ra-door-wrap {
      position: absolute; inset: 0;
      display: flex; align-items: center; justify-content: center;
      perspective: 1200px;
    }
    .ra-door {
      width: clamp(200px, 28vw, 320px); height: clamp(280px, 48vh, 460px);
      position: relative; transform-style: preserve-3d;
      transition: transform 2s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .ra-door.open { transform: rotateY(-110deg); }
    .ra-door-face {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, #1a1208 0%, #2D2416 40%, #1a1208 100%);
      border: 1px solid #4a3a1a;
      display: flex; align-items: center; justify-content: center;
      backface-visibility: hidden;
    }
    .ra-door-face::before {
      content: ''; position: absolute; inset: 12px;
      border: 1px solid rgba(201,162,39,0.3);
    }
    .ra-door-glyph { font-size: 4rem; color: #C9A227; opacity: 0.7; }

    .ra-crack {
      position: absolute; left: 50%; top: 50%;
      transform: translate(-50%, -50%);
      width: 2px; height: 0;
      background: linear-gradient(to bottom, transparent, #C9A227, #e8c84a, #C9A227, transparent);
      opacity: 0; transition: height 1.5s ease, opacity 0.5s ease;
      filter: blur(0.5px);
      box-shadow: 0 0 8px #C9A227, 0 0 20px rgba(201,162,39,0.4);
    }
    .ra-crack.show { height: clamp(280px, 48vh, 460px); opacity: 1; }
    .ra-crack::before {
      content: ''; position: absolute; left: -20px; top: 30%;
      width: 40px; height: 1px; background: rgba(201,162,39,0.5);
      transform: rotate(-20deg);
    }
    .ra-crack::after {
      content: ''; position: absolute; left: -15px; top: 60%;
      width: 30px; height: 1px; background: rgba(201,162,39,0.4);
      transform: rotate(15deg);
    }

    .ra-hero { opacity: 0; transition: opacity 2.5s ease; pointer-events: none; }
    .ra-hero.show { opacity: 1; }
    .ra-hero-inner {
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      align-items: center; justify-content: center; text-align: center;
    }

    .ra-entry { opacity: 0; transition: opacity 1.8s ease; }
    .ra-entry.show { opacity: 1; pointer-events: auto; }

    .ra-btn {
      background: transparent; border: 1px solid #C9A227; color: #C9A227;
      padding: 0.9rem 3rem; font-family: 'Noto Serif SC', serif;
      font-size: 1rem; letter-spacing: 0.2em; cursor: pointer;
      transition: all 0.4s ease; position: relative; overflow: hidden;
    }
    .ra-btn::before {
      content: ''; position: absolute; inset: 0;
      background: #C9A227; transform: translateX(-100%);
      transition: transform 0.4s ease; z-index: -1;
    }
    .ra-btn:hover::before { transform: translateX(0); }
    .ra-btn:hover { color: #0D0A05; }

    /* ══ LAYOUT ═════════════════════════════════════════════════════════════ */
    .ra-app {
      display: flex; height: 100vh; overflow: hidden;
      font-family: 'Noto Serif SC', serif; background: #FAF8F3; color: #2D2416;
    }

    .ra-sidebar {
      width: 220px; flex-shrink: 0; height: 100vh;
      background: #140E06; border-right: 1px solid rgba(201,162,39,0.2);
      display: flex; flex-direction: column; padding: 2rem 0; z-index: 100;
    }
    .ra-sidebar-logo {
      padding: 0 1.5rem 2rem;
      border-bottom: 1px solid rgba(201,162,39,0.15); margin-bottom: 1.5rem;
    }
    .ra-nav-item {
      padding: 0.7rem 1.5rem; color: rgba(201,162,39,0.5);
      font-size: 0.8rem; letter-spacing: 0.1em; cursor: pointer;
      transition: all 0.3s ease; border-left: 2px solid transparent;
      display: flex; align-items: center; gap: 0.6rem;
    }
    .ra-nav-item:hover { color: #C9A227; background: rgba(201,162,39,0.05); }
    .ra-nav-item.active {
      color: #C9A227; border-left-color: #C9A227;
      background: rgba(201,162,39,0.08);
    }

    .ra-main { flex: 1; overflow-y: auto; height: 100vh; }

    /* ══ COMPONENTS ══════════════════════════════════════════════════════════ */
    .ra-quote {
      border-left: 3px solid #C9A227; padding: 1.2rem 1.5rem;
      background: rgba(201,162,39,0.04); margin: 1.5rem 0;
      font-style: italic; color: #5a4020; font-size: 1.05rem; line-height: 1.8;
    }

    .ra-tag {
      display: inline-flex; align-items: center; gap: 0.4rem;
      background: rgba(201,162,39,0.1); color: #C9A227;
      padding: 0.3rem 0.8rem; font-size: 0.75rem; letter-spacing: 0.1em;
      border: 1px solid rgba(201,162,39,0.2);
    }

    .ra-card {
      background: #fff; border: 1px solid rgba(45,36,22,0.1);
      transition: all 0.4s ease; cursor: pointer; position: relative; overflow: hidden;
    }
    .ra-card::before {
      content: ''; position: absolute; left: 0; top: 0; bottom: 0;
      width: 3px; background: #C9A227;
      transform: scaleY(0); transition: transform 0.4s ease; transform-origin: bottom;
    }
    .ra-card:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(45,36,22,0.12); }
    .ra-card:hover::before { transform: scaleY(1); }

    .ra-stage-item {
      display: flex; align-items: flex-start; gap: 1.5rem;
      padding: 1.2rem 0; border-bottom: 1px solid rgba(45,36,22,0.08);
      opacity: 0; transform: translateX(-20px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }
    .ra-stage-item.show { opacity: 1; transform: translateX(0); }
    .ra-stage-num {
      width: 36px; height: 36px; border: 1px solid #C9A227;
      display: flex; align-items: center; justify-content: center;
      color: #C9A227; font-size: 0.8rem; flex-shrink: 0; margin-top: 2px;
    }

    .ra-method-card {
      background: #fff; border: 1px solid rgba(45,36,22,0.1);
      padding: 1.8rem; position: relative; overflow: hidden;
      transition: all 0.3s ease; cursor: pointer;
    }
    .ra-method-card:hover { box-shadow: 0 8px 24px rgba(45,36,22,0.1); }
    .ra-method-num {
      position: absolute; right: 1.2rem; top: 1rem;
      font-size: 3rem; color: rgba(201,162,39,0.1); font-weight: 700; line-height: 1;
    }

    .ra-flow-step {
      display: flex; align-items: center; gap: 1rem;
      background: #fff; border: 1px solid rgba(45,36,22,0.1);
      padding: 1rem 1.4rem; margin-bottom: 0.6rem; cursor: pointer;
      transition: all 0.3s ease;
    }
    .ra-flow-step:hover { border-color: #C9A227; background: rgba(201,162,39,0.03); }
    .ra-flow-arrow {
      color: #C9A227; display: flex; align-items: center;
      justify-content: center; margin: 0.3rem 0;
    }

    .ra-tool-card {
      border: 1px solid rgba(45,36,22,0.1); padding: 1.5rem;
      background: #fff; transition: all 0.3s ease;
    }
    .ra-tool-card:hover { border-color: #C9A227; }
    .ra-tool-badge {
      display: inline-block; padding: 0.2rem 0.7rem;
      font-size: 0.7rem; letter-spacing: 0.12em; border: 1px solid currentColor;
      margin-bottom: 0.8rem;
    }

    .ra-chapter-bg {
      position: relative; overflow: hidden;
    }
    .ra-chapter-bg::after {
      content: ''; position: absolute; right: -100px; top: -100px;
      width: 500px; height: 500px; border-radius: 50%;
      background: radial-gradient(circle, rgba(201,162,39,0.06) 0%, transparent 70%);
      pointer-events: none;
    }

    @media (max-width: 768px) {
      .ra-sidebar { display: none; }
      .ra-main { width: 100%; }
    }
  `}</style>
);

// ── Landing Page ──────────────────────────────────────────────────────────────
const LandingPage = ({ onEnter }) => {
  const [phase, setPhase] = useState(0);
  const [crackVisible, setCrackVisible] = useState(false);
  const [heroVisible, setHeroVisible] = useState(false);
  const [entryVisible, setEntryVisible] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 800),
      setTimeout(() => setPhase(2), 3500),
      setTimeout(() => setPhase(3), 6500),
      setTimeout(() => setCrackVisible(true), 7000),
      setTimeout(() => setHeroVisible(true), 7800),
      setTimeout(() => setEntryVisible(true), 10000),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const handleEnter = () => { setTransitioning(true); setTimeout(onEnter, 1200); };

  return (
    <div className={`ra-landing ${transitioning ? 'ra-out' : ''}`}>
      {/* Phrases */}
      <p className={`ra-phrase ${phase === 1 ? 'show' : phase > 1 ? 'hide' : ''}`}>
        你不缺道理
      </p>
      <p className={`ra-phrase ${phase === 2 ? 'show' : phase > 2 ? 'hide' : ''}`}
         style={{ fontSize: 'clamp(0.9rem,1.8vw,1.3rem)', color: 'rgba(201,162,39,0.75)' }}>
        你缺的，是把道理重复到身体里的能力
      </p>

      {/* Door */}
      {phase >= 3 && (
        <div className="ra-door-wrap">
          <div className={`ra-door ${crackVisible ? 'open' : ''}`}
               style={{ transformOrigin: 'left center' }}>
            <div className="ra-door-face">
              <span className="ra-door-glyph">重</span>
            </div>
          </div>
          <div className={`ra-crack ${crackVisible ? 'show' : ''}`} />
        </div>
      )}

      {/* Hero */}
      <div className={`ra-hero ${heroVisible ? 'show' : ''}`}>
        <div className="ra-hero-inner">
          <p style={{ color: 'rgba(201,162,39,0.5)', fontSize: '0.75rem',
                       letterSpacing: '0.4em', marginBottom: '1.5rem' }}>
            REPEAT · AI · ENCAPSULATE
          </p>
          <h1 style={{ fontFamily: "'Playfair Display',serif",
                        fontSize: 'clamp(2rem,5vw,4rem)', color: '#FAF8F3',
                        fontWeight: 400, letterSpacing: '0.05em',
                        textShadow: '0 0 40px rgba(201,162,39,0.3)', lineHeight: 1.3 }}>
            重复 · AI · 封装
          </h1>
          <p style={{ color: 'rgba(250,248,243,0.5)', fontSize: 'clamp(0.8rem,1.4vw,1rem)',
                       letterSpacing: '0.15em', marginTop: '1rem' }}>
            把一个道理重复到身体里，它才会变成你的人生
          </p>
        </div>
      </div>

      {/* Entry */}
      <div className={`ra-entry ${entryVisible ? 'show' : ''}`}
           style={{ position: 'absolute', bottom: '12vh', left: 0, right: 0,
                     display: 'flex', justifyContent: 'center',
                     pointerEvents: entryVisible ? 'auto' : 'none' }}>
        <button className="ra-btn" onClick={handleEnter}>
          开始阅读 →
        </button>
      </div>
    </div>
  );
};

// ── Sidebar ───────────────────────────────────────────────────────────────────
const Sidebar = ({ active, onNav }) => {
  const items = [
    { id: 'directory', label: '目录',           icon: <BookMarked size={13} /> },
    { id: 'ch01',      label: 'Ch01 · 为什么重复', icon: <Repeat    size={13} /> },
    { id: 'ch02',      label: 'Ch02 · 如何重复',   icon: <RotateCcw  size={13} /> },
    { id: 'ch03',      label: 'Ch03 · AI世界观',   icon: <Brain      size={13} /> },
    { id: 'ch04',      label: 'Ch04 · AI用法',     icon: <Cpu        size={13} /> },
    { id: 'outro',     label: '尾声',              icon: <Star       size={13} /> },
  ];
  return (
    <nav className="ra-sidebar">
      <div className="ra-sidebar-logo">
        <div style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.3em', marginBottom: '0.4rem' }}>
          REPEAT · AI
        </div>
        <div style={{ color: 'rgba(250,248,243,0.3)', fontSize: '0.65rem', letterSpacing: '0.1em' }}>
          封装手册 v1.0
        </div>
      </div>
      {items.map(item => (
        <div key={item.id}
             className={`ra-nav-item ${active === item.id ? 'active' : ''}`}
             onClick={() => onNav(item.id)}>
          {item.icon}
          <span>{item.label}</span>
        </div>
      ))}
    </nav>
  );
};

// ── Directory ────────────────────────────────────────────────────────────────
const DirectoryPage = ({ onNav }) => {
  const chapters = [
    { id: 'ch01', num: '01', color: '#8B6914',
      title: '为什么要重复', sub: '你缺的不是新道理',
      desc: '道理进入身体的五个阶段——从信息到气质，真正的蜕变发生在第几步？',
      tags: ['五阶段模型', '信息→气质', '重复的本质'] },
    { id: 'ch02', num: '02', color: '#6B4F12',
      title: '如何重复', sub: '四种方式 · 原则即宪法',
      desc: '物理重复、多维重复、实践重复、螺旋重复——以及为什么你的原则不能归零。',
      tags: ['四种重复', '不归零', '原则宪法'] },
    { id: 'ch03', num: '03', color: '#4A3A0A',
      title: 'AI 世界观', sub: '"你是矿，还是矿工？"',
      desc: '刷短视频你是矿，用AI你是矿工。AI时代三种能力的分野。',
      tags: ['元提问', '品位', '封装'] },
    { id: 'ch04', num: '04', color: '#2D2416',
      title: 'AI 使用方法', sub: '从元提问到完整闭环',
      desc: '六轮追问、工具分工、筛选重写、封装入库——一套可复制的工作流。',
      tags: ['六轮追问', '工具分工', '封装入库'] },
  ];
  return (
    <section style={{ background: '#FAF8F3', padding: '5rem 3rem', minHeight: '100vh' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <p style={{ color: '#C9A227', fontSize: '0.75rem', letterSpacing: '0.4em', marginBottom: '1rem' }}>
          TABLE OF CONTENTS
        </p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3rem)',
                      color: '#2D2416', fontWeight: 400, marginBottom: '1.5rem' }}>
          全书目录
        </h2>
        <div className="ra-quote" style={{ maxWidth: 600 }}>
          把一个道理重复到身体里，它才会变成你的人生。<br />
          把 AI 用到封装进工作流，它才会变成你的能力。
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(400px,1fr))',
                       gap: '1.5rem', marginTop: '3rem' }}>
          {chapters.map(ch => (
            <div key={ch.id} className="ra-card" onClick={() => onNav(ch.id)}
                 style={{ padding: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between',
                             alignItems: 'flex-start', marginBottom: '1.2rem' }}>
                <span style={{ fontFamily: "'Playfair Display',serif", fontSize: '3.5rem',
                                color: ch.color, opacity: 0.15, lineHeight: 1, fontWeight: 400 }}>
                  {ch.num}
                </span>
                <ArrowUpRight size={16} style={{ color: '#C9A227', marginTop: '0.5rem' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#2D2416', fontWeight: 500,
                            marginBottom: '0.3rem' }}>{ch.title}</h3>
              <p style={{ color: '#C9A227', fontSize: '0.85rem', letterSpacing: '0.1em',
                           marginBottom: '1rem' }}>{ch.sub}</p>
              <p style={{ color: 'rgba(45,36,22,0.65)', fontSize: '0.9rem',
                           lineHeight: 1.8, marginBottom: '1.2rem' }}>{ch.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {ch.tags.map(t => <span key={t} className="ra-tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Chapter 01 ───────────────────────────────────────────────────────────────
const Ch01Page = () => {
  const stageRef = useRef(null);
  const [shown, setShown] = useState([]);
  const stages = [
    { n: '01', label: '信息', en: 'Information', desc: '你听到了这个道理，它进入你的认知层，但还只是一串文字。' },
    { n: '02', label: '认同', en: 'Agreement',   desc: '你觉得有道理，内心产生共鸣——"说得对，就该这样。"' },
    { n: '03', label: '执行', en: 'Action',       desc: '你开始尝试去做，一次或几次，但还不稳定。' },
    { n: '04', label: '习惯', en: 'Habit',        desc: '你不需要提醒自己，这件事已经自动发生在生活里。' },
    { n: '05', label: '气质', en: 'Character',    desc: '它成为你身体的一部分，别人能从你身上感受到它。' },
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        stages.forEach((_, i) => setTimeout(() => setShown(p => [...p, i]), i * 200));
        obs.disconnect();
      }
    }, { threshold: 0.2 });
    if (stageRef.current) obs.observe(stageRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section style={{ background: '#FAF8F3', minHeight: '100vh' }}>
      {/* Hero */}
      <div className="ra-chapter-bg"
           style={{ background: 'linear-gradient(135deg,#FAF8F3 0%,#F0EBE0 100%)',
                     padding: '6rem 3rem 4rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.4em', marginBottom: '1.2rem' }}>
            CHAPTER 01
          </p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3.2rem)',
                        color: '#2D2416', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.3 }}>
            为什么要重复
          </h2>
          <p style={{ fontSize: '1.2rem', color: '#8B6914', letterSpacing: '0.1em',
                       marginBottom: '2rem', fontStyle: 'italic' }}>
            你缺的不是新道理
          </p>
          <div className="ra-quote" style={{ maxWidth: 620 }}>
            这个世界并不缺道理。微信读书、公众号、播客、短视频——<br />
            道理已经多到溢出来了。<br />
            但大多数人的生活，依然没有因此改变。<br />
            <strong style={{ color: '#2D2416' }}>原因只有一个：道理没有进入身体。</strong>
          </div>
        </div>
      </div>

      {/* Stages */}
      <div style={{ padding: '4rem 3rem', maxWidth: 800, margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#2D2416', letterSpacing: '0.1em',
                      fontWeight: 500, marginBottom: '0.5rem' }}>
          道理进入身体的五个阶段
        </h3>
        <p style={{ color: 'rgba(45,36,22,0.55)', fontSize: '0.85rem', marginBottom: '2.5rem' }}>
          绝大多数人停在第二阶段就满足了
        </p>
        <div ref={stageRef}>
          {stages.map((s, i) => (
            <div key={i} className={`ra-stage-item ${shown.includes(i) ? 'show' : ''}`}
                 style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="ra-stage-num">{s.n}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '1.05rem', color: '#2D2416', fontWeight: 500 }}>{s.label}</span>
                  <span style={{ fontSize: '0.7rem', color: '#C9A227', letterSpacing: '0.15em' }}>{s.en}</span>
                </div>
                <p style={{ color: 'rgba(45,36,22,0.65)', fontSize: '0.9rem', lineHeight: 1.8 }}>{s.desc}</p>
              </div>
              {i < stages.length - 1 && (
                <ChevronDown size={14} style={{ color: 'rgba(201,162,39,0.4)', marginTop: '0.5rem' }} />
              )}
            </div>
          ))}
        </div>

        {/* Key insight */}
        <div style={{ marginTop: '3rem', padding: '2rem', background: '#2D2416', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', right: '1.5rem', top: '0.5rem', fontSize: '5rem',
                         color: 'rgba(201,162,39,0.08)', fontWeight: 700, lineHeight: 1,
                         fontFamily: "'Playfair Display',serif" }}>KEY</div>
          <p style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>核心洞察</p>
          <p style={{ color: '#FAF8F3', fontSize: '1.05rem', lineHeight: 1.9 }}>
            "认同"之后停下来，是大多数人的陷阱。<br />
            收藏了、点赞了、转发了——<br />
            但那个道理，从来没有进入过你的行为。<br />
            <span style={{ color: '#C9A227' }}>重复，才是从认同到气质之间唯一的桥。</span>
          </p>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ fontSize: '1rem', color: '#2D2416', letterSpacing: '0.1em',
                        fontWeight: 500, marginBottom: '1.5rem' }}>你可能有过这些体验</h3>
          {[
            '读完一本书，三天后你只记得"这本书不错"',
            '听到一个人生道理，当天感动得热泪盈眶，第二天原样生活',
            '年初立了flag，年底发现一个都没实现',
            '知道要早起，知道要运动，知道要专注——但就是没做到',
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', gap: '1rem', padding: '0.8rem 0',
                                    borderBottom: '1px solid rgba(45,36,22,0.06)', alignItems: 'flex-start' }}>
              <Circle size={6} style={{ color: '#C9A227', marginTop: '0.55rem', flexShrink: 0 }} />
              <p style={{ color: 'rgba(45,36,22,0.7)', fontSize: '0.9rem', lineHeight: 1.7 }}>{item}</p>
            </div>
          ))}
          <div className="ra-quote" style={{ marginTop: '1.5rem' }}>
            这不是意志力问题。这是方法论问题。<br />
            你需要的不是更多道理，而是一套让道理落地的系统。
          </div>
        </div>
      </div>
    </section>
  );
};

// ── Chapter 02 ───────────────────────────────────────────────────────────────
const Ch02Page = () => {
  const [openMethod, setOpenMethod] = useState(null);
  const methods = [
    { n: '01', title: '物理重复', icon: <Layers size={18} />, sub: '最笨，最有效',
      desc: '把道理写下来，放在你每天必看的地方。手机壁纸、桌面贴纸、日记开头——用物理存在代替记忆依赖。',
      detail: '不要相信"我记得"。人的大脑天生遗忘。物理提醒是在跟遗忘对抗的最低成本手段。每天一次，重复21天，它会开始自动出现在你脑子里。' },
    { n: '02', title: '多维重复', icon: <GitBranch size={18} />, sub: '用不同介质触碰同一道理',
      desc: '同一个原则，用书读一遍，用播客听一遍，用写作说一遍，用对话讲一遍——每次都是不同层次的吸收。',
      detail: '每一种介质都能激活大脑的不同区域。听到的是一维的，看到的是二维的，亲口说出来的是内化的。多维重复让道理从文字变成立体的认知网络。' },
    { n: '03', title: '实践重复', icon: <Target size={18} />, sub: '在真实场景中触发',
      desc: '为道理设置"触发器"：每次遇到某类情景，就主动用这个原则做决策。失败也是重复——它让你看到道理的边界。',
      detail: '光想不够，必须在生活中创造使用场景。提前想好：当X发生时，我就用Y原则来应对。每一次使用都是一次神经元的强化，失败的使用尤其有价值。' },
    { n: '04', title: '螺旋重复', icon: <RotateCcw size={18} />, sub: '每次重复都比上次深一层',
      desc: '不是机械地背诵，而是带着新经验回来重新理解。同一个道理，二十岁读和三十岁读，感受完全不同。',
      detail: '真正的重复不是循环，是螺旋上升。你带着更多的人生经验和失败教训回来审视这个道理，会发现它有更深的层次。每一次重读都是一次元认知升级。' },
  ];

  return (
    <section style={{ background: '#F5F2EB', minHeight: '100vh' }}>
      <div className="ra-chapter-bg"
           style={{ background: 'linear-gradient(135deg,#F5F2EB 0%,#EDE5D0 100%)', padding: '6rem 3rem 4rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.4em', marginBottom: '1.2rem' }}>CHAPTER 02</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3.2rem)',
                        color: '#2D2416', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.3 }}>如何重复</h2>
          <p style={{ fontSize: '1.2rem', color: '#8B6914', letterSpacing: '0.1em',
                       marginBottom: '2rem', fontStyle: 'italic' }}>四种方式 · 原则即宪法 · 不归零</p>
        </div>
      </div>

      <div style={{ padding: '4rem 3rem', maxWidth: 900, margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#2D2416', letterSpacing: '0.1em',
                      fontWeight: 500, marginBottom: '0.5rem' }}>四种重复方式</h3>
        <p style={{ color: 'rgba(45,36,22,0.55)', fontSize: '0.85rem', marginBottom: '2.5rem' }}>点击每张卡片展开详解</p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(360px,1fr))',
                       gap: '1.2rem', marginBottom: '4rem' }}>
          {methods.map((m, i) => (
            <div key={i} className="ra-method-card"
                 onClick={() => setOpenMethod(openMethod === i ? null : i)}>
              <div className="ra-method-num">{m.n}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '0.8rem' }}>
                <span style={{ color: '#C9A227' }}>{m.icon}</span>
                <h4 style={{ fontSize: '1.05rem', color: '#2D2416', fontWeight: 500 }}>{m.title}</h4>
              </div>
              <p style={{ color: '#8B6914', fontSize: '0.8rem', letterSpacing: '0.1em', marginBottom: '0.7rem' }}>{m.sub}</p>
              <p style={{ color: 'rgba(45,36,22,0.7)', fontSize: '0.9rem', lineHeight: 1.8 }}>{m.desc}</p>
              {openMethod === i && (
                <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid rgba(201,162,39,0.2)' }}>
                  <p style={{ color: 'rgba(45,36,22,0.65)', fontSize: '0.88rem', lineHeight: 1.9 }}>{m.detail}</p>
                </div>
              )}
              <div style={{ marginTop: '0.8rem', display: 'flex', justifyContent: 'flex-end' }}>
                {openMethod === i
                  ? <ChevronUp size={14} style={{ color: '#C9A227' }} />
                  : <ChevronDown size={14} style={{ color: 'rgba(201,162,39,0.5)' }} />}
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '3rem' }}>
          <div style={{ background: '#2D2416', padding: '2.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '1rem', top: '0.5rem', fontSize: '4rem',
                           color: 'rgba(201,162,39,0.07)', fontFamily: "'Playfair Display',serif" }}>原则</div>
            <p style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>PRINCIPLE = CONSTITUTION</p>
            <h3 style={{ color: '#FAF8F3', fontSize: '1.1rem', fontWeight: 500, marginBottom: '1rem' }}>原则即宪法</h3>
            <p style={{ color: 'rgba(250,248,243,0.65)', fontSize: '0.9rem', lineHeight: 1.9 }}>
              宪法的作用不是让你背诵它，而是让它在关键时刻约束你的行为。
              原则也一样——它不是口号，是你在压力下的决策框架。
            </p>
          </div>
          <div style={{ background: '#fff', padding: '2.5rem', border: '1px solid rgba(45,36,22,0.1)',
                         position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', right: '1rem', top: '0.5rem', fontSize: '4rem',
                           color: 'rgba(201,162,39,0.07)', fontFamily: "'Playfair Display',serif" }}>零</div>
            <p style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.3em', marginBottom: '1rem' }}>NO RESET = NO ZERO</p>
            <h3 style={{ color: '#2D2416', fontSize: '1.1rem', fontWeight: 500, marginBottom: '1rem' }}>不归零</h3>
            <p style={{ color: 'rgba(45,36,22,0.65)', fontSize: '0.9rem', lineHeight: 1.9 }}>
              每次重新开始都是在清空账户。不归零的意思是：昨天的积累，今天还在。
              哪怕跌倒，也要从现在的位置站起来，而不是退回原点。
            </p>
          </div>
        </div>

        <div className="ra-quote">
          重复的本质，是在用时间换取"不需要思考就能做对"的能力。<br />
          当正确的事变成条件反射，你就自由了。
        </div>
      </div>
    </section>
  );
};

// ── Chapter 03 ───────────────────────────────────────────────────────────────
const Ch03Page = () => {
  const [fate, setFate] = useState(null);
  const fates = [
    { label: '被替代', color: '#c0392b', bg: '#fdf0ed',
      desc: '把AI当搜索引擎用——只问答案，不问背后的逻辑。你的工作被AI替代，因为你做的就是AI最擅长的：检索和复述。' },
    { label: '被辅助', color: '#8B6914', bg: '#fdf8e8',
      desc: '把AI当工具用——它帮你写文案、改代码、做PPT。效率提升了，但你的判断力没有成长。AI是你的助手，也是你的天花板。' },
    { label: '成为矿工', color: '#2d7a2d', bg: '#edf8ed',
      desc: '把AI当延伸用——你有问题意识，你有品位，你把AI的输出封装成自己的能力。AI是你的铲子，你挖出来的是属于自己的金子。' },
  ];
  const abilities = [
    { icon: <Search size={20} />, title: '元提问', en: 'Meta-Questioning', tag: '最核心的能力',
      desc: '不问"帮我写篇文章"，而是问"这个问题的本质是什么，我需要问什么问题才能得到真正有用的答案"。' },
    { icon: <Star size={20} />, title: '品位', en: 'Taste & Judgment', tag: '无法被替代的能力',
      desc: 'AI可以生成一百个答案，但你需要知道哪一个好。品位是筛选能力，是你对"好"的感知阈值。它来自大量阅读和独立思考，无法外包。' },
    { icon: <Layers size={20} />, title: '封装', en: 'Encapsulation', tag: '让能力不归零',
      desc: '把AI帮你完成的内容，转化成你自己的认知资产——整理进知识库，提炼成原则，融入工作流。不封装等于不积累。' },
  ];

  return (
    <section style={{ background: '#FAF8F3', minHeight: '100vh' }}>
      <div className="ra-chapter-bg"
           style={{ background: 'linear-gradient(135deg,#FAF8F3 0%,#EEE8DC 100%)', padding: '6rem 3rem 4rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.4em', marginBottom: '1.2rem' }}>CHAPTER 03</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3.2rem)',
                        color: '#2D2416', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.3 }}>AI 世界观</h2>
          <p style={{ fontSize: '1.2rem', color: '#8B6914', letterSpacing: '0.05em',
                       marginBottom: '2rem', fontStyle: 'italic' }}>"刷短视频你是矿，用 AI 你是矿工"</p>
          <div style={{ background: '#2D2416', padding: '2rem 2.5rem', maxWidth: 600, borderLeft: '3px solid #C9A227' }}>
            <p style={{ color: '#FAF8F3', fontSize: '1rem', lineHeight: 2 }}>
              短视频平台上，你的注意力是原材料，被算法挖掘、打包、卖给广告主。<br />
              <span style={{ color: '#C9A227' }}>你是矿。</span><br /><br />
              但如果你用 AI 来挖掘信息、提炼认知、封装工作流——<br />
              <span style={{ color: '#C9A227' }}>你是矿工。</span>
            </p>
          </div>
        </div>
      </div>

      <div style={{ padding: '4rem 3rem', maxWidth: 900, margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#2D2416', letterSpacing: '0.1em',
                      fontWeight: 500, marginBottom: '0.5rem' }}>AI 回答的三种命运</h3>
        <p style={{ color: 'rgba(45,36,22,0.55)', fontSize: '0.85rem', marginBottom: '2rem' }}>你现在处于哪一种？</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '4rem' }}>
          {fates.map((f, i) => (
            <div key={i} onClick={() => setFate(fate === i ? null : i)}
                 style={{ background: fate === i ? f.bg : '#fff',
                           border: `1px solid ${fate === i ? f.color : 'rgba(45,36,22,0.1)'}`,
                           padding: '1.5rem', cursor: 'pointer', transition: 'all 0.3s ease' }}>
              <div style={{ width: 10, height: 10, borderRadius: '50%', background: f.color, marginBottom: '1rem' }} />
              <h4 style={{ fontSize: '1.1rem', color: f.color, fontWeight: 500, marginBottom: '0.8rem' }}>{f.label}</h4>
              {fate === i
                ? <p style={{ color: 'rgba(45,36,22,0.7)', fontSize: '0.88rem', lineHeight: 1.9 }}>{f.desc}</p>
                : <p style={{ color: 'rgba(45,36,22,0.4)', fontSize: '0.8rem' }}>点击展开</p>}
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1.1rem', color: '#2D2416', letterSpacing: '0.1em',
                      fontWeight: 500, marginBottom: '0.5rem' }}>AI 时代三种核心能力</h3>
        <p style={{ color: 'rgba(45,36,22,0.55)', fontSize: '0.85rem', marginBottom: '2rem' }}>这三种能力，AI 无法替代你</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {abilities.map((a, i) => (
            <div key={i} className="ra-card"
                 style={{ display: 'flex', gap: '2rem', padding: '2rem', alignItems: 'flex-start' }}>
              <div style={{ width: 50, height: 50, background: 'rgba(201,162,39,0.1)',
                             display: 'flex', alignItems: 'center', justifyContent: 'center',
                             color: '#C9A227', flexShrink: 0 }}>{a.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem',
                               marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                  <h4 style={{ fontSize: '1.05rem', color: '#2D2416', fontWeight: 500 }}>{a.title}</h4>
                  <span style={{ fontSize: '0.7rem', color: '#C9A227', letterSpacing: '0.1em' }}>{a.en}</span>
                  <span className="ra-tag" style={{ marginLeft: 'auto', fontSize: '0.65rem' }}>{a.tag}</span>
                </div>
                <p style={{ color: 'rgba(45,36,22,0.65)', fontSize: '0.9rem', lineHeight: 1.9 }}>{a.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Chapter 04 ───────────────────────────────────────────────────────────────
const Ch04Page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const workflow = [
    { step: '01', title: '元提问', color: '#C9A227',
      desc: '不要直接问"帮我做X"。先想：我真正需要解决的问题是什么？这个问题的本质是什么？从这里出发，提出一个精准的元问题。',
      example: '❌ "帮我写一篇关于坚持的文章"\n✅ "我想让读者理解为什么大多数人的坚持会在21天后失败，核心原因是什么？请帮我梳理论点结构"' },
    { step: '02', title: '六轮追问', color: '#B8860B',
      desc: '第一个答案永远不够好。每次AI回答后，从不同角度追问6次：反例是什么？更极端的情况呢？换个视角呢？有什么遗漏？',
      example: '第1轮：初始问题\n第2轮：追问核心论点的证据\n第3轮：请举反例\n第4轮：换一个完全不同的框架\n第5轮：最重要的1个观点是什么\n第6轮：如果你是读者，最想看到什么' },
    { step: '03', title: '工具分工', color: '#8B6914',
      desc: '不同AI工具有不同的强项。要知道什么时候用什么工具——盲目用一个工具是在浪费。',
      example: 'GPT-4o  → 结构师：逻辑框架、提纲拆解、信息整合\nGemini  → 金句机：语言锤炼、表达打磨、文风调整\nClaude  → 文章导师：长文修改、论点深化、风格一致性' },
    { step: '04', title: '筛选重写', color: '#6B4F12',
      desc: 'AI输出的内容，70%以上需要被淘汰。你的品位在这一步发挥作用：哪些值得保留？哪些需要重写？哪些方向要放弃？',
      example: '筛选标准：\n□ 这个观点是真的吗？\n□ 这个表达是我的风格吗？\n□ 读者会因此受益还是反感？\n□ 有没有更准确的说法？' },
    { step: '05', title: '封装入库', color: '#4A3A0A',
      desc: '完成一次AI协作后，不要就此结束。把有价值的内容提炼成：可复用的Prompt模板、认知原则、工作流SOP——存入你的知识库。',
      example: '封装对象：\n→ 有效的Prompt结构（下次直接用）\n→ 值得重复的认知框架\n→ 某类任务的最优工作流\n→ 自己写的最好的表达（积累风格）' },
  ];
  const tools = [
    { name: 'GPT-4o', role: '结构师', color: '#10a37f',
      strengths: ['逻辑框架搭建', '信息整合归纳', '提纲拆解', '多角度分析'] },
    { name: 'Gemini', role: '金句机', color: '#4285f4',
      strengths: ['语言打磨', '金句提炼', '文风调整', '表达创意'] },
    { name: 'Claude', role: '文章导师', color: '#CC785C',
      strengths: ['长文修改润色', '论点深化', '风格一致性', '细节审校'] },
  ];

  return (
    <section style={{ background: '#F5F2EB', minHeight: '100vh' }}>
      <div className="ra-chapter-bg"
           style={{ background: 'linear-gradient(135deg,#F5F2EB 0%,#EDE5D0 100%)', padding: '6rem 3rem 4rem' }}>
        <div style={{ maxWidth: 800, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <p style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.4em', marginBottom: '1.2rem' }}>CHAPTER 04</p>
          <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,4vw,3.2rem)',
                        color: '#2D2416', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.3 }}>AI 使用方法</h2>
          <p style={{ fontSize: '1.2rem', color: '#8B6914', letterSpacing: '0.05em',
                       marginBottom: '2rem', fontStyle: 'italic' }}>从元提问到完整闭环</p>
        </div>
      </div>

      <div style={{ padding: '4rem 3rem', maxWidth: 900, margin: '0 auto' }}>
        <h3 style={{ fontSize: '1.1rem', color: '#2D2416', letterSpacing: '0.1em',
                      fontWeight: 500, marginBottom: '0.5rem' }}>完整工作流：五步闭环</h3>
        <p style={{ color: 'rgba(45,36,22,0.55)', fontSize: '0.85rem', marginBottom: '2rem' }}>点击每一步展开详解与示例</p>

        <div style={{ marginBottom: '4rem' }}>
          {workflow.map((w, i) => (
            <div key={i}>
              <div className="ra-flow-step"
                   onClick={() => setActiveStep(activeStep === i ? -1 : i)}
                   style={{ borderLeft: `3px solid ${activeStep === i ? w.color : 'transparent'}`,
                             background: activeStep === i ? 'rgba(201,162,39,0.03)' : '#fff' }}>
                <span style={{ color: w.color, fontSize: '0.75rem', letterSpacing: '0.2em',
                                 fontWeight: 600, width: 30, flexShrink: 0 }}>{w.step}</span>
                <span style={{ flex: 1, fontSize: '1rem', color: '#2D2416', fontWeight: 500 }}>{w.title}</span>
                {activeStep === i
                  ? <ChevronUp size={14} style={{ color: '#C9A227' }} />
                  : <ChevronDown size={14} style={{ color: 'rgba(45,36,22,0.3)' }} />}
              </div>
              {activeStep === i && (
                <div style={{ background: 'rgba(201,162,39,0.03)',
                               border: '1px solid rgba(201,162,39,0.15)', borderTop: 'none',
                               padding: '1.5rem 2rem', marginBottom: '0.6rem' }}>
                  <p style={{ color: 'rgba(45,36,22,0.7)', fontSize: '0.9rem',
                               lineHeight: 1.9, marginBottom: '1.2rem' }}>{w.desc}</p>
                  <div style={{ background: '#2D2416', padding: '1rem 1.4rem', borderLeft: '3px solid #C9A227' }}>
                    <p style={{ color: '#C9A227', fontSize: '0.7rem', marginBottom: '0.4rem' }}>示例</p>
                    <pre style={{ color: 'rgba(250,248,243,0.8)', fontSize: '0.82rem',
                                    lineHeight: 1.8, fontFamily: 'inherit', whiteSpace: 'pre-wrap', margin: 0 }}>
                      {w.example}
                    </pre>
                  </div>
                </div>
              )}
              {i < workflow.length - 1 && activeStep !== i && (
                <div className="ra-flow-arrow"><ChevronDown size={14} /></div>
              )}
            </div>
          ))}
        </div>

        <h3 style={{ fontSize: '1.1rem', color: '#2D2416', letterSpacing: '0.1em',
                      fontWeight: 500, marginBottom: '0.5rem' }}>工具分工表</h3>
        <p style={{ color: 'rgba(45,36,22,0.55)', fontSize: '0.85rem', marginBottom: '2rem' }}>盲目使用一个工具是在浪费它们的个性</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.2rem', marginBottom: '3rem' }}>
          {tools.map((t, i) => (
            <div key={i} className="ra-tool-card">
              <span className="ra-tool-badge" style={{ color: t.color, borderColor: t.color }}>{t.role}</span>
              <h4 style={{ fontSize: '1.1rem', color: '#2D2416', fontWeight: 600, marginBottom: '1rem' }}>{t.name}</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                {t.strengths.map((s, j) => (
                  <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <CheckCircle size={11} style={{ color: t.color, flexShrink: 0 }} />
                    <span style={{ fontSize: '0.82rem', color: 'rgba(45,36,22,0.7)' }}>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="ra-quote">
          方法论的本质，也是重复。<br />
          把这套闭环重复到你不需要思考就能自动执行，<br />
          AI 就真正变成了你的一部分。
        </div>
      </div>
    </section>
  );
};

// ── Outro ─────────────────────────────────────────────────────────────────────
const OutroPage = () => {
  const principles = [
    '你不缺道理，你缺把道理重复到身体里的系统',
    '重复不是机械循环，是螺旋上升',
    '原则是你的宪法，不是你的口号',
    '不归零，从现在的位置站起来',
    '刷短视频你是矿，用AI你是矿工',
    '元提问 → 六轮追问 → 工具分工 → 筛选重写 → 封装入库',
    '封装，是让能力不归零的唯一方式',
  ];
  return (
    <section style={{ minHeight: '100vh', background: '#140E06', color: '#FAF8F3',
                       display: 'flex', flexDirection: 'column', justifyContent: 'center',
                       alignItems: 'center', textAlign: 'center', position: 'relative',
                       overflow: 'hidden', padding: '6rem 3rem' }}>
      <div style={{ position: 'absolute', inset: 0,
                     background: 'radial-gradient(ellipse at center,rgba(201,162,39,0.08) 0%,transparent 60%)' }} />
      <div style={{ maxWidth: 700, position: 'relative', zIndex: 1, width: '100%' }}>
        <p style={{ color: 'rgba(201,162,39,0.5)', fontSize: '0.7rem', letterSpacing: '0.5em', marginBottom: '2rem' }}>
          FINALE
        </p>
        <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(2rem,5vw,3.5rem)',
                      color: '#FAF8F3', fontWeight: 400, marginBottom: '1rem', lineHeight: 1.3 }}>
          把它重复到身体里
        </h2>
        <p style={{ color: 'rgba(201,162,39,0.7)', fontSize: '1rem', letterSpacing: '0.1em',
                     marginBottom: '4rem', fontStyle: 'italic' }}>直到它成为你的气质</p>

        <div style={{ width: '100%', marginBottom: '4rem', textAlign: 'left' }}>
          {principles.map((p, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1.2rem',
                                    padding: '1rem 0', borderBottom: '1px solid rgba(201,162,39,0.1)' }}>
              <span style={{ color: '#C9A227', fontSize: '0.7rem', letterSpacing: '0.2em',
                               marginTop: '0.15rem', flexShrink: 0 }}>{String(i+1).padStart(2,'0')}</span>
              <p style={{ color: 'rgba(250,248,243,0.75)', fontSize: '0.95rem', lineHeight: 1.8 }}>{p}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: '2.5rem', border: '1px solid rgba(201,162,39,0.3)',
                       textAlign: 'center', marginBottom: '3rem' }}>
          <p style={{ color: 'rgba(250,248,243,0.4)', fontSize: '0.75rem',
                       letterSpacing: '0.3em', marginBottom: '1rem' }}>CORE SENTENCE</p>
          <p style={{ color: '#FAF8F3', fontSize: 'clamp(1rem,2vw,1.3rem)', lineHeight: 2, letterSpacing: '0.05em' }}>
            把一个道理重复到身体里，
          </p>
          <p style={{ color: '#C9A227', fontSize: 'clamp(1rem,2vw,1.3rem)', lineHeight: 2, letterSpacing: '0.05em' }}>
            它才会变成你的人生。
          </p>
        </div>

        <p style={{ color: 'rgba(250,248,243,0.2)', fontSize: '0.7rem', letterSpacing: '0.3em' }}>
          REPEAT · AI · ENCAPSULATE · NO RESET
        </p>
      </div>
    </section>
  );
};

// ── App (root) ────────────────────────────────────────────────────────────────
export default function App() {
  const [entered, setEntered] = useState(false);
  const [activePage, setActivePage] = useState('directory');
  const mainRef = useRef(null);

  const handleNav = (id) => {
    setActivePage(id);
    mainRef.current?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (activePage) {
      case 'directory': return <DirectoryPage onNav={handleNav} />;
      case 'ch01':      return <Ch01Page />;
      case 'ch02':      return <Ch02Page />;
      case 'ch03':      return <Ch03Page />;
      case 'ch04':      return <Ch04Page />;
      case 'outro':     return <OutroPage />;
      default:          return <DirectoryPage onNav={handleNav} />;
    }
  };

  return (
    <>
      {/* GlobalStyles is always mounted — CSS never disappears */}
      <GlobalStyles />

      {!entered ? (
        <LandingPage onEnter={() => setEntered(true)} />
      ) : (
        <div className="ra-app">
          <Sidebar active={activePage} onNav={handleNav} />
          <main ref={mainRef} className="ra-main">
            {renderPage()}
          </main>
        </div>
      )}
    </>
  );
}
