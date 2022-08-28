import React from 'react';
import CommentList from '../components/CommentList';
import Comment from '../components/Comment';

function ImageFeedback() {
    return (
        <div className='mt-5 container'>
            <div className='card'>
            <img src="https://github.com/mdo.png"
                className="card-img-top " alt="name" height="400" />
                <div className='card-footer'>
                The name of the picture is "Bangladesh",
                This picture has been submitted by "Saiful" on "2nd",
                The size of which is "10 MB".
            </div>
            </div>
            {/* <hr /> */}
            <CommentList />
            <CommentList />
            <Comment />
        </div>
    )
}

export default ImageFeedback