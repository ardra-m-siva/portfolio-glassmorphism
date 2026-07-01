import React from 'react'
import { glassCard, SH } from '../utils/SectionHead';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { COLOURS as C } from '../constants/colors';
const Contact = () => {
    const contactOptions = [
        [<i className="fa-solid fa-location-dot"></i>, "Location", "Kerala, India"],
        [<i className="fa-brands fa-github"></i>, "GitHub", "www.github.com/ardra-m-siva", "https://github.com/ardra-m-siva"],
        [<i className="fa-brands fa-square-linkedin"></i>, "LinkedIn", "www.linkedin.com/in/ardra-m-sivakumaran", "https://www.linkedin.com/in/ardra-m-sivakumaran/"]
    ]
    return (
        <div id="contact" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SH label="Get in touch" title={<>Let's <span className="shimmer-em">Connect</span></>} sub="Let's connect, collaborate, and create." />
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1.45fr] gap-4 sm:gap-5">
                    <Reveal delay={.1}>
                        <div className='flex flex-col gap-3 sm:gap-3.5 h-full'>
                            <div className='p-6 flex-1 rounded-[20px] hidden md:block' style={{ ...glassCard(), border: `1px solid ${C.border}` }}>
                                <p className='mb-0 text-[14.5px] leading-[1.9]' style={{ color: C.muted }}>
                                    Great ideas start with great conversations. Whether you have a project in mind, an opportunity to explore, or simply want to connect, I'd love to hear from you and see what we can build together.
                                </p>
                            </div>
                            {contactOptions.map(([icon, k, v, url]) => (
                                <TiltCard key={k} intensity={8} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover flex items-center cursor-pointer gap-3.5 py-3.5 px-4.5 rounded-2xl" onClick={() => url && window.open(url, "_blank", "noopener,noreferrer")}>
                                    <span className='text-[20px]'>{icon}</span>
                                    <div>
                                        <div className='mb-0.5 text-[11px]' style={{ color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{k}</div>
                                        <div className='font-medium text-[13.5px] text-[#94a3b8]'>{v}</div>
                                    </div>
                                </TiltCard>
                            ))}
                        </div>
                    </Reveal>

                    <Reveal delay={.2}>
                        <div className='h-full rounded-[22px] p-6 sm:p-8' style={{ ...glassCard(), border: `1px solid ${C.border}` }}>
                            <div className='absolute top-0 left-0 right-0 h-0.5' style={{ background: `linear-gradient(90deg,${C.em},${C.cy},transparent)` }} />
                            <div className='flex flex-col gap-4'>
                                <div className='grid grid-cols-2 gap-3.5'>
                                    {[["Name", "Your name"], ["Email", "your@email.com"]].map(([f, ph]) => (
                                        <div key={f}>
                                            <label className='text-[11px] mb-1.75 tracking-[0.5px] block' style={{ color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{f.toUpperCase()}</label>
                                            <input className='w-full text-[14px] rounded-xl outline-none py-2.75 px-3.5' placeholder={ph} style={{ background: "rgba(255,255,255,.03)", border: `1px solid ${C.border}`, color: C.text, fontFamily: "inherit", transition: "border-color .2s,box-shadow .2s" }}
                                                onFocus={e => { e.target.style.borderColor = C.em; e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,.1)`; }}
                                                onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }} />
                                        </div>
                                    ))}
                                </div>
                                {[["Subject", "Project inquiry · collaboration · just hello"], ["Message", ""]].map(([f, ph]) => (
                                    <div key={f}>
                                        <label className='block text-[11px] tracking-[0.5px] rounded-[7px] mb-1.75' style={{ color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{f.toUpperCase()}</label>
                                        {f === "Message"
                                            ? <textarea className='w-full rounded-xl py-2.75 px-3.5 text-[14px] outline-none' rows={5} placeholder="Tell me about your project or idea..." style={{ background: "rgba(255,255,255,.03)", border: `1px solid ${C.border}`, color: C.text, fontFamily: "inherit", resize: "none", transition: "border-color .2s,box-shadow .2s" }}
                                                onFocus={e => { e.target.style.borderColor = C.em; e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,.1)`; }}
                                                onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }} />
                                            : <input className='w-full rounded-xl py-2.75 px-3.5 text-[14px] outline-none' placeholder={ph} style={{ background: "rgba(255,255,255,.03)", border: `1px solid ${C.border}`, color: C.text, fontFamily: "inherit", transition: "border-color .2s,box-shadow .2s" }}
                                                onFocus={e => { e.target.style.borderColor = C.em; e.target.style.boxShadow = `0 0 0 3px rgba(16,185,129,.1)`; }}
                                                onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = "none"; }} />
                                        }
                                    </div>
                                ))}
                                <button className="glow-em w-full mt-1 flex items-center gap-1 justify-center ">
                                    Send Message<i className="fa-solid fa-arrow-right "></i></button>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </section>
        </div>
    )
}

export default Contact