import React from 'react';
import useApiData from './prac'; // Assuming you've saved the hook in a separate file

function App() {
  const apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Replace with your API URL
  const { data, loading, error } = useApiData(apiUrl);

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div>
          <h1>API Data</h1>
          <ul>
            {data.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
