import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function PostCard({ post }) {
  return (
    <div className="flex flex-col gap-5 mb-5 items-start">
      <div className="relative flex h-[400px] w-[70%]">
        <Image
          className="object-contain"
          src="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=4"
          alt=""
          fill
        />
        <span className="text-xs  transform rotate-90  mx-auto">
          01.01.2024
        </span>
      </div>

      <div className="w-[70%]">
        <h1 className="text-2xl mb-4 font-bold">{post.title}</h1>
        <h3 className="text-gray-600  font-light mb-4 w-[90%]">{post.body}</h3>
        <button className="">
          <Link href={`/blog/${post.id}`} className="underline">
            READ MORE
          </Link>
        </button>
      </div>
    </div>
  );
}
