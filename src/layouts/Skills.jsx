import React from 'react'
import { glassCardStyle } from '../utils/utilityFunctions'
import Reveal from '../components/Reveal'
import TiltCard from '../components/TiltCard'
import { COLOURS as C } from '../constants/colors'
import SectionHead from '../components/SectionHead'

const Skills = () => {
    const SKILLS_SECTIONS = [
        {
            category: "Frontend", icon: "◈", color: C.cy,
            skillList: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Sass", "Tailwind CSS", "Bootstrap", "Redux Toolkit", "Zustand", "Context API", "React Router", "Axios"]
        },
        {
            category: "Backend", icon: "◆", color: C.em,
            skillList: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "MVC Architecture", "Multer", "Cloudinary", "Nodemailer", "Bcrypt",]
        },
        {
            category: "Database", icon: "◎", color: "#a78bfa",
            skillList: ["MySQL", "MongoDB", "Mongoose", "Aggregation Pipeline", "Pagination", "Transactions"]
        },
        {
            category: "DevOps & Tools", icon: "◉", color: C.amber,
            skillList: ["Git", "GitHub", "Postman", "Swagger / OpenAPI", "Vite", "VS Code", "Figma", "Lighthouse", "Vercel", "Netlify", "Render"]
        },
    ];

    const ADDITIONAL_SKILLS = ["React Hook Form", "Zod", "TypeScript", "Next.js", "RBAC", "Agile", "Scrum", "SEO Fundamentals", "Accessibility"]
    // "AWS S3", "Prisma", "Redis", "CI/CD", "GraphQL", "Docker", "Webpack", "Jest", "ESLint", "Nginx", "Stripe API", "OAuth 2.0",

    return (
        <div id="skills" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SectionHead label="Tech Stack" title={<>My <span className="shimmer-em">Skills</span></>} sub="Technologies I use to craft powerful web applications" />
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-4.5 mb-4.5'>
                    {SKILLS_SECTIONS.map((section, index) => (
                        <Reveal key={section.category} delay={index * .1}>
                            <TiltCard intensity={8} style={glassCardStyle} className="card-hover h-full p-4.5 sm:p-5.5 md:p-6.5 rounded-[20px]">
                                <div className='flex items-center gap-3 mb-4 sm:mb-5'>
                                    <div className='font-bold flex items-center justify-center text-[16px] w-9 h-9 sm:w-9.5 sm:h-9.5 rounded-xl' style={{ background: `rgba(${section.color === C.cy ? "6,182,212" : section.color === C.em ? "16,185,129" : section.color === "#a78bfa" ? "167,139,250" : "245,158,11"},.12)`, border: `1px solid ${section.color}33`, color: section.color }}>
                                        {section.icon}
                                    </div>
                                    <span className='font-bold text-[16px]' style={{ fontFamily: "'Space Grotesk',sans-serif", color: C.text }}>{section.category}</span>
                                </div>
                                <div className='flex flex-wrap gap-1.75 sm:gap-2'>
                                    {section.skillList.map(skill => (
                                        <span key={skill} className="skill-badge" style={{ background: `${section.color}12`, color: section.color, border: `1px solid ${section.color}28`, boxShadow: `0 0 0 0 ${section.color}` }}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <div className='absolute w-25 h-25 rounded-full opacity-[0.06] -bottom-5 -right-5' style={{ background: section.color, filter: "blur(40px)", }} />
                            </TiltCard>
                        </Reveal>
                    ))}
                </div>
                <Reveal delay={.4}>
                    <div className='flex flex-wrap items-center gap-2 sm:gap-3 py-4 px-5 sm:px-6 rounded-[18px]' style={glassCardStyle}>
                        <span className='text-[12px]' style={{ fontFamily: "'JetBrains Mono',monospace", color: C.muted }}>Also comfortable with:</span>
                        {ADDITIONAL_SKILLS.map(skill => (
                            <span key={skill} className="tag-pill">{skill}</span>
                        ))}
                    </div>
                </Reveal>
            </section>
        </div>
    )
}

export default Skills