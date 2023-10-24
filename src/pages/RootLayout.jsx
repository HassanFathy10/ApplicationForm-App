import { Fragment } from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import Form from '../Component/Form/Form';
import { Outlet } from 'react-router-dom';
import SideBar from '../Component/SideBar/SideBar';


function RootLayout() {
  return (
    <Fragment>
      <Container fluid>
        <Row>
          <Col sm={2}>
            <SideBar />
          </Col>
          <Col sm={10}>
            <Form />
            <Outlet />
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}

export default RootLayout;
