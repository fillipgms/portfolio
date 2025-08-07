"use client";
import React, { useState } from "react";
import DesktopItem from "./DesktopItem";
import OndaPay from "../windows/OndaPay";
import Window from "./Window";
import TrashBin from "../windows/TrashBin";
import BgFestas from "../windows/BgFestas";

type DesktopApp = {
    label: string;
    image: string;
    component: React.ReactNode;
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
};

const items: DesktopApp[] = [
    {
        label: "Trash Bin",
        image: "/icons/trashbin.webp",
        component: <TrashBin />,
        color: "gray",
    },
    {
        label: "OndaPay",
        image: "/icons/ondapay.png",
        component: <OndaPay />,
        color: "green",
    },
    {
        label: "BgFestas",
        image: "/icons/bgfestas.png",
        component: <BgFestas />,
        color: "orange",
    },
];

const Screen = () => {
    const [openWindows, setOpenWindows] = useState<
        { id: string; zIndex: number }[]
    >([]);
    const [topZ, setTopZ] = useState(10);

    const openApp = (appId: string) => {
        setOpenWindows((prev) => {
            const exists = prev.find((w) => w.id === appId);
            if (exists) return prev;
            return [...prev, { id: appId, zIndex: topZ }];
        });
        setTopZ((prev) => prev + 1);
    };

    const closeApp = (appId: string) => {
        setOpenWindows((prev) => prev.filter((w) => w.id !== appId));
    };

    const bringToFront = (appId: string) => {
        setOpenWindows((prev) =>
            prev.map((w) => (w.id === appId ? { ...w, zIndex: topZ } : w)),
        );
        setTopZ((prev) => prev + 1);
    };

    return (
        <div className="p-5 h-full w-full bg-pc bg-cover bg-no-repeat">
            <div className="flex flex-col items-center gap-5 w-fit">
                {items.map((item) => (
                    <DesktopItem
                        key={item.label}
                        label={item.label}
                        image={item.image}
                        onClick={() => openApp(item.label)}
                    />
                ))}
            </div>

            {openWindows.map((win) => {
                const item = items.find((it) => it.label === win.id);
                if (!item) return null;

                return (
                    <Window
                        key={win.id}
                        color={item.color}
                        content={item.component}
                        label={item.label}
                        onClose={() => closeApp(win.id)}
                        onClick={() => bringToFront(win.id)}
                        zIndex={win.zIndex}
                    />
                );
            })}
        </div>
    );
};

export default Screen;
