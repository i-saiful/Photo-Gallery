import React from 'react'

function Comment() {
    return (
        <form>
            <div class="form-floating">
                <textarea class="form-control"></textarea>
                <label >Leave a comment here</label>
            </div>
            <div className='d-flex justify-content-between mt-3'>
                <input className='btn btn-danger' type="button" value="close" />
                <input className='btn btn-primary' type="submit" value="Submit"/>
            </div>
        </form>
    )
}

export default Comment