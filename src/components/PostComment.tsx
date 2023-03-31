// Hooks
import { useState } from "react";

export default function PostComment() {
  const [commentInProgress, setCommentInProgress] = useState("");
  const [newComment, setNewComment] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCommentInProgress(e.currentTarget.value);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    setNewComment(commentInProgress);
    setCommentInProgress("")
};

  return (
    <>
      <form className="post-comment" onSubmit={handleSubmit}>
        <label htmlFor="post-comment-textarea">Add your comment</label>
        <input
          id="post-comment-textarea"
          type="textarea"
          value={commentInProgress}
          onChange={handleChange}
        ></input>
        <button className="form" type="submit">
          Post
        </button>
      </form>
    </>
  );
}
