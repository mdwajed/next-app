"use client";
import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialLogin from "@/components/socialLogin/SocialLogin";
import Link from "next/link";

export default function LoginPage() {
  const { status } = useSession();
  const router = useRouter();
  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (result?.error) {
      console.error("Login failed:", result.error);
      return;
    }
    e.target.reset();
  };
  // Redirect to homepage

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-3xl text-center font-extrabold mb-2">
        Log in with credentials
      </h1>
      <form onSubmit={handleSignIn}>
        <div className="flex flex-col gap-2 w-60">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="border-none p-3 text-gray-700"
            placeholder="Enter Your Email"
            required
          />
          <label>password</label>
          <input
            type="password"
            name="password"
            className="border-none p-3 text-gray-700"
            // placeholder="Enter Your password"
            required
          />
          <button
            type="submit"
            className="border-none p-3 bg-[#d50000] mt-3 uppercase"
          >
            Login
          </button>
        </div>
      </form>
      <h1 className=" text-center my-4">Or social Log in </h1>
      <SocialLogin />
      <h1 className="mt-2">
        Don&apos;t have an account?
        <Link className="text-red-900 font-bold" href="/register">
          Sign up
        </Link>
      </h1>
    </div>
  );
}
