import { Fragment } from 'react';
import { Container} from 'react-bootstrap';
import Form from '../Component/Form/Form';
import { Outlet } from 'react-router-dom';
import SideBar from '../Component/SideBar/SideBar';


function RootLayout() {
  return (
    <Fragment>
      <Container>
        <SideBar />
        <Form />
        <Outlet />
      </Container>
    </Fragment>
  );
}

export default RootLayout;
