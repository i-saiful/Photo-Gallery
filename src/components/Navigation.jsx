import React from 'react';
import FileUploadModal from './FileUploadModal';

function Navigation() {
    return (
        <div className='bg-light'>
            <nav className='container d-flex align-items-center jusctigy-content-center p-3'>
                <h1 className='fs-2'>Photo Gallery</h1>
                <div className='dropdown ms-auto'>
                    <button
                        className='btn bg-success bg-opacity-25 dropdown-toggle fs-5'
                        data-bs-toggle="dropdown">Categories</button>
                    <ul className="dropdown-menu" >
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <button className='btn bg-primary bg-opacity-25 ms-4 fs-5'>
                    <i className="bi bi-upload"></i> Upload</button>
                <div className="avatar bg-success bg-opacity-25 ms-4">M</div>
                <div className='ms-4 fs-4 btn btn-outline-primary'>Logout</div>
            </nav>
            {/* <FileUploadModal /> */}
        </div>
    )
}

export default Navigation