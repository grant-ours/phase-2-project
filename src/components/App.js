import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import BuyPage from "./BuyPage";
import SellPage from "./SellPage.js";
import { Route, Routes } from "react-router-dom";

function App() {
  const [cars, setCars] = useState([]);
  const [input, setInput] = useState("");
  const [id, setId] = useState("");
  const filteredCars = cars.filter((car) => {
    return (
      input === "" ||
      car.make.includes(input) ||
      car.model.includes(input) ||
      car.year.includes(input)
    );
  });
  useEffect(() => {
    fetch("http://localhost:6001/cars") //URL FOR ARRAY OF CARS HERE
      .then((r) => r.json())
      .then((data) => setCars(data));
  }, []);

  function addCar(data) {
    setCars([...cars, data]);
  }

  function carId(x) {
    setId(x);
  }

  return (
    <Routes>
      <Route path="/" element={<HomePage carId={carId} cars={cars} />} />
      <Route
        path="/buy"
        element={
          <BuyPage
            input={input}
            setInput={setInput}
            filteredCars={filteredCars}
          />
        }
      />
      <Route path="/sell" element={<SellPage addCar={addCar} cars={cars} />} />
      {/* <Route path={`/cars/${id}`} element={<HomePage />} /> */}
    </Routes>
  );
}

export default App;
