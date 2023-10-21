import React from 'react'
import PhotoForm from '../Component/AppForm/PhotoForm';
import PersonalForm from '../Component/AppForm/PersonalForm';
import ProfileForm from '../Component/AppForm/ProfileForm';
import AdditionalForm from '../Component/AppForm/AdditionalForm';

export default function ApplicationForm() {
    return (
        <article className='d-flex'>
            <article className='col-lg-10 col-md-10 col-sm-10 mt-5 '>
                <article className='p-5'>
                    <PhotoForm />
                    <PersonalForm />
                    <ProfileForm />
                    <AdditionalForm />
                </article>
            </article>
        </article>
    );
}
