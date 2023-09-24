import React from 'react'
import * as Unicons from '@iconscout/react-unicons';

export default function YesNoForm() {
    return (
        <article>
            <article className='mt-3'>
                <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                <input type="number" className="form-control border-3 w-100 p-3" placeholder="Type here" />
            </article>
            <article className="form-check mt-3">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                    Disqualify candidate if the answer is no
                </label>
            </article>
            <article className='d-flex mt-4'>
                <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                <button className='btn btn-success'>Save</button>
            </article>
        </article>
    );
}
