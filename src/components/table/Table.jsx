import React from "react";
import { items } from "../../models/items.js";

function Table() {
  return (
    <table className="w-full">
      <thead>
        <tr>
          <th className="border-table">Image</th>
          <th className="text-left border-table">Title</th>
          <th className="text-left border-table">Description</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr
            key={item.id}
            className="even:border-table even:bg-green-900 p-10"
          >
            <td>
              <img
                className="w-[150px] h-[150px] object-cover"
                src={item.img}
                alt="item"
              />
            </td>
            <td className="w-1/4">{item.title}</td>
            <td className="w-1/4">{item.description}</td>
          </tr>
        ))}
      </tbody>
      <tfoot></tfoot>
    </table>
  );
}

export default Table;
