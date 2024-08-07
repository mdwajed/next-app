import { getPosts } from "@/components/lib/data";
import PostCard from "@/components/postCard/PostCard";
import React from "react";

export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {posts.map((post) => (
        <div className="" key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
