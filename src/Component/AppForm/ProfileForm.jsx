import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import AddQuestionForm from './AddQuestionForm';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';
import ApplicationForm from '../ApplicationForm';


export default function ProfileForm() {
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
                            <input type="email" className={Styles.input} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </article>

                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <label className='fw-bolder mb-1' htmlFor="number">Experience</label>
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
                            <input type="number" className={Styles.input} />
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
                            <input className='fw-medium mt-3' type="file" />
                        </article>
                        <article>
                            <span type='button' className='fw-bold mt-4' style={{ color: '#228B22' }} onClick={questionForm}>
                                <Unicons.UilPlus color='#228B22' /> {isActive ? 'Hide a question' : 'Add a question'}
                            </span>
                            {isActive && (
                                <article>
                                <AddQuestionForm />
                                <ApplicationForm version="1.0" programId="123" />
                                </article>
                            )}
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
}
