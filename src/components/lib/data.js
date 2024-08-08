// const users = [
//   { id: 1, name: "Rajib" },
//   { id: 2, name: "Sajib" },
// ];

import { connectDB } from "./connectDB";
import { Post, User } from "./models";
import { unstable_noStore as noStore } from "next/cache";

// const posts = [
//   { id: 1, title: "Post-1", body: "body One", userId: 1 },
//   { id: 2, title: "Post-2", body: "body Two", userId: 2 },
//   { id: 3, title: "Post-3", body: "body Three", userId: 3 },
//   { id: 4, title: "Post-4", body: "body Four", userId: 3 },
// ];

export const getPosts = async () => {
  try {
    await connectDB();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    await connectDB();
    const post = await Post.findOne({ slug });
    return post;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  noStore();
  try {
    await connectDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    await connectDB();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};
