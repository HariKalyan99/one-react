import React, { useContext } from "react";
import Postcard from "./Postcard";
import { PostListStore } from "../store/PostStore";

const Dashboard = () => {
    const { postList, delPosts, updatePosts } = useContext(PostListStore)
  return (
    <div className="album py-5 bg-body-tertiary w-100">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {postList.map((post) => (
            <Postcard key={post.id} updatePosts={updatePosts} post={post} delPosts={delPosts}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
