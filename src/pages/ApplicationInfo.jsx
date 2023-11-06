import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './style.module.css';

export default function ApplicationInfo() {
    return (
        <article className='container'>
            <article className='row'>
                <article className='pt-5 d-flex justify-content-center position-relative'>
                    <img src='../assets/images/workflow-automation-examples.png' className={`d-block m-auto ${Styles.infoImage}`}  alt='' />
                </article>
                <article className='pt-5 p-3 text-start'>
                    <h3 className='text-decoration-underline text-info'>Application Information :</h3>
                    <p className='pt-4 lh-lg'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </article>
                <article className='d-flex pt-5 sticky-bottom'>
                    <article className='position-absolute m-5 bottom-0 end-0'>
                        <Link to='/ProgramDetails' className='btn btn-primary'>Next</Link>
                    </article>
                </article>
            </article>
        </article>
    );
}
