import React from "react";
import Search from "./Search";
import Header from "./Header";
import NavBar from "./NavBar";
import CarListBtn from "./CarListBtn";

function BuyPage({ input, setInput, filteredCars }) {
  return (
    <div>
      <Header />
      <NavBar />
      <Search input={input} setInput={setInput} />
      <CarListBtn cars={filteredCars} />
    </div>
  );
}
export default BuyPage;
