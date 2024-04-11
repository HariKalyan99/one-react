import React, { useContext, useRef } from "react";
import { v4 as uuidv4 } from "uuid";
import { PostListStore } from "../store/PostStore";

const CreatePost = () => {

    const { addPosts } = useContext(PostListStore)
  const userIdRef = useRef("");
  const titleRef = useRef("");
  const bodyRef = useRef("");
  const tagsRef = useRef("");
  const reactionsRef = useRef("");

  const handleForm = (e) => {
    e.preventDefault();
    const userId = Number(userIdRef.current.value);
    const title = titleRef.current.value;
    const body = bodyRef.current.value;
    const tags = tagsRef.current.value.split(",");
    const reactions = Number(reactionsRef.current.value);

    addPosts({ userId, title, body, tags, reactions, id: uuidv4() });
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <h1>Create Post</h1>
      <form
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: "60%", width: "60%" }}
        onSubmit={(e) => handleForm(e)}
      >
        <label htmlFor="userId">
          <h4>User Id</h4>
        </label>
        <input
          id="userId"
          type="text"
          ref={userIdRef}
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
        />
        <label htmlFor="title">
          <h4>Title</h4>
        </label>
        <input
          id="title"
          type="text"
          ref={titleRef}
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
        />
        <label htmlFor="floatingTextarea2">
          <h4>Body</h4>
        </label>
        <textarea
          id="body"
          placeholder="Leave a comment here"
          style={{
            height: "200px",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
          ref={bodyRef}
          className="w-75"
        />
        <label htmlFor="tags">
          <h4>Tags</h4>
        </label>
        <input
          id="tags"
          type="text"
          ref={tagsRef}
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
        />
        <label htmlFor="reactions">
        <h4>Reactions</h4>
        </label>
        <input
          id="reactions"
          type="number"
          ref={reactionsRef}
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
        />
        <button
          type="submit"
          className="w-50 btn btn-primary"
          style={{ height: "50px", margin: "10px", border: "none" }}
        >
          Add Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
