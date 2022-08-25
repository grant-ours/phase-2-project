import React from "react";
import { Container } from "semantic-ui-react";
import CarList from "../CarList";
import Header from "../Header";
import NavBar from "../NavBar";
import NewCarForm from "./NewCarForm";

function SellPage({ addCar, cars }) {
  return (
    <Container>
      <Header />
      <br />
      <NavBar />
      <br />
      <NewCarForm addCar={addCar} />
      <br />
      <h2>Currently Available Cars</h2>
      <br />
      <CarList cars={cars} />
    </Container>
  );
}

export default SellPage;
