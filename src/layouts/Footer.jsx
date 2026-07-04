import React from 'react'
import { COLOURS as C } from '../constants/colors'
const Footer = () => {
    return (
        <footer className='flex flex-wrap justify-between items-center max-w-275 gap-3 my-0 mx-auto py-5 sm:py-6 md:py-7 px-4 sm:px-5 md:px-6' style={{ borderTop: `1px solid ${C.border}` }}>
            <div className='flex items-center gap-2.5 opacity-50 md:opacity-100'>
                <a href='#home' className='flex items-center justify-center w-7 h-7 rounded-lg'>
                    <img src="./logo-a.png" alt=" Ardra M S portfolio home" />
                </a>
            </div>
            <p className='text-[12px] hidden sm:block' style={{ color: C.faint, fontFamily: "'JetBrains Mono',monospace" }}> Built with React · Glassmorphism </p>
            <p className='text-[12px] ' style={{ color: C.faint }}>&copy; 2026 Ardra M S</p>
        </footer>
    )
}

export default Footer