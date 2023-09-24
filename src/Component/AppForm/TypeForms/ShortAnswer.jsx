import React from 'react';
import * as Unicons from '@iconscout/react-unicons';


export default function ShortAnswer() {
    return (
        <article>
            <article className='mt-3'>
                <label className='fw-bolder mb-2' htmlFor="text">Question</label>
                <input type="text" className="form-control border-3 w-100 p-3" placeholder="Type here" />
            </article>
            <article className='d-flex mt-4'>
                <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                <button className='btn btn-success'>Save</button>
            </article>
        </article>
    );
}
