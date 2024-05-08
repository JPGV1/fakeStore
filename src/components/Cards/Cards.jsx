import React from 'react';

function Cards({ image, title, description, price }) {
  return (
    <li>
      <div>
        <img src={image} alt="" />
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Precio: ${price}</p>
      </div>
    </li>
  );
}

export default Cards;
