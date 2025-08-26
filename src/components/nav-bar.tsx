import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-background border-b border-border py-4">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center space-x-4 sm:space-x-8">
            <Link 
              href="/" 
              className="text-foreground hover:text-accent font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Home
            </Link>
            <Link 
              href="/contact" 
              className="text-foreground hover:text-accent font-medium transition-colors duration-200 text-sm sm:text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Center Logo
          <div className="flex-1 flex justify-center">
            <Link href="/">
              <Image
                src="/assets/haidee-logo.png"
                alt="Haidee Sui Physical Therapy Logo"
                height={120}
                width={360}
                className="object-contain"
              />
            </Link>
          </div> */}

          {/* Right CTA Button and Social Media */}
          <div className="flex items-center space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="object-contain sm:w-5 sm:h-5"
                />
              </Link>
              <Link 
                href="https://www.instagram.com/haideesuipt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                <Image
                  src="/assets/instagram.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="object-contain sm:w-5 sm:h-5"
                />
              </Link>
            </div>
            
            <Button className="bg-accent hover:bg-accent/80 text-primary-foreground font-medium px-6 py-2 transition-colors duration-200">
              <Link href="/appointment" className="text-primary-foreground">
                Book An Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
