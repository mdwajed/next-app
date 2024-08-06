import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <div className="my-24 ">
      <div className="flex gap-24 ">
        <div className="flex-1 space-y-10">
          <h1 className="text-8xl font-semibold">Creative Thoughts Agency.</h1>
          <h3 className="text-xl">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
            blanditiis adipisci minima reiciendis a autem assumenda dolore.
          </h3>
          <div className="flex gap-6">
            <button className=" py-4 bg-[#2196f3] w-[120px] capitalize text-white font-semibold rounded-md">
              Learn More
            </button>
            <button className=" py-5 bg-white w-[120px] capitalize text-black font-semibold rounded-md">
              Contact
            </button>
          </div>
          <div className="mt-10">
            <Image
              className=""
              src="/brands.png"
              alt=""
              width={600}
              height={800}
            />
          </div>
        </div>
        <div className="flex-1 w-[600px] h-[600px] relative">
          <Image
            className=""
            src="/hero.gif"
            alt=""
            fill
            // width={500}
            // height={600}
          />
        </div>
      </div>
    </div>
  );
}
