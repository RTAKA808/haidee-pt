import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex w-full border-b bg-header">
            <div className="flex flex-row w-full justify-between">
                <div className="flex">
                <h1>
                    <Link href="/">
                    <Image
                        src="/assets/heidi-logo.png"
                        alt="Haidee Sui Physical Therapy Logo"
                        width={500}
                        height={140}
                        className="object-contain"
                    />
                    </Link>
                </h1>
                </div>
                <div className="flex w-full items-end justify-end py-4 pr-20">
                <div className="flex  gap-6 items-center">
                    <Button className="bg-accent">
                    <Link href="/appointment" className="text-foreground">
                        Book An Appointment
                    </Link>
                    </Button>
                    <Link href="/contact" className="text-foreground hover:text-muted-foreground">
                        Contact Us
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    );
}