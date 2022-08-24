import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./Header";
import NavBar from "./NavBar";

function CarPage() {
  const [car, setCar] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:6001/cars/${id}`) //URL FOR ARRAY OF CARS HERE
      .then((r) => r.json())
      .then((car) => {
        setCar(car);
      });
  }, [id]);
  return (
    <div>
      <Header />
      <NavBar />
      <div>
        <img src={car.img} alt={car.model} className="single-car" />
      </div>
    </div>
  );
}

export default CarPage;
