import Image from "next/image";
import React from "react";
import HeroImg from "@/public/img/heroimg.png";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-5 md:py-10 md:px-20">
      <article className="text-black flex flex-col justify-around md:justify-center h-[500px] md:px-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold md:my-[20px] font-jakarta">
          Cleaner and Sustainable Future For{" "}
          <span className="text-[#0E6FFF]">Oceans </span> and the{" "}
          <span className="text-[#0E6FFF]">Planet </span>
        </h1>
        <h2 className="md:my-[20px] font-DM">
          We use blockchain to promote ocean conservation, incentivize positive
          actions, and reward contributions. Our diverse team develops
          innovative solutions through data collection, cleanup events, and an
          in-app store, aimed at a cleaner future.
        </h2>
        <Link href="https://social-saving-pool-bwc4-react-app.vercel.app/">
          <button className=" py-3 px-6 w-[200px] rounded-full border bg-[#0E6FFF] text-white font-semibold hover:bg-[#0157d7] hover:cursor-pointer">
            View WhitePaper
          </button>
        </Link>
      </article>
      <Image src={HeroImg} alt="nexus-logo" className="w-full md:w-[50%]" />
    </div>
  );
};

export default HeroSection;
