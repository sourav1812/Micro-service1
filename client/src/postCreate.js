import React, { useState } from "react";
import axios from "axios";

function PostCreate() {
  const [post, setPost] = useState("");

  const handleClick = async (e) => {
    e.preventDefault();
    await axios.post("http://posts.com/posts/create", {
      title: post,
    });

    setPost("");
  };
  return (
    <div>
      <form onSubmit={handleClick}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={post}
            onChange={(e) => setPost(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default PostCreate;
