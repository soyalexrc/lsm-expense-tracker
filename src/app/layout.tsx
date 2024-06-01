import type {Metadata} from "next";
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
            {children}
            <footer
                className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
                <p className="text-xs text-gray-500 dark:text-gray-400">&copy; 2024 Expense Tracker. All rights
                    reserved.</p>
                <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                    <Link href="/terms-of-service" className="text-xs hover:underline underline-offset-4"
                          prefetch={false}>
                        Terms of Service
                    </Link>
                    <Link href="/privacy-policy" className="text-xs hover:underline underline-offset-4"
                          prefetch={false}>
                        Privacy
                    </Link>
                </nav>
            </footer>
            <Toaster/>
            </body>
            </html>
        </ClerkProvider>
    );
}
