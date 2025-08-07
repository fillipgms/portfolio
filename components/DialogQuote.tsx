import { useConfigs } from "@/contexts/ConfigurationContext";
import { useEffect, useState, useRef } from "react";

const DialogQuote = ({
    text,
    skipped,
    onDone,
}: {
    text: string;
    skipped: boolean;
    onDone: () => void;
}) => {
    const { textSpeed } = useConfigs();
    const [displayedText, setDisplayedText] = useState("");
    const [textWidth, setTextWidth] = useState<number | undefined>(undefined);

    const timeoutsRef = useRef<NodeJS.Timeout[]>([]);
    const ghostRef = useRef<HTMLParagraphElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        audioRef.current = new Audio("/audio/bleeps/bleep011.ogg");
    }, []);

    useEffect(() => {
        setDisplayedText("");

        timeoutsRef.current.forEach(clearTimeout);
        timeoutsRef.current = [];

        if (skipped) {
            setDisplayedText(text);

            onDone();
            return;
        }

        for (let i = 0; i < text.length; i++) {
            const timeoutId = setTimeout(() => {
                setDisplayedText((prev) => prev + text[i]);

                if (audioRef.current) {
                    const sound =
                        audioRef.current.cloneNode() as HTMLAudioElement;

                    sound.play().catch((e) => {
                        console.warn("Audio play blocked:", e);
                    });
                }

                if (i === text.length - 1) {
                    onDone();
                }
            }, i * textSpeed);

            timeoutsRef.current.push(timeoutId);
        }

        return () => {
            timeoutsRef.current.forEach(clearTimeout);
            timeoutsRef.current = [];
        };
    }, [text, skipped, textSpeed]);

    useEffect(() => {
        if (ghostRef.current) {
            setTextWidth(ghostRef.current.offsetWidth);
        }
    }, [text]);

    return (
        <div>
            <p
                className="bg-black/50 rounded p-4 transition-all duration-300"
                style={{ width: textWidth }}
            >
                {displayedText}
            </p>
            <p
                ref={ghostRef}
                className="absolute invisible p-5 w-max pointer-events-none"
                aria-hidden
            >
                {text}
            </p>
        </div>
    );
};

export default DialogQuote;
