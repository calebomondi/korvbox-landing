import { useState, useEffect } from "react";

export default function ThemeImage({ lightSrc, darkSrc, alt, ...props }: {
    lightSrc: string;
    darkSrc: string;
    alt: string;
    [key: string]: any;
}) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
    // Check initial preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDark(mediaQuery.matches);

    // Listen for changes
    const handleChange = (e: MediaQueryListEvent) => {
        setIsDark(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    return (
    <img 
        src={isDark ? darkSrc : lightSrc} 
        alt={alt} 
        {...props}
    />
    );
}