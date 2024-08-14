import Image from "next/image";
import React from "react";
import { getPosts } from "@//components/lib/data";
import { deletePost } from "@/components/lib/action";

export default async function AdminPosts() {
  const posts = await getPosts();
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Posts</h1>
      {posts.map((post) => (
        <div className="flex justify-between" key={post.id}>
          <div className="mb-2">
            <Image
              src={post.img || "/noAvatar.png"}
              alt=""
              width={80}
              height={60}
            />
            <small className="">{post.title}</small>
          </div>
          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className="bg-[#2196f3] px-2 py-1 rounded-md">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
