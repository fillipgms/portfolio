import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConfigurationContextProvider } from "@/contexts/ConfigurationContext";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fillip Mangia | Front-end Dev",
    description: "Brazilian Front-end Devellopper ",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable}
                    text-white antialiased`}
            >
                <ConfigurationContextProvider>
                    {children}
                </ConfigurationContextProvider>
            </body>
        </html>
    );
}
