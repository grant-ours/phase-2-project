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
  console.log(input);
  useEffect(() => {
    fetch(`https://warp-gossamer-asteroid.glitch.me/cars/${id}`) //URL FOR ARRAY OF CARS HERE
      .then((r) => r.json())
      .then((car) => {
        setCar(car);
      });
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log(car.comments);
    let CarObj = {
      make: car.make,
      model: car.model,
      year: car.year,
      price: car.price,
      img: car.img,
      comments: [...car.comments, input],
      id: 1,
    };
    fetch(`https://warp-gossamer-asteroid.glitch.me/cars/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(CarObj),
    })
      .then((response) => response.json())
      .then((data) => {
        setCar(data);
      });
    e.target.reset();
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
        {car.comments === undefined ? (
          <p>No Comments</p>
        ) : (
          car.comments.map((comment) => {
            return <li key={comment}>{comment}</li>;
          })
        )}
      </Segment>
    </Container>
  );
}

export default CarPage;
