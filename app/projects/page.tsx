import Link from "next/link";

import { Pixelify_Sans } from "next/font/google";
import StartupOverlay from "./components/StartupOverlay";

import Screen from "./components/Screen";

const coralPixels = Pixelify_Sans({ weight: "400" });

export default function ProjectsPage() {
    return (
        <main
            className={`relative flex flex-col h-svh max-h-svh overflow-hidden
                ${coralPixels.className}`}
        >
            <StartupOverlay />

            <Screen />

            <section className="w-full self-end bg-[#FF746C] p-4">
                <Link
                    className="text-black p-2 border rounded-sm text-xl"
                    href="/"
                >
                    Start
                </Link>
            </section>
        </main>
    );
}
