import { Fragment } from 'react';
import { Container, Row } from 'react-bootstrap';
import SideBar from './Component/SideBar/SideBar';
import Form from './Component/Form/Form';


function App() {
  return (
    <Fragment>
      <Container>
        <Row>
          <SideBar />
          <Form />
        </Row>
      </Container>
    </Fragment>
  );
}

export default App;
