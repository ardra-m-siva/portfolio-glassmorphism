import { useCallback, useEffect, useRef, useState } from 'react';
import './App.css'
import CursorGlow from './components/CursorGlow'
import { COLOURS as C } from './constants/colors'
import { useInView } from './hooks/useInView';
import Reveal from './components/Reveal';
import TiltCard from './components/TiltCard';
import Photo from './assets/ardra.png'
import About from './layouts/About';
import Skills from './layouts/Skills';
import Projects from './layouts/Projects';
import Timeline from './layouts/Timeline';
import GitHub from './layouts/GitHub';
import Contact from './layouts/Contact';
import Footer from './layouts/Footer';
import Header from './layouts/Header';
import { glassCard, navItems } from './utils/SectionHead';
import Typewriter from './components/Typewriter';
import { useScroll } from './hooks/useScroll';

function App() {
  const [activeNav, setActiveNav] = useState("Home");
  const scrollY = useScroll();

  useEffect(() => {
    const h = () => {
      const sy = window.scrollY + 100;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].toLowerCase());
        if (el && sy >= el.offsetTop) { setActiveNav(navItems[i]); break; }
      }
    };
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  /* ══════════ DATA ══════════ */
  const BENTO_STATS = [
    { value: "1+", label: "Years of Experience", icon: <i className="fa-regular fa-calendar"></i>, span: 1 },
    { value: "5+", label: "Projects Shipped", icon: <i className="fa-solid fa-rocket"></i>, span: 1 },
    { value: "15+", label: "Technologies", icon: <i className="fa-solid fa-gear"></i>, span: 1 },
    { value: "100+", label: "Learning Mindset", icon: <i className="fa-solid fa-book-open"></i>, span: 1 },
  ];

  /* ══════════ STAR FIELD ══════════ */
  function Stars() {
    const pts = useRef([]);
    if (!pts.current.length) {
      for (let i = 0; i < 180; i++)
        pts.current.push({ x: Math.random() * 100, y: Math.random() * 100, s: Math.random() * 1.6 + .2, o: Math.random() * .5 + .1, d: Math.random() * 4 + 1.5 });
    }
    return (
      <div className='absolute pointer-events-none inset-0'>
        {pts.current.map((p, index) =>
          <div key={index} className='absolute rounded-full bg-[#ffff]' style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s, opacity: p.o, animation: `starBlink ${p.d}s ease-in-out ${index * .03}s infinite alternate` }} />
        )}
      </div>
    );
  }

  /* ══════════ FLOATING ORBS ══════════ */
  function Orbs({ scrollY }) {
    return (
      <div className='absolute inset-0 overflow-hidden pointer-events-none' >
        <div className='absolute rounded-full left-[-5%] w-125 h-125 opacity-10' style={{ top: `calc(-10% + ${scrollY * .12}px)`, background: C.em, filter: "blur(110px)", animation: "orbFloat 8s ease-in-out infinite alternate" }} />
        <div className='absolute rounded-full right-[-8%] w-105 h-105 opacity-8' style={{ top: `calc(40% + ${scrollY * .08}px)`, background: C.cy, filter: "blur(100px)", animation: "orbFloat 11s ease-in-out infinite alternate", animationDelay: "3s" }} />
        <div className='absolute rounded-full left-[30%] w-90 h-90 opacity-7' style={{ bottom: `calc(-5% - ${scrollY * .05}px)`, background: C.violet, filter: "blur(100px)", animation: "orbFloat 9s ease-in-out infinite alternate", animationDelay: "1.5s" }} />
      </div>
    );
  }

  /* ══════════ ANIMATED GRID BG ══════════ */
  function GridBg({ scrollY }) {
    return (
      <div className='absolute inset-0 overflow-hidden pointer-events-none'>
        <div className='absolute inset-0' style={{ backgroundImage: `linear-gradient(${C.border} 1px,transparent 1px),linear-gradient(90deg,${C.border} 1px,transparent 1px)`, backgroundSize: "70px 70px", transform: `translateY(${scrollY * .08}px)`, maskImage: "radial-gradient(ellipse 80% 60% at 50% 40%,black,transparent)" }} />
      </div>
    );
  }


  return (
    <div className='min-h-screen overflow-x-hidden main-container'>
      <CursorGlow />

      {/* navbar */}
      <Header activeNav={activeNav} setActiveNav={setActiveNav} />

      {/* ═══════════════════════════════════
          HERO — BENTO GRID LAYOUT
      ═══════════════════════════════════ */}

      <div id="home" className='min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-15' >
        <Stars />
        <Orbs scrollY={scrollY} />
        <GridBg scrollY={scrollY} />

        <div className='relative z-1 mx-auto w-full max-w-275 pt-12 md:pr-6 pb-20'>
          {/* TOP ROW — intro text + avatar bento */}
          <div className='grid mb-5 gap-5 grid-cols-1 md:grid-cols-[1fr_380px]'>

            {/* Main intro card */}
            <Reveal delay={0}>
              <TiltCard intensity={8} style={{ ...glassCard(), border: `1px solid ${C.border}`, animation: "bentoIn .7s ease both" }} className='h-full rounded-3xl pt-11 pb-9 px-11'>
                {/* scanline overlay */}
                <div className='absolute inset-0 pointer-events-none' style={{ background: `repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(255,255,255,.008) 2px,rgba(255,255,255,.008) 4px)`, borderRadius: "inherit" }} />

                <div className='inline-flex items-center gap-2 rounded-full py-1.25 px-4 mb-7' style={{ background: C.emSoft, border: `1px solid rgba(16,185,129,.2)` }}>
                  <div className='w-1.25 h-1.25 rounded-full' style={{ background: C.em, boxShadow: `0 0 8px ${C.em}` }} />
                  <span className='uppercase font-semibold text-[11px] tracking-[3px]' style={{ color: C.em, fontFamily: "'JetBrains Mono',monospace" }}>Available</span>
                </div>

                <h1 className='font-black mb-4.5 tracking-[-1px] leading-[1.05]' style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(36px,5.5vw,62px)" }}>
                  Hi, I'm<br />
                  <span className="shimmer-em">Ardra M S</span>
                </h1>

                <div className='min-h-8 mb-6' style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "clamp(15px,2vw,20px)", color: C.muted }}>
                  <span style={{ color: C.cy }}>const</span> <span style={{ color: C.em }}>dev</span> <span style={{ color: C.muted }}>=</span>{" "}
                  <span className='text-[#f1f5f9]'>"<Typewriter words={["MERN Stack Developer", "Full-Stack Developer", "React Developer", "Backend Engineer"]} />"</span>
                </div>

                <p className='text-[15px] max-w-140 leading-[1.85] mb-9' style={{ color: C.muted }}>
                  Passionate about crafting modern web applications that balance performance, scalability, and user experience. I enjoy solving complex problems, writing maintainable code, and continuously expanding my knowledge of emerging web technologies.
                </p>

                <div className='flex flex-wrap gap-3'>
                  <button className="glow-em" onClick={() => go("Projects")}>View My Work <i className="fa-solid fa-arrow-right"></i></button>
                  <button className="ghost-btn" onClick={() => go("Contact")}>Let's Talk</button>
                </div>
              </TiltCard>
            </Reveal>

            {/* Avatar bento card */}
            <Reveal delay={0.15}>
              <TiltCard intensity={12} style={{ ...glassCard(), border: `1px solid ${C.border}`, animation: "bentoIn .7s .1s ease both" }} className='p-0 h-full overflow-hidden rounded-3xl min-h-85'>
                {/* gradient bg */}
                <div className='absolute inset-0' style={{ background: `radial-gradient(circle at 60% 30%,rgba(16,185,129,.12),transparent 65%),radial-gradient(circle at 20% 80%,rgba(6,182,212,.08),transparent 55%)` }} />
                <div className='absolute inset-0' style={{ backgroundImage: `linear-gradient(rgba(255,255,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.03) 1px,transparent 1px)`, backgroundSize: "24px 24px" }} />

                {/* rotating outer ring */}
                <div className='absolute top-[45%] left-[45%] w-60 h-60 rounded-full -mt-25 -ml-25' style={{ border: `1px dashed rgba(16,185,129,.25)`, animation: "spinRing 20s linear infinite" }}>
                  {[0, 90, 180, 270].map(deg => <div key={deg} className='absolute top-[50%] left-[50%] w-2 h-2 rounded-full' style={{ transform: `rotate(${deg}deg) translateX(120px) translateY(-50%)`, background: C.em, boxShadow: `0 0 10px ${C.em}` }} />)}
                </div>

                {/* avatar */}
                <div className='absolute top-1/2 left-1/2 h-50 w-50 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full' style={{ background: `linear-gradient(135deg,rgba(16,185,129,.2),rgba(6,182,212,.15))`, border: `2px solid rgba(16,185,129,.3)`, animation: "floatAvatar 5s ease-in-out infinite", boxShadow: `0 0 40px rgba(16,185,129,.2),inset 0 0 20px rgba(16,185,129,.05)` }}>
                  {/* my photo */}
                  <img src={Photo} className="h-full w-full rounded-full object-cover" alt="Ardra M S - Full Stack Developer" />
                  <div className='rounded-full absolute justify-center items-center -inset-8' style={{ border: `1px solid rgba(16,185,129,.15)`, animation: "pulseRing 2.5s ease-out infinite" }} />
                </div>

                {/* location badge */}
                <div className='absolute bottom-5 left-[50%] rounded-full flex items-center whitespace-nowrap py-1.75 px-4.5 gap-2' style={{ transform: "translateX(-50%)", background: "rgba(8,12,16,.8)", backdropFilter: "blur(12px)", border: `1px solid ${C.border}`, }}>
                  <span className='text-[14px]'><i className="fa-solid fa-map-pin text-red-400"></i></span>
                  <span className='text-[12px]' style={{ color: C.muted }}>Kerala, India</span>
                </div>
              </TiltCard>
            </Reveal>
          </div>

          {/* BOTTOM ROW — stat bento cards */}
          <div className='grid grid-cols-4 gap-3.5'>
            {BENTO_STATS.map((stats, index) => (
              <Reveal key={stats.label} delay={.25 + index * .07}>
                <TiltCard intensity={10} style={{ ...glassCard(), border: `1px solid ${C.border}`, animation: `bentoIn .6s ${.3 + index * .08}s ease both` }} className="card-hover py-5 px-5.5 rounded-[18px]">
                  <div className='flex justify-between items-start mb-2'>
                    <span className='text-[22px]'>{stats.icon}</span>
                    <div className='w-1.5 h-1.5 rounded-full opacity-60' style={{ background: C.em, }} />
                  </div>
                  <div className='text-[30px] font-extrabold leading-none' style={{ fontFamily: "'Space Grotesk',sans-serif", color: C.em, }}>{stats.value}</div>
                  <div className='font-semibold mb-1.5 text-[12px]' style={{ color: C.muted }}>{stats.label}</div>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* scroll hint */}
        <div className='absolute left-1/2 bottom-3 flex flex-col items-center z-1 -translate-x-1/2 gap-1.5 '>
          <span className='text-[10px] tracking-[3px]' style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}>scroll</span>
          <div className='h-10 w-px animate-[orbFloat_1.5s_ease-in-out_infinite_alternate]' style={{ background: `linear-gradient(to bottom,${C.em},transparent)` }} />
        </div>
      </div>

      <About />
      <Skills />
      <Projects />
      <Timeline />
      <GitHub />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
