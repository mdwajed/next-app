import Image from "next/image";
import React from "react";

export default function ContactPage() {
  return (
    <div className="md:flex gap-24 my-16 mx-auto">
      <div className="flex-1  h-[600px] relative flex items-center">
        <Image className=" object-contain" src="/contact.png" alt="" fill />
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <input
          type="text"
          name="name"
          placeholder="Name and Surname"
          className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md"
        />
        <input
          type="text"
          name="email"
          placeholder="Email Address"
          className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md"
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone Number (optional)"
          className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md"
        />
        <textarea
          name="message"
          placeholder="Message"
          cols="30"
          rows="8"
          className="bg-[#2d2b42] p-5 border-none outline-none text-white rounded-md"
        ></textarea>
        <button className="bg-[#2196f3] text-white border-none p-5 rounded-md font-bold">
          Send
        </button>
      </div>
    </div>
  );
}
