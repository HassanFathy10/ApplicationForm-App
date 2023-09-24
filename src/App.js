import { Fragment } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import SideBar from './Component/SideBar/SideBar';
import Form from './Component/Form/Form';


function App() {
  return (
    <Fragment>
      <Container>
        <Row>
          <Col md={2} id="sidebar">
            <SideBar />
          </Col>
            <Form />
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
