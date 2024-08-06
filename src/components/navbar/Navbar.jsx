"use client";
import React from "react";
import Links from "./links/Links";

export default function Navbar() {
 
  return (
    <div className="flex justify-between items-center   max-w-7xl mx-auto h-24 px-4 text-white ">
      <div className="text-3xl font-bold">LOGO</div>
        <div>
          <Links />
        </div> 
    </div>
  );
}
// bg-[#663399]
