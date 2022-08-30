import React from 'react';
import CommentList from '../components/CommentList';
import Comment from '../components/Comment';
import { useLocation } from 'react-router-dom';

function ImageFeedback() {
    const {
        date,
        imageTitle,
        uploadedBy,
        imgId,
        imageUrl,
        feedback
    } = useLocation().state;

    return (
        <div className='mt-5 container'>
            <div className='card'>
                <img src={imageUrl}
                    className="card-img-top " alt={imageTitle} height="400" />
                <div className='card-footer'>
                    The name of the picture is <span className='fw-bold'>{imageTitle}</span>,
                    This picture has been submitted
                    by <span className='fw-bold'>{uploadedBy}</span> on <span
                        className='text-muted fst-italic'>{new Date(date).toDateString()}</span>.
                </div>
            </div>
            <CommentList imgId={imgId} />
            <Comment img={{ imgId, feedback }} />
        </div>
    )
}

export default ImageFeedback