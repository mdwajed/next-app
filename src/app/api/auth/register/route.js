import { connectDB } from "@/components/lib/connectDB";
import { User } from "@/components/lib/models";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export const POST = async (request) => {
  try {
    const { username, email, password, img } = await request.json();
    await connectDB();
    const hashedPassword = await bcrypt.hash(password, 14);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
    return NextResponse.json("user created successfully", { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return NextResponse.json(error.message, { status: 500 });
  }
};
