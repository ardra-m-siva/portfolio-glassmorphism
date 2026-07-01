import React from 'react'
import { useInView } from '../hooks/useInView';

const Reveal = ({ children, delay = 0, y = 28, style = {} }) => {
    const [ref, isInView] = useInView();
    return (
        <div ref={ref} style={{ opacity: isInView ? 1 : 0, transform: isInView ? `translateY(0)` : `translateY(${y}px)`, transition: `opacity .75s cubic-bezier(.22,1,.36,1) ${delay}s,transform .75s cubic-bezier(.22,1,.36,1) ${delay}s`, ...style }}>{children}</div>
    )
}

export default Reveal