import React from "react";
import CarCardBtn from "./CarCardBtn";

function CarListBtn({ cars }) {
  const car = cars.map((car) => {
    return <CarCardBtn key={car.model} {...car} />;
  });
  return <ul className="cards">{car}</ul>;
}

export default CarListBtn;
