import React, { useState, useEffect } from "react";
import NewCarForm from "./NewCarForm";
import CarList from "./CarList";
import Search from "./Search";

function CarPage() {
  const [cars, setCars] = useState([]);
  const [input, setInput] = useState("");

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

  return (
    <main>
      <NewCarForm addCar={addCar} />
      <Search input={input} setInput={setInput} />
      <CarList cars={filteredCars} />
    </main>
  );
}

export default CarPage;
