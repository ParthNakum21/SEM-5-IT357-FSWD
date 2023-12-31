import React from 'react';

const Home = ({ username, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {username}!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Home;
