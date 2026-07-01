import React from 'react'
import TiltCard from '../components/TiltCard'
import Reveal from '../components/Reveal'
import { COLOURS as C } from '../constants/colors'
import { glassCard, SH } from '../utils/SectionHead'

const About = () => {
    return (
        <div id="about" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SH label="About me" title={<>Who I <span className="shimmer-em">Am</span></>} />
                <div className='grid items-stretch gap-6 grid-cols-2'>

                    {/* left — bio bento */}
                    <Reveal delay={.1}>
                        <TiltCard intensity={6} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover h-full p-8 rounded-[22px]">
                            <div className='absolute top-0 left-0 right-0 h-0.5' style={{ background: `linear-gradient(90deg,${C.em},${C.cy},transparent)` }} />
                            <p className='mb-5 text-[14.5px] text-[#94a3b8] leading-[1.95]'>
                                I'm <strong style={{ color: C.text }}>Ardra M S</strong>, a Full-Stack Developer passionate about building responsive, scalable, and user-focused web applications. From intuitive front-end experiences to secure back-end services, I enjoy turning ideas into modern digital solutions.
                            </p>

                            <p className='leading-[1.9] text-[14px] mb-7' style={{ color: C.muted }}>
                                I'm passionate about continuous learning, writing quality code, and building applications that balance performance, usability, and maintainability.
                            </p>
                            <div className=' mb-7 flex gap-2.5 flex-wrap'>
                                {["Problem Solver", "Clean Code", "Performance First", "Open Source"].map(t => (
                                    <span className='text-[12px] py-1.25 px-3.5 rounded-full font-medium' key={t} style={{ ...{}, background: C.emSoft, border: `1px solid rgba(16,185,129,.2)`, color: C.em }}>{t}</span>
                                ))}
                            </div>
                            <button className="glow-em">Download Resume <i className="fa-solid fa-arrow-down"></i></button>
                        </TiltCard>
                    </Reveal>

                    {/* right — bento mini grid */}
                    <div className='grid grid-cols-2 grid-rows-2 gap-3.5' >
                        {[
                            { icon: <i className="fa-solid fa-map-pin"></i>, k: "Location", v: "Kerala, India", accent: C.em },
                            { icon: <i className="fa-solid fa-graduation-cap"></i>, k: "Degree", v: "MS. Computer Science", accent: C.cy },
                            { icon: <i className="fa-solid fa-briefcase"></i>, k: "Status", v: "Open to Work", accent: "#a78bfa" },
                            { icon: <i className="fa-solid fa-globe"></i>, k: "Stack", v: "MERN · TypeScript", accent: C.amber },
                        ].map(({ icon, k, v, accent }, i) => (
                            <Reveal key={k} delay={.12 + i * .08}>
                                <TiltCard intensity={10} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover h-full p-5 rounded-[18px]">
                                    <div className={`mb-2.5 text-[26px]`} style={{ color: accent }}>{icon}</div>
                                    <div className='font-medium text-[11px] mb-1 tracking-[0.5]' style={{ color: C.muted }}>{k.toUpperCase()}</div>
                                    <div className='text-[15px] font-bold' style={{ color: C.text, fontFamily: "'Space Grotesk',sans-serif" }}>{v}</div>
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