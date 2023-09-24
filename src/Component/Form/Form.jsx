import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

import './styles.module.css'
import PhotoForm from '../AppForm/PhotoForm';
import PersonalForm from '../AppForm/PersonalForm';


export default function Form() {

    return (
        <article className='col-lg-10 col-md-10 col-sm-10 mt-5 p-4'>
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
            <article>
                <PhotoForm />
                <PersonalForm />
            </article>
        </article>
    );
}
