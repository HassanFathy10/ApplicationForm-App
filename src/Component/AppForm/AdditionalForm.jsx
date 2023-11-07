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
                            <span className='fw-bolder fs-5'>Please select the year of graduation from the list below</span>
                            <textarea className={Styles.input} id="exampleFormControlTextarea1" />
                        </article>
                        <article className="form-group mb-2">
                            <article className='mb-2'>
                                <label className='fw-bolder mb-2' htmlFor="text">Question</label>
                                <input type="text" className="form-control border-3 w-75 p-3" placeholder="Type Here" />
                            </article>
                            <article className="form-group mb-2">
                                <article className='d-flex mt-5'>
                                    <label className='form-label fw-medium mb-1' htmlFor="exampleFormControlTextarea1">Yes/No questions</label>
                                    <article className="ms-auto">
                                        <span type='button'><Unicons.UilPen /></span>
                                    </article>
                                </article>
                                <article>
                                    <span className='fw-bolder fs-5'>Have you ever been rejected by the UK embassy?</span>
                                    <input type="text" className={Styles.input} />
                                </article>
                            </article>
                            <article className='d-grid'>
                                <button type='submit' className='btn btn-success mt-2'>Save</button>
                            </article>
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
}

