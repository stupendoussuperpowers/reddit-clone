import React from "react";
import "../styles/styles.css";

export default function Posts() {
  return (
    <div className="post">
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
        <p className="post-user">Posted by u/lollipop</p>
        <p className="post-text">
          This is the post body. Very interesting post, wow!
        </p>
        Comments go here
      </div>
    </div>
  );
}
