import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import AddQuestionForm from './AddQuestionForm';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';


export default function ProfileForm({ formData, setFormData, handleDataChange, errorMessage }) {
    const [isActive, setIsActive] = useState(false);
    const [btnActive, setBtnActive] = useState(false);
    const questionForm = () => {
        setIsActive(!isActive);
    }
    const toggleForm = () => {
        setBtnActive(!btnActive);
    };
    return (
        <Col md={10} className='pt-5'>
            <article className='col-sm-10'>
                <article className="card shadow">
                    <h5 className="card-header bg-info">Profile</h5>
                    <article className="card-body">
                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <label className='fw-bolder mb-1' htmlFor="number">Education</label>
                                <article className="form-check ms-auto">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                        Mandatory
                                    </label>
                                </article>
                                <article className="form-check form-switch ms-4">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                                </article>
                            </article>
                            <input
                                type="text"
                                name='Education'
                                id='Education'
                                value={formData.profileData.Education}
                                onChange={handleDataChange}
                                className={Styles.input} />
                            {errorMessage.Education && <p style={{ color: 'red' }}>{errorMessage.Education}</p>}
                        </article>

                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <label className='fw-bolder mb-1' htmlFor="number">Experience Years</label>
                                <article className="form-check ms-auto">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                        Mandatory
                                    </label>
                                </article>
                                {/* here that toggle button you refered in task when check that btn => show */}
                                <article className="form-check form-switch ms-4">
                                    <input className="form-check-input" type="checkbox" role="switch" checked={btnActive} onChange={toggleForm} id="flexSwitchCheckDefault" />
                                    <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">{btnActive ? 'Show' : 'Hide'}</label>
                                </article>
                            </article>
                            <input
                                type="number"
                                name='Experience'
                                id='Experience'
                                value={formData.profileData.Experience}
                                onChange={handleDataChange}
                                className={Styles.input} />
                            {errorMessage.Experience && <p style={{ color: 'red' }}>{errorMessage.Experience}</p>}
                        </article>

                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <label className='fw-bolder mb-1' htmlFor="file">Resume</label>
                                <article className="form-check ms-auto">
                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                    <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                        Mandatory
                                    </label>
                                </article>
                                <article className="form-check form-switch ms-4">
                                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                    <label className="form-check-label fw-medium" htmlFor="flexSwitchCheckDefault">Hide</label>
                                </article>
                            </article>
                            <input
                                type="file" 
                                name='Resume'
                                id='Resume'
                                value={formData.profileData.Resume}
                                onChange={handleDataChange}
                                className='fw-medium mt-3' />
                            {errorMessage.Resume && <p style={{ color: 'red' }}>{errorMessage.Resume}</p>}
                        </article>
                        <article className='d-grid'>
                            <span type='button' className='fw-bold mt-4' style={{ color: '#228B22' }} onClick={questionForm}>
                                <Unicons.UilPlus color='#228B22' /> {isActive ? 'Hide a question' : 'Add a question'}
                            </span>
                            {isActive && (
                                <article>
                                    <AddQuestionForm formData={formData} setFormData={setFormData} />
                                </article>
                            )}
                            <button type='submit' className='btn btn-success mt-2'>Save</button>
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
}
