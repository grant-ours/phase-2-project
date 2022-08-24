import React from "react";
import { Card } from "semantic-ui-react";
import CarCard from "./CarCard";

function CarList({ cars }) {
  const car = cars.map((car) => {
    return <CarCard key={car.model} {...car} />;
  });
  return <Card.Group itemsPerRow={5}>{car}</Card.Group>;
}

export default CarList;
