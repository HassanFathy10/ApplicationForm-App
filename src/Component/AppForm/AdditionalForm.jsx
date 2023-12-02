import React from 'react';
import { Col } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function AdditionalForm({ formData, handleDataChange }) {

    return (
        <Col md={10} className='pt-5'>
            <article className='col-sm-10'>
                <article className="card shadow">
                    <h5 className="card-header bg-info">Additional questions</h5>
                    <article className="card-body">
                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <article className="ms-auto">
                                    <span type='button'><Unicons.UilPen /></span>
                                </article>
                            </article>
                            <span className='fw-bolder fs-5'>Please tell me about yourself in less than 500 words</span>
                            <textarea
                                name='Paraghraph'
                                id='Paraghraph'
                                value={formData.additionalData.Paraghraph}
                                onChange={handleDataChange}
                                className={Styles.input} />
                        </article>
                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <article className="ms-auto">
                                    <span type='button'><Unicons.UilPen /></span>
                                </article>
                            </article>
                            <span className='fw-bolder fs-5'>Please Tell Me About Years of Experience</span>
                            <textarea
                                className={Styles.input}
                                name='YearsOfExperience'
                                id="YearsOfExperience"
                                value={formData.additionalData.YearsOfExperience}
                                onChange={handleDataChange}
                            />
                        </article>
                        <article className="form-group mb-2">
                            <article className="form-group mb-2">
                                <article className='d-flex mt-5'>
                                    <label className='form-label fw-medium mb-1' htmlFor="exampleFormControlTextarea1">Yes/No questions</label>
                                    <article className="ms-auto">
                                        <span type='button'><Unicons.UilPen /></span>
                                    </article>
                                </article>
                                <article>
                                    <span className='fw-bolder fs-5'>Have you ever been Rejected by the UK Embassy?</span>
                                    <textarea
                                        type="text"
                                        name='YesNoQuestions'
                                        id='YesNoQuestions'
                                        value={formData.additionalData.YesNoQuestions}
                                        onChange={handleDataChange}
                                        className={Styles.input} />
                                </article>
                            </article>
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
}

