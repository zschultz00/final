import 'bootstrap/dist/css/bootstrap.min.css';
import Nform from "./Nform";
import { Container, Row, Col, Nav, Navbar, Card, Form, Button} from 'react-bootstrap';

import React, { useState, useEffect } from 'react';


//ChatGPT generated this section. prompt:write a react function to return an image of a cat using this url which is an api endpoint https://cataas.com/cat?width=300
function CatImage() {
  const [catUrl, setCatUrl] = useState('');

  useEffect(() => {
    const fetchCatImage = async () => {
      const response = await fetch('https://cataas.com/cat?width=300');
      const data = await response.blob();
      const url = URL.createObjectURL(data);
      setCatUrl(url);
    };
    fetchCatImage();
  }, []);

  return catUrl;
}
//end ChatGPT

//based on the ChatGPT response above, I modified it for dog images too:

function DogImage() {
  const [dogUrl, setDogUrl] = useState('');

  useEffect(() => {
    const fetchDogImage = async () => {
      //modified to handle JSON message that contains the url to the dog image. ChatGPT did this too prompt:  The api end point: https://dog.ceo/api/breeds/image/random doesn't work with this function because it return JSON. The json looks like this:  "message": "https://images.dog.ceo/breeds/terrier-tibetan/n02097474_2553.jpg", "status": "success" Fix the function so it returns a dog image
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();
      setDogUrl(data.message);
    };
    fetchDogImage();
  }, []);

  return dogUrl;
}

//end chatgpt

function RandomPetImage() {
  const isDog = Math.random() < 0.5;

  return isDog ? DogImage() : CatImage();
}

function CardPet() {

  const petUrl = RandomPetImage();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={petUrl} />
      <Card.Body>
        <Card.Title>Pet</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <Navbar fixed="top" bg="light" expand="lg">
            <Container>
              <Navbar.Brand href="/">Paw Palace Pet Adoption Agency</Navbar.Brand>
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
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
        <Col className="p-3" sm={12} md={6} lg={6} xl={3}>
          <CardPet/>
        </Col>
      </Row>
      <Row>
      <Col>
          <Card className="m-2">
            <Card.Body>
              <Card.Title>Contact</Card.Title>
                <Nform />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;