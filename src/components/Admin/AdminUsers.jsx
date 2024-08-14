import Image from "next/image";
import React from "react";
import { deleteUser } from "@/components/lib/action";
import { getUsers } from "@/components/lib/data";
import { Avatar } from "@mui/joy";

export default async function AdminUsers() {
  const users = await getUsers();
  return (
    <div>
      <h1 className="text-xl font-bold mb-2">Users</h1>
      {users.map((user) => (
        <div className="flex justify-between" key={user.id}>
          <div className="  mb-2">
            <Avatar
              src={user.img || "/noAvatar.png"}
              alt=""
              width={60}
              height={60}
              className="rounded-full"
            />
            <small className="">{user.username}</small>
          </div>
          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className="bg-[#2196f3] px-2 py-1 rounded-md">Delete</button>
          </form>
        </div>
      ))}
    </div>
  );
}
