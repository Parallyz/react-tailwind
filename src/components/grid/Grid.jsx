import Card from "../card/Card";
import React from "react";
import { items } from "../../models/items";

function Grid() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-2">
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

export default Grid;
