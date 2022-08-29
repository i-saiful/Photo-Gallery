import React from 'react';
import Image from './Image';

function Images(props) {
    const { title, imageList } = props;

    let image = null;
    if (imageList) {
        image = imageList.map(img =>
            <Image key={img.imgId} img={img} />
        )
    }

    return (
        <main className='container'>
            <p className='fw-bolder border-bottom border-info my-4 fs-3'>{title || 'All'} Images</p>
            <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                {image}
            </div>
        </main>
    )
}

export default Images