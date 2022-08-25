import React from "react";
import Search from "./Search";
import Header from "../Header";
import NavBar from "../NavBar";
import CarListBtn from "./CarListBtn";
import { Container } from "semantic-ui-react";

function BuyPage({ input, setInput, filteredCars }) {
  return (
    <Container>
      <Header />
      <br />
      <NavBar />
      <br />
      <Search input={input} setInput={setInput} />
      <br />
      <CarListBtn cars={filteredCars} />
    </Container>
  );
}
export default BuyPage;
