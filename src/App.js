import React from "react";
import Navbar from "./components/Navbar";
import Post from "./components/Post";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="Post-List">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}
