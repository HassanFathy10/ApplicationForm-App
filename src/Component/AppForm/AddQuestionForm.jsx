import React, { useState } from 'react'
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function AddQuestionForm({ formData, setFormData }) {
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
    const handleDataChange = (event) => {
        const { name, value } = event.target;
        console.log(`${name}:", ${value}`);
        // Assuming setFormData is passed as a prop
        setFormData((prevData) => ({
            ...prevData,
            personalData: {
                ...prevData.personalData,
                [name]: value,
            }
        }));
    };

    return (
        <article className='mt-4'>
            <article className="card shadow">
                <h5 className="card-header text-black fw-bolder bg-info">Questions</h5>
                <article className="card-body">
                    <h6 className="card-title fw-bolder">Type</h6>
                    <select className="form-select" onChange={HandleSelectType} defaultValue="" aria-label="Default select example">
                        <option value="">Type Here</option>
                        <option value="1">Paragraph</option>
                        <option value="2">Short Answer</option>
                        <option value="3">Yes/No</option>
                        <option value="4">Dropdown</option>
                        <option value="5">Multiple Choice</option>
                        <option value="6">Date</option>
                        <option value="7">Number</option>
                        <option value="8">File upload</option>
                        <option value="9">Video question</option>
                    </select>
                    <article>
                        {showCard && (
                            <article>
                                {typeQuestion === '1' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="text">Question</label>
                                            <input
                                                type="text"
                                                name="paragraph"
                                                id='paragraph'
                                                value={formData.personalData.paragraph}
                                                onChange={handleDataChange}
                                                className="form-control border-3 w-100 p-3"
                                                placeholder="Type here" />
                                        </article>
                                        <article className='d-flex mt-4'>
                                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                            <button className='btn btn-success'>Save</button>
                                        </article>
                                    </article>)}
                                
                                {typeQuestion === '2' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="text">Answer</label>
                                            <input
                                                type="text"
                                                name="paragraph"
                                                id='paragraph'
                                                value={formData.personalData.paragraph}
                                                onChange={handleDataChange}
                                                className="form-control border-3 w-100 p-3"
                                                placeholder="Type here" />
                                        </article>
                                        <article className='d-flex mt-4'>
                                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                            <button className='btn btn-success'>Save</button>
                                        </article>
                                    </article>
                                )}

                                {typeQuestion === '3' && (<article>
                                    <article className='mt-3'>
                                        <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                                        <input type="number" className="form-control border-3 w-100 p-3" placeholder="Type here" />
                                    </article>
                                    <article className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                        <label className="form-check-label fw-medium" htmlFor="flexCheckDefault">
                                            Disqualify candidate if the answer is no
                                        </label>
                                    </article>
                                    <article className='d-flex mt-4'>
                                        <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                        <button className='btn btn-success'>Save</button>
                                    </article>
                                </article>)}

                                {typeQuestion === '4' && (<article className='card-body'>
                                    <article className="form-group mb-2">
                                        <article className='mb-2'>
                                            <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                                            <input type="text" className="form-control border-3 w-100 p-3" placeholder="Type Here" />
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
                                        <article className='d-flex mt-4'>
                                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                            <button className='btn btn-success'>Save</button>
                                        </article>
                                    </article>
                                </article>)}

                                {typeQuestion === '5' && (
                                    <article className='card-body'>
                                        <article className="form-group mb-2">
                                            <article className='mb-2'>
                                                <label className='fw-bolder mb-2' htmlFor="number">Question</label>
                                                <input type="text" className="form-control border-3 w-100 p-3" placeholder="Type Here" />
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
                                            <article className='d-flex mt-4'>
                                                <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                                <button className='btn btn-success'>Save</button>
                                            </article>
                                        </article>
                                    </article>)}

                                {typeQuestion === '6' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="date">Date</label>
                                            <input type="date" className="form-control border-3 w-100 p-3" placeholder="Type here" />
                                        </article>
                                        <article className='d-flex mt-4'>
                                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                            <button className='btn btn-success'>Save</button>
                                        </article>
                                    </article>)}

                                {typeQuestion === '7' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="number">Number</label>
                                            <input type="number" className="form-control border-3 w-100 p-3" placeholder="Type here" />
                                        </article>
                                        <article className='d-flex mt-4'>
                                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                            <button className='btn btn-success'>Save</button>
                                        </article>
                                    </article>)}

                                {typeQuestion === '8' && (
                                    <article>
                                        <article className='mt-3'>
                                            <label className='fw-bolder mb-2' htmlFor="file">FileUpload</label>
                                            <input className='d-flex fw-medium mt-2' type="file" />
                                        </article>
                                        <article className='d-flex mt-4'>
                                            <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                            <button className='btn btn-success'>Save</button>
                                        </article>
                                    </article>)}

                                {typeQuestion === '9' && (
                                    <article className="card  shadow mt-4 ">
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
                                                    <textarea className={Styles.input} id="exampleFormControlTextarea1" />
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
                                                    <article className='d-flex mt-4'>
                                                        <span type="button" className='fw-medium me-auto' style={{ color: '#FF0800' }}><Unicons.UilTimes color='#FF0800' />Delete question</span>
                                                        <button className='btn btn-success'>Save</button>
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
