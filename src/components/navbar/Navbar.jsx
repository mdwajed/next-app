"use client";
import React from "react";
import Links from "./links/Links";
import Link from "next/link";

export default function Navbar() {
 
  return (
    <div className="flex justify-between items-center   max-w-7xl mx-auto h-24  text-white ">
      <div className="text-3xl font-bold"><Link href="/">LOGO</Link> </div>
        <div>
          <Links />
        </div> 
    </div>
  );
}
// bg-[#663399]
