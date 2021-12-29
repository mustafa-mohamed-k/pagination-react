
import './App.css';
import ThePagination from './components/ThePagination';
import TheTable from './components/TheTable';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <ThePagination />
          </Col>
        </Row>
        <Row>
          <Col>
            <TheTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
