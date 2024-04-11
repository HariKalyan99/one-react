import React, {useState } from "react";
import { v4 as uuidv4 } from "uuid";

const EditPost = ({updatePosts, post, updateOpen, setUpdateOpen}) => {

    const [getUserId, setUserId] = useState(post.userId);
    const [getTitle, setTitle] = useState(post.title);
    const [getBody, setBody] = useState(post.body);
    const [getTags, setTags] = useState(post.tags);
    const [getReactions, setReactions] = useState(post.reactions);

  const handleForm = (e) => {
    e.preventDefault();
    const userId = Number(getUserId);
    const title = getTitle;
    const body = getBody;
    const tags = getTags.split(",");
    const reactions = Number(getReactions);

    updatePosts({ userId, title, body, tags, reactions, id: post.id});
    setUpdateOpen(!updateOpen)
  };
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ width: "100%", height: "100vh" }}
    >
      <h1>Edit Post</h1>
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
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
          value={getUserId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <label htmlFor="title">
          <h4>Title</h4>
        </label>
        <input
          id="title"
          type="text"
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
          value={getTitle}
          onChange={(e) => setTitle(e.target.value)}
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
          className="w-75"
          value={getBody}
          onChange={(e) => setBody(e.target.value)}
        />
        <label htmlFor="tags">
          <h4>Tags</h4>
        </label>
        <input
          id="tags"
          type="text"
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
          value={getTags}
          onChange={(e) => setTags(e.target.value)}
        />
        <label htmlFor="reactions">
        <h4>Reactions</h4>
        </label>
        <input
          id="reactions"
          type="number"
          className="w-75"
          style={{
            height: "20%",
            margin: "15px",
            borderRadius: "10px",
            padding: "5px",
          }}
          value={getReactions}
          onChange={(e) => setReactions(e.target.value)}
        />
        <button
          type="submit"
          className="w-50 btn btn-primary"
          style={{ height: "50px", margin: "10px", border: "none" }}
        >
          Update Post
        </button>
        
      </form>
      <button
          type="button"
          className="w-50 btn btn-primary"
          style={{ height: "50px", margin: "10px", border: "none" }}
          onClick={() => setUpdateOpen(!updateOpen)}
        >
          Don't update
        </button>
    </div>
  );
};



export default EditPost;
