import React, { useState, useEffect } from "react";
import HomePage from "./HomePage";
import BuyPage from "./Buy Page/BuyPage";
import SellPage from "./Sell Page/SellPage.js";
import { Route, Routes } from "react-router-dom";
import CarPage from "./CarPage";

function App() {
  const [cars, setCars] = useState([]);
  const [input, setInput] = useState("");
  // const [id, setId] = useState("");
  const filteredCars = cars.filter((car) => {
    return (
      input === "" ||
      car.make.includes(input) ||
      car.model.includes(input) ||
      car.year.includes(input)
    );
  });
  useEffect(() => {
    fetch("https://warp-gossamer-asteroid.glitch.me/cars") //URL FOR ARRAY OF CARS HERE
      .then((r) => r.json())
      .then((data) => setCars(data));
  }, []);

  function addCar(data) {
    setCars([...cars, data]);
  }

  return (
    <Routes className="App">
      <Route path="/" element={<HomePage cars={cars} />} />
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
      <Route path="/cars/:id" element={<CarPage />} />
    </Routes>
  );
}

export default App;
