import React from 'react';
import FileUploadModal from './FileUploadModal';
import { logout } from '../redux/authReducer';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

function Navigation() {
    const dispatch = useDispatch();
    const [modal, setModal] = React.useState(false);
    const userName = useSelector(state => state.auth.userName)


    return (
        <div className='bg-light'>
            <nav className='container d-flex align-items-center jusctigy-content-center p-3'>
                <h1 className='fs-2'>
                    <Link to='/' className='text-decoration-none'>
                        Photo Gallery
                    </Link>
                </h1>
                <div className='dropdown ms-auto'>
                    <button
                        className='btn bg-success bg-opacity-25 dropdown-toggle fs-5'
                        data-bs-toggle="dropdown">Categories</button>
                    <ul className="dropdown-menu" >
                        <li><Link to='/bike' className="dropdown-item" >Bike</Link></li>
                        <li><Link className="dropdown-item" to="/car">Car</Link></li>
                        <li><Link className="dropdown-item" to="/bicycle">Bicycle</Link></li>
                    </ul>
                </div>
                <button className='btn bg-primary bg-opacity-25 ms-4 fs-5'
                    onClick={() => setModal(true)}
                >
                    <i className="bi bi-upload"></i> Upload</button>
                <div className="avatar bg-success bg-opacity-25 ms-4">
                    {userName.trim().charAt(0)}
                </div>
                <div className='ms-4 fs-4 btn btn-outline-primary'
                    onClick={() => dispatch(logout())}
                >Logout</div>
            </nav>
            {modal && <FileUploadModal
                setModal={setModal}
            />}
        </div>
    )
}

export default Navigation