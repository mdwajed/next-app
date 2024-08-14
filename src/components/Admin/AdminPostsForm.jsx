"use client";
import React from "react";
import { useFormState } from "react-dom";
import { addPost } from "@/components/lib/action";
import { useSession } from "next-auth/react";
export default function AdminPostsForm() {
  const [state, formAction] = useFormState(addPost, undefined);
  const { data: session, status } = useSession(); // Destructure session and status
  console.log(session, status);
  if (status === "loading") {
    return <div>Loading...</div>; // Handle loading state
  }

  if (!session) {
    return <div>Please log in to add a post.</div>; // Handle the case where the user is not logged in
  }
  return (
    <form action={formAction} className="flex flex-col gap-5">
        <h1 className="text-xl mb-2 font-bold">Add New Posts</h1>
      <input type="hidden" name="userId" value={session?.user?.id || ""} />
      <input
        type="text"
        name="title"
        placeholder="Title"
        className="p-4 bg-[#2d2b42] "
      />
      <input
        type="text"
        name="slug"
        placeholder="Slug"
        className="p-4 bg-[#2d2b42] "
      />
      <input
        type="text"
        name="img"
        placeholder="Photo URL"
        className="p-4 bg-[#2d2b42] "
      />
      <textarea
        type="text"
        name="desc"
        placeholder="Description"
        rows={8}
        className=" p-4 bg-[#2d2b42] border-none"
      />
      <button className="bg-[#2196f3]  p-4 ">Add Post</button>
      {state && state.error && (
        <div className="text-red-500">{state.error}</div>
      )}
    </form>
  );
}
