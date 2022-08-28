import React from 'react';
import CommentList from '../components/CommentList';
import Comment from '../components/Comment';

function ImageFeedback() {
    return (
        <div className='mt-5'>
            {/* <div> */}
                <img src="https://github.com/mdo.png"
                    class="card-img-top rounded" alt="name" height="400" />
            {/* </div> */}
            {/* <hr /> */}
            <CommentList />
            <CommentList />
            <Comment />
        </div>
    )
}

export default ImageFeedback