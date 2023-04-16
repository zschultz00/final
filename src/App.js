import 'bootstrap/dist/css/bootstrap.min.css';
import Nform from "./Nform";
import { Container, Row, Col, Nav, Navbar, Card, CardGroup} from 'react-bootstrap';
import React, { useState, useEffect } from 'react';


//Chatgpt

function RandomFox() {
  const [link, setLink] = useState("");

  useEffect(() => {
    fetch("https://randomfox.ca/floof/")
      .then(response => response.json())
      .then(data => setLink(data.image));
  }, []);

  return link;
}


//end chatgpt

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

//written by zach
function RandomPetImage() {
  const isDog = Math.random() < 0.5;

  return isDog ? DogImage() : RandomFox();
}

//end written by zach

//chatgpt write a react function with pet descriptions. I modified it because it didn't work initially -- Zach
function PetDesc() {
  const PetDescription = () => {
    const petDescriptions = [
      "Fluffy and cuddly",
      "Playful and energetic",
      "Intelligent and curious",
      "Loyal and protective",
      "Graceful and agile",
      "Affectionate and loving",
      "Independent and self-sufficient",
      "Adventurous and explorative",
      "Eager to please and obedient",
      "Majestic and regal",
      "Mischievous and playful",
      "Laid-back and relaxed",
      "Gentle and calm",
      "Fearless and brave",
      "Elegant and poised",
      "Charming and charismatic",
      "Alert and vigilant",
      "Friendly and social",
      "Watchful and attentive",
      "Adaptable and versatile",
      "Sleek and swift",
      "Proud and confident",
      "Courageous and strong-willed",
      "Energetic and enthusiastic",
      "Inquisitive and investigative",
      "Expressive and communicative",
      "Patient and tolerant",
      "Protective and nurturing",
      "Gracious and dignified",
      "Playful and silly",
      "Intense and focused"
    ];

    const randomDescription = petDescriptions[Math.floor(Math.random() * petDescriptions.length)];

    return (
      <p>Description: "{randomDescription}" -- ChatGPT</p>
    );
  };

  return (
    <div>
      <PetDescription />
    </div>
  );
}


//chatgpt based on the function above. I asked Chatgpt to make a javascript array of pet names for cats or dogs. i inputted that array into here.
function PetName() {
  const PetDescription = () => {
    const petDescriptions = [
        "Buddy",
        "Max",
        "Charlie",
        "Lucy",
        "Daisy",
        "Sadie",
        "Molly",
        "Bailey",
        "Lola",
        "Rocky",
        "Tucker",
        "Jack",
        "Milo",
        "Bella",
        "Cooper",
        "Riley",
        "Zoe",
        "Bear",
        "Ruby",
        "Lily",
        "Harley",
        "Roxy",
        "Leo",
        "Maggie",
        "Chloe",
        "Gus",
        "Luna",
        "Sasha",
        "Rosie",
        "Jasper",
        "Oscar",
        "Finn",
        "Rusty",
        "Penny",
        "Sammy",
        "Coco",
        "Winston",
        "Mickey",
        "Mimi",
        "Simba",
        "Oliver",
        "George",
        "Mia",
        "Willow",
        "Lucky",
        "Ginger",
        "Diesel",
        "Hazel",
        "Phoebe",
        "Marley",
        "Lenny",
        "Milo",
        "Frankie",
        "Ella",
        "Cleo",
        "Duke",
        "Ruby",
        "Zeus",
        "Smokey",
        "Sophie",
        "Toby",
        "Buster",
        "Scout",
        "Nala",
        "Hank",
        "Bentley",
        "Cali",
        "Ranger",
        "Lacey",
        "Chico",
        "Izzy",
        "Maverick",
        "Piper",
        "Stella",
        "Auggie",
        "Benny",
        "Peanut",
        "Hudson",
        "Josie",
        "Maya",
        "Hercules",
        "Zelda",
        "Roscoe",
        "Bo",
        "Louie",
        "Sunny",
        "Rex",
        "Ellie",
        "Rocco",
        "Lulu",
        "Abby",
        "Brady",
        "Cody",
        "Henry",
        "Ace",
        "Blue",
        "Trixie",
        "Bandit",
        "Boris",
        "Bruno",
        "Cassie",
        "Cinnamon",
        "Dakota",
        "Dexter",
        "Emmie",
        "Fergus",
        "Gracie",
        "Gretchen",
        "Hunter",
        "Indy",
        "Joey",
        "Koda",
        "Kona",
        "Laddie",
        "Lexi",
        "Logan",
        "Lola",
        "Mac",
        "Macy",
        "Maggy",
        "Murphy",
        "Nikki",
        "Oakley",
        "Olive",
        "Onyx",
        "Pepper",
        "Rascal",
        "Sandy",
        "Snickers",
        "Sully",
        "Sydney",
        "Taz",
        "Teddy",
        "Tessa",
        "Thor",
        "Wally",
        "Winnie",
        "Yogi",
        "Ziggy",
        "Zoey"
      ];
      

    const randomDescription = petDescriptions[Math.floor(Math.random() * petDescriptions.length)];

    return (
      <p>Name: "{randomDescription}" -- ChatGPT</p>
    );
  };

  return (
    <div>
      <PetDescription />
    </div>
  );
}

//end chatgpt


function CardPet() {

  const petUrl = RandomPetImage();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={petUrl} />
      <Card.Body>
        <Card.Title><PetName/></Card.Title>
        <Card.Text>
          <PetDesc/>
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
      <Row>
        <CardGroup className="mt-5 p-3">
          <CardPet/>
          <CardPet/>
          <CardPet/>
          <CardPet/>
        </CardGroup>
        <CardGroup className="mt-5 p-3">
          <CardPet/>
          <CardPet/>
          <CardPet/>
          <CardPet/>
        </CardGroup>
        <CardGroup className="mt-5 p-3">
          <CardPet/>
          <CardPet/>
          <CardPet/>
          <CardPet/>
        </CardGroup>
        <CardGroup className="mt-5 p-3">
          <CardPet/>
          <CardPet/>
          <CardPet/>
          <CardPet/>
        </CardGroup>
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