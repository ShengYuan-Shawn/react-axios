import React, { useState } from "react";
import axios from "axios";
import "./App.css";

// Declaring API's URL
const baseURL = "https://jsonplaceholder.typicode.com/comments";

function App() {
  const [post, setPost] = React.useState(null);
  const [newName, setNewName] = React.useState("");
  const [newEmail, setNewEmail] = React.useState("");
  const [newBody, setNewBody] = React.useState("");

  // GET Request
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    });
  }, []);

  // POST Request
  function createPost() {
    axios
      .post(baseURL, { title: "Hello World!", body: "This is a new post." })
      .then((response) => {
        setPost(response.data);
      });
  }

  // PUT Request
  function updatePost() {
    axios
      .put(`${baseURL}/1`, {
        title: "Hello World!",
        body: "This is an updated post.",
      })
      .then((response) => {
        setPost(response.data);
      });
  }

  // DELETE Request
  function deletePost() {
    axios.delete(`${baseURL}/1`).then(() => {
      alert("Post deleted!");
      setPost(null);
    });
  }

  if (!post) return null;

  return (
    <div>
      <h1 className="title">API Request</h1>
      <div className="get-container">
        <h2 className="title">Get Request</h2>
      </div>
      <div className="post-container">
        <form className="post-form">
          <label>Name</label>
          <input></input>
          <label>E-mail</label>
          <input></input>
          <label>Body</label>
          <input></input>
          <button onClick={createPost}>Create Post</button>
        </form>
      </div>
      <div className="put-container">
        <button onClick={updatePost}>Update Post</button>
      </div>
      <div>
        <button onClick={deletePost}>Delete Post</button>
      </div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default App;
