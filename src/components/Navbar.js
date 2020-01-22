import React from "react";
import "../styles/styles.css";

export default function Navbar() {
  return (
    <div className="NavBar">
      <h1 id="heading">
        <img src="https://pbs.twimg.com/profile_images/1197561676393926656/KUZlGyLX_400x400.jpg" />
        <span>reddit</span>
      </h1>
      <input
        type="text"
        className="SearchBar"
        placeholder="Search r/SomeSubreddit"
      />
    </div>
  );
}
