import Image from "next/image";
import React from "react";
import PrimaryButton from "@/components/Buttons/PrimaryButton";

const HeroSection = () => {
  return (
    <div className="relative w-full xs:h-32 sm:h-48 md:h-60 lg:h-80 xl:h-98 my-12">
      <Image
        alt="hero"
        src="/img/hero1.svg"
        layout="fill"
        objectFit="contain"
      />
      <div className="flex flex-col justify-center absolute xs:w-48 sm:max-w-xs md:max-w-sm lg:max-w-lg xs:top-4 xs:right-4 sm:top-8 sm:right-16 xl:top-20 xl:right-44 lg:top-10 lg:right-24 md:top-8 md:right-28">
        <p className="text-primary xs:text-sm sm:text-2xl md:text-4xl lg:text-6xl font-extrabold leading-tight">
          Carry your Funk
        </p>
        <p className="text-primary xs:text-sm sm:text-base md:text-xl lg:text-2.5xl font-medium md:mt-2 lg:mt-4 mb-2 md:mb-4 lg:mb-8 md:leading-9">
          Trendy handbags collection for your party animal
        </p>
        <PrimaryButton buttonText="See more" iconPath="/img/arrow.svg" />
      </div>
    </div>
  );
};

export default HeroSection;
