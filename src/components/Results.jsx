import { usePosts } from "../PostContext";
export default function Results() {
  const { posts } = usePosts();
  return <p className="para">🚀 {posts.length} atomic posts found</p>;
}
