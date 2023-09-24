import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Styles from './styles.module.css'
import PhotoForm from '../AppForm/PhotoForm';
import PersonalForm from '../AppForm/PersonalForm';
import * as Unicons from '@iconscout/react-unicons';

import { Nav} from 'react-bootstrap';
import ProfileForm from '../AppForm/ProfileForm';


export default function Form() {

    return (
        <article className='d-flex'>
            <article className='sidebar col-lg-1 shadow'>
                <Nav className={Styles.SideBar}>
                    <Nav.Item>
                        <Nav.Link className='m-3 mt-3 mb-5' href="#home"><Unicons.UilBars /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='m-3' href="#about"><Unicons.UilHome /></Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link className='m-3' href="#services"><Unicons.UilClipboardNotes /></Nav.Link>
                    </Nav.Item>
                </Nav>
            </article>
            <article className='col-lg-10 col-md-10 col-sm-10 mt-5 '>
                <article className='col-lg-10 col-md-10 col-sm-10 mt-5 p-2 w-100  shadow'>
                    <Tabs
                        defaultActiveKey="home"
                        transition={false}
                        id="noanim-tab-example"
                        className="mb-3"
                    >
                        <Tab eventKey="home" title="Home">
                        </Tab>
                        <Tab eventKey="profile" title="Profile">
                        </Tab>
                        <Tab eventKey="contact" title="Contact">
                        </Tab>
                    </Tabs>
                </article>
                <article className='p-5'>
                    <PhotoForm />
                    <PersonalForm />
                    <ProfileForm />
                </article>
            </article>
        </article>
    );
};
