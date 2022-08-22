import React, { useState, useEffect } from "react";
import NewCarForm from "./NewCarForm";
import CarList from "./CarList";
import Search from "./Search";

function CarPage() {
  const [cars, setCars] = useState([]);
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
      <Search />
      <CarList cars={cars} />
    </main>
  );
}

export default CarPage;
