import React, { useState } from 'react';
import commentUpload from '../fetchApi/commentUpload';
import { useSelector, useDispatch } from 'react-redux';
import { addComment } from '../redux/commentReducer';

function Comment({ img }) {
    const [comment, setComment] = useState('');
    const userName = useSelector(state => state.auth.userName)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault()
        if (comment) {
            const { imgId, feedback } = img;
            // feedback update => redux store
            dispatch(addComment({
                comment, userName,
                date: new Date().toDateString()
            }))
            // upload comment => firebase
            commentUpload({ comment, imgId, feedback, userName, token });
            setComment('')
        }
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="mt-3">
            <textarea
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Leave a comment here" rows="5"></textarea>
            <div className='mt-3 text-end'>
                <input className='btn btn-primary btn-lg' type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default Comment