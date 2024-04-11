import { createContext, useEffect, useReducer, useState } from "react";
import axios from "axios";

function pureReducerFunction (currentState, action) {
    let newPostList = currentState;
    switch(action.type){
        case 'INITIAL_LIST':
            return newPostList = action.payload.data;
        case 'ADD_POST':
            return newPostList = [action.payload.data, ...currentState];
        case 'DEL_POST':
            const deletedPosts = currentState.filter((x) => x.id !== action.payload.id);
            return newPostList = deletedPosts;
        case 'UPDATE_POST':
            const index = currentState.findIndex((x) => x.id === action.payload.id);
            const newUpdatedPostList = currentState.splice(index, 1, action.payload.data);
            return [...newPostList]
        default:
            return newPostList
    }
}



export const PostListStore = createContext({
  postList: [],
  addPosts: () => {},
  delPosts: () => {},
  updatePosts: () => {},
  showPage: () => {},
  page: "createPost",
});

const PostListStoreProvider = ({ children }) => {
  const [page, setPage] = useState("dashboard");

//   const [postList, setPostList] = useState([]);
  const [addPost, setAddPost] = useState([]);
  const [delPost, setDelPost] = useState("");
  const [updatePost, setUpdatePost] = useState([]);

  const [postList, dispatchPostList] = useReducer(pureReducerFunction, [])

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;
    const initialFetch = async () => {
      try {
        const { data } = await axios.get("http://localhost:8081/posts", signal);
        dispatchPostList({type: "INITIAL_LIST", payload: {
            data
        }})
      } catch (error) {
        console.log("Error", error);
      }
    };

    initialFetch();
    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    const addPostList = async ({
      userId,
      title,
      body,
      tags,
      reactions,
      id,
    }) => {
      try {
        const { data } = await axios.post("http://localhost:8081/posts", {
          id,
          userId,
          title,
          body,
          tags,
          reactions,
        });
        dispatchPostList({type: "ADD_POST", payload: {
            data
        }})
      } catch (error) {
        console.log(error);
      }
    };

    if (addPost.title) {
      addPostList(addPost);
    }
  }, [addPost]);

  useEffect(() => {
    const delPostList = async (id) => {
      try {
        await axios.delete(`http://localhost:8081/posts/${id}`);
        dispatchPostList({type: 'DEL_POST', payload: {
            id
        }})
        
        // setPostList(deletedPosts);
      } catch (error) {
        console.log(error);
      }
    };

    if (delPost) {
      delPostList(delPost);
    }
  }, [delPost]);

  useEffect(() => {
    const updatePostList = async ({
      userId,
      title,
      body,
      tags,
      reactions,
      id,
    }) => {
      try {
        const { data } = await axios.put(`http://localhost:8081/posts/${id}`, {
          userId,
          title,
          body,
          tags,
          reactions,
        });
        // const deletedPosts = postList.filter(x => x.id !== id);
        dispatchPostList({type: 'UPDATE_POST', payload: {
            data,
            id
        }})
      } catch (error) {
        console.log(error);
      }
    };

    if (updatePost.title) {
      updatePostList(updatePost);
    }
  }, [updatePost]);

  const addPosts = (post) => {
    setAddPost(post);
  };

  const delPosts = (id) => {
    setDelPost(id);
  };

  const updatePosts = (post) => {
    setUpdatePost(post);
  };

  const showPage = (pg) => {
    setPage(pg);
  };

  return (
    <PostListStore.Provider
      value={{ postList, addPosts, delPosts, updatePosts, showPage, page }}
    >
      {children}
    </PostListStore.Provider>
  );
};

export default PostListStoreProvider;
