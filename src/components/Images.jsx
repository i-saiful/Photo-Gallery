import React from 'react';
import Image from './Image';

function Images(props) {
    const { title } = props;
    return (
        <main className='container'>
            <p className='fw-bolder border-bottom border-info my-4 fs-3'>{title || 'All'} Images</p>
            <div className='row row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
                <Image />
            </div>
        </main>
    )
}

export default Images