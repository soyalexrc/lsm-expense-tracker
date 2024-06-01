import Link from "next/link";

export default function GetStartedSection() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div
                className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Get Started with Expense Tracker
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Sign up for our expense tracker app and take control of your finances today. It&apos;s free
                        to get started,
                        and you can upgrade to a premium plan at any time.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
                    <Link
                        href="/dashboard"
                        className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                        prefetch={false}
                    >
                        Sign Up
                    </Link>
                    {/*<Link*/}
                    {/*    href="#"*/}
                    {/*    className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"*/}
                    {/*    prefetch={false}*/}
                    {/*>*/}
                    {/*    Download App*/}
                    {/*</Link>*/}
                </div>
            </div>
        </section>
    )
}