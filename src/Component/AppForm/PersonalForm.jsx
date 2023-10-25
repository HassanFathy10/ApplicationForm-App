import React, { useState, useEffect } from 'react'
import { Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import AddQuestionForm from './AddQuestionForm';
import Styles from './styles.module.css';



export default function PersonalForm({ formData, setFormData }) {
    const [isActive, setIsActive] = useState(false);

    const questionForm = () => {
        setIsActive(!isActive);
    };
    useEffect(()=>{},[])
    const handleFirstNameChange = (event) => {
        const firstName = event.target.value;
        console.log('First Name:', firstName);
        // Assuming setFormData is passed as a prop
        setFormData((prevData) => ({
            ...prevData,
            personalData: {
                ...prevData.personalData,
                firstName: firstName,
            },
        }));
    };

    return (
        <Col md={10} className='pt-5'>
            <article className="card col-sm-10 shadow">
                <h5 className="card-header text-black fw-bolder bg-info">Personal Information</h5>
                <form className="card-body text-start">
                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="text">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleFirstNameChange}
                            className={Styles.input}
                            placeholder="Enter your First name" />
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
                            <label className='fw-bolder mb-1' htmlFor="text">Nationality</label>
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
                        <input type="text" className={Styles.input} placeholder="Enter your Nationality" />
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
                        <input type="text" className={Styles.input} placeholder="Enter your Current Residence" />
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
                        <input type="number" className={Styles.input} placeholder="Enter your ID Number" />
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
                        <input type="date" className={Styles.input} />
                    </article>

                    <article className="form-group mb-2">
                        <article className='d-flex'>
                            <label className='fw-bolder mb-1' htmlFor="text">Gender</label>
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
                        <input type="text" className={Styles.input} placeholder="Enter your First Name" />
                    </article>
                    
                    <article className='d-grid'>
                        <span type='button' className='fw-bold mt-4' style={{ color: '#228B22' }} onClick={questionForm}>
                            <Unicons.UilPlus color='#228B22' /> {isActive ? 'Hide a question' : 'Add a question'}
                        </span>
                            {isActive && (
                                <AddQuestionForm />
                            )}
                            <button type='submit' className='btn btn-success mt-2'>Save</button>
                    </article>
                </form>
            </article>
        </Col>
    );
}
