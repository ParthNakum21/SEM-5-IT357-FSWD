// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import ShoppingCart from './components/ShoppingCart';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>E-Commerce Website</h1>
        <nav>
          
              <Link to="/">Product Listing</Link>||
            
              <Link to="/cart">Shopping Cart</Link> <br></br><br></br><br></br>
            
        </nav>
        <Routes>
          <Route path="/" element={<ProductList />} />
          {/* <Route path="/product/:id" element={<ProductDetail />} /> */}
          {/* <Route path="/cart" element={<ShoppingCart />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
