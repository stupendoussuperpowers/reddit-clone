import React from "react";
import "../../styles/PostPage.css";
import { Comment } from "./Comment";

export default class PostCard extends React.Component {
  render() {
    return (
      <div className="card-wrapper">
        <h3>This is the post' title</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
        <hr />
        <div>Comments start from here</div>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
      </div>
    );
  }
}