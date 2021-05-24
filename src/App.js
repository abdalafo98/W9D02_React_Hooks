import logo from "./logo.svg";
import "./App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([
    { userId: 1, id: 101, title: "asadd", body: "asdaas" },
    { userId: 2, id: 102, title: "aaaa", body: "bbbbb" },
  ]);
  const [userId, setUserId] = useState(1);
  const [id, setId] = useState(100);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const appNewPost = () => {
    setPosts([...posts, { userId, id, title, body }]);
  };

  const newPost = posts.map((post, index) => {
    return (
      <p key={index}>
        title:{post.title}
        <br />
        <span>body:{post.body}</span>
      </p>
    );
  });
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      setPosts(res.data);
    });
  }, []);
  return (
    <div className="App">
      <h1>Blog App</h1>
      {newPost}
      <input
        type="text"
        placeholder="User Id"
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="id"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="body"
        onChange={(e) => {
          setBody(e.target.value);
        }}
      />
      <button onClick={appNewPost}>Add Post</button>
    </div>
  );
}

export default App;
