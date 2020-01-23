import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import PostCard from "./components/SubReddit/PostCard"
import SubInfo from "./components/SubReddit/SubInfo"
import Card from "./components/Card";
import "./styles/styles.css";

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
      <div className="post-wrapper">
        <div className="column-1">
          <PostCard />
        </div>

        <div className="column-2">
          <SubInfo />
          <SubInfo />
        </div>
      </div>

    </div>
  );
}
