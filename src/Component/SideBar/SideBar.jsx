import React from 'react';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function SideBar() {
  return (
    <article className='container'>
      <article className='row'>
        <article className='d-flex justify-content-center min-vh-100 shadow'>
          <ul className='list-unstyled'>
            <li className='p-3'><Unicons.UilBars size='2rem' color='#0E6F67' /></li>
            <li className='p-3'><Unicons.UilHome size='2rem' color='#0E6F67' /></li>
            <li className='p-3'><Unicons.UilClipboardNotes size='2rem' color='#0E6F67' /></li>
          </ul>
        </article>
      </article>
    </article>
  );
}
