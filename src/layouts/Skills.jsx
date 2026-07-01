import React from 'react'
import { glassCard, SH } from '../utils/SectionHead'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { COLOURS as C } from '../constants/colors'

const Skills = () => {
    const SKILLS = [
        {
            cat: "Frontend", icon: "◈", color: C.cy,
            list: ["React.js", "JavaScript", "Tailwind CSS", "Redux", "HTML5", "CSS3","Boostrap"]
        },
        {
            cat: "Backend", icon: "◉", color: C.em,
            list: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io","Open API"]
        },
        {
            cat: "Database", icon: "◎", color: "#a78bfa",
            list: ["MongoDB", "MySQL", "Mongoose", "Aggregations"]
        },
        {
            cat: "DevOps & Tools", icon: "◆", color: C.amber,
            list: ["Git", "Vercel", "Postman", "Figma","Lighthouse", "Linux",]
        },
    ];

    return (
        <div id="skills" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SH label="Tech Stack" title={<>My <span className="shimmer-em">Skills</span></>} sub="Technologies I use to craft powerful web applications" />
                <div className='grid grid-cols-2 gap-4.5 mb-4.5'>
                    {SKILLS.map((g, index) => (
                        <Reveal key={g.cat} delay={index * .1}>
                            <TiltCard intensity={8} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover h-full p-6.5 rounded-[20px]">
                                <div className='flex items-center gap-3 mb-5'>
                                    <div className='font-bold flex items-center justify-center text-[16px] w-9.5 h-9.5 rounded-xl' style={{ background: `rgba(${g.color === C.cy ? "6,182,212" : g.color === C.em ? "16,185,129" : g.color === "#a78bfa" ? "167,139,250" : "245,158,11"},.12)`, border: `1px solid ${g.color}33`, color: g.color }}>
                                        {g.icon}
                                    </div>
                                    <span className='font-bold text-[16px]' style={{ fontFamily: "'Space Grotesk',sans-serif", color: C.text }}>{g.cat}</span>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {g.list.map(s => (
                                        <span key={s} className="skill-badge" style={{ background: `${g.color}12`, color: g.color, border: `1px solid ${g.color}28`, boxShadow: `0 0 0 0 ${g.color}` }}>
                                            {s}
                                        </span>
                                    ))}
                                </div>
                                <div className='absolute w-25 h-25 rounded-full opacity-[0.06] -bottom-5 -right-5' style={{ background: g.color, filter: "blur(40px)", }} />
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={.4}>
                    <div className='flex flex-wrap items-center gap-3 py-4 px-6 rounded-[18px]' style={{ ...glassCard(), border: `1px solid ${C.border}` }}>
                        <span className='text-[12px]' style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}>Also comfortable with:</span>
                        {["Next.js", "TypeScript", "AWS S3", "Prisma", "Redis", "CI/CD", "GraphQL", "Docker", "Webpack", "Jest", "ESLint", "Nginx", "Stripe API", "OAuth 2.0", "Agile", "Scrum"].map(t => (
                            <span key={t} className="tag-pill">{t}</span>
                        ))}
                    </div>
                </Reveal>
            </section>
        </div>
    )
}

export default Skills