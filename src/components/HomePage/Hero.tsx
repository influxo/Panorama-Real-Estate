import React from "react";
import Image from "next/image";
import heroImage from "../../../public/images/static/HeroImage.png";
import heroLines from "../../../public/images/static/HeroLines.svg";

const Hero = () => {
  return (
    <div className="w-full text-white relative">
      <div className="container-custom-left">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
              Discover Your Dream Property with Estatein
            </h1>
            <p className="text-gray-300 max-w-xl">
              Your journey to finding the perfect property begins here. Explore
              our listings to find the home that matches your dreams.
            </p>
            <button className="bg-[#7F56D9] hover:bg-[#6941C6] text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Contact Us
            </button>

            {/* Search Tags */}
            <div className="flex flex-wrap gap-3 mt-8 items-center">
              <span className="text-[#C4C4C4]">Popular Search</span>
              <span className="px-6 py-3 bg-[#141414] rounded-xl text-sm shadow-[#c4c4c469] shadow-lg">
                Modern Vila
              </span>
              <span className="px-6 py-3 bg-[#141414] rounded-xl text-sm shadow-[#c4c4c469] shadow-lg">
                Studio Apartment
              </span>
              <span className="px-6 py-3 bg-[#141414] rounded-xl text-sm shadow-[#c4c4c469] shadow-lg">
                Town House
              </span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative hidden lg:block">
            <div className="absolute inset-0 ">
              <Image
                src={heroLines}
                alt="Hero lines"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full h-[700px]">
              <Image
                src={heroImage}
                alt="Modern house model"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="relative w-full h-[400px] block lg:hidden">
            <Image
              src={heroImage}
              alt="Modern house model"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
