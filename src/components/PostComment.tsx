// Hooks
import { useState } from 'react'

export default function PostComment() {
    const [commentInProgress, setCommentInProgress] = useState("")
    const [newComment, setNewComment] = useState()

    const handleChange = (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      setCommentInProgress(e.currentTarget.value);
    };

    console.log(newComment)
    // const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault()
    // }

    return (
      <form className="post-comment">
        <label htmlFor="post-comment-textarea">Post a comment</label>
        <input 
            id="post-comment-textarea" 
            type="textarea"
            value={commentInProgress}
            onChange={handleChange}
        ></input>
        <button 
            type="submit"
            // onClick={handleSubmit}
        >Post</button>
      </form>
    );
}