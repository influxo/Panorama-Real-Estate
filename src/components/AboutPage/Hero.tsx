import React from "react";
import Image from "next/image";
import heroImage from "../../../public/images/static/HeroImage.png";
import heroLines from "../../../public/images/static/HeroLines.svg";

const Hero = () => {
  return (
    <div className="w-full text-white relative border-b border-[#262626]">
      <div className="container-custom-left">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Rreth Nesh
            </h1>
            <p className="text-gray-300 max-w-xl mb-12">
              Our story is one of continuous growth and evolution. We started as
              a small team with big dreams, determined to create a real estate
              platform that transcended the ordinary. Over the years, we've
              expanded our reach, forged valuable partnerships, and gained the
              trust of countless clients.
            </p>
            <div className="flex justify-between  gap-x-4">
              <div className="p-4 border border-[#262626] rounded-lg w-1/3">
                <div className="font-bold text-3xl mb-2">200+</div>
                <div>Happy Costumers</div>
              </div>
              <div className="p-4 border border-[#262626] rounded-lg w-1/3">
                <div className="font-bold text-3xl mb-2">10K+</div>
                <div>Properties for Costumers</div>
              </div>
              <div className="p-4 border border-[#262626] rounded-lg w-1/3">
                <div className="font-bold text-3xl mb-2">15+</div>
                <div>Years of Experience</div>
              </div>
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
