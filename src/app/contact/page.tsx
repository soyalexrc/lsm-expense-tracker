import {Label} from "@/components/ui/label"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import WhyChooseUsSection from "@/components/landing/WhyChooseUs";
import GetStartedSection from "@/components/landing/GetStarted";
import LandingLayout from "@/components/landing/LandingLayout";

export default function ContactPage() {
    return (
        <LandingLayout>
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6">
                        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
                            <div className="space-y-4">
                                <div
                                    className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Contact
                                    Us
                                </div>
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                    Get in Touch with Expense Tracker
                                </h1>
                                <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                                    Have a question, feedback, or need support? Our team is here to help. Fill out the
                                    form
                                    below and
                                    we&apos;ll get back to you as soon as possible.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <form className="grid gap-4">
                                    <div className="grid gap-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input id="name" placeholder="Enter your name"/>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="Enter your email"/>
                                    </div>
                                    <div className="grid gap-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Enter your message"
                                                  className="min-h-[120px]"/>
                                    </div>
                                    <Button type="submit">Submit</Button>
                                </form>
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