import React from "react";

const Pizza = (props) => {
  const { name, ingredients, price, photoName, soldOut } = props.pizzaObj;

  if (soldOut) {
    return null;
  }
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price}</span>
      </div>
    </li>
  );
};

export default Pizza;
