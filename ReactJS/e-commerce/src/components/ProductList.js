// src/components/ProductList.js
import React, { useState } from 'react';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: 'Product 1',
      price: 50,
      discount: 10,
      image: 'product1.jpg',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 30,
      discount: 5,
      image: 'product2.jpg',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 25,
      discount: 0,
      image: 'product3.jpg',
    },
    {
      id: 4,
      name: 'Product 4',
      price: 40,
      discount: 15,
      image: 'product4.jpg',
    },
    {
      id: 5,
      name: 'Product 5',
      price: 60,
      discount: 10,
      image: 'product5.jpg',
    },
  ]);

  const handleAddToCart = (productId) => {
    // Implement your Add to Cart logic here
    console.log(`Added product with ID ${productId} to the cart`);
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={`${process.env.PUBLIC_URL}/images/${product.image}`}
            alt={product.name}
          />
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          {product.discount > 0 && <p>Discount: {product.discount}%</p>}
          <button onClick={() => handleAddToCart(product.id)}>
            Add to Cart
          </button> <br></br><br></br>
          {/* <p>Product Details: (Add your product details here)</p> */}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
