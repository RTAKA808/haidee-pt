import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-primary border-b border-border py-3 sm:py-4">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Left Navigation */}
          <div className="flex items-center space-x-3 sm:space-x-6">
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
              Contact
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
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <Link 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200 p-1 rounded-lg hover:bg-accent/10 flex-shrink-0"
                aria-label="Visit our Facebook page"
              >
                <Image
                  src="/assets/facebook.png"
                  alt="Facebook"
                  width={28}
                  height={28}
                  className="object-contain w-5 h-5 sm:w-6 sm:h-6"
                />
              </Link>
              <Link 
                href="https://www.instagram.com/haideesuipt/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-70 transition-opacity duration-200 p-1 rounded-lg hover:bg-accent/10 flex-shrink-0"
                aria-label="Visit our Instagram page"
              >
                <Image
                  src="/assets/instagram.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                  className="object-contain w-7 h-7 sm:w-6 sm:h-6"
                />
              </Link>
            </div>
            
            <Button className="bg-accent hover:bg-accent/80 text-primary-foreground font-medium px-3 sm:px-6 py-2 transition-colors duration-200 text-xs sm:text-base flex-shrink-0">
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
