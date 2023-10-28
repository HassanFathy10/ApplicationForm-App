import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PhotoForm from '../Component/AppForm/PhotoForm';
import PersonalForm from '../Component/AppForm/PersonalForm';
import ProfileForm from '../Component/AppForm/ProfileForm';
import AdditionalForm from '../Component/AppForm/AdditionalForm';

export default function ApplicationForm() {
    const [formData, setFormData] = useState({
        photoData: '',
        personalData: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            nationality: '',
            idNumber: '',
            dateOfBirth: '',
            gender: '',
        },
        profileData: '',
        additionalData: ''
    });
    const navigate = useNavigate()
    const handleNextClick = () => {
        localStorage.setItem('formData', JSON.stringify(formData));

        // Navigate to the next page with form data as route parameters
        if (formData.photoData === '') {
            // Show an alert or handle the validation error in your preferred way
            alert('Please upload a photo before proceeding.');
            return;
        }
        navigate('/preview', { state: { ...formData, photoData: formData.photoData } });
    };
    return (
        <article className='container'>
            <article className='row'>
                <article className='d-flex'>
                    <article className='col-lg-10 col-md-10 col-sm-10 mt-5 '>
                        <article className='p-5'>
                            <PhotoForm formData={formData} setFormData={setFormData} />
                            <PersonalForm formData={formData} setFormData={setFormData} />
                            <ProfileForm formData={formData} setFormData={setFormData} />
                            <AdditionalForm formData={formData} setFormData={setFormData} />
                        </article>
                    </article>
                </article>
                <article className='d-flex sticky-bottom'>
                    <article className='position-absolute m-5 bottom-0 end-0'>
                        <Link to={{ pathname: '/preview', state: { ...formData, photoData: formData.photoData }, }} className='btn btn-primary' onClick={handleNextClick}>Next</Link>
                    </article>
                    <article className='position-absolute m-5 bottom-0 start-0'>
                        <Link to='/Workflow' className='btn btn-primary'>Previous</Link>
                    </article>
                </article>
            </article>
        </article>
    );
}
