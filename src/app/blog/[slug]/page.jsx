import { getPost } from "@/components/lib/data";
import PostUser from "@/components/postUser/PostUser";
import Image from "next/image";
import React from "react";
export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);
  return {
    title: post.title,
    description: post.desc,
  };
};
export default async function SinglePage({ params }) {
  const { slug } = params;
  const post = await getPost(slug);

  return (
    <div className="md:flex gap-24">
      {/* IMAGE CONTAINER */}
      <div className="relative md:w-1/3 h-[500px]">
        <Image
          className=" object-cover w-full h-full"
          src={post.img}
          alt=""
          fill
        />
      </div>
      {/* TEXT CONTAINER */}
      <div className="md:w-2/3">
        <h1 className="mb-6 text-3xl font-bold">{post?.title}</h1>
        <div className="flex gap-6">
          <PostUser userId={post.userId} />
          <div className="flex flex-col gap-3">
            <span className="font-bold text-gray-600">Published</span>
            <span className="font-bold">
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className="text-lg mt-12">{post?.desc}</div>
      </div>
    </div>
  );
}
