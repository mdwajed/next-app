import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Page",
  description: "About Page Description",
};

export default function AboutPage() {
  return (
    <div className="flex gap-24 max-h-screen my-24">
      {/* TEXT */}
      <div className="flex-1 space-y-14">
        <h3 className="text-[#3673fd] text-xl font-extrabold">About Agency</h3>
        <h1 className="text-5xl font-semibold">
          We create digital ideas that are bigger,bolder, <br /> braver and
          better.
        </h1>
        <h2 className="text-xl font-light">
          We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.
        </h2>
        <div className="flex justify-between items-center">
          <h1 className="flex flex-col gap-4">
            <span className="text-[#3673fd] text-3xl font-bold">10 k+</span>
            <span>Year of experience</span>
          </h1>
          <h1 className="flex flex-col gap-4">
            <span className="text-[#3673fd] text-3xl font-bold">234 k+</span>
            <span>People Reached</span>
          </h1>
          <h1 className="flex flex-col gap-4">
            <span className="text-[#3673fd] text-3xl font-bold">5 k+</span>
            <span>Services and plugins</span>
          </h1>
        </div>
      </div>
      {/* IMAGE */}
      <div className="flex-1">
      <Image
        className=""
        src="/about.png"
        alt=""
        width={500}
        height={500}
       
      />
      </div>
    </div>
  );
}
