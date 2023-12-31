// TodoList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  useEffect(() => {
    // Fetch todos from the backend API
    axios.get('/api/todos').then((response) => {
      setTodos(response.data);
    });
  }, []);

  const addTodo = () => {
    // Create a new todo and send it to the backend API
    axios
      .post('/api/todos', { text: newTodo, completed: false })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo('');
      });
  };

  const toggleTodo = (id) => {
    // Toggle the completion status of a todo and update it on the backend
    const updatedTodos = todos.map((todo) =>
      todo._id === id ? { ...todo, completed: !todo.completed } : todo
    );

    axios.put(`/api/todos/${id}`, { completed: !todos.find((t) => t._id === id).completed });
    setTodos(updatedTodos);
  };

  const deleteTodo = (id) => {
    // Delete a todo from the backend
    axios.delete(`/api/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo._id !== id));
    });
  };

  return (
    <div>
      <h1>Todo List</h1>
      <div>
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(todo._id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
