"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import WMIcon from "@/assets/svg/brand.svg";
import SearchIcon from "@/assets/svg/search.svg";
import MenuIcon from "@/assets/svg/menu.svg";
import CloseIcon from "@/assets/svg/close.svg";

interface NavItemProps {
  text: string;
  href: string;
  className?: string;
}

const NavItem = ({ text, href, className = "" }: NavItemProps) => (
  <li className="list-none">
    <Link
      href={href}
      className={`group relative inline-block text-md font-normal text-gray-900 px-2 py-1 ${className}`}
      role="navigation"
      aria-label={text}
    >
      <span className="relative z-10">{text}</span>
      <span
        className="absolute left-0 bottom-0 w-full h-px bg-gray-900 
                            transform origin-right scale-x-0 
                            transition-transform duration-300 ease-[ease]
                            group-hover:origin-left group-hover:scale-x-100"
      ></span>
    </Link>
  </li>
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto p-2 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link
              href="/"
              className="flex shrink-0 items-center space-x-3"
              aria-label="homepage"
            >
              <WMIcon width={216} height={72} />
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <NavItem text="Collections" href="/" />
            <NavItem text="Account" href="/" />

            <div className="relative">
              <SearchIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What are you looking for?"
                className="pl-10 pr-4 py-2 border rounded-lg text-gray-950 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded={isOpen}
            >
              <span className="sr-only">
                {isOpen ? "Close menu" : "Open menu"}
              </span>
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div className={`md:hidden pb-4 ${isOpen ? "block" : "hidden"}`}>
          <div className="pt-4 space-y-4">
            <NavItem text="Collections" href="/" />
            <NavItem text="Account" href="/" />

            <div className="px-4">
              <div className="relative">
                <SearchIcon className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
