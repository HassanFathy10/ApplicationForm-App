import React from 'react'
import { Nav } from 'react-bootstrap';
import Styles from './styles.module.css'
import { Link } from 'react-router-dom';

export default function Form() {

    return (
        <article className='container'>
            <article className='row'>
                <article className='d-flex'>
                    <article className='w-100 mt-5 shadow'>
                        <article className=' p-2 shadow'>
                            <Nav variant="tabs">
                                <Nav.Item className={`p-3 ${Styles.links}`}>
                                    <Nav.Link eventKey="link-1"><Link to='/' className={`text-decoration-none fw-bold ${Styles.link}`}>Program Details</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`p-3 ${Styles.links}`}>
                                    <Nav.Link eventKey="link-2"><Link to='/ApplicationForm' className={`text-decoration-none fw-bold ${Styles.link}`}>Application Form</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`p-3 ${Styles.links}`}>
                                    <Nav.Link eventKey="link-3"><Link to='/Workflow' className={`text-decoration-none fw-bold ${Styles.link}`}>Workflow</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='p-3'>
                                    <Nav.Link eventKey="link-4"><Link to='/Preview' className={`text-decoration-none fw-bold ${Styles.link}`}>Preview</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};
