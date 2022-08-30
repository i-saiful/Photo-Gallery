import React from 'react';
import Image from './Image';
import { useSelector } from 'react-redux';
import Spinner from './Spinner';

function Images(props) {
    const { title, imageList } = props;
    const loading = useSelector(state => state.img.isImgListLoading)

    let image = null;
    if (imageList) {
        image = imageList.map(img =>
            <Image key={img.imgId} img={img} />
        )
    }

    if (loading) {
        // Spinner
        return (
            <div className='d-flex align-items-center justify-content-center' style={{ height: '60vh' }}>
                <Spinner />
            </div>
        )

    } else {
        return (
            <main className='container'>
                <p className='fw-bolder border-bottom border-info my-4 fs-3'>{title || 'All'} Images</p>
                <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                    {image}
                </div>
            </main>
        )
    }
}

export default Images