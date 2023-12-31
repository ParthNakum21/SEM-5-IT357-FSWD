import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import axios from 'axios';

function App() {
  const [username, setUsername] = useState('');
  const [bgColor, setBgColor] = useState('white'); // Default background color

  useEffect(() => {
    // Read bgColor cookie and set the background color
    const storedBgColor = document.cookie
      .split('; ')
      .find((row) => row.startsWith('bgColor='))
      ?.split('=')[1];
    if (storedBgColor) {
      setBgColor(storedBgColor);
    }
  }, []);

  const handleLogin = (user) => {
    setUsername(user);
  };

  const handleLogout = async () => {
    try {
      await axios.post('http://localhost:5000/logout', null, { withCredentials: true });
      setUsername('');
      setBgColor('white'); // Reset background color
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App" style={{ backgroundColor: bgColor }}>
      {username ? (
        <Home username={username} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
