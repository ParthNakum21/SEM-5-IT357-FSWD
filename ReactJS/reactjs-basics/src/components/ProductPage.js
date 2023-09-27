import React from 'react';
import Product from './Product'

function ProductPage(){
    const products = [
        {name: 'HP', price: 150000},
        {name: 'Apple', price: 250000},
        {name: 'Dell', price: 100000},        
    ];

    return(
        <div className="product-page">
            <h1>Products</h1>
            <div className="product-list">
                {products.map((product,index)=>(
                    <Product key={index} name={product.name} price={product.price}/>
                ))}
            </div>
        </div>
        
    );
}

export default ProductPage;