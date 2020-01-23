import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import Card from "./components/Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h2 id="post-head"> Posts</h2>
      <div className="main-wrapper">
        <div className="Post-List">
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Card />
      </div>
    </div>
  );
}
