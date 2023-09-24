import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';


export default function PersonalForm() {
    const [isActive, setIsActive] = useState(false);

    const toggleForm = () => {
        setIsActive(!isActive);
    };
    return (
        <Col md={10} className='pt-5'>
            <article className="card col-sm-10 shadow">
                <article className="card-header bg-info">
                    <span className='text-black fs-5 fw-bolder'>Personal Information</span>
                </article>
                <article className="card-body text-start">
                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="text">First Name</label>
                        <input type="text" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your First name" />
                    </article>

                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="text">Last Name</label>
                        <input type="text" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Last name" />
                    </article>

                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="exampleInputEmail1">Email</label>
                        <input type="email" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address" />
                    </article>

                    <article className="form-group mb-2">
                        <article className='d-flex'>
                            <label className='fw-bolder mb-1' htmlFor="number">phone <span className=' fw-lighter'>(without dial code)</span></label>
                            <article className="form-check ms-auto">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                    Internal
                                </label>
                            </article>
                            <article className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                            </article>
                        </article>
                        <input type="number" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your phone number" />
                    </article>

                    <article className="form-group mb-2">
                        <article className='d-flex'>
                            <label className='fw-bolder mb-1' htmlFor="number">Nationality</label>
                            <article className="form-check ms-auto">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                    Internal
                                </label>
                            </article>
                            <article className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                            </article>
                        </article>
                        <input type="email" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Nationality" />
                    </article>

                    <article className="form-group mb-2">
                        <article className='d-flex'>
                            <label className='fw-bolder mb-1' htmlFor="text">Current Residence</label>
                            <article className="form-check ms-auto">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                    Internal
                                </label>
                            </article>
                            <article className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                            </article>
                        </article>
                        <input type="text" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your Current Residence" />
                    </article>

                    <article className="form-group mb-2">
                        <article className='d-flex'>
                            <label className='fw-bolder mb-1' htmlFor="number">ID Number</label>
                            <article className="form-check ms-auto">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                    Internal
                                </label>
                            </article>
                            <article className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                            </article>
                        </article>
                        <input type="number" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your ID Number" />
                    </article>

                    <article className="form-group mb-2">
                        <article className='d-flex'>
                            <label className='fw-bolder mb-1' htmlFor="date">Date of Birth</label>
                            <article className="form-check ms-auto">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                    Internal
                                </label>
                            </article>
                            <article className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                            </article>
                        </article>
                        <input type="date" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" />
                    </article>

                    <article className="form-group mb-2">
                        <article className='d-flex'>
                            <label className='fw-bolder mb-1' htmlFor="number">Gender</label>
                            <article className="form-check ms-auto">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                    Internal
                                </label>
                            </article>
                            <article className="form-check form-switch ms-4">
                                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                            </article>
                        </article>
                        <input type="number" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your First Name" />
                    </article>

                    <article >
                        <button type='button' className='fw-bold' onClick={toggleForm}>
                            <Unicons.UilPlus color='#32CD32' /> {isActive ? 'Add a question' : 'Hide a question'}
                        </button>
                        {isActive && (
                            <div></div>
                        )}
                    </article>
                </article>
            </article>
        </Col>
    );
}
