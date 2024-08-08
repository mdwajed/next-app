import { addPost ,deletePost} from "@/components/lib/action";

const ServerActionPage = () => {
  return (
    <div>
      <form action={addPost} className="flex flex-col gap-6 text-black mb-8">
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button className="text-white">create</button>
      </form>

      <form action={deletePost} className="flex flex-col gap-6 text-black">
      <input type="text" placeholder="postId" name="id" />
      <button className="text-white">Delete</button>
      </form>
    </div>
  );
};

export default ServerActionPage;
