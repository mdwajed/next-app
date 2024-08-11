"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function Registerpage() {
  const router = useRouter();
  const handleLogIn = async (e) => {
    e.preventDefault();
    const newUsers = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      img: e.target.img.value,
    };
    console.log(newUsers);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUsers),
      });
      if (res.status === 201) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div   className=" md:w-1/3 mx-auto bg-[#9c27b0] p-8 rounded-md">
      <form
        onSubmit={handleLogIn}
        className="flex flex-col gap-3 "
      >
        <label>Name</label>
        <input
          type="text"
          name="username"
          className="border-none p-3 text-gray-700"
          placeholder="Enter Your Name "
          required
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="border-none p-3 text-gray-700"
          placeholder="Enter Your Email"
          required
        />
        <label>password</label>
        <input
          type="password"
          name="password"
          className="border-none p-3 text-gray-700"
          placeholder="Enter Your password"
          required
        />
        <label>Photo</label>
        <input
          type="text"
          name="img"
          className="border-none p-3 text-gray-700"
          placeholder="Enter Your Photo URl"
        />
     
        <button
          type="submit"
          className="border-none p-3 bg-[#d50000] mt-3 uppercase"
        >
          register
        </button>
      </form>
      <h1 className="mt-2">
        Already have an account?
        <Link className=" font-bold ml-4" href="/login">
         Login
        </Link>
      </h1>
    </div>
  );
}
