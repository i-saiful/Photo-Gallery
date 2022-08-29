import React from 'react'

function FileUploadModal(props) {
    const {setModal} = props;
    return (
        <div className='modal d-block show'>
            <div className="modal-dialog">
                <div className="modal-content">
                    {/* modal header */}
                    <div className="modal-header">
                        File Upload to Firebase
                    </div>

                    {/* modal body */}
                    <div className="modal-body">
                        <form >
                            <input type="file" name="file"
                                className='form-control'
                                accept="image/*" />
                            <input type="text" name='title' 
                            className='form-control mt-3' 
                            placeholder='Photo Title'/>
                        </form>
                    </div>

                    {/* modal footer */}
                    <div className="modal-footer">
                        <button className='btn btn-danger' 
                        onClick={() => setModal(false)}>Close</button>
                        <button className='btn btn-primary'>Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileUploadModal