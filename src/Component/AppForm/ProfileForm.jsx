import React, { useState, useRef } from 'react'
import { Col } from 'react-bootstrap';
import Styles from './styles.module.css';


export default function ProfileForm({ formData, setFormData, handleDataChange, errorMessage }) {
    const [btnActive, setBtnActive] = useState(false);
    const [selectedResume, setSelectedResume] = useState(null);
    const fileInputRef = useRef(null);

    const toggleForm = () => {
        setBtnActive(!btnActive);
    };

    const handleResumeUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedResume(file);
            setFormData((prevData) => ({
                ...prevData,
                profileData: {
                    ...prevData.profileData,
                    ResumeFilePath: file,
                },
            }));
        };
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
                                onChange={handleResumeUpload}
                                ref={fileInputRef}
                                value={formData.profileData.Resume}
                                className='fw-bold mt-3 text-success' />
                            {selectedResume && <article className='fw-bold text-white'>{selectedResume.name}</article>}
                            {errorMessage.Resume && <p style={{ color: 'red' }}>{errorMessage.Resume}</p>}
                        </article>
                    </article>
                </article>
            </article>
        </Col>
    );
}
