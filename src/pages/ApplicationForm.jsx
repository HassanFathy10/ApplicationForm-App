import React from 'react';
import { Link } from 'react-router-dom';
import PhotoForm from '../Component/AppForm/PhotoForm';
import PersonalForm from '../Component/AppForm/PersonalForm';
import ProfileForm from '../Component/AppForm/ProfileForm';
import AdditionalForm from '../Component/AppForm/AdditionalForm';

export default function ApplicationForm() {
    return (
        <article className='container'>
            <article className='row'>
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
                <article className='d-flex sticky-bottom'>
                    <article className='position-absolute m-5 bottom-0 end-0'>
                        <Link to='/Workflow' className='btn btn-primary'>Next</Link>
                    </article>
                    <article className='position-absolute m-5 bottom-0 start-0'>
                        <Link to='/ProgramDetails' className='btn btn-primary'>Previous</Link>
                    </article>
                </article>
            </article>
        </article>
    );
}
