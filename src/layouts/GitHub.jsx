import React, { useEffect } from 'react'
import { COLOURS as C } from '../constants/colors';
import { glassCard } from '../utils/utilityFunctions';
import Reveal from '../components/Reveal';
import TiltCard from '../components/TiltCard';
import { GitHubCalendar } from 'react-github-calendar';
import 'react-activity-calendar/tooltips.css';
import SectionHead from '../components/SectionHead';

const GitHub = () => {
    const LANGUAGES = [
        ["JavaScript", "#f1e05a"],
        ["HTML", "#e34c26"],
        ["CSS", "#663399"],
        ["SCSS", "#c6538c"],
        ["TypeScript", "#3178c6"],
    ];

    const GITHUB_STATS = [
        [`1000+`, "Total Contributions", <i className="fa-solid fa-chart-line"></i>,],
        ["35+", "Repositories", <i className="fa-solid fa-code-branch"></i>,],
        ["3+", "Years on GitHub", <i className="fa-brands fa-github"></i>,],
        ["15+", "Technologies", <i className="fa-solid fa-layer-group"></i>]
    ];

    const GITHUB_THEME = ["#0d1117", "#064e3b", "#059669", "#10b981", "#34d399"]

    return (
        <div id="github" style={{ borderTop: `1px solid ${C.border}` }}>
            <section>
                <SectionHead label="Open Source" title={<>GitHub <span className="shimmer-em">Contributions</span></>} sub="Consistency is key - here's a snapshot of my coding activity." />

                <Reveal delay={.1}>
                    <div className='grid grid-cols-4 gap-3.5 mb-4.5'>
                        {GITHUB_STATS.map(([value, labl, icon]) => (
                            <TiltCard key={labl} intensity={10} style={{ ...glassCard(), border: `1px solid ${C.border}` }} className="card-hover text-center rounded-[18px] py-5 px-4">
                                <div className='text-[24px] mb-2'>{icon}</div>
                                <div className='font-extrabold text-[26px]' style={{ fontFamily: "'Space Grotesk',sans-serif", color: C.em }}>{value}</div>
                                <div className='text-[12px] mt-1'>{labl}</div>
                            </TiltCard>
                        ))}
                    </div>
                </Reveal>

                <Reveal delay={.2}>
                    <div className='p-5 md:p-7 rounded-[22px]' style={{ ...glassCard(), border: `1px solid ${C.border}` }}>
                        <div className='flex justify-between items-center mb-4.5 flex-wrap gap-2.5'>
                            <span className='text-[13px] text-[#94a3b8]' style={{ fontFamily: "'JetBrains Mono',monospace" }}>Contribution graph</span>
                            <div className='flex items-center gap-1.25'>
                                <span className='text-[11px]' style={{ color: C.muted }}>less</span>
                                {GITHUB_THEME.map(c => <div key={c} className='w-2.75 h-2.75 rounded-[3px]' style={{ background: c }} />)}
                                <span className='text-[11px]' style={{ color: C.muted }}>more</span>
                            </div>
                        </div>
                        <div className='overflow-x-auto'>
                            <div className='scale-90 md:scale-100 w-max md:w-full flex min-w-170 justify-center'>
                                <GitHubCalendar username="ardra-m-siva" colorScheme="dark"
                                    theme={{ dark: GITHUB_THEME }}
                                    blockSize={12}
                                    blockMargin={4}
                                    showColorLegend={false}
                                    showWeekdayLabels={true}
                                    tooltips={{
                                        activity: {
                                            text: activity => `${activity.level} activities on ${activity.date}`
                                        },
                                        colorLegend: {
                                            text: level => `Activity level ${level + 1}`
                                        },
                                    }}
                                    fontSize={14} />
                            </div>
                        </div>
                        <div className='flex flex-wrap gap-4 mt-4.5 pt-4' style={{ borderTop: `1px solid ${C.border}` }}>
                            {LANGUAGES.map(([language, colr]) => (
                                <div className='flex items-center gap-1.5' key={language}>
                                    <div className='w-2 h-2 rounded-full' style={{ background: colr }} />
                                    <span className='text-[#94a3b8] text-[12px]'>{language}</span>
                                    {/* <span className='text-[11px]' style={{ color: C.muted, fontFamily: "'JetBrains Mono',monospace" }}>{w}%</span> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </section>
        </div>
    )
}

export default GitHub