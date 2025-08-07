"use client";
import React, { useEffect, useRef, useState } from "react";

const StartupOverlay = () => {
    const [showOverlay, setShowOverlay] = useState(true);

    useEffect(() => {
        audioRef.current = new Audio("/audio/windows-7-startup.mp3");

        audioRef.current.play().catch((err) => {
            console.log(err);
        });

        const timer = setTimeout(() => setShowOverlay(false), 500);
        return () => clearTimeout(timer);
    }, []);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    if (showOverlay) {
        return (
            <div
                className="w-full h-full absolute top-0 left-0 bg-black z-100
                    animate-startup pointer-events-none"
                onAnimationEnd={() => setShowOverlay(false)}
            ></div>
        );
    }

    return null;
};

export default StartupOverlay;
