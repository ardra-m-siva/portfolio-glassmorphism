import React, { useState } from 'react'
import { goTo, navItems } from '../utils/utilityFunctions';

const Header = ({ activeNav, setActiveNav }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClick = (item) => {
        goTo(item);
        setIsOpen(false);
    }

    return (
        <nav className='fixed top-0 right-0 left-0 z-200 main-nav'>
            <div className='max-w-275 flex items-center justify-around h-10 md:h-15 my-0 mx-auto py-0 px-6 '>
                {/* <div className='flex items-center'>
                    <div className='flex items-center justify-center w-8 h-8 rounded-[10px] text-[14px] nav-logo'>A</div>
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 17 }} className="shimmer-em">rdra</span>
                </div> */}
                <div className='hidden md:flex gap-0.5'>
                    {navItems.map(item =>
                        <button key={item} className={`nav-pill ${activeNav === item ? "act" : ""}`} onClick={() => goTo(item)}>
                            {item}
                        </button>
                    )}
                </div>
                <button
                    className="md:hidden text-center text-xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <i className={`fa-solid ${isOpen ? "fa-xmark" : "fa-ellipsis"}`}></i>
                </button>

                {/* <div className='flex items-center gap-2'>
            <div className='rounded-full w-1.75 h-1.75 ' style={{ background: C.em, boxShadow: `0 0 8px ${C.em}`, animation: "blink 2s ease-in-out infinite" }} />
            <span className='font-medium text-[12px]' style={{ color: C.em, }}>Open to work</span>
          </div> */}
            </div>
            {
                isOpen &&
                <div className="md:hidden px-6 pb-4 flex flex-col gap-2">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            className={`nav-pill text-left ${activeNav === item ? "act" : ""}`}
                            onClick={() => handleClick(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>
            }
        </nav>
    )
}

export default Header