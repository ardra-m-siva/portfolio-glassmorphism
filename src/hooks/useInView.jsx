import { useEffect, useRef, useState } from "react";

export function useInView(threshold = 0.1) {
    const elementRef = useRef(null);
    const [isInView, setIsInView] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting)
                setIsInView(true);
        }, { threshold });
        if (elementRef.current)
            observer.observe(elementRef.current);
        return () => observer.disconnect();
    }, [threshold]);
    return [elementRef, isInView];
}