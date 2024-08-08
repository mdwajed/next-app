"use server";
import { revalidatePath } from "next/cache";
import { connectDB } from "./connectDB";
import { Post } from "./models";

export const addPost = async (formData) => {
 
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");
  //   const userId = formData.get("userId");
  const { title, desc, slug, userId } = Object.fromEntries(formData);
  try {
    connectDB();
    const newPost =new Post({
      title,
      desc,
      slug,
      userId,
    });
    await newPost.save()
    console.log("save to db")
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
    return {error: "something went wrong"};
  }
};
export const deletePost = async (formData) => {

  const { id} = Object.fromEntries(formData);
  try {
    connectDB();
    await Post.findByIdAndDelete(id)
    console.log("deleted from db")
    revalidatePath("/blog")
  } catch (error) {
    console.log(error);
    return {error: "something went wrong"};
  }
};
