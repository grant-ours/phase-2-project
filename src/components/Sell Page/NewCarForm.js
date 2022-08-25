import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";

function NewCarForm({ addCar }) {
  const [modelInput, setModelInput] = useState("");
  const [makeInput, setMakeInput] = useState("");
  const [yearInput, setYearInput] = useState("");
  const [priceInput, setPriceInput] = useState("");
  const [imgInput, setImgInput] = useState("");

  function handleModelChange(e) {
    setModelInput(e.target.value);
  }
  function handleMakeChange(e) {
    setMakeInput(e.target.value);
  }
  function handleYearChange(e) {
    setYearInput(e.target.value);
  }
  function handlePriceChange(e) {
    setPriceInput(e.target.value);
  }
  function handleImgChange(e) {
    setImgInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newCarObj = {
      model: modelInput,
      make: makeInput,
      year: yearInput,
      price: priceInput,
      img: imgInput,
    };

    fetch("http://localhost:6001/cars", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCarObj),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        addCar(data);
      });
  }
  return (
    <div className="new-car-form">
      <h2>Sell Your Car to Us!</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Input
            onChange={handleModelChange}
            value={modelInput}
            type="text"
            name="model"
            placeholder="Model"
          />
          <Form.Input
            onChange={handleMakeChange}
            value={makeInput}
            type="text"
            name="make"
            placeholder="Make"
          />
          <Form.Input
            onChange={handleYearChange}
            value={yearInput}
            type="text"
            name="year"
            placeholder="Year"
          />
          <Form.Input
            onChange={handlePriceChange}
            value={priceInput}
            type="number"
            name="price"
            step="0.01"
            placeholder="Price"
          />
          <Form.Input
            onChange={handleImgChange}
            value={imgInput}
            type="text"
            name="image"
            placeholder="Image URL"
          />
        </Form.Group>
        <Button fluid>Sell Car</Button>
      </Form>
    </div>
  );
}

export default NewCarForm;
