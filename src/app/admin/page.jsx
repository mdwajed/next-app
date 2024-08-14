import React, { Suspense } from "react";
import AdminPosts from "@/components/Admin/AdminPosts";
import AdminPostsForm from "@/components/Admin/AdminPostsForm";
import AdminUsers from "@/components/Admin/AdminUsers";
import AdminUsersForm from "@/components/Admin/AdminUsersForm";
import { Divider } from "@mui/joy";

export const metadata = {
  title: "Admim Page",
  description: "Admim Page Description",
};
export default async function AdminPage() {
  return (
    <div className="">
      <div className="md:flex justify-between gap-12 mb-6">
      <div className="w-1/2">
        <Suspense fallback={<div>loading....</div>}>
          <AdminPosts />
        </Suspense>
      </div>
      <div className="w-1/2">
        <AdminPostsForm />
      </div>
      </div>
      <Divider classname="my-4 h-2 "/>
      <div className="md:flex justify-between gap-12 mt-6">
      <div className="w-1/2">
        <Suspense fallback={<div>loading....</div>}>
          <AdminUsers />
        </Suspense>
      </div>
      <div className="w-1/2">
        <AdminUsersForm fallback={<div>loading....</div>}/>
      </div>
      </div>
    </div>
  );
}
