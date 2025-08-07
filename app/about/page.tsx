import localFont from "next/font/local";

const diarioDeAndy = localFont({
    src: "../../public/fonts/DiarioDeAndy-L3ADy.otf",
});

export default function About() {
    return (
        <div className={`${diarioDeAndy.className}`}>
            start of something new
        </div>
    );
}
