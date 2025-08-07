"use client";
import DialogOptions from "@/components/DialogOptions";
import DialogQuote from "@/components/DialogQuote";
import { dialogue, sprites } from "@/data/aboutme";
import Image from "next/image";
import { useEffect, useState, useMemo, useRef } from "react";

export default function About() {
    const [currentId, setCurrentId] = useState("start");
    const [skipped, setSkipped] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const [textPosition, setTextPosition] = useState({
        right: 0,
        bottom: 0,
    });

    const imageRef = useRef<HTMLImageElement>(null);

    const currentNode = useMemo(
        () => dialogue.find((d) => d.id === currentId),
        [currentId],
    );

    const handleNext = (nextId?: string) => {
        if (!nextId) return;
        setCurrentId(nextId);
        setSkipped(false);
        setIsDone(false);
    };

    const currentSprite = useMemo(() => {
        return sprites.find((s) => s.emotion === currentNode?.emotion);
    }, [currentNode]);

    useEffect(() => {
        const handleAdvance = () => {
            if (!skipped && !isDone) {
                setSkipped(true);
            } else if (
                currentNode &&
                !currentNode.options &&
                currentNode.nextId
            ) {
                handleNext(currentNode.nextId);
            }
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                handleAdvance();
            }
        };

        const handleClick = (e: MouseEvent) => {
            handleAdvance();
        };

        window.addEventListener("keydown", handleKeyDown);
        window.addEventListener("click", handleClick);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            window.removeEventListener("click", handleClick);
        };
    }, [currentNode, skipped, isDone]);

    useEffect(() => {
        if (imageRef.current) {
            const rect = imageRef.current.getBoundingClientRect();

            setTextPosition({
                right: window.innerWidth - (rect.left + rect.width * 0.05),
                bottom: window.innerHeight - (rect.top + rect.height * 0.25),
            });
        }
    }, [currentNode]);

    if (!currentNode) return <div>Dialogue not found.</div>;

    return (
        <main
            role="main"
            className="bg-bedroom min-h-svh relative bg-no-repeat bg-cover
                bg-center text-2xl"
            aria-live="polite"
        >
            <div
                className="absolute z-20"
                style={{
                    position: "absolute",
                    right: textPosition.right,
                    bottom: textPosition.bottom,
                    maxWidth: "300px",
                    textAlign: "right",
                }}
            >
                <DialogQuote
                    text={currentNode.quote}
                    skipped={skipped}
                    onDone={() => setIsDone(true)}
                />
            </div>

            {currentNode.options && (
                <DialogOptions
                    options={currentNode.options}
                    handleNext={handleNext}
                />
            )}

            {currentSprite && (
                <Image
                    ref={imageRef}
                    src={currentSprite.url}
                    alt={currentNode.emotion}
                    width={400}
                    height={400}
                    className="absolute max-h-[80svh] w-auto bottom-0 right-10"
                />
            )}
        </main>
    );
}
