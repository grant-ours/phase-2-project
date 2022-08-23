import React from "react";
import CarList from "./CarList";
import Header from "./Header";
import NavBar from "./NavBar";
import NewCarForm from "./NewCarForm";

function SellPage({ addCar, cars }) {
  return (
    <div>
      <Header />
      <NavBar />
      <NewCarForm addCar={addCar} />
      <h2>Currently Available Cars</h2>
      <CarList cars={cars} />
    </div>
  );
}

export default SellPage;
