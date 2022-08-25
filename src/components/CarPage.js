import { useParams } from "react-router-dom";
import {
  Segment,
  Image,
  Icon,
  Form,
  TextArea,
  Container,
  Button,
} from "semantic-ui-react";
import { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function CarPage() {
  const [car, setCar] = useState({});
  const [input, setInput] = useState("");
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:6001/cars/${id}`) //URL FOR ARRAY OF CARS HERE
      .then((r) => r.json())
      .then((car) => {
        setCar(car);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    let CarObj = {
      make: car.make,
      model: car.model,
      year: car.year,
      price: car.price,
      img: car.img,
      comments: input,
    };
    fetch(`http://localhost:6001/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CarObj),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleChange(e) {
    setInput(e.target.value);
  }

  return (
    <Container>
      <Header />
      <br />
      <NavBar />
      <br />
      <Segment>
        <text className="price">${car.price}</text>
        <Image src={car.img} className="single-car" centered />
        <h2>{car.make + " " + car.model + " " + car.year}</h2>
        <Form onSubmit={handleSubmit}>
          <h3>Let Us Know Your Opinon!</h3>
          <TextArea onChange={handleChange} placeholder="Leave a Comment..." />
          <Button icon labelPosition="right">
            Submit
            <Icon name="right arrow" />
          </Button>
        </Form>
        <p>{car.comments}</p>
      </Segment>
    </Container>
  );
}

export default CarPage;
