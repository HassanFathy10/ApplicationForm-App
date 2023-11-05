import React, { useState } from 'react'
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function AddQuestionForm({ formData, handleDataChange }) {
    const [typeQuestion, setTypeQuestions] = useState('');
    const [showCard, setShowCard] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const questionForm = () => {
        setIsActive(!isActive);
    };

    const HandleSelectType = (e) => {
        const selectedValue = e.target.value;
        setTypeQuestions(selectedValue);
        setShowCard(true);
    };

    return (
        <article className='mt-4'>
            <article className="card shadow">
                <h5 className="card-header text-black fw-bolder bg-info">Questions</h5>
                <article className="card-body">
                    <h6 className="card-title fw-bolder">Type</h6>
                    <select className="form-select"
                        name='TypeQuestions'
                        value={formData.personalData.TypeQuestions}
                        onChange={(e) => {
                            HandleSelectType(e);
                            handleDataChange(e);
                        }} aria-label="Default select example">
                        <option value="">Type Here</option>
                        <option value="Paragraph">Paragraph</option>
                        <option value="Short Answer">Short Answer</option>
                        <option value="Yes/No">Yes/No</option>
                        <option value="Dropdown">Dropdown</option>
                        <option value="Multiple Choice">Multiple Choice</option>
                        <option value="Date">Date</option>
                        <option value="Number">Number</option>
                        <option value="File upload">File upload</option>
                        <option value="Video question">Video question</option>
                    </select>
                    <article>
                        {showCard && (
                            <article>
                                {typeQuestion === 'Paragraph' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="text">Question</label>
                                            <input
                                                type="text"
                                                name="Question"
                                                id='Question'
                                                value={formData.personalData.Question}
                                                onChange={handleDataChange}
                                                className="form-control border-3 w-100 p-3"
                                                placeholder="Type here" />
                                        </article>
                                    </article>)}
                                
                                {typeQuestion === 'Short Answer' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="text">Answer</label>
                                            <input
                                                type="text"
                                                name="Question"
                                                id='Question'
                                                value={formData.personalData.Question}
                                                onChange={handleDataChange}
                                                className="form-control border-3 w-100 p-3"
                                                placeholder="Type here" />
                                        </article>
                                    </article>
                                )}

                                {typeQuestion === 'Yes/No' && (<article>
                                    <article className='mt-3'>
                                        <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                                        <input
                                            type="text"
                                            name="Question"
                                            id='Question'
                                            value={formData.personalData.Question}
                                            onChange={handleDataChange}
                                            className="form-control border-3 w-100 p-3"
                                            placeholder="Type here" />
                                    </article>
                                    <article className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                            Disqualify candidate if the answer is no
                                        </label>
                                    </article>
                                </article>)}

                                {typeQuestion === 'Dropdown' && (<article className='card-body'>
                                    <article className="form-group mb-2">
                                        <article className='mb-2'>
                                            <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                                            <input
                                                type="text"
                                                name="Question"
                                                id='Question'
                                                value={formData.personalData.Question}
                                                onChange={handleDataChange}
                                                className="form-control border-3 w-100 p-3"
                                                placeholder="Type Here" />
                                        </article>
                                        <article className='mb-2'>
                                            <label className='fw-bolder mb-2 ms-5' htmlFor="number">Chioce</label>
                                            <article className='d-flex'>
                                                <span className='p-3' type="button"><Unicons.UilListUl /></span>
                                                <span className=' w-75'><input type="text" className="form-control border-3 p-3" placeholder="Type Here" /></span>
                                                <span className='p-3' type="button"><Unicons.UilPlus /></span>
                                            </article>
                                            <article className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                                    Enable “Other” option
                                                </label>
                                            </article>
                                        </article>
                                    </article>
                                </article>)}

                                {typeQuestion === 'Multiple Choice' && (
                                    <article className='card-body'>
                                        <article className="form-group mb-2">
                                            <article className='mb-2'>
                                                <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                                                <input
                                                    type="text"
                                                    name="Question"
                                                    id='Question'
                                                    value={formData.personalData.Question}
                                                    onChange={handleDataChange}
                                                    className="form-control border-3 w-100 p-3"
                                                    placeholder="Type Here" />
                                            </article>
                                            <article className='mb-2'>
                                                <label className='fw-bolder mb-2 ms-5' htmlFor="number">Chioce</label>
                                                <article className='d-flex'>
                                                    <span className='p-3' type="button"><Unicons.UilListUl /></span>
                                                    <span className=' w-75'><input type="text" className="form-control border-3 p-3" placeholder="Type Here" /></span>
                                                    <span className='p-3' type="button"><Unicons.UilPlus /></span>
                                                </article>
                                                <article className="form-check mt-3">
                                                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                    <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                                        Enable “Other” option
                                                    </label>
                                                </article>
                                                <article className='mt-3'>
                                                    <label className='fw-bolder mb-2' htmlFor="text">Max choice allowed</label>
                                                    <input type="text" className="form-control border-3 w-100 p-3" placeholder="Enter number of choice allowed here" />
                                                </article>
                                            </article>
                                        </article>
                                    </article>)}

                                {typeQuestion === 'Date' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="date">Date</label>
                                            <input
                                                type="date"
                                                name="Question"
                                                id='Question'
                                                value={formData.personalData.Question}
                                                onChange={handleDataChange}
                                                className="form-control border-3 w-100 p-3"
                                                placeholder="Type here" />
                                        </article>
                                    </article>)}

                                {typeQuestion === 'Number' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="number">Number</label>
                                            <input
                                                type="number"
                                                name="Question"
                                                id='Question'
                                                value={formData.personalData.Question}
                                                onChange={handleDataChange}
                                                className="form-control border-3 w-100 p-3"
                                                placeholder="Type here" />
                                        </article>
                                        <article className='d-flex pt-4'>
                                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                        </article>
                                    </article>)}

                                {typeQuestion === 'File upload' && (
                                    <article>
                                        <article className='pt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="file">FileUpload</label>
                                            <input
                                                type="file"
                                                name="Question"
                                                id='Question'
                                                value={formData.personalData.Question}
                                                onChange={handleDataChange}
                                                className='d-flex fw-medium pt-2 pb-2'
                                            />
                                        </article>
                                    </article>)}

                                {typeQuestion === 'Video question' && (
                                    <article className="card shadow">
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
                                                    <textarea
                                                        name="Question"
                                                        id='Question'
                                                        value={formData.personalData.Question}
                                                        onChange={handleDataChange}
                                                        className={Styles.input} />
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
                                )}
                            </article>
                        )}
                    </article>
                </article>
            </article>
        </article>
    );
}
