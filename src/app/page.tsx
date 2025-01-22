import Cta from "@/components/Cta";
import AboutUs from "@/components/HomePage/AboutUs";
import Hero from "@/components/HomePage/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div>
        <Hero />
        <AboutUs />
        <Cta />
      </div>
    </div>
  );
}
