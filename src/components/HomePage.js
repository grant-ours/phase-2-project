import React from "react";
import CarList from "./CarList";
import Header from "./Header";
import NavBar from "./NavBar";
import { Container } from "semantic-ui-react";

function HomePage({ cars }) {
  return (
    <Container>
      <Header />
      <br />
      <NavBar />
      <br />
      <h2>Browse Our Cars!</h2>
      <br />
      <CarList cars={cars} />
    </Container>
  );
}
export default HomePage;
