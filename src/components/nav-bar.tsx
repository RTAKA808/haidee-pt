import { Button } from "@/components/ui/button"
import Image from "next/image";
import Link from "next/link";

export default function Navbar(){
    return(
        <nav className="flex w-full border-b bg-header">
            <div className="flex flex-row w-full items-center justify-between">
            <Button className="bg-header hover:bg-header">
                    <Link href="/" className="text-primary-foreground">
                        <Image
                        src="/assets/logonotext.png"
                        alt="Haidee Sui Logo"
                        height={300}
                        width={120}
                        className="object-contain"
                        />
                    </Link>
                    </Button>
                <div className="flex w-full items-end justify-end py-4 pr-20">
                <div className="flex  gap-6 items-center">
                    
                    <Button className="bg-accent hover:bg-accent/50">
                    <Link href="/appointment" className="text-primary-foreground">
                        Book An Appointment
                    </Link>
                    </Button>
                    <Link href="/contact" className="text-foreground">
                        Contact Us
                    </Link>
                </div>
                </div>
            </div>
        </nav>
    );
}