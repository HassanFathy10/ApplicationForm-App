import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import AddQuestionForm from './AddQuestionForm';
import Styles from './styles.module.css';



export default function PersonalForm({ formData, setFormData, handleDataChange, errorMessage }) {
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
                            name="FirstName"
                            id='FirstName'
                            value={formData.personalData.FirstName}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your First name" />
                        {errorMessage.firstName && <p style={{ color: 'red' }}>{errorMessage.FirstName}</p>}
                    </article>

                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="text">Last Name</label>
                        <input
                            type="text"
                            name="LastName"
                            id='LastName'
                            value={formData.personalData.LastName}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your Last name" />
                        {errorMessage.lastName && <p style={{ color: 'red' }}>{errorMessage.LastName}</p>}
                    </article>

                    <article className="form-group mb-2">
                        <label className='fw-bolder mb-1' htmlFor="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            name="Email"
                            id='Email'
                            value={formData.personalData.Email}
                            onChange={handleDataChange}
                            className={Styles.input}
                            aria-describedby="emailHelp"
                            placeholder="Enter your email address" />
                        {errorMessage.email && <p style={{ color: 'red' }}>{errorMessage.Email}</p>}
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
                            name="Phone"
                            id="Phone"
                            value={formData.personalData.Phone}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your phone number" />
                        {errorMessage.phone && <p style={{ color: 'red' }}>{errorMessage.Phone}</p>}
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
                            name="Nationality"
                            id='Nationality'
                            value={formData.personalData.Nationality}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your Nationality" />
                        {errorMessage.nationality && <p style={{ color: 'red' }}>{errorMessage.Nationality}</p>}
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
                            name="IdNumber"
                            id='IdNumber'
                            value={formData.personalData.IdNumber}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your ID Number" />
                        {errorMessage.idNumber && <p style={{ color: 'red' }}>{errorMessage.IdNumber}</p>}
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
                            name="DateOfBirth"
                            id='DateOfBirth'
                            value={formData.personalData.DateOfBirth}
                            onChange={handleDataChange}
                            className={Styles.input} />
                        {errorMessage.dateOfBirth && <p style={{ color: 'red' }}>{errorMessage.DateOfBirth}</p>}
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
                            name="Gender"
                            id='Gender'
                            value={formData.personalData.Gender}
                            onChange={handleDataChange}
                            className={Styles.input}
                            placeholder="Enter your Gender" />
                        {errorMessage.gender && <p style={{ color: 'red' }}>{errorMessage.Gender}</p>}
                    </article>
                    
                    <article className='d-grid'>
                        <span type='button' className='fw-bold mt-4' style={{ color: '#228B22' }} onClick={questionForm}>
                            <Unicons.UilPlus color='#228B22' /> {isActive ? 'Hide a question' : 'Add a question'}
                        </span>
                        {isActive && (
                            <article>
                                <AddQuestionForm formData={formData} setFormData={setFormData} handleDataChange={handleDataChange} />
                            </article>
                        )}
                        <button type='submit' className='btn btn-success mt-2'>Save</button>
                    </article>
                </form>
            </article>
        </Col>
    );
}
