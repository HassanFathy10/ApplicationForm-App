import React from 'react';
import * as Unicons from '@iconscout/react-unicons';

export default function FileUpload() {
    return (
        <article>
            <article className='mt-3'>
                <label className='fw-bolder mb-2' htmlFor="file">FileUpload</label>
                <input className='d-flex fw-medium mt-2'  type="file" />
            </article>
            <article className='d-flex mt-4'>
                <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                <button className='btn btn-success'>Save</button>
            </article>
        </article>
    );
}
