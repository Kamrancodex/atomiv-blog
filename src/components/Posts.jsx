import List from "./List";
import { usePosts } from "../PostContext";
export default function Posts() {
  const { posts } = usePosts();
  return (
    <section className="main">
      <List posts={posts} />
    </section>
  );
}
