import React from "react";
import { getUser } from "@/components/lib/data";

export default async function PostUser({ userId }) {
  const user = await getUser(userId);

  return (
    <div>
      <div className="flex flex-col gap-3">
        <span className="font-bold text-gray-600">Author</span>
        <span className="font-bold">{user.name}</span>
      </div>
    </div>
  );
}
