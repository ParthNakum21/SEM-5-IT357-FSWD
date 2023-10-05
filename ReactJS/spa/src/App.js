import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link> |    
          <Link to="/about">About</Link>  |     
          <Link to="/contact">Contact</Link>  |
          <Link to="/login">Login</Link>

        </nav>

        <hr />

        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
