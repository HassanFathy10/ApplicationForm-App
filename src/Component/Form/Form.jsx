import React from 'react'
import { Nav } from 'react-bootstrap';
import PhotoForm from '../AppForm/PhotoForm';
import PersonalForm from '../AppForm/PersonalForm';
import ProfileForm from '../AppForm/ProfileForm';
import AdditionalForm from '../AppForm/AdditionalForm';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css'


export default function Form() {

    return (
        <article className='d-flex'>
            <article className='sidebar col-lg-1 shadow'>
                <Nav className={Styles.SideBar}>
                    <Nav.Item>
                        <Nav.Link className='m-4 mt-3 mb-5' href="#home"><Unicons.UilBars /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='m-4' href="#about"><Unicons.UilHome /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='m-4' href="#services"><Unicons.UilClipboardNotes /></Nav.Link>
                    </Nav.Item>
                </Nav>
            </article>
            <article className='col-lg-10 col-md-10 col-sm-10 mt-5 '>
                <article className='col-lg-10 col-md-10 col-sm-10 mt-5 p-2 w-100  shadow'>
                    <Nav  variant="pills" >
                    <Nav.Item className={`p-3 ${Styles.link}`}>
                            <Nav.Link href="#home">Program Details</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`p-3 ${Styles.link}`}>
                            <Nav.Link eventKey="link-1">Application Form</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className={`p-3 ${Styles.link}`}>
                            <Nav.Link eventKey="link-2">Workflow</Nav.Link>
                        </Nav.Item>
                        <Nav.Item className='p-3'>
                            <Nav.Link eventKey="link-3">Preview</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </article>
                <article className='p-5'>
                    <PhotoForm />
                    <PersonalForm />
                    <ProfileForm />
                    <AdditionalForm />
                </article>
            </article>
        </article>
    );
};
