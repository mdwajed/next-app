"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Links() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const [open, setOpen] = useState(false);
  // TEMPORARY
  //  const session = true;
  const isAdmin = true;
  const links = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
    { title: "Blog", url: "/blog" },
  ];

  return (
    <div className="">
      <div className="hidden md:flex items-center  justify-between gap-2 text-sm md:text-base lg:text-lg">
        {links.map((link) => (
          <Link href={link.url} key={link.title}>
            <span
              className={`px-4 py-2 rounded-3xl ${
                pathname === link.url
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              }`}
            >
              {link.title}
            </span>
          </Link>
        ))}

        {isAdmin && (
          <Link href="/admin">
            <span
              className={`px-4 py-2 rounded-3xl ${
                pathname === "/admin"
                  ? "bg-white text-black"
                  : "bg-transparent text-white"
              }`}
            >
              Admin
            </span>
          </Link>
        )}

        {status === "authenticated" ? (
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="text-sm md:text-base lg:text-lg text-black bg-white px-3 py-1 "
          >
            Logout
          </button>
        ) : (
          <Link href="/login">
            <span className="text-sm md:text-base lg:text-lg text-black bg-white px-3 py-2 ">
              Login
            </span>
          </Link>
        )}
      </div>
      <Image
        className="block md:hidden"
        src="/menu.png"
        alt=""
        width={30}
        height={20}
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="absolute flex flex-col items-center justify-center gap-8 top-24 right-0 w-[50%] h-[calc(100vh-[80px])] bg-[#663399] p-6 rounded-lg">
          {links.map((link) => (
            <Link href={link.url} key={link.title}>
              <span
                className={`px-4 py-2 rounded-3xl ${
                  pathname === link.url
                    ? "bg-white text-black"
                    : "bg-transparent text-white"
                }`}
              >
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
