import Card from "./Card";
import React from "react";
import { items } from "../../models/items.js";

function CardList() {
  return (
    <div className="card__container">
      {items.map((item) => (
        <Card
          key={item.id}
          img={item.img}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
}

export default CardList;
