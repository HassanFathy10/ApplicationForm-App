import React from 'react';
import { Link } from 'react-router-dom';
import Styles from './style.module.css';

export default function ErrorPage() {
    return (
        <article className="container bg-white">
            <article className="row">
                <h1 className="text-center fw-bolder pt-5 text-info">404</h1>
                <article className="col-sm-12 d-flex">
                    <article className="col-sm-10 d-flex justify-content-center">
                        <article className={Styles.image}>
                                
                        </article>
                    </article>
                </article>
            </article>
            <article>
                <div className='text-center'>
                    <h3 className="h2">
                        Look like you're lost
                    </h3>
                    <p>the page you are looking for not avaible!</p>
                    <Link to="/" className="btn btn-outline-primary">Go to Home</Link>
                </div>
            </article>
        </article>
    );
}