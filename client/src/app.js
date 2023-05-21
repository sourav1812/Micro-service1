import React, { useEffect, useState } from "react";
import PostCreate from "./postCreate";
import axios from "axios";
import PostList from "./postList";

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const call = async () => {
      const { data: data } = await axios.get("http://localhost:4002/posts");
      console.log(data);
      setPosts(data);
    };
    call();
  }, []);
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
