import React from "react";
import { getUser } from "@/components/lib/data";
import Image from "next/image";

export default async function PostUser({ userId }) {
  const user = await getUser(userId);

  return (
    <div>
      <div className="flex  gap-5">
        <div className="relative w-16 h-16 ">
          <Image
            className=" rounded-full object-cover"
            src={user.img ? user.img : "/noavater.png"}
            alt=""
            fill
            unoptimized
          />
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-gray-600">Author</span>
          <span className="font-bold">{user.username}</span>
        </div>
      </div>
    </div>
  );
}
