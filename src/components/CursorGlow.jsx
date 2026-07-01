import React, { useEffect, useRef } from 'react'

const CursorGlow = () => {
    const cursorGlowref = useRef(null);
    useEffect(() => {
        const updateCursorPosition = (e) => {
            if (cursorGlowref.current) {
                cursorGlowref.current.style.left = `${e.clientX}px`;
                cursorGlowref.current.style.top = `${e.clientY}px`;
            }
        };
        window.addEventListener("mousemove", updateCursorPosition);
        return () => window.removeEventListener("mousemove", updateCursorPosition);
    }, []);

    return (
        <div ref={cursorGlowref} className='rounded-full fixed z-0 pointer-events-none w-[125] h-[125]'
            style={{
                background: "radial-gradient(circle,rgba(16,185,129,.05) 0%,transparent 65%)",
                transform: "translate(-50%,-50%)", transition: "left .12s ease,top .12s ease"
            }}
        />
    )

}

export default CursorGlow