import type {Metadata} from "next";
import "./globals.css";

import {Inter as FontSans} from "next/font/google"

import {cn} from "@/lib/utils"
import {ClerkProvider} from "@clerk/nextjs";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            <head>
                <title>LSM Expense Tracker</title>
            </head>
            <body
                className={cn(
                    "min-h-screen bg-background w-screen font-sans antialiased",
                    fontSans.variable
                )}
            >
            {children}
            </body>
            </html>
        </ClerkProvider>
    );
}
