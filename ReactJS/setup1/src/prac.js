import React, { useState, useRef, useEffect,createContext, useContext, useMemo } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }
// export default Counter;

// function DataFetcher() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Fetch data when the component mounts
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//     return () => {
//     };
//   }, []); //effect runs once

//   return (
//     <div>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DataFetcher;


// function FocusInput() {
//   const inputRef = useRef(null);

//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   return (
//     <div>
//       <input ref={inputRef} type="text" />
//     </div>
//   );
// }

// export default FocusInput;

// const UserContext = createContext();

// function App() {
//   return (
//     <UserContext.Provider value={{ username: 'Parth Nakum' }}>
//       <UserProfile />
//     </UserContext.Provider>
//   );
// }

// function UserProfile() {
//   const user = useContext(UserContext);

//   return <p>Username: {user.username}</p>;
// }

// export default App;

// function ExpensiveCalculation() {
//   const [number, setNumber] = useState(0);

//   const squaredNumber = useMemo(() => {
//     console.log('Calculating squared number...');
//     return number * number;
//   }, [number]);

//   return (
//     <div>
//       <p>Number: {number}</p>
//       <p>Squared Number: {squaredNumber}</p>
//       <button onClick={() => setNumber(number + 1)}>Increment</button>
//     </div>
//   );
// }

// export default ExpensiveCalculation;

// Custom hook to fetch data from a public API
function useApiData(apiUrl) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [apiUrl]);

  return { data, loading, error };
}

export default useApiData;
