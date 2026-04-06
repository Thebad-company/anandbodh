"use client";
import { useEffect, useRef, useState } from "react";

/**
 * useScrollReveal — returns a ref and a boolean `isVisible`.
 * When the element enters the viewport it stays visible.
 * @param {object} options - IntersectionObserver options
 */
export function useScrollReveal(options = {}) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el); // fire once
                }
            },
            { threshold: 0.12, rootMargin: "0px 0px -60px 0px", ...options }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return [ref, isVisible];
}
