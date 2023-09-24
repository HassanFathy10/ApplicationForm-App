import React from 'react';
import * as Unicons from '@iconscout/react-unicons';


export default function MultipleChoice() {
    return (
        <article className='card-body'>
            <article className="form-group mb-2">
                <article className='mb-2'>
                    <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                    <input type="text" className="form-control border-3 w-100 p-3" placeholder="Type Here" />
                </article>
                <article className='mb-2'>
                    <label className='fw-bolder mb-2 ms-5' htmlFor="number">Chioce</label>
                    <article className='d-flex'>
                        <span className='p-3' type="button"><Unicons.UilListUl /></span>
                        <span className=' w-75'><input type="text" className="form-control border-3 p-3" placeholder="Type Here" /></span>
                        <span className='p-3' type="button"><Unicons.UilPlus /></span>
                    </article>
                    <article className="form-check mt-3">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                            Enable “Other” option
                        </label>
                    </article>
                    <article className='mt-3'>
                        <label className='fw-bolder mb-2' htmlFor="text">Max choice allowed</label>
                        <input type="text" className="form-control border-3 w-100 p-3" placeholder="Enter number of choice allowed here" />
                    </article>
                </article>
                <article className='d-flex mt-4'>
                    <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                    <button className='btn btn-success'>Save</button>
                </article>
            </article>
        </article>
    );
}
