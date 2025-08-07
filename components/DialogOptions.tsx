import React from "react";
import { twMerge } from "tailwind-merge";

export interface DialogueOption {
    text: string;
    nextId: string;
}

const DialogOptions = ({
    options,
    handleNext,
}: {
    options: DialogueOption[];
    handleNext: (nextId: string) => void;
}) => {
    const count = options.length;

    const layout =
        count === 1
            ? "justify-center"
            : count === 2
              ? "flex-row justify-evenly"
              : "grid grid-cols-2 [&>*:nth-child(1)]:col-span-2 [&>*:nth-child(1)]:justify-self-center";

    return (
        <div
            className={twMerge(
                `flex items-center justify-center absolute bottom-0 gap-4 w-full
                p-3 flex-wrap`,
                layout,
            )}
        >
            {options.map((option, i) => (
                <p
                    className="bg-black/50 rounded p-4 transition-all
                        duration-300 cursor-pointer"
                    key={i}
                    onClick={() => handleNext(option.nextId)}
                >
                    {option.text}
                </p>
            ))}
        </div>
    );
};

export default DialogOptions;
