import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState(''); 

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    if (storedTodos.length > 0) {
      console.log('Loaded from localStorage:', storedTodos);
      setTodos(storedTodos);
    } else {
      axios.get('http://localhost:3001/todos').then((response) => {
        console.log('Loaded from server:', response.data);
        setTodos(response.data);
      });
    }
  }, []);

  useEffect(() => {
    console.log('Saving to localStorage:', todos);
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!text.trim()) return;
    axios.post('http://localhost:3001/todos', { text }).then((response) => {
      setTodos([...todos, response.data]);
      setText('');
    });
  };

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`).then(() => {
      setTodos(todos.filter((todo) => todo.id !== id));
    });
  };

  const toggleComplete = (id, completed) => {
    axios
      .patch(`http://localhost:3001/todos/${id}/completed`, { completed: !completed })
      .then((response) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: response.data.completed } : todo
          )
        );
      })
      .catch((error) => console.error('Error updating todo:', error));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: 'auto' }}>
      <h1>To-Do List</h1>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a task"
          style={{ padding: '10px', flex: 1, marginRight: '10px' }}
        />
        <button onClick={addTodo} style={{ padding: '10px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyleType: 'none', padding: '0' }}>
        {todos.length ? (
          todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '10px',
              }}
            >
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleComplete(todo.id, todo.completed)}
              />
              <span
                style={{
                  textDecoration: todo.completed ? 'line-through' : 'none',
                  marginLeft: '10px',
                }}
              >
                {todo.text}
              </span>
              <button
                onClick={() => deleteTodo(todo.id)}
                style={{ marginLeft: 'auto' }}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <p>No tasks to display</p>
        )}
      </ul>
    </div>
  );
};

export default App;
