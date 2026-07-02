import React from 'react'
import TiltCard from '../components/TiltCard'
import Reveal from '../components/Reveal'
import { COLOURS as C } from '../constants/colors'
import { glassCard } from '../utils/utilityFunctions'
import Resume from '../assets/ardrams-resume.pdf'
import SectionHead from '../components/SectionHead'

const About = () => {
    const ABOUT_CARDS = [
        { icon: <i className="fa-solid fa-map-pin"></i>, title: "Based In", value: "Kerala, India", accent: C.em },
        { icon: <i className="fa-solid fa-graduation-cap"></i>, title: "Education", value: "M.Sc Computer Science", accent: C.cy },
        { icon: <i className="fa-solid fa-briefcase"></i>, title: "Availability", value: "Open to Work", accent: "#a78bfa" },
        { icon: <i className="fa-solid fa-earth-americas"></i>, title: "Tech Stack", value: "MERN · TypeScript", accent: C.amber },
    ];

    const ABOUT_HIGHLIGHTS = [
        "Problem Solving",
        "Scalable Architecture",    
        "Clean Code",
        "Responsive Design",
    ];

    return (
        <div id="about" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SectionHead label="About me" title={<>Who I <span className="shimmer-em">Am</span></>} />
                <div className='grid items-stretch gap-6 grid-cols-2'>

                    {/* left — bio bento */}
                    <Reveal delay={.1}>
                        <TiltCard intensity={6} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover h-full p-8 rounded-[22px] ">
                            {/* hover:-translate-y-1 hover:transition-all hover:duration-300 */}
                            <div className='absolute top-0 left-0 right-0 h-0.5' style={{ background: `linear-gradient(90deg,${C.em},${C.cy},transparent)` }} />
                            <p className='mb-5 text-[14.5px] text-[#94a3b8] leading-[1.95]'>
                                I'm <strong style={{ color: C.text }}>Ardra M S</strong>, a Full-Stack Developer specializing in the MERN stack. I enjoy crafting modern web applications that combine clean user interfaces, scalable back-end architecture, and seamless user experiences.
                            </p>

                            <p className='leading-[1.9] text-[14px] mb-7' style={{ color: C.muted }}>
                                I enjoy solving real-world problems with clean architecture and thoughtful UI design. My focus is building fast, scalable, and maintainable applications that users genuinely enjoy using.
                            </p>
                            <div className=' mb-7 flex gap-2.5 flex-wrap'>
                                {ABOUT_HIGHLIGHTS.map(highlight => (
                                    <span className='text-[12px] py-1.25 px-3.5 rounded-full font-medium' key={highlight} style={{ ...{}, background: C.emSoft, border: `1px solid rgba(16,185,129,.2)`, color: C.em }}>{highlight}</span>
                                ))}
                            </div>
                            <button onClick={() => window.open(Resume, "_BLANK")} className="glow-em">View Resume <i className="fa-solid fa-arrow-up-right-from-square  "></i></button>
                            {/* transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 */}
                        </TiltCard>
                    </Reveal>

                    {/* right — bento mini grid */}
                    <div className='grid grid-cols-2 grid-rows-2 gap-3.5' >
                        {ABOUT_CARDS.map(({ icon, title, value, accent }, index) => (
                            <Reveal key={title} delay={.12 + index * .08}>
                                <TiltCard intensity={10} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover h-full p-5 rounded-[18px]">
                                    <div className={`mb-2.5 text-[26px]`} style={{ color: accent }}>{icon}</div>
                                    <div className='font-medium text-[11px] mb-1 tracking-[0.5]' style={{ color: C.muted }}>{title.toUpperCase()}</div>
                                    <div className='text-[15px] font-bold' style={{ color: C.text, fontFamily: "'Space Grotesk',sans-serif" }}>{value}</div>
                                    <div className='absolute bottom-0 right-0 rounded-full w-15 h-15 opacity-[0.12]' style={{ background: accent, filter: "blur(30px)" }} />
                                </TiltCard>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About