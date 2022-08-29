import React from 'react';
import ImageFeedback from '../pages/ImageFeedback';
import {useNavigate} from 'react-router-dom';

function Image(props) {
  const { uploadedBy, feedback, imageUrl, imageTitle } = props.img;
  const navigate = useNavigate();

  const handleClick = (img) => {
    // navigate('/')
    console.log(img);
  }

  return (
    <div className='p-1'>
      <div className='card' onClick={() => handleClick(props.img)}>
        <img src={imageUrl} className="card-img-top" alt={imageTitle}></img>
        <div className="card-footer">
          <small className="text-muted d-flex">
            Uploaded By {uploadedBy}
            <span className='ms-auto'><i className="bi bi-chat-left-text-fill"></i> {feedback}</span>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Image