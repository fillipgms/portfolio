"use client";
import React, { useRef, useState, useEffect } from "react";

import Link from "next/link";

const links = [
    { label: "About Me", href: "/about" },
    { label: "Projects", href: "/projects", action: "startupSound" },
    { label: "Options", href: "/options" },
];

const Menu = () => {
    const containerRef = useRef<HTMLUListElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    const linkRefs = useRef<Record<string, HTMLLIElement | null>>({});
    const [markerStyle, setMarkerStyle] = useState({
        top: 0,
        left: 0,
        width: 0,
        height: 0,
    });

    const getLinkPosition = (link: string) => {
        const el = linkRefs.current[link];
        const container = containerRef.current;

        if (el && container) {
            const elRect = el.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            setMarkerStyle({
                top: elRect.top - containerRect.top,
                left: elRect.left - containerRect.left,
                width: elRect.width,
                height: elRect.height,
            });
        }
    };

    useEffect(() => {
        getLinkPosition(links[0].href);
    }, []);

    useEffect(() => {
        const unlockAudio = () => {
            if (audioRef.current) {
                audioRef.current.play().catch((e) => {
                    console.log("Autoplay blocked:", e);
                });
            }

            window.removeEventListener("click", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
        };

        window.addEventListener("click", unlockAudio);
        window.addEventListener("touchstart", unlockAudio);

        return () => {
            window.removeEventListener("click", unlockAudio);
            window.removeEventListener("touchstart", unlockAudio);
        };
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (!audioRef.current) return;

            if (document.hidden) {
                audioRef.current.volume = 0;
            } else {
                audioRef.current.volume = 1;
            }
        };

        document.addEventListener("visibilitychange", handleVisibilityChange);

        return () => {
            document.removeEventListener(
                "visibilitychange",
                handleVisibilityChange,
            );
        };
    }, []);

    return (
        <>
            <audio ref={audioRef} src="/audio/bgm/menu.mp3" autoPlay loop />

            <nav className="text-2xl w-fit">
                <ul
                    className="relative space-y-2"
                    ref={containerRef}
                    style={{ position: "relative" }}
                >
                    <div
                        style={{
                            top: markerStyle.top,
                            left: markerStyle.left,
                            width: markerStyle.width,
                            height: markerStyle.height,
                        }}
                        className="absolute bg-black/60 rounded-md
                            transition-all duration-150 ease pointer-events-none
                            z-10"
                    ></div>

                    {links.map((link) => (
                        <li
                            key={link.href}
                            ref={(el) => {
                                linkRefs.current[link.href] = el;
                            }}
                            onMouseEnter={() => getLinkPosition(link.href)}
                            onClick={() => getLinkPosition(link.href)}
                            className="z-20 relative h-fit"
                        >
                            <Link href={link.href} className="py-2 px-4 block">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    );
};

export default Menu;
