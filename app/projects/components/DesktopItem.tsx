"use client";
import React, { useRef } from "react";
import Image from "next/image";

const DesktopItem = ({
    image,
    label,
    onClick,
}: {
    image: string;
    label: string;
    onClick?: () => void;
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const handleClick = () => {
        audioRef.current = new Audio("/audio/click.mp3");
        audioRef.current.play();
        if (onClick) {
            onClick();
        }
    };

    return (
        <div className="pc-icon" onClick={handleClick}>
            <Image
                src={image}
                alt="trash bin"
                width={281}
                height={310}
                className=""
            />
            <p>{label}</p>
        </div>
    );
};

export default DesktopItem;
