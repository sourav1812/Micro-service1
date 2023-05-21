import React from "react";
import CommentCreate from "./commentCreate";
import CommentList from "./comments";

function PostList({ posts }) {
  // const [posts, setPosts] = useState({});
  // useEffect(() => {
  //   const getPosts = async () => {
  //     const response = await axios.get("http://localhost:4000/posts");
  //     setPosts(response.data);
  //   };
  //   getPosts();
  // }, []);

  return (
    <div>
      <h2>Posts</h2>
      {Object.values(posts)?.map((it) => (
        <>
          <h3>{it.title}</h3>
          <CommentCreate postId={it.id} />
          <CommentList comments={it.comments} />
        </>
      ))}
    </div>
  );
}

export default PostList;
