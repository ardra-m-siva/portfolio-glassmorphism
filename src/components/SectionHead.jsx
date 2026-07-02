import React from 'react'
import Reveal from './Reveal';
import { COLOURS as C } from '../constants/colors';

const SectionHead = ({ label, title, accent = C.em, sub }) => {
    return <Reveal>
        <div className='mb-8 sm:mb-12'>
            <div className='inline-flex items-center gap-2 rounded-full mb-4 py-1.25 px-4' style={{ background: C.emSoft, border: `1px solid rgba(16,185,129,.2)` }}>
                <div className='w-1.5 h-1.5 rounded-full ' style={{ background: accent, boxShadow: `0 0 8px ${accent}` }} />
                <span className='text-[12px] font-semibold uppercase tracking-[3px]' style={{ color: accent }}>{label}</span>
            </div>
            <h2 className={`font-extrabold leading-[1.1] mb-${sub ? "2.5" : "0"}`} style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: "clamp(28px,4.5vw,44px)" }}>{title}</h2>
            {sub && <p className='mt-2 text-[15px]' style={{ color: C.muted }}>{sub}</p>}
        </div>
    </Reveal>;
}

export default SectionHead