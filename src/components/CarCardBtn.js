import React, { useState } from "react";

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
        <button onClick={handleOnClick} className="primary">
          Buy?
        </button>
      ) : (
        <button onClick={handleOnClick}>Sold!</button>
      )}
    </li>
  );
}

export default CarCardBtn;
