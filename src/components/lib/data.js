const users = [
  { id: 1, name: "Rajib" },
  { id: 2, name: "Sajib" },
];

const posts = [
  { id: 1, title: "Post-1", body: "body One", userId: 1 },
  { id: 2, title: "Post-2", body: "body Two", userId: 2 },
  { id: 3, title: "Post-3", body: "body Three", userId: 3 },
  { id: 4, title: "Post-4", body: "body Four", userId: 3 },
];

export const getPosts = async () => {
  return posts;
};
export const getPost = async (id) => {
  const post = posts.find((post) => post.id === parseInt(id));
  return post;
};
export const getUser = async (id) => {
  const user = users.find((user) => user.id === parseInt(id));
  return user;
};
