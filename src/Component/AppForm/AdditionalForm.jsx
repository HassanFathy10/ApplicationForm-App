import React, { useState } from 'react'
import { Col } from 'react-bootstrap';
import AddQuestionForm from './AddQuestionForm';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function AdditionalForm() {
    const [isActive, setIsActive] = useState(false);

    const questionForm = () => {
        setIsActive(!isActive);
    };
    return (
        <Col md={10} className='pt-5'>
            <article className='col-sm-10'>
                <article class="card shadow">
                    <h5 className="card-header bg-info">Additional questions</h5>
                    <article class="card-body">
                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <label className='form-label fw-light mb-1' htmlFor="exampleFormControlTextarea1">Paragraph</label>
                                <article className="ms-auto">
                                    <span type='button'><Unicons.UilPen /></span>
                                </article>
                            </article>
                            <span className='fw-bolder fs-5'>Please tell me about yourself in less than 500 words</span>
                            <textarea className={Styles.input} id="exampleFormControlTextarea1" />
                        </article>
                        <article className="form-group mb-2">
                            <article className='d-flex'>
                                <label className='form-label fw-light mb-1' htmlFor="exampleFormControlTextarea1">Dropdown</label>
                                <article className="ms-auto">
                                    <span type='button'><Unicons.UilPen /></span>
                                </article>
                            </article>
                            <span className='fw-bolder fs-5'>Please select the year of graduation from the list below</span>
                            <textarea className={Styles.input} id="exampleFormControlTextarea1" />
                        </article>
                        <article className="form-group mb-2">
                            <article className='mb-2'>
                                <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                                <input type="text" className="form-control border-3 w-100 p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type Here" />
                            </article>
                            <article className='mb-2'>
                                <label className='fw-bolder mb-2 ms-5' htmlFor="number">Chioce</label>
                                <article className='d-flex'>
                                    <span className='p-3' type="button"><Unicons.UilListUl /></span>
                                    <span className=' w-75'><input type="text" className="form-control border-3 p-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Type Here" /></span>
                                    <span className='p-3' type="button"><Unicons.UilPlus /></span>
                                </article>
                            </article>
                            <article className='d-flex mt-4'>
                                <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                <button className='btn btn-success'>Save</button>
                            </article>
                            <article className="form-group mb-2">
                                <article className='d-flex mt-5'>
                                    <label className='form-label fw-light mb-1' htmlFor="exampleFormControlTextarea1">Yes/No questions</label>
                                    <article className="ms-auto">
                                        <span type='button'><Unicons.UilPen /></span>
                                    </article>
                                </article>
                                <article>
                                    <span className='fw-bolder fs-5'>Have you ever been rejected by the UK embassy?</span>
                                    <input type="text" className={Styles.input} />
                                </article>
                            </article>
                            <article>
                                <span type='button' className='fw-bold mt-4' style={{ color: '#228B22' }} onClick={questionForm}>
                                    <Unicons.UilPlus color='#228B22' /> {isActive ? 'Hide a question' : 'Add a question'}
                                </span>
                                {isActive && (
                                    <AddQuestionForm />
                                )}
                            </article>
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
}

