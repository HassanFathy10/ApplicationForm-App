import React from 'react'
import { Nav } from 'react-bootstrap';
import Styles from './styles.module.css'
import { Link } from 'react-router-dom';

export default function Form() {

    return (
        <article className='container'>
            <article className='row'>
                <article className='d-flex'>
                    <article className='col-lg-10 col-md-10 col-sm-10 w-100 mt-5 shadow'>
                        <article className=' p-2 shadow'>
                            <Nav variant="pills" >
                                <Nav.Item className={`p-3 ${Styles.link}`}>
                                    <Nav.Link eventKey="link-1"><Link to='/' className='text-decoration-none text-black'>Program Details</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`p-3 ${Styles.link}`}>
                                    <Nav.Link eventKey="link-2"><Link to='/ApplicationForm' className='text-decoration-none text-black'>Application Form</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className={`p-3 ${Styles.link}`}>
                                    <Nav.Link eventKey="link-3"><Link to='/Workflow' className='text-decoration-none text-black'>Workflow</Link></Nav.Link>
                                </Nav.Item>
                                <Nav.Item className='p-3'>
                                    <Nav.Link eventKey="link-4"><Link to='/Preview' className='text-decoration-none text-black'>Preview</Link></Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};
