import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

function CarCard({ make, model, year, img, price, id }) {
  return (
    <Card>
      <Link to={`/cars/${id}`}>
        <img src={img} alt={model} className="image" />
        <h4>
          {make + " "}
          {model + " "}
          {year}
        </h4>
        <p>Price: ${price}</p>
      </Link>
    </Card>
  );
}

export default CarCard;
