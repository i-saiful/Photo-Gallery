import React from 'react';
import fileUpload from '../fetchApi/fileUpload';
import { useSelector } from 'react-redux';

function FileUploadModal({ setModal }) {
    const fileName = React.useRef(null)
    const userName = useSelector(state => state.auth.userName)
    const token = useSelector(state => state.auth.token)
    const [fileInfo, setFileInfo] = React.useState({
        fileTitle: '',
        fileCategory: ''
    })
    const [fileErrorMsg, setFileErrorMsg] = React.useState({
        fileName: false,
        fileTitle: false,
        fileCategory: false
    })

    const handleInputChange = e => {
        setFileInfo({
            ...fileInfo,
            [e.target.name]: e.target.value
        })

        setFileErrorMsg({
            ...fileErrorMsg,
            fileName: false,
            fileTitle: false,
            fileCategory: false
        })
    }

    // check validation
    const fileInfoValidation = () => {
        let flag = true;

        if (!fileInfo.fileTitle) {
            setFileErrorMsg({
                ...fileErrorMsg,
                fileTitle: true
            })
            flag &&= false
        }

        if (!fileInfo.fileCategory) {
            setFileErrorMsg({
                ...fileErrorMsg,
                fileCategory: true
            })
            flag &&= false
        }

        if (!fileName.current.files[0]) {
            setFileErrorMsg({
                ...fileErrorMsg,
                fileName: true
            })
            flag &&= false
        }

        return flag;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const flag = fileInfoValidation(); // return true
        // console.log(flag);
        if (flag) {
            console.log(fileName.current.files);
            const upFile = {
                ...fileInfo, token,
                fileName: fileName.current.files[0].name,
                fileSize: fileName.current.files[0].size,
                // file: fileName.current.files[0],
                uploadedBy: userName,
                date: new Date()
            }
            fileUpload(upFile);
        }
    }

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
                        <form className=''>
                            {/* File */}
                            <div>
                                <input type="file" name="fileName"
                                    className={fileErrorMsg.fileName ?
                                        'form-control is-invalid' : 'form-control'}
                                    accept="image/*" required
                                    ref={fileName}
                                />
                                <div className="invalid-feedback">
                                    Please choose a file.
                                </div>
                            </div>

                            {/* title */}
                            <div className='mt-3'>
                                <input type="text" name='fileTitle'
                                    className={fileErrorMsg.fileTitle ?
                                        'form-control is-invalid' : 'form-control'}
                                    placeholder='Photo Title'
                                    onChange={(e) => handleInputChange(e)} />

                                <div className="invalid-feedback">
                                    Please given photo title
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="mt-3">
                                <select className={fileErrorMsg.fileCategory ?
                                    "form-select is-invalid" : "form-select"}
                                    required
                                    name='fileCategory'
                                    onChange={(e) => handleInputChange(e)} >
                                    <option value="">Open this select menu</option>
                                    <option value="Bike">Bike</option>
                                    <option value="Car">Car</option>
                                    <option value="Bicycle">Bicycle</option>
                                </select>
                                <div className="invalid-feedback">
                                    Please choose a categories
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* modal footer */}
                    <div className="modal-footer">
                        <button className='btn btn-danger'
                            onClick={() => setModal(false)}>Close</button>
                        <button className='btn btn-primary'
                            onClick={(e) => handleSubmit(e)}
                        >Upload</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FileUploadModal