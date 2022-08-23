import React from "react";
import CarList from "./CarList";
import Header from "./Header";
import NavBar from "./NavBar";

function HomePage({ cars }) {
  return (
    <div className="title-bar">
      <Header />
      <NavBar />
      <h2>Browse Our Cars!</h2>
      <CarList cars={cars} />
    </div>
  );
}
export default HomePage;
