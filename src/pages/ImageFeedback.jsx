import React, {useEffect, useState} from 'react';
import CommentList from '../components/CommentList';
import Comment from '../components/Comment';
import { useLocation } from 'react-router-dom';
import { fetchComment } from '../redux/commentReducer';
import { useDispatch, useSelector } from 'react-redux';

function ImageFeedback() {
    const {
        date,
        imageTitle,
        uploadedBy,
        imgId,
        imageUrl,
        feedback
    } = useLocation().state;
    // const [comments, setComments] = useState(null)

    const token = useSelector(state => state.auth.token)
    // const dispatch = useDispatch();
    // const comments = useSelector(state => state.comment.commentList)
    // console.log(comments);
    
    // function getComment() {
    //     fetchComment(token, imgId)
    //     console.log(fetchComment(token, imgId));
    // }

    // getComment();

    // const getComment = useSelector(state => state.comment.commentList)
    // const comments = useSelector(state => state.comment.commentList)
    
    // useEffect(()=> {
    //     setComments({
    //         ...comments,
    //         getComment
    //     })
    //     console.log(comments);
    // },[])


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
            {/* <hr /> */}
            <CommentList imgId={imgId} />
            <Comment img={{imgId, feedback}} />
        </div>
    )
}

export default ImageFeedback