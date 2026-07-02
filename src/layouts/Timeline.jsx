import React from 'react'
import Reveal from '../components/Reveal'
import { glassCard } from '../utils/utilityFunctions'
import { COLOURS as C } from '../constants/colors'
import TiltCard from '../components/TiltCard'
import SectionHead from '../components/SectionHead'

const Timeline = () => {
    const TIMELINE = [
        {
            type: "work", role: "Junior Full Stack Developer (MERN)", org: "Euphoricoder Pvitem. Ltd.",
            period: "June 2025 – Present", color: C.cy,
            description: "Delivered 5+ client sites with React & Tailwind CSS, achieving Lighthouse scores above 95.",
            chips: ["5+ clients", "Lighthouse 95+", "On-time delivery"]
        },
        {
            type: "work", role: "MERN Stack Developer Intern", org: "Luminar Technolab",
            period: "September 2024 – April 2025", color: C.em,
            description: "Built scalable REST APIs, animated React UIs, and integrated Stripe & Razorpay payment gateways.",
            chips: ["API latency ↓40%", "3 projects shipped", "OAuth & Stripe"]
        },
        {
            type: "edu", role: "M.Sc — Computer Science", org: "University of Calicut, Kerala",
            period: "2022 – 2024", color: C.cy,
            description: "Coursework in DSA, web tech and software engineering. Led the Web Dev Club; final project: real-time Collab IDE.",
            chips: ["CGPA 8.4", "Web Dev Club Lead", "Collab IDE project"]
        },
        {
            type: "edu", role: "B.Sc — Computer Science", org: "University of Calicut, Kerala",
            period: "2019 – 2022", color: "#7c3aed",
            description: "Coursework in DSA, web tech and software engineering. Led the Web Dev Club; final project: real-time Collab IDE.",
            chips: ["CGPA 8.4", "Web Dev Club Lead", "Collab IDE project"]
        },
        {
            type: "edu", role: "Higher Secondary — Computer Science", org: "Kerala State Board",
            period: "2017 – 2019", color: C.amber,
            description: "Graduated with 95% aggregate, district rank in CS — and shipped my first-ever web projecitem.",
            chips: ["95% aggregate", "District rank CS", "First web project"]
        },
    ];

    const TIMELINE_LEGEND = [
        [<i className="fa-solid fa-briefcase"></i>, "Work", "rgba(16,185,129,.15)", "rgba(16,185,129,.3)", C.em],
        [<i className="fa-solid fa-graduation-cap"></i>, "Education", "rgba(124,58,237,.15)", "rgba(124,58,237,.3)", "#a78bfa"]
    ];

    return (
        <div id="timeline" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SectionHead label="My Journey" title={<>Experience & <span className="shimmer-em">Education</span></>} sub="Work history and academic milestones, unified" />
                {/* legend */}
                <Reveal>
                    <div className='flex flex-wrap gap-3 mb-11'>
                        {TIMELINE_LEGEND.map(([icon, label, bg, borderColor, textColour]) => (
                            <div key={label} className='flex items-center gap-1.75 rounded-full py-1.25 px-4' style={{ background: bg, border: `1px solid ${borderColor}` }}>
                                <span className='text-[13px]' style={{ color: textColour }}>{icon}</span>
                                <span className='font-semibold text-[12px]' style={{ color: textColour }}>{label}</span>
                            </div>
                        ))}
                    </div>
                </Reveal>

                <div style={{ position: "relative" }}>
                    {/* line */}
                    <div className='absolute w-[1.5px] left-5.5 top-2 bottom-2' style={{ background: `linear-gradient(to bottom,${C.em},rgba(124,58,237,.5),transparent)` }} />

                    <div className='flex flex-col gap-7'>
                        {TIMELINE.map((item, index) => (
                            <Reveal key={item.role} delay={index * .12}>
                                <div className='flex gap-6'>
                                    {/* dot */}
                                    <div className='shrink-0 pt-4.5 relative z-1'>
                                        <div className='w-11.5 h-11.5 rounded-full flex items-center justify-center text-[18px]' style={{ ...glassCard(), border: `1.5px solid ${item.color}55`, boxShadow: `0 0 20px ${item.color}33` }}>
                                            {item.type === "edu" ? <i className="fa-solid fa-graduation-cap" style={{ color: item.color }}></i> : <i className="fa-solid fa-briefcase"></i>}
                                        </div>
                                        <div className='absolute -inset-1 rounded-full' style={{ border: `1px solid ${item.color}22`, animation: "pulseRing 3s ease-out infinite", animationDelay: `${index * .5}s` }} />
                                    </div>

                                    {/* card */}
                                    <TiltCard intensity={6} style={{ flex: 1, ...glassCard(), border: `1px solid ${C.border}`, borderLeft: `2px solid ${item.color}44` }} className="card-hover p-6 rounded-[20px]">
                                        <div className='absolute -top-7.5 -right-7.5 w-[20] h-[20] rounded-full opacity-6' style={{ background: item.color, filter: "blur(35px)" }} />

                                        <div className='flex justify-between items-start flex-wrap gap-2 mb-1.5 '>
                                            <div>
                                                <h3 className='font-bold text-[16px] mb-0.75' style={{ fontFamily: "'Space Grotesk',sans-serif", color: C.text }}>{item.role}</h3>
                                                <p className='text-[13px] font-semibold' style={{ color: item.color }}>{item.org}</p>
                                            </div>
                                            <div className='flex shrink-0 gap-2 flex-wrap'>
                                                <span className='rounded-full px-3 py-0.75 text-[11px]' style={{ background: "rgba(255,255,255,.04)", border: `1px solid ${C.border}`, color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{item.period}</span>
                                                <span className='rounded-full  text-[11px] py-0.75 px-2.5' style={{ background: item.type === "edu" ? "rgba(124,58,237,.12)" : C.emSoft, border: `1px solid ${item.color}33`, color: item.color }}>{item.type === "edu" ? "Education" : "Work"}</span>
                                            </div>
                                        </div>

                                        <p className='text-[13.5px] leading-[1.8] mb-3.5' style={{ color: C.muted }}>{item.description}</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {item.chips.map(c => (
                                                <span key={c} className="chip" style={{ background: `${item.color}10`, border: `1px solid ${item.color}28`, color: item.color }}>
                                                    <span style={{ fontSize: 10 }}>✓</span>{c}
                                                </span>
                                            ))}
                                        </div>
                                    </TiltCard>
                                </div>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Timeline