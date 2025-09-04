import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-primary border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-6">
          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/assets/logonotext.png"
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
              href="https://www.facebook.com/profile.php?id=61579726868070" 
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
            <Link 
              href="https://www.yelp.com/biz/haidee-sui-physical-therapy-burlingame" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-200"
            >
              <Image
                src="/assets/yelp.png"
                alt="Instagram"
                width={24}
                height={24}
                className="object-contain"
              />
            </Link>
            <Link 
              href="https://www.google.com/search?sca_esv=d208b92db3ea8890&sxsrf=AE3TifORGT1xTzejFQXgRV90TXWkagzOtA:1757021115767&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E65Ih-ya0vd684LPBoVjyR2RYQ6sk4jpReyc9j8X7HgwQm6mCWdjq3IF1JG7RUAWTM9ZaqMVVICT27k-cmbveY7mKfOe2AqBrs4M5YUbx8Sl_XPzaA%3D%3D&q=Haidee+Sui+Physical+Therapy+Reviews&sa=X&ved=2ahUKEwjNmN_bhcCPAxXPDTQIHSVLMWUQ0bkNegQIIBAE&biw=3440&bih=1294&dpr=1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-70 transition-opacity duration-200"
            >
              <Image
                src="/assets/google.png"
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
