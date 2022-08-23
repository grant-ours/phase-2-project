import React, { useState } from "react";

function CarCard({ make, model, year, img, price }) {
  return (
    <li className="card">
      <img src={img} alt={model} />
      <h4>
        {make + " "}
        {model + " "}
        {year}
      </h4>
      <p>Price: ${price}</p>
    </li>
  );
}

export default CarCard;
