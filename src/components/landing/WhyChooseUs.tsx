import {Clipboard, Wallet, BarChart, Calendar, AlarmClock, PieChart} from 'lucide-react';

type Props = {
    showExtended: boolean;
}

export default function WhyChooseUsSection({showExtended}: Props) {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Why Choose Expense Tracker?
                    </h2>
                    <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Our expense tracker app is designed to help you take control of your finances and make
                        better-informed
                        decisions. With its user-friendly interface and powerful features, you can effortlessly manage
                        your
                        expenses, set budgets, and generate detailed reports.
                    </p>
                </div>
                <div className="grid max-w-5xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <div
                        className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                        <Clipboard className="h-8 w-8 text-primary"/>
                        <h3 className="text-xl font-bold">Expense Tracking</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Easily log and categorize your daily expenses for better visibility.
                        </p>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                        <Wallet className="h-8 w-8 text-primary"/>
                        <h3 className="text-xl font-bold">Budgeting</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Create custom budgets and get alerts when &apos; close to your limit.
                        </p>
                    </div>
                    <div
                        className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                        <BarChart className="h-8 w-8 text-primary"/>
                        <h3 className="text-xl font-bold">Reporting</h3>
                        <p className="text-gray-500 dark:text-gray-400 text-center">
                            Get detailed reports on your spending patterns and trends.
                        </p>
                    </div>
                    {
                        showExtended && (
                            <>
                                <div
                                    className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                                    <Calendar className="h-8 w-8 text-primary"/>
                                    <h3 className="text-xl font-bold">Transaction History</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-center">
                                        Track your past transactions and view a comprehensive history of your income and
                                        expenses.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                                    <PieChart className="h-8 w-8 text-primary"/>
                                    <h3 className="text-xl font-bold">Categorization</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-center">
                                        Categorize your expenses into intuitive groups to better understand your spending
                                        habits.
                                    </p>
                                </div>
                                <div
                                    className="flex flex-col items-center justify-center gap-4 rounded-lg bg-white p-6 shadow-sm transition-all hover:scale-105 hover:shadow-md dark:bg-gray-950 dark:hover:shadow-lg">
                                    <AlarmClock className="h-8 w-8 text-primary"/>
                                    <h3 className="text-xl font-bold">Alerts and Reminders</h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-center">
                                        Set reminders for upcoming bills, subscriptions, and other financial obligations.
                                    </p>
                                </div>

                            </>
                        )
                    }
                </div>
            </div>
        </section>
    )
}