"use client";
import React, { useState, useEffect } from "react";
import { Rnd } from "react-rnd";

const colors = [
    { name: "red", value: "#e34234" },
    { name: "orange", value: "#ff8c00" },
    { name: "yellow", value: "#fada5e" },
    { name: "green", value: "#3cb371" },
    { name: "blue", value: "#4169e1" },
    { name: "purple", value: "#9370db" },
    { name: "pink", value: "#ff69b4" },
    { name: "gray", value: "#b0b0b0" },
    { name: "white", value: "#f8f8f8" },
    { name: "black", value: "#1a1a1a" },
];

type WindowProps = {
    color:
        | "red"
        | "orange"
        | "yellow"
        | "green"
        | "blue"
        | "purple"
        | "pink"
        | "gray"
        | "white"
        | "black";
    content: React.ReactNode;
    label: string;
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
};

const Window = ({
    color,
    content,
    label,
    onClick,
    zIndex,
    onClose,
}: WindowProps) => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [windowWidth, setWindowWidth] = useState("90vw");

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const width = screenWidth < 640 ? screenWidth * 0.9 : screenWidth * 0.5;
        const height = 400;
        const x = (screenWidth - width) / 2;
        const y = (screenHeight - height) / 2;

        setWindowWidth(`${width}px`);
        setPosition({ x, y });
    }, []);

    const colorObj = colors.find((c) => c.name === color);
    const bgColor = colorObj ? colorObj.value : "#c0c0c0";

    return (
        <Rnd
            size={{ width: windowWidth, height: "auto" }}
            position={position}
            minWidth={280}
            minHeight={200}
            bounds="window"
            dragHandleClassName="window-header"
            onDragStop={(_, d) => setPosition({ x: d.x, y: d.y })}
            style={{ zIndex }}
            onMouseDown={onClick}
        >
            <div
                className="border border-black bg-white shadow-lg rounded
                    overflow-hidden flex flex-col max-h-[80vh]"
            >
                <div
                    className="window-header flex items-center justify-between
                        px-4 py-2 cursor-move border-b border-black"
                    style={{ backgroundColor: bgColor }}
                >
                    <span className="text-black font-semibold">{label}</span>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white font-bold px-2 rounded
                            hover:bg-red-600"
                    >
                        X
                    </button>
                </div>
                <div
                    className="flex-1 overflow-auto bg-[#e7e3d7] text-black p-4"
                >
                    {content}
                </div>
            </div>
        </Rnd>
    );
};

export default Window;
