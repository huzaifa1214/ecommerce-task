"use client";
import Image from "next/image";
import { useState } from "react";
import { HeaderLinks } from "@/components/Header/constants";
import MobileMenu from "@/components/MobileMenu";
import Link from "next/link";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="container relative mx-auto xs:px-0 sm:px-6 py-6 flex justify-between items-center">
      <div className="flex">
        <Link href="/">
          <Image src="/img/Logo.svg" alt="logo" width={108} height={22} />
        </Link>
        <div className="hidden md:flex gap-5 ml-8">
          {HeaderLinks.map((headerLink, index) => (
            <Link key={index} href={headerLink.path} className="text-sm">
              {headerLink.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="md:hidden">
        <Image
          src="/img/hamburger.svg"
          alt="hamburger"
          width={24}
          height={24}
          onClick={toggleMobileMenu}
        />

        {isMobileMenuOpen && <MobileMenu />}
      </div>
      <div className="hidden md:flex gap-5">
        <div className="relative mr-1">
          <Image
            alt="search"
            src="/img/search.svg"
            width={24}
            height={24}
            className="absolute top-2 left-2"
          />
          <input
            placeholder="Search for product or brands....."
            className="bg-lightGray hidden lg:block w-80 h-11 rounded-md pl-10 placeholder-darkGray"
          />
        </div>
        <Image alt="search" src="/img/wishlist.svg" width={24} height={24} />
        <Image alt="search" src="/img/profile.svg" width={24} height={24} />
        <Image alt="search" src="/img/bag.svg" width={24} height={24} />
      </div>
    </nav>
  );
};

export default Header;
