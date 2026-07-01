import React from 'react'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { glassCard, SH } from '../utils/SectionHead'
import { COLOURS as C } from '../constants/colors'
const Projects = () => {
    const PROJECTS = [
        {
            title: "Civil Aquire",
            emoji: <i className="fa-solid fa-building-columns"></i>,
            desc: "A construction services platform that streamlines project estimation, 2D/3D visualization, interior design requests, and client management through an intuitive, responsive interface.",
            tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Bootstrap",],
            accent: C.em,
            year: "2025",
        },
        {
            title: "LevelUp Learn",
            emoji: <i className="fa-solid fa-arrow-trend-up"></i>,
            desc: "An interactive learning platform featuring gamified quizzes, progress tracking, and engaging educational experiences designed to make learning more effective.",
            tags: ["React", "Bootstrap", "Node.js", "MongoDB",],
            accent: C.cy,
            year: "2025",
        },
        {
            title: "Ludo Pixel",
            emoji: <i className="fa-solid fa-dice"></i>,
            desc: "A responsive digital Ludo game with smooth gameplay, interactive UI, and optimized performance across desktop and mobile devices.",
            tags: ["HTML", "JavaScript", "CSS", "JQuery"],
            accent: "#7c3aed",
            year: "2025",
        },
        {
            title: "Selfie Attendance System",
            emoji: <i className="fa-solid fa-map-location-dot"></i>,
            desc: "A location-aware attendance system that verifies users through QR scanning, selfie capture, and geolocation to ensure secure and accurate attendance tracking.",
            tags: ["React", "Node.js", "MongoDB",],
            //  "OpenCage API"
            accent: C.amber,
            year: "2025",
        },
    ];
    return (
        <div id="projects" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SH label="Featured Work" title={<>Selected <span className="shimmer-em">Projects</span></>} sub="Things I've built with care" />
                <div className='grid grid-cols-2 gap-4.5'>
                    {PROJECTS.map((project, index) => (
                        <Reveal key={project.title} delay={index * .1}>
                            <TiltCard intensity={10} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover h-full p-7 rounded-[22px]">
                                <div className='absolute top-0 left-0 right-0 h-0.5' style={{ background: `linear-gradient(90deg,${project.accent},${project.accent}44,transparent)` }} />
                                <div className='absolute -top-12.5 -right-12.5 rounded-full w-32.5 h-32.5 opacity-[0.07]' style={{ background: project.accent, filter: "blur(50px)" }} />

                                <div className='flex justify-between items-start mb-3.5'>
                                    <span className='text-[36px]' >{project.emoji}</span>
                                    <div className='flex items-center gap-1.5 rounded-full py-1 px-3' style={{ background: "rgba(255,255,255,.04)" }}>
                                        <span className='text-[11px]' style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}>{project.year}</span>
                                    </div>
                                </div>
                                <h3 className='text-[20px] font-extrabold mb-2.5' style={{ fontFamily: "'Space Grotesk',sans-serif", color: C.text }}>{project.title}</h3>
                                <p className='text-[13.5px] leading-[1.8] mb-4.5 ' style={{ color: C.mute }}>{project.desc}</p>
                                <div className='flex flex-wrap gap-1.75 mb-5.5'>
                                    {project.tags.map(t => <span key={t} className="tag-pill">{t}</span>)}
                                </div>
                                <div className='flex gap-4.5 pt-4' style={{ borderTop: `1px solid ${C.border}` }}>
                                    <a className='flex items-center font-semibold text-[13px] no-underline' href="#" style={{ color: C.em, gap: 5, transition: "gap .2s" }}
                                        onMouseEnter={e => e.currentTarget.style.gap = "8px"} onMouseLeave={e => e.currentTarget.style.gap = "5px"}>
                                        GitHub <i className="fa-solid fa-arrow-right-long"></i>
                                    </a>
                                    <a className='font-medium text-[13px] no-underline' href="#"
                                        style={{ color: C.muted, transition: "color .2s" }}
                                        onMouseEnter={e => e.currentTarget.style.color = C.text} onMouseLeave={e => e.currentTarget.style.color = C.muted}>
                                        Live Demo <i className="fa-solid fa-arrow-up fa-rotate-by rotate-45 font-extralight fa-sm"></i>
                                    </a>
                                </div>
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Projects