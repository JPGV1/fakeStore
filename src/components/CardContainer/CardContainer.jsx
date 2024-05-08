import React from 'react';
import Cards from '../Cards/Cards'

function CardContainer({ products }) {
  return (
    <ul>
      {products ? (
        products.map(product => (
          <Cards key={product.id} 
          image={product.image}
          title={product.title}
          description={product.description}
          price={product.price} 
          />
        ))
      ) : (
        <li className='text-white'>Cargando productos...</li>
      )}
    </ul>
  );
}

export default CardContainer;