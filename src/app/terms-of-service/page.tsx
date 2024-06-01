import WhyChooseUsSection from "@/components/landing/WhyChooseUs";
import GetStartedSection from "@/components/landing/GetStarted";
import LandingLayout from "@/components/landing/LandingLayout";

export default function Component() {
    return (
        <LandingLayout>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Expense Tracker Terms of Service
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Terms Of Service
                            </h1>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 mt-10">
                            <div className="space-y-4">
                                <div className="grid gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold">1. Introduction</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            Welcome to Expense Tracker, a comprehensive financial management solution.
                                            These Terms of Service (&apos;Terms&apos;) govern your use of our mobile
                                            application,
                                            website, and related services (collectively, the &apos;Service&apos;). By
                                            accessing or
                                            using the Service, you agree to be bound by these Terms and our Privacy
                                            Policy.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">2. Account Registration</h3>
                                        <p className='text-gray-500 dark:text-gray-400'>
                                            To use the Service, you must create an account by providing certain
                                            information, such as your name, email address, and a secure password. You
                                            are responsible for maintaining the confidentiality of your account
                                            information and for all activities that occur under your account.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">3. Use of the Service</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            The Service is provided to you for your personal, non-commercial use. You
                                            agree to use the Service in compliance with all applicable laws, rules, and
                                            regulations. You may not use the Service for any unlawful or abusive
                                            purpose, including but not limited to:
                                        </p>
                                        <ul className='list-disc ml-8 text-gray-500 dark:text-gray-400'>
                                            <li className='my-3'>
                                                Accessing or using the Service in any way that could damage, disable,
                                                overburden, or impair the Service or interfere with any other
                                                party&apos;s
                                                use and enjoyment of the Service;
                                            </li>
                                            <li className='mb-3'>
                                                Attempting to gain unauthorized access to the Service, user accounts, or
                                                computer systems or networks connected to the Service;
                                            </li>
                                            <li className='mb-3'>
                                                Attempting to gain unauthorized access to the Service, user accounts, or
                                                computer systems or networks connected to the Service;
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WhyChooseUsSection showExtended={false}/>
                <GetStartedSection/>
            </main>
        </LandingLayout>
    )
}
