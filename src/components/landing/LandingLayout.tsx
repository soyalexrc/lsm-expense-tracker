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
        </>
    )
}