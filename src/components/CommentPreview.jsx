import React from 'react'

function CommentPreview({ comment }) {
    // comment card
    return (
        <div className='my-3 card'>
            <div className="d-flex card-header">
                <div className="avatar bg-success bg-opacity-25 me-2">
                    {comment.userName.trim().charAt(0)}
                </div>
                <div>
                    <div className=' fw-bold'>{comment.userName}</div>
                    <div className='text-muted '>{new Date(comment.date).toDateString()}</div>
                </div>
            </div>
            <div className="card-body">
                <p className='m-0'>
                    {comment.comment}
                </p>
            </div>
        </div>
    )
}

export default CommentPreview