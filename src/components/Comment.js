import React from "react";
import "../styles.css";

export default function Comment() {
  return (
    <div className="post comment">
      <div className="votes">
        <img
          className="upvote"
          alt="upvote"
          src="https://image.flaticon.com/icons/svg/2316/2316622.svg"
        />
        <p>5</p>
        <img
          className="downvote"
          alt="downvote"
          src="https://image.flaticon.com/icons/svg/2316/2316643.svg"
        />
      </div>
      <div className="post-right">
        <p className="post-user">Posted my chakri</p>
        <p className="post-text">wow nice post thanks</p>
      </div>
    </div>
  );
}
