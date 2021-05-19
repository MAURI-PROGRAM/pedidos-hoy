import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="Products-ite">
      <img src={product.image} alt={product.title} />
      <div className="Product-item-info">
        <h2>{product.title}</h2>
        <span>${product.price}</span>
      </div>
    </div>
  );
};

export default Product;
