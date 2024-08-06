import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="flex gap-24 my-16">
      <div className="flex-1 w-[600px] h-[550px] relative">
          <Image
            className=""
            src="/contact.png"
            alt=""
            fill
        
          />
          </div>
      <div className="flex-1 flex flex-col gap-5">
        <input type="text" name="name" placeholder="Name and Surname" className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md" />
        <input type="text" name="email" placeholder="Email Address" className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md"/>
        <input type="text" name="phone" placeholder="Phone Number (optional)" className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md"/>
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="10"
          className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md"
        ></textarea>
      </div>
    </div>
  );
}
