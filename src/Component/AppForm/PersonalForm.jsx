import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import AddQuestionForm from './AddQuestionForm';
import Styles from './styles.module.css';



export default function PersonalForm({ formData, handleDataChange, errorMessage }) {
    const [isActive, setIsActive] = useState(false);

    const questionForm = () => {
        setIsActive(!isActive);
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
                            id='firstName'
                            value={formData.personalData.firstName}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your First name" />
                        {errorMessage.firstName && <p style={{ color: 'red' }}>{errorMessage.firstName}</p>}
                    </article>

                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="text">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            id='lastName'
                            value={formData.personalData.lastName}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your Last name" />
                        {errorMessage.lastName && <p style={{ color: 'red' }}>{errorMessage.lastName}</p>}
                    </article>

                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            name="email"
                            id='email'
                            value={formData.personalData.email}
                            onChange={handleDataChange}
                            className={Styles.input}
                            aria-describedby="emailHelp"
                            placeholder="Enter your email address" />
                        {errorMessage.email && <p style={{ color: 'red' }}>{errorMessage.email}</p>}
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
                        <input
                            type="number"
                            name="phone"
                            id="phone"
                            value={formData.personalData.phone}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your phone number" />
                        {errorMessage.phone && <p style={{ color: 'red' }}>{errorMessage.phone}</p>}
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
                        <input
                            type="text"
                            name="nationality"
                            id='nationality'
                            value={formData.personalData.nationality}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your Nationality" />
                        {errorMessage.nationality && <p style={{ color: 'red' }}>{errorMessage.nationality}</p>}
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
                        <input
                            type="number"
                            name="idNumber"
                            id='idNumber'
                            value={formData.personalData.idNumber}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your ID Number" />
                        {errorMessage.idNumber && <p style={{ color: 'red' }}>{errorMessage.idNumber}</p>}
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
                        <input
                            type="date"
                            name="dateOfBirth"
                            id='dateOfBirth'
                            value={formData.personalData.dateOfBirth}
                            onChange={handleDataChange}
                            className={Styles.input} />
                        {errorMessage.dateOfBirth && <p style={{ color: 'red' }}>{errorMessage.dateOfBirth}</p>}
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
                        <input
                            type="text"
                            name="gender"
                            id='gender'
                            value={formData.personalData.gender}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your Gender" />
                        {errorMessage.gender && <p style={{ color: 'red' }}>{errorMessage.gender}</p>}
                    </article>
                    
                    <article className='d-grid'>
                        <span type='button' className='fw-bold mt-4' style={{ color: '#228B22' }} onClick={questionForm}>
                            <Unicons.UilPlus color='#228B22' /> {isActive ? 'Hide a question' : 'Add a question'}
                        </span>
                            {isActive && (
                            <AddQuestionForm formData={formData} handleDataChange={handleDataChange} isActivated={isActive} />
                            )}
                            <button type='submit' className='btn btn-success mt-2'>Save</button>
                    </article>
                </form>
            </article>
        </Col>
    );
}
