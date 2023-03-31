// Components
import PostComment from './PostComment'
import CommentList from './CommentList'

// Hooks
import { useState } from 'react'

export default function Comments() {
    const [comments, setComments] = useState([])

    return (
        <section className="comments">
            <h2>User comments and growing tips</h2>
            <PostComment />
            <CommentList />
        </section>
    )
}