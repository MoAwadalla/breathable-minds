import React from "react";
import Comment from "./Comment";

export default function CommentList(props) {
  return (
    <div className="commentList" style={{textAlign:'center'}}>
      <h5 className="text-muted mb-4" >
        Comments{props.comments.length > 0 ? "s" : ""}
      </h5>

      {props.comments.length === 0 && !props.loading ? (
        <div className="alert text-center alert-info">
          Be the first to comment
        </div>
      ) : null}

      {props.comments.map((comment, index) => (
        <Comment key={index} comment={comment} />
      ))}
    </div>
  );
}