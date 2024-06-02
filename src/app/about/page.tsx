import GetStartedSection from "@/components/landing/GetStarted";
import WhyChooseUsSection from "@/components/landing/WhyChooseUs";
import LandingLayout from "@/components/landing/LandingLayout";

export default function AboutPage() {
    return (
        <LandingLayout>
            <section className='flex-1'>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4">
                                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                    About Expense Tracker
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Gain Clarity and Control Over Your Finances
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Expense Tracker is a powerful financial management tool designed to help you take
                                    control of your
                                    spending, set realistic budgets, and gain valuable insights into your financial
                                    habits.
                                    Our mission is
                                    to empower you to make informed decisions and achieve your financial goals.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-2xl font-bold tracking-tighter">Our Story</h2>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Expense Tracker was founded in 2020 by a team of financial experts and technology
                                    enthusiasts who were
                                    frustrated with the lack of user-friendly and comprehensive expense management tools
                                    on
                                    the market. We
                                    set out to create a solution that would empower individuals and small businesses to
                                    take
                                    control of
                                    their finances and make informed decisions.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    Our app is the result of countless hours of research, development, and user testing.
                                    We&apos;ve carefully
                                    crafted every feature to ensure a seamless and intuitive user experience, while also
                                    providing
                                    powerful analytics and reporting capabilities.
                                </p>
                                <p className="text-gray-500 dark:text-gray-400">
                                    At Expense Tracker, we believe that financial management should be accessible and
                                    empowering for
                                    everyone. That&apos;s why we&apos;re committed to continuously improving our app and
                                    adding new features to help
                                    our users achieve their financial goals.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <WhyChooseUsSection showExtended={false}/>
                <GetStartedSection/>
            </section>
        </LandingLayout>
    )
}