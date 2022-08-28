import React from 'react'

function Comment() {
    return (
        <form>
            <textarea
                className="form-control"
                placeholder="Leave a comment here" rows="5"></textarea>
            <div className='mt-3 text-end'>
                <input className='btn btn-primary btn-lg' type="submit" value="Submit" />
            </div>
        </form>
    )
}

export default Comment