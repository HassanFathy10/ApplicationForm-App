import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';
import { Nav} from 'react-bootstrap';



export default function SideBar() {
    return (
        <article className='col-lg-2 col-md-2 col-sm-2'>
            <Nav className={Styles.SideBar}>
                <Nav.Item>
                    <Nav.Link className='m-4 mb-1' href="#home"><Unicons.UilBars /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='m-4' href="#about"><Unicons.UilHome /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='m-4' href="#services"><Unicons.UilClipboardNotes /></Nav.Link>
                </Nav.Item>
            </Nav>
        </article>
    );
}
