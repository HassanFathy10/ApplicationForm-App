import React from 'react'
import { Container } from 'react-bootstrap'
import * as Unicons from '@iconscout/react-unicons';


export default function SideBar() {
    return (
        <Container>
            <article className='row'>
                <article className='col-lg-3 d-flex'>
                    <ul className='list'>
                        <li className=''><Unicons.UilBars /></li>
                        <li></li>
                        <li></li>
                    </ul>
                </article>
            </article>
        </Container>
    );
}
