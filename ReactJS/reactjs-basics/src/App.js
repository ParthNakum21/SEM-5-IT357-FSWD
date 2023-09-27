import React from 'react';
// import HelloWorld from './HelloWorld';
import './App.css';
import ProductPage from './components/ProductPage';
import CheckBox from './components/CheckBox';
import Counter from './components/Counter';
import TaskList from './components/TaskList';
import StudentList from './components/StudentList';

function App() {
  return(
    <div className='App'>
      {/* <HelloWorld/> */}
      <header className='App-header'>
        <h1>Welcome to My Product Store</h1>
      </header>
      <ProductPage/>
      <Counter/>
      <CheckBox/>
      <TaskList/>
      <StudentList/>
      
    </div>
  );
}

export default App;