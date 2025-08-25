import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-footer border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/assets/haidee-logo.png"
                alt="Haidee Sui Physical Therapy Logo"
                width={200}
                height={60}
                className="object-contain"
              />
            </Link>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-2">
            <p className="text-foreground font-medium text-lg">
              HAIDEE SUI PHYSICAL THERAPY
            </p>
            <p className="text-muted-foreground">
              Burlingame, CA
            </p>
            <p className="text-muted-foreground">
              <Link 
                href="mailto:hello@haideesui.com" 
                className="hover:text-accent transition-colors duration-200"
              >
                haideesuipt@gmail.com
              </Link>
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center items-center space-x-6 pt-4">
            <Link 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-200"
            >
              <Image
                src="/assets/facebook.png"
                alt="Facebook"
                width={24}
                height={24}
                className="object-contain"
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
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
          </div>
          
          {/* Copyright */}
          <div className="pt-6 border-t border-border">
            <p className="text-muted-foreground text-sm italic">
              Copyright ©2025 – Haidee Sui Physical Therapy – All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
