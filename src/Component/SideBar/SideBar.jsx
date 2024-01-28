import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Nav, Navbar, Row } from 'react-bootstrap';
import * as Unicons from '@iconscout/react-unicons';
import Styles from './styles.module.css';

export default function SideBar() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 840);
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
}, []);
  return (
    <article>
      {isMobile ? (
        <article className=''>
          {/* Mobile Navbar */}
          <Navbar fixed="top" bg="secondary" expand='lg' data-bs-theme="secondary">
            <Container>
              <Link to='/' className='fs-3 fw-bold text-black-50 text-decoration-none'><span className=' text-info'>Application</span> App</Link>
              <Navbar.Toggle className='ms-4' aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav variant='tabs' className="d-flex text-start lh-lg">
                  <Nav.Item className='m-1'>
                    <Link to='/' className='p-1 nav-link fw-bolder'><Unicons.UilBars size='2.2rem' color='#15A092' /> Menu</Link>
                  </Nav.Item>
                  <Nav.Item className='m-1'>
                    <Link to='/' className='p-1 nav-link fw-bolder'><Unicons.UilHome size='2rem' color='#15A092' /> Home</Link>
                  </Nav.Item>
                  <Nav.Item className='m-1'>
                    <Link to='/' className='p-1 nav-link fw-bolder'><Unicons.UilClipboardNotes size='2rem' color='#15A092' /> Clipboard</Link>
                  </Nav.Item>
                  <Nav.Item className='m-1'>
                    <Link to='/' className='p-1 nav-link fw-bolder'><Unicons.UilFolderCheck size='2rem' color='#15A092' /> Form</Link>
                  </Nav.Item>
                  <Nav.Item className='m-1'>
                    <Link to='/' className='p-1 nav-link fw-bolder'><Unicons.UilFileCheckAlt size='2rem' color='#15A092' /> CheckList</Link>
                  </Nav.Item>
                  <Nav.Item className='m-1'>
                    <Link to='/' className='p-1 nav-link fw-bolder'><Unicons.UilBagAlt size='2rem' color='#15A092' /> Work</Link>
                  </Nav.Item>
                  <Nav.Item className='m-1'>
                    <Link to='/' className='p-1 nav-link fw-bolder'><Unicons.UilArchive size='2rem' color='#15A092' /> Archive</Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </article>
      ) : (
        <Container className='d-block m-sm-auto shadow'>
          <Row>
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
          </Row>
        </Container>
      )}
    </article>
  );
}
