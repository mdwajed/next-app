import { getPost } from "@/components/lib/data";
import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import React from "react";

export default async function SinglePage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="md:flex gap-24">
      {/* IMAGE CONTAINER */}
      <div className="relative md:w-1/3 h-[500px]">
        <Image
          className=" object-contain w-full"
          src="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=4"
          alt=""
          fill
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="md:w-2/3">
        <h1 className="mb-6 text-3xl font-bold">{post?.title}</h1>
        <div className="flex gap-6">
          <div className="relative w-16 h-16 ">
            <Image
              className=" rounded-full"
              src="https://images.pexels.com/photos/1366909/pexels-photo-1366909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=4"
              alt=""
              fill
              unoptimized
            />
          </div>
          <PostUser userId={post.userId} />
          <div className="flex flex-col gap-3">
            <span className="font-bold text-gray-600">Published</span>
            <span className="font-bold">01.01.2024</span>
          </div>
        </div>
        <div className="text-lg mt-12">{post?.body}</div>
      </div>
    </div>
  );
}
