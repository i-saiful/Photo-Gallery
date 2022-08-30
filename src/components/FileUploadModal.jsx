import React from 'react';
import fileUpload from '../fetchApi/fileUpload';
import { useSelector, useDispatch } from 'react-redux';
import { fetchImageList } from '../redux/imageReducer'

function FileUploadModal({ setModal }) {
    const userName = useSelector(state => state.auth.userName)
    const token = useSelector(state => state.auth.token)
    const dispatch = useDispatch()
    const [fileInfo, setFileInfo] = React.useState({
        imageUrl: '',
        imageTitle: '',
        imageCategory: ''
    })
    const [fileErrorMsg, setFileErrorMsg] = React.useState({
        imageUrl: false,
        imageTitle: false,
        imageCategory: false
    })

    // on chnage input handler
    const handleInputChange = e => {
        setFileInfo({
            ...fileInfo,
            [e.target.name]: e.target.value
        })

        setFileErrorMsg({
            ...fileErrorMsg,
            imageUrl: false,
            imageTitle: false,
            imageCategory: false
        })
    }

    // check validation
    const fileInfoValidation = () => {
        let flag = true;

        // Title check not empty
        if (!fileInfo.imageTitle) {
            setFileErrorMsg({
                ...fileErrorMsg,
                imageTitle: true
            })
            flag &&= false
        }

        // category check
        if (!fileInfo.imageCategory) {
            setFileErrorMsg({
                ...fileErrorMsg,
                imageCategory: true
            })
            flag &&= false
        }

        // url check function
        if (!fileInfo.imageUrl) {
            setFileErrorMsg({
                ...fileErrorMsg,
                imageUrl: true
            })
            flag &&= false
        } else {
            // url validation check
            const regex = /^https?:\/\/(.+?)\./
            if (!regex.test(fileInfo.imageUrl)) {
                setFileErrorMsg({
                    ...fileErrorMsg,
                    imageUrl: true
                })
                flag &&= false
            }
        }

        return flag;
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const flag = fileInfoValidation();
        // flag return True or False all input field
        if (flag) {
            const upFile = {
                ...fileInfo, token,
                uploadedBy: userName,
                date: new Date(),
                feedback: 0
            }
            // upload image info => firebase
            fileUpload(upFile);
            setModal(false);

            // update image list
            dispatch(fetchImageList(token))
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
                                <input type="url" name="imageUrl"
                                    className={fileErrorMsg.imageUrl ?
                                        'form-control is-invalid' : 'form-control'}
                                    placeholder='Image URL'
                                    required onChange={(e) => handleInputChange(e)}
                                />
                                <div className="invalid-feedback">
                                    Please provide a valid URL.
                                </div>
                            </div>

                            {/* title */}
                            <div className='mt-3'>
                                <input type="text" name='imageTitle'
                                    className={fileErrorMsg.imageTitle ?
                                        'form-control is-invalid' : 'form-control'}
                                    placeholder='Photo Title'
                                    onChange={(e) => handleInputChange(e)} />

                                <div className="invalid-feedback">
                                    Please given photo title
                                </div>
                            </div>

                            {/* Categories */}
                            <div className="mt-3">
                                <select className={fileErrorMsg.imageCategory ?
                                    "form-select is-invalid" : "form-select"}
                                    required
                                    name='imageCategory'
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