import React, { useState } from 'react';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function VideoForm() {
    const [isActive, setIsActive] = useState(false);

    const questionForm = () => {
        setIsActive(!isActive);
    };
    return (
        <article className="card  shadow mt-4 ">
            <h5 className="card-header bg-info">Video based questions</h5>
            <article className="card-body">
                <article className='d-flex justify-content-center flex-wrap'>
                    <article className="form-group mb-2 w-75">
                        <article className='d-flex'>
                            <label className='form-label fw-light mb-1' htmlFor="exampleFormControlTextarea1">4 minute</label>
                            <article className="ms-auto">
                                <span type='button'><Unicons.UilPen /></span>
                            </article>
                        </article>
                        <span className='fw-bolder fs-5'>Tell us about yourself?</span>
                        <textarea className={Styles.input} id="exampleFormControlTextarea1" />
                    </article>
                    <article className="form-group mb-2 w-75">
                        <article className='d-flex'>
                            <label className='form-label fw-light mb-1' htmlFor="exampleFormControlTextarea1">2 minute</label>
                            <article className="ms-auto">
                                <span type='button'><Unicons.UilPen /></span>
                            </article>
                        </article>
                        <span className='fw-bolder fs-5'>Why did you apply for this program?</span>
                        <textarea className={Styles.input} id="exampleFormControlTextarea1" />
                    </article>
                    <article className="form-group mb-2 w-75">
                        <article className='mb-2'>
                            <label className='fw-bolder mb-2' htmlFor="text">Question</label>
                            <input type="text" className="form-control border-3 w-75 p-3" placeholder="Q: Tell us about yourself?" />
                            <textarea className="form-control mt-3" placeholder="Please talk about your achievements, goals and what you worked on as the latest project." id="floatingTextarea2" style={{ height: '100px' }} />
                            <article className='d-flex'>
                                <input type="text" className="form-control border-3 w-50 p-3 mt-3" placeholder="Type Here" />
                                <select className="form-select w-50 mt-3" defaultValue="" aria-label="Default select example">
                                    <option value="">in (sec/min)</option>
                                </select>
                            </article>
                        </article>
                        <article className='d-flex mt-4'>
                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                            <button className='btn btn-success'>Save</button>
                        </article>
                    </article>
                </article>
                <article className='ms-auto'>
                    <span type='button' className='fw-bold mt-4' style={{ color: '#228B22' }} onClick={questionForm}>
                        <Unicons.UilPlus color='#228B22' /> {isActive ? 'Hide video interview questions' : ' Add video interview questions'}
                    </span>
                    {isActive && (
                        <article>
                            <input className='fw-medium mt-3' type="file" />
                        </article>
                    )}
                </article>
            </article>
        </article>
    );
}
