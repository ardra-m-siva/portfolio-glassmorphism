import React, { useEffect, useState } from 'react'
import { COLOURS as C } from '../constants/colors';
const Typewriter = ({ words }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentCharIndex, setCurrentCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [displayText, setDisplayText] = useState("");
    useEffect(() => {
        const currentWord = words[currentWordIndex];
        const id = setTimeout(() => {
            if (!isDeleting) {
                if (currentCharIndex < currentWord.length) {
                    setDisplayText(currentWord.slice(0, currentCharIndex + 1));
                    setCurrentCharIndex((prev) => prev + 1);
                } else
                    setTimeout(() => setIsDeleting(true), 1800);
            } else {
                if (currentCharIndex > 0) {
                    setDisplayText(currentWord.slice(0, currentCharIndex - 1));
                    setCurrentCharIndex((prev) => prev - 1);
                } else {
                    setIsDeleting(false);
                    setCurrentWordIndex(prev => (prev + 1) % words.length);
                }
            }
        }, isDeleting ? 40 : 80);
        return () => clearTimeout(id);
    }, [currentCharIndex, isDeleting, currentWordIndex, words]);
    return (
        <span>{displayText}<span style={{ color: C.em, animation: "blink 1s step-end infinite" }}>|</span></span>
    )
}

export default Typewriter