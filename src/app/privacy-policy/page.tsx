import WhyChooseUsSection from "@/components/landing/WhyChooseUs";
import GetStartedSection from "@/components/landing/GetStarted";
import LandingLayout from "@/components/landing/LandingLayout";

export default function Component() {
    return (
        <LandingLayout>
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                                Expense Tracker Privacy Policy
                            </div>
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Privacy Policy
                            </h1>
                        </div>
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 mt-10">
                            <div className="space-y-4">
                                <div className="grid gap-6">
                                    <div>
                                        <h3 className="text-xl font-bold">1. Introduction</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            At Expense Tracker, we are committed to protecting the privacy and security
                                            of
                                            your personal
                                            information.
                                            This Privacy Policy explains how we collect, use, and safeguard your data
                                            when
                                            you use our
                                            mobile
                                            application, website, and related services (collectively,
                                            the &apos;Service&apos;).
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">2. Information We Collect</h3>
                                        <p className='text-gray-500 dark:text-gray-400'>We collect the following types
                                            of
                                            information from you:</p>
                                        <ul className='text-gray-500 dark:text-gray-400'>
                                            <li className='my-3'>
                                                <strong>Personal Information:</strong> When you create an account with
                                                Expense Tracker,
                                                we collect your
                                                name, email address, and other information you provide to us.
                                            </li>
                                            <li className='mb-3'>
                                                <strong>Financial Information:</strong> We collect information about
                                                your financial
                                                transactions,
                                                including your expenses, income, and budgets, in order to provide the
                                                Service.
                                            </li>
                                            <li className='mb-3'>
                                                <strong>Usage Information:</strong> We collect information about how you
                                                use the
                                                Service, such as the
                                                features you interact with, the pages you visit, and the actions you
                                                take.
                                            </li>
                                            <li>
                                                <strong>Device Information:</strong> We collect information about the
                                                device you use to
                                                access the
                                                Service, such as your device type, operating system, and IP address.
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">3. How We Use Your Information</h3>
                                        <p className="text-gray-500 dark:text-gray-400">
                                            We use the information we collect from you to:
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <WhyChooseUsSection showExtended={false}/>
                <GetStartedSection/>
        </LandingLayout>
    )
}
