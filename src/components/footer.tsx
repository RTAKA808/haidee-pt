import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full border-t bg-footer py-6">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo on the left */}
        <div>
          <Link href="/">
            <Image
              src="/assets/heidi-logo.png"
              alt="Haidee Sui Physical Therapy Logo"
              width={240}
              height={80}
            />
          </Link>
        </div>
        
        <div className="flex items-center gap-6">
          <Link 
            href="/contact" 
            className="text-foreground transition-colors hover:text-muted-foreground"
          >
            Contact Us
          </Link>
          <Button className="bg-accent hover:bg-accent-foreground">
            <Link href="/appointment" className="text-foreground">
              Book An Appointment
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}
