"use client";

import Image from "next/image";
import React from "react";
import heroImage from "@public/assets/resume-builder-banner.webp";
import { signIn } from "next-auth/react";

const HeroSection = () => {
  return (
    <div className="flex justify-between gap-7 flex-col md:flex-row items-center text-center">
      <div className="flex flex-col">
        <h1 className=" text-2xl">
          Free Online Resume Builder: Make Yours in Minutes
        </h1>
        <button
          onClick={() => signIn('google')}
          className=" bg-orange-400 p-3 border-2 border-black m-2 hover:bg-orange-500"
        >
          Build a Resume
        </button>
      </div>
      <Image
        className="px-4"
        width={500}
        height={500}
        alt="hero"
        src={heroImage.src}
      />
    </div>
  );
};

export default HeroSection;
