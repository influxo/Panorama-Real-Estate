import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1A1A1A] text-white py-12">
      <div className="container-custom flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:flex-row items-center space-x-0 lg:space-x-4">
          <Link href="/">
            <p className="text-lg font-semibold hover:underline">Panorama RE</p>
          </Link>
          <p className="text-sm mt-2 lg:mt-0">
            &copy; {new Date().getFullYear()} Panorama RE. All rights reserved.
          </p>
        </div>
        <div className="flex items-center space-x-4 mt-4 lg:mt-0">
          <Link href="/listimet">
            <p className="text-sm hover:underline">Listimet Tona</p>
          </Link>
          <Link href="/rreth-nesh">
            <p className="text-sm hover:underline">Rreth Nesh</p>
          </Link>
          <Link href="/book">
            <p className="text-sm hover:underline">Na Kontaktoni</p>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
