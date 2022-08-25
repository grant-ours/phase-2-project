import React from "react";
import CarCardBtn from "./CarCardBtn";
import { Card } from "semantic-ui-react";

function CarListBtn({ cars }) {
  const car = cars.map((car) => {
    return <CarCardBtn key={car.model} {...car} />;
  });
  return <Card.Group itemsPerRow={5}>{car}</Card.Group>;
}

export default CarListBtn;
