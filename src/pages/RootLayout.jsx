import { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import Form from '../Component/Form/Form';
import { Outlet } from 'react-router-dom';


function RootLayout() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Form />
          <Outlet />
        </Row>
      </Container>
    </Fragment>
  );
}

export default RootLayout;
