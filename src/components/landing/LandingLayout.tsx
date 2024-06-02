import Link from "next/link";
import {Wallet} from "lucide-react";

export default function LandingLayout({
                                          children,
                                      }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <header className="px-4 lg:px-6 h-14 flex items-center">
                <Link href="/" className="flex items-center justify-center">
                    <Wallet className="h-6 w-6"/>
                    <span className="sr-only">Expense Tracker</span>
                </Link>
                <nav className="ml-auto flex gap-4 sm:gap-6">
                    <Link href="/features" className="text-sm font-medium hover:underline underline-offset-4">
                        Features
                    </Link>
                    {/*<Link href="#" className="text-sm font-medium hover:underline underline-offset-4"*/}
                    {/*      prefetch={false}>*/}
                    {/*    Pricing*/}
                    {/*</Link>*/}
                    <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
                        About
                    </Link>
                    <Link href="/contact" className="text-sm font-medium hover:underline underline-offset-4">
                        Contact
                    </Link>
                </nav>
            </header>
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
        </>
    )
}