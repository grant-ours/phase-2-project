import React from "react";
import CarCard from "./CarCard";

function CarList({ cars }) {
  const car = cars.map((car) => {
    return <CarCard key={car.model} {...car} />;
  });
  return <ul className="cards">{car}</ul>;
}

export default CarList;
