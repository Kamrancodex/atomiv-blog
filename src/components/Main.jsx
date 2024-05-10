import Posts from "./Posts";
import FormAddPost from "./FormAddPosts";
import { usePosts } from "../PostContext";
export default function Main() {
  const { posts, onAddPost } = usePosts();
  return (
    <main>
      <FormAddPost onAddPost={onAddPost} />
      <Posts posts={posts} />
    </main>
  );
}
