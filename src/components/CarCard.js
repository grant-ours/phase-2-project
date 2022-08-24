import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

function CarCard({ make, model, year, img, price, id }) {
  return (
    // <Card>
    //   <Image src={img} wrapped ui={false} />
    //   <Card.Content>
    //     <Card.Header>
    //       {make + " "}
    //       {model + " "}
    //     </Card.Header>
    //     <Card.Meta>
    //       <span className="date">{year}</span>
    //     </Card.Meta>
    //     <Card.Description>${price}</Card.Description>
    //   </Card.Content>
    // </Card>
    <Link to={`/cars/${id}`}>
      <Card>
        <img src={img} alt={model} className="image" />
        <h4>
          {make + " "}
          {model + " "}
          {year}
        </h4>
        <p>Price: ${price}</p>
      </Card>
    </Link>
  );
}

export default CarCard;
