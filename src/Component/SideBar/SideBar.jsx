import React from 'react';
import { Link } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function SideBar() {
  return (
    <article className='container'>
      <article className='row'>
        <article className='d-flex justify-content-center min-vh-100 shadow'>
          <article className='list-unstyled'>
            <Link to='/' className='p-3 btn'><Unicons.UilBars size='2rem' color='#15A092' /></Link>
            <Link to='/' className='p-3 btn'><Unicons.UilHome size='2rem' color='#15A092' /></Link>
            <Link to='/' className='p-3 btn'><Unicons.UilClipboardNotes size='2rem' color='#15A092' /></Link>
          </article>
        </article>
      </article>
    </article>
  );
}
