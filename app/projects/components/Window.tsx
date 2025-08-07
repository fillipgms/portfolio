"use client";
import React, { useEffect, useState } from "react";
import { Rnd } from "react-rnd";

const colors = {
    red: "#e34234",
    orange: "#ff8c00",
    yellow: "#fada5e",
    green: "#3cb371",
    blue: "#4169e1",
    purple: "#9370db",
    pink: "#ff69b4",
    gray: "#b0b0b0",
    white: "#f8f8f8",
    black: "#1a1a1a",
} as const;

type Color = keyof typeof colors;

type WindowProps = {
    color: Color;
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
    onClose,
    onClick,
    zIndex,
}: WindowProps) => {
    const [size, setSize] = useState({ width: 600, height: "auto" as const });
    const [position, setPosition] = useState({ x: 100, y: 100 });

    useEffect(() => {
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        const width = screenWidth < 640 ? screenWidth * 0.9 : 600;
        const height = 600;

        const maxX = screenWidth - width - 20;
        const maxY = screenHeight - height - 20;

        const x = Math.floor(Math.random() * maxX);
        const y = Math.floor(Math.random() * maxY);

        setSize({ width, height: "auto" });
        setPosition({ x, y });
    }, []);

    return (
        <Rnd
            size={{ width: size.width, height: "auto" }}
            position={position}
            minWidth={280}
            bounds="window"
            dragHandleClassName="window-header"
            enableResizing={{
                top: false,
                bottom: false,
                left: true,
                right: true,
                topLeft: false,
                topRight: false,
                bottomLeft: false,
                bottomRight: false,
            }}
            onDragStop={(_, d) => {
                setPosition({ x: d.x, y: d.y });
            }}
            onResizeStop={(_, __, ref, ____, newPosition) => {
                setSize({
                    width: ref.offsetWidth,
                    height: "auto",
                });
                setPosition(newPosition);
            }}
            style={{ zIndex }}
            onMouseDown={onClick}
        >
            <div
                className="border border-black bg-white shadow-lg rounded
                    overflow-hidden flex flex-col"
            >
                <div
                    className="window-header flex items-center justify-between
                        px-4 py-2 cursor-move border-b border-black"
                    style={{ backgroundColor: colors[color] }}
                >
                    <span className="text-black font-semibold">{label}</span>
                    <button
                        onClick={onClose}
                        className="bg-red-500 text-white font-bold px-2 rounded
                            hover:bg-red-600 cursor-pointer"
                    >
                        X
                    </button>
                </div>
                <div
                    className="overflow-auto bg-[#e7e3d7] text-black p-4
                        max-h-[80vh]"
                >
                    {content}
                </div>
            </div>
        </Rnd>
    );
};

export default Window;
