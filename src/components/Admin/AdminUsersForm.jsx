"use client";
import React from "react";
import { useFormState } from "react-dom";
import { addUser } from "@/components/lib/action";
import { useSession } from "next-auth/react";
export default function AdminUsersForm() {
  const [state, formAction] = useFormState(addUser, undefined);
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
      <h1 className="text-xl mb-2 font-bold">Add New Users</h1>
      {/* <input type="hidden" name="userId" value={session?.user?.id || ""} /> */}
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="p-4 bg-[#2d2b42] "
      />
      <input
        type="text"
        name="email"
        placeholder="Email"
        className="p-4 bg-[#2d2b42] "
      />
      <input
        type="text"
        name="img"
        placeholder="Photo URL"
        className="p-4 bg-[#2d2b42] "
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className=" p-4 bg-[#2d2b42]"
      />
      <select name="isAdmin" className=" p-4 bg-[#2d2b42]">
        <option value="true">isAdmin</option>
        <option value="false">No</option>
        <option value="true">Yes</option>
      </select >
      <button className="bg-[#2196f3]  p-4 ">Add Users</button>
      {state && state.error && (
        <div className="text-red-500">{state.error}</div>
      )}
    </form>
  );
}
