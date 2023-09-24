import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';
import { Nav} from 'react-bootstrap';



export default function SideBar() {
    return (
        <article className=' sidebar col-lg-2 col-md-2 col-sm-2'>
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
    );
}
