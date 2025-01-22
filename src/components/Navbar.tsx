"use client";
import Link from "next/link";
import { useState } from "react";
import lines from "../../public/images/static/NavbarLines.svg";
import logo from "../../public/images/static/Logo.svg";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-[#1A1A1A] shadow-sm">
      <div className="bg-[#1A1A1A] border-b-2  border-[#262626] hidden md:block">
        <Image src={lines} alt="Navbar Lines" />
      </div>
      <div className="container-custom border-b-2  border-[#262626]">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="text-white">
            <div className="w-[100px] h-[80px] relative">
              <Image src={logo} alt="Logo" fill />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/listimet" className="text-white hover:underline">
              Listimet Tona
            </Link>
            <Link href="/rreth-nesh" className="text-white hover:underline">
              Rreth Nesh
            </Link>
            <Link
              href="/book"
              className="bg-[#e7cfb4] text-[#1A1A1A] px-6 py-4 rounded-lg border-2 border-[#262626] hover:bg-[#ffc18c] transition duration-300 hover:-translate-y-1"
            >
              Na Kontaktoni
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-secondary focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href="/listings"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-secondary hover:bg-secondary/10"
              >
                Listings
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 rounded-md text-gray-600 hover:text-secondary hover:bg-secondary/10"
              >
                About Us
              </Link>
              <Link
                href="/book"
                className="block px-3 py-2 rounded-md text-secondary hover:bg-secondary/10"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
