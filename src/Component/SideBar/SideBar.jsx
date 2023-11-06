import React from 'react';
import { Link } from 'react-router-dom';
import * as Unicons from '@iconscout/react-unicons';

export default function SideBar() {
  return (
    <article className='container d-block m-sm-auto'>
      <article className='row'>
        <article className='d-flex justify-content-center min-vh-100 shadow'>
          <ul className='pt-5 list-unstyled list-group nav-tabs'>
            <li className='pt-4'>
              <Link to='/' className='p-3 nav-link fw-bold text-success'><Unicons.UilBars size='2.2rem' color='#15A092' /> Menu</Link>
            </li>
            <li className='pt-5'>
              <Link to='/' className='p-3 nav-link fw-bold text-success'><Unicons.UilHome size='2rem' color='#15A092' /> Home</Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link fw-bold text-success'><Unicons.UilClipboardNotes size='2rem' color='#15A092' /> Clipboard</Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link fw-bold text-success'><Unicons.UilFolderCheck size='2rem' color='#15A092' /> Form</Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link fw-bold text-success'><Unicons.UilFileCheckAlt size='2rem' color='#15A092' /> CheckList</Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link fw-bold text-success'><Unicons.UilBagAlt size='2rem' color='#15A092' /> Work</Link>
            </li>
            <li className='pt-3'>
              <Link to='/' className='p-3 nav-link fw-bold text-success'><Unicons.UilArchive size='2rem' color='#15A092' /> Archive</Link>
            </li>
          </ul>
        </article>
      </article>
    </article>
  );
}
