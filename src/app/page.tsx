import {Button} from "@/components/ui/button";
import Link from "next/link";
import {auth} from "@clerk/nextjs/server";
import {redirect} from "next/navigation";

export default function Home() {
    const {userId} = auth()

    // TODO tentativo.
    if (userId) {
        redirect('/dashboard');
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Link href='dashboard'>
                <Button> Click me</Button>
            </Link>
        </main>
    );
}
