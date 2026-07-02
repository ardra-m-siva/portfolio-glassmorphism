import { COLOURS as C } from "../constants/colors";

export const glassCard = (accent = "transparent") => ({
    background: C.glassHi,
    backdropFilter: "blur(20px)",
    WebkitBackdropFilter: "blur(20px)",
    border: `1px solid ${C.border}`,
    borderRadius: 20,
    position: "relative",
    overflow: "hidden",
});

export const navItems = ["Home", "About", "Skills", "Projects", "Timeline", "GitHub", "Contact"];

export const goTo = id => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });