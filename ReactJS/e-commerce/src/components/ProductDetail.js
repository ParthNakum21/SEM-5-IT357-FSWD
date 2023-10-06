// src/components/ProductDetail.js
import React from 'react';

const ProductDetail = ({ product }) => {
  return (
    <div className="product-detail">
      <h2>{product.name}</h2>
      <img
        src={`${process.env.PUBLIC_URL}/images/${product.image}`}
        alt={product.name}
      />
      <p>Price: ${product.price}</p>
      <p>Discount: {product.discount}%</p>
      <p>Product Details: (Add your product details here)</p>
    </div>
  );
};

export default ProductDetail;
