import React from "react";

import Post from "./Post";

import Card from "./Card";
import "../styles/styles.css";

export default function SubReddit() {
  return (
    <div className="App">
    
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