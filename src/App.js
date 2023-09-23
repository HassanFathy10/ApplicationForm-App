import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import SideBar from './Component/SideBar';
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <Fragment>
      <Container>
        <SideBar />
      </Container>
    </Fragment>
  );
}

export default App;
