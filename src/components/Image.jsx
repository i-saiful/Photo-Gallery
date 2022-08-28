import React from 'react'

function Image() {
  return (
    <div className='p-1'>
      <div className='card'>
        <img src="https://github.com/mdo.png" className="card-img-top" alt="name"></img>
        <div className="card-footer">
          <small className="text-muted d-flex">
            Uploaded By Sakib 
            <span className='ms-auto'><i className="bi bi-chat-left-text-fill"></i> 4</span>
          </small>
        </div>
      </div>
    </div>
  )
}

export default Image