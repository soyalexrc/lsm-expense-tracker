import type {Metadata, Viewport} from "next";
import "./globals.css";

import {Inter as FontSans} from "next/font/google"

import {cn} from "@/lib/utils"
import {ClerkProvider} from "@clerk/nextjs";
import {Toaster} from "sonner";
import Link from "next/link";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
}

export const metadata: Metadata = {
    title: "LSM Expense Tracker Software",
    description: "Simplify your finances with our user-friendly expense tracker software. Track income, categorize spending, and gain valuable insights into your financial habits.",
    authors: [{ name: 'Alex Rodriguez', url: 'https://alexleonardo.dev' }],
    creator: 'Alex Rodriguez',
    metadataBase: new URL('https://lsm-expense-tracker.xyz'),
    openGraph: {
        title: 'LSM Expense Tracker Software',
        description: "Simplify your finances with our user-friendly expense tracker software. Track income, categoriza spending, and gain valuable insights into your financial habits.",
        url: new URL('https://lsm-expense-tracker.xyz'),
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'LSM Expense Tracker Software',
        description: "Simplify your finances with our user-friendly expense tracker software. Track income, categoriza spending, and gain valuable insights into your financial habits.",
        site: 'https://lsm-expense-tracker.xyz',
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en" suppressHydrationWarning>
            <body
                className={cn(
                    "min-h-screen bg-background w-screen font-sans antialiased",
                    fontSans.variable
                )}
            >
            <main>
                {children}
            </main>

            <Toaster/>
            </body>
            </html>
        </ClerkProvider>
    );
}
