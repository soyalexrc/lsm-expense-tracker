import {Button} from "@/components/ui/button";
import Link from "next/link";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";
import Image from "next/image";
import LandingLayout from "@/components/landing/LandingLayout";
import TakeControlSection from "@/components/landing/TakeControl";

export default function Home() {
    const {userId} = auth()

    // TODO tentativo.
    // if (userId) {
    //     redirect('/dashboard');
    // }

    return (
        <LandingLayout>
            <main className="flex-1">
                    <section className="w-full py-12 md:py-24 lg:py-32">
                        <div className="container px-4 md:px-6">
                            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_550px]">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="space-y-2">
                                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                            Take control of your finances with our expense tracker app
                                        </h1>
                                        <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                            Easily track your expenses, set budgets, and generate detailed reports to
                                            gain insights into your
                                            spending habits.
                                        </p>
                                    </div>
                                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                        <Link
                                            href="/dashboard"
                                            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                                        >
                                            Sign Up
                                        </Link>
                                        {/*<Link*/}
                                        {/*    href="#"*/}
                                        {/*    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"*/}
                                        {/*    prefetch={false}*/}
                                        {/*>*/}
                                        {/*    Download*/}
                                        {/*</Link>*/}
                                    </div>
                                </div>
                                <Image
                                    src="/images/finance-banner.webp"
                                    width="550"
                                    height="310"
                                    alt="Hero"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
                        <div className="container px-4 md:px-6">
                            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                                <div className="space-y-2">
                                    <div
                                        className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                        Key Features
                                    </div>
                                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Manage your expenses
                                        with ease</h2>
                                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                                        Our expense tracker app provides you with the tools you need to take control of
                                        your finances. Track
                                        your spending, create budgets, and generate detailed reports to gain insights
                                        into your financial
                                        habits.
                                    </p>
                                </div>
                            </div>
                            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
                                <div className="flex flex-col justify-center space-y-4">
                                    <div className="grid gap-4">
                                        <div className="flex items-start gap-4">
                                            <ClipboardIcon className="h-6 w-6 text-primary"/>
                                            <div>
                                                <h3 className="text-xl font-bold">Expense Tracking</h3>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    Easily log your daily expenses and categorize them for better
                                                    visibility.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <WalletIcon className="h-6 w-6 text-primary"/>
                                            <div>
                                                <h3 className="text-xl font-bold">Budgeting</h3>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    Create custom budgets for different spending categories and get
                                                    alerts when you&asop;re close to your
                                                    limit.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <BarChartIcon className="h-6 w-6 text-primary"/>
                                            <div>
                                                <h3 className="text-xl font-bold">Reporting</h3>
                                                <p className="text-gray-500 dark:text-gray-400">
                                                    Get detailed reports on your spending patterns and trends to make
                                                    informed financial decisions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Image
                                    src="/images/screencapture.png"
                                    width="550"
                                    height="310"
                                    alt="Image"
                                    className="mx-auto aspect-video overflow-hidden rounded-xl object-center sm:w-full lg:order-last"
                                />
                            </div>
                        </div>
                    </section>
                <TakeControlSection />
                </main>
        </LandingLayout>
    )
        ;
}

function BarChartIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="20" y2="10"/>
            <line x1="18" x2="18" y1="20" y2="4"/>
            <line x1="6" x2="6" y1="20" y2="16"/>
        </svg>
    )
}


function ClipboardIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="8" height="4" x="8" y="2" rx="1" ry="1"/>
            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
        </svg>
    )
}


function DollarSignIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="12" x2="12" y1="2" y2="22"/>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
    )
}


function WalletIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path
                d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/>
            <path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>
        </svg>
    )
}