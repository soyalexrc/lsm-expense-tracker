import GetStartedSection from "@/components/landing/GetStarted";
import WhyChooseUsSection from "@/components/landing/WhyChooseUs";
import {AlarmClock, BarChart, Calendar, Clipboard, PieChart, Wallet} from "lucide-react";
import LandingLayout from "@/components/landing/LandingLayout";

export default function FeaturesPage() {
    return (
        <LandingLayout>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    Expense Tracker Features
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Streamline Your Finances with Expense Tracker
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Expense Tracker is a comprehensive financial management solution designed to help
                                    you
                                    take control of
                                    your expenses, budgets, and reporting. Discover how our powerful features can
                                    transform
                                    the way you
                                    manage your money.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="grid gap-6">
                                    <div className="flex items-start gap-4">
                                        <Clipboard className="h-8 w-8 text-primary"/>
                                        <div>
                                            <h3 className="text-xl font-bold">Expense Tracking</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Easily log and categorize your daily expenses for better visibility.
                                                Expense
                                                Tracker provides a
                                                user-friendly interface to help you stay on top of your spending.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Wallet className="h-8 w-8 text-primary"/>
                                        <div>
                                            <h3 className="text-xl font-bold">Budgeting</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Create custom budgets and get alerts when &apos; close to your limit.
                                                Expense Tracker helps you
                                                stay on track with your financial goals.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <BarChart className="h-8 w-8 text-primary"/>
                                        <div>
                                            <h3 className="text-xl font-bold">Reporting</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Get detailed reports on your spending patterns and trends. Expense
                                                Tracker
                                                provides powerful
                                                analytics to help you make informed financial decisions.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Calendar className="h-8 w-8 text-primary"/>
                                        <div>
                                            <h3 className="text-xl font-bold">Transaction History</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Track your past transactions and view a comprehensive history of your
                                                income
                                                and expenses.
                                                Expense Tracker keeps all your financial data in one place.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <PieChart className="h-8 w-8 text-primary"/>
                                        <div>
                                            <h3 className="text-xl font-bold">Categorization</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Categorize your expenses into intuitive groups to better understand your
                                                spending habits.
                                                Expense Tracker provides a range of pre-defined categories and the
                                                ability
                                                to create custom
                                                ones.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <AlarmClock className="h-8 w-8 text-primary"/>
                                        <div>
                                            <h3 className="text-xl font-bold">Alerts and Reminders</h3>
                                            <p className="text-gray-500 dark:text-gray-400">
                                                Set reminders for upcoming bills, subscriptions, and other financial
                                                obligations. Expense
                                                Tracker will notify you to help you stay on top of your payments and
                                                avoid
                                                late fees.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WhyChooseUsSection showExtended={true}/>
                <GetStartedSection/>
            </main>
        </LandingLayout>
    )
}