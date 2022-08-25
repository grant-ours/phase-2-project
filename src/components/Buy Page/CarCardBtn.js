import React, { useState } from "react";
import { Button } from "semantic-ui-react";

function CarCardBtn({ make, model, year, img, price }) {
  const [isInStock, setIsInStock] = useState(true);
  function handleOnClick() {
    setIsInStock(!isInStock);
  }
  return (
    <li className="card">
      <img src={img} alt={model} />
      <h4>
        {make + " "}
        {model + " "}
        {year}
      </h4>
      <p>Price: ${price}</p>
      {isInStock ? (
        <Button positive onClick={handleOnClick} className="button">
          Buy?
        </Button>
      ) : (
        <Button negative onClick={handleOnClick} className="button">
          Sold!
        </Button>
      )}
    </li>
  );
}

export default CarCardBtn;
