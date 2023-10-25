import React from 'react'
import { Nav, NavItem } from 'react-bootstrap';
import Styles from './styles.module.css'
import { NavLink } from 'react-router-dom';

export default function Form() {

    return (
        <article className='container'>
            <article className='row'>
                <article className='d-flex'>
                    <article className='w-100 mt-5 shadow'>
                        <article className='p-2 shadow'>
                            <Nav variant="tabs">
                                <Nav.Item className={`p-4 ${Styles.links}`}>
                                    <NavLink to='/ProgramDetails' className={`text-decoration-none nav-link fw-bold ${Styles.link}`}>
                                        Program Details
                                    </NavLink>
                                </Nav.Item>
                                <NavItem className={`p-4 ${Styles.links}`}>
                                    <NavLink to='/Workflow' className={`text-decoration-none nav-link fw-bold ${Styles.link}`}>
                                        Workflow
                                    </NavLink>
                                </NavItem>
                                <NavItem className={`p-4 ${Styles.links}`}>
                                    <NavLink to='/ApplicationForm' className={`text-decoration-none nav-link fw-bold ${Styles.link}`}>
                                        Application Form
                                    </NavLink>
                                </NavItem>
                                <NavItem className={`p-4 ${Styles.links}`}>
                                    <NavLink to='/Preview' className={`text-decoration-none nav-link fw-bold ${Styles.link}`}>
                                        Preview
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </article>
                    </article>
                </article>
            </article>
        </article>
    );
};
