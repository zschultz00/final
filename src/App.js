import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./Form";
import { Container, Row, Col, Nav, Navbar, Card, } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar fixed="top" bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">Cat-gram</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="#contact">Contact</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
      <Row className="mt-5 pt-3">
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="m-2">
            <Card.Body>
              <Card.Title>Card 1</Card.Title>
              <Card.Text>
                This is the first card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="m-2">
            <Card.Body>
              <Card.Title>Card 2</Card.Title>
              <Card.Text>
                This is the second card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="m-2">
            <Card.Body>
              <Card.Title>Card 3</Card.Title>
              <Card.Text>
                This is the third card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={6} xl={3}>
          <Card className="m-2">
            <Card.Body>
              <Card.Title>Card 4</Card.Title>
              <Card.Text>
                This is the fourth card.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
      <Col>
          <Card className="m-2">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
                <Form />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;