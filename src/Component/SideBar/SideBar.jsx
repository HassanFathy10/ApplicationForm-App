import React from 'react';
import { Link } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';
// import Styles from './styles.module.css';

export default function SideBar() {
  return (
    <article className='container'>
      <article className='row'>
        <article className='d-flex justify-content-center min-vh-100 shadow'>
          <ul className='pt-5 list-unstyled'>
            <li className='pt-4'>
              <Link to='/' className='p-3 nav-link'><Unicons.UilBars size='2.2rem' color='#2366e4' /></Link>
            </li>
            <li className='pt-5'>
              <Link to='/' className='p-3 nav-link'><Unicons.UilHome size='2rem' color='#15A092' /></Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link'><Unicons.UilClipboardNotes size='2rem' color='#15A092' /></Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link'><Unicons.UilFolderCheck size='2rem' color='#15A092' /></Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link'><Unicons.UilFileCheckAlt size='2rem' color='#15A092' /></Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link'><Unicons.UilBagAlt size='2rem' color='#15A092' /></Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link'><Unicons.UilArchive size='2rem' color='#15A092' /></Link>
            </li>
          </ul>
        </article>
      </article>
    </article>
  );
}
