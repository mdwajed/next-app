"use client";
import React, { useEffect } from "react";
import GoogleButton from "react-google-button";
import { FiGithub } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const SocialLogin = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);
  const handleSocialLogin = async (provider) => {
    await signIn(provider);
  };
  return (
    <div>
      <GoogleButton onClick={() => handleSocialLogin("google")} />
      <button
        onClick={() => handleSocialLogin("github")}
        className="mt-4 flex  items-center"
      >
        <span className=" py-4  px-3 bg-white ">
          <FiGithub className="bg-black rounded-full text-2xl" />
        </span>
        <span className="bg-[#f44336] py-4 px-7 ">Log in with Github</span>
      </button>
      <button
        onClick={() => handleSocialLogin("facebook")}
        className="mt-4 flex  items-center"
      >
        <span className=" py-4  px-3 bg-white ">
          <FaFacebookF className="text-[#3d5afe] font-bold rounded-full text-2xl" />
        </span>
        <span className="bg-[#0276aa] py-4 px-5 ">Log in with Facebook</span>
      </button>
    </div>
  );
};

export default SocialLogin;
