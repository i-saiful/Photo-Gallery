import React from 'react'

function Spinner() {
    return (
        <div className='spinner-border text-primary'
            style={{ width: '7rem', height: '7rem' }}>
            <span className="visually-hidden">Loading...</span>
        </div>
    )
}

export default Spinner