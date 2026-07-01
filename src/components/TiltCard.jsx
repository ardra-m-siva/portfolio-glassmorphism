import React, { useCallback, useRef } from 'react'

const TiltCard = ({ children, style = {}, intensity = 14, ...props }) => {
    const cardRef = useRef(null);
    const shineRef = useRef(null);

    // Runs whenever the mouse moves over the card
    const onMove = useCallback(e => {
        const card = cardRef.current;
        if (!card) return;

        // Get card position and size - gives left , right , width , height ,top , bottom etc. with respect to the screen 
        const cardRect = card.getBoundingClientRect();

        // event e contain clientX and clientY which is the position of the mouse from left and top with respect to the screen
        // e.clientX - cardRect.left will give the position of mouse with respect to the card and dividing it with cardRect.width will conver the value between 0 and 1 will exact position irrespective of the card width.
        const mouseX = (e.clientX - cardRect.left) / cardRect.width, mouseY = (e.clientY - cardRect.top) / cardRect.height;

        // center of the card will be 0.5 , we need the center of the card with no rotation so if mouseY or X id 0.5 then rotateX or Y will be 0 that is no tilt. if we do not multiply the value with intensity the rotation will be too small and cannot be seen in the screen. rotateX is 
        const rotateX = (mouseY - .5) * -intensity, rotateY = (mouseX - .5) * intensity;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(6px)`;
        if (shineRef.current) { shineRef.current.style.background = `radial-gradient(circle at ${mouseX * 100}% ${mouseY * 100}%,rgba(255,255,255,.06),transparent 65%)`; shineRef.current.style.opacity = "1"; }
    }, [intensity]);

    const onLeave = useCallback(() => {
        if (cardRef.current) cardRef.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) translateZ(0)";
        if (shineRef.current) shineRef.current.style.opacity = "0";
    }, []);

    return (
        <div ref={cardRef} onMouseMove={onMove} onMouseLeave={onLeave}
            style={{ transition: "transform .18s cubic-bezier(.22,1,.36,1)", transformStyle: "preserve-3d", position: "relative", ...style }} {...props} >
            <div ref={shineRef} className='absolute inset-0 opacity-0 pointer-events-none z-10' style={{ borderRadius: "inherit", transition: "opacity .3s" }} />
            {children}
        </div>
    )
}

export default TiltCard