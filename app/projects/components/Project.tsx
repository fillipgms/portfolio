import React from "react";
import Image from "next/image";
import Link from "next/link";

type linkType = {
    label: string;
    href: string;
};

type ProjectType = {
    title: string;
    image: string;
    about: string;
    techUsed: string | string[];
    links: linkType[];
};

const techIcons: Record<string, { src: string; label: string }> = {
    figma: { src: "/icons/figma.png", label: "Figma" },
    react: { src: "/icons/react.png", label: "React" },
};

const Project = ({ project }: { project: ProjectType }) => {
    const techs = Array.isArray(project.techUsed)
        ? project.techUsed
        : [project.techUsed];

    const addParagraphIndent = (html: string) => {
        return html.replace(/<p(.*?)>/g, `<p$1><span class="pl-4"></span>`);
    };

    return (
        <div className="p-2 space-y-5">
            <section className="space-y-2">
                <h1 className="text-center font-bold text-3xl">
                    {project.title}
                </h1>
                <Image
                    src={project.image}
                    alt={project.title}
                    width={800}
                    height={400}
                    className="aspect-video object-cover"
                />
                <div
                    dangerouslySetInnerHTML={{
                        __html: addParagraphIndent(project.about),
                    }}
                />
            </section>
            <div className="flex flex-wrap gap-4">
                <div className="space-y-5 flex-1 min-w-[200px]">
                    <section className="space-y-1">
                        <h2 className="font-bold text-xl">Check it out!</h2>
                        <div className="flex flex-wrap gap-2">
                            {project.links.map((link) => (
                                <Link
                                    target="_blank"
                                    className="py-2 px-4 border border-black
                                        bg-[#f4f4f4] font-mono text-sm
                                        shadow-[2px_2px_0px_#000]
                                        hover:translate-x-[1px]
                                        hover:translate-y-[1px]
                                        hover:shadow-[1px_1px_0px_#000]
                                        transition-transform duration-100"
                                    href={link.href}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
                <div className="space-y-5 w-1/2 min-w-[200px]">
                    <section className="space-y-1">
                        <h2 className="font-bold text-xl">I've Used:</h2>
                        <div className="flex gap-4 flex-wrap">
                            {techs.map((tech) =>
                                techIcons[tech] ? (
                                    <div
                                        key={tech}
                                        className="border-2 flex items-center
                                            gap-2 p-2"
                                    >
                                        <Image
                                            src={techIcons[tech].src}
                                            alt={techIcons[tech].label}
                                            width={32}
                                            height={32}
                                            className="size-8"
                                        />
                                        <p>{techIcons[tech].label}</p>
                                    </div>
                                ) : null,
                            )}
                        </div>
                    </section>
                </div>
            </div>
            <section></section>
        </div>
    );
};

export default Project;
