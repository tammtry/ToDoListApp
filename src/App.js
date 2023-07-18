import './App.css';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';
import React, { useEffect, useState } from 'react';

function App() {
  
  const [toDoList, setToDoList] = useState([])
  const [filter, setFilter] = useState('all');
  const [searchInput, setSearchInput] = useState('')

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: Math.random() * 1000, task: userInput, complete: false }];
    setToDoList(copy);
    console.log(copy);
  }

  const deleteTask = (id) => {
    const updatedList = toDoList.filter((task) => task.id !== id);
    setToDoList(updatedList);
  }

  const updateTask = (updatedTodo) => {
    const updatedList = toDoList.map((task) =>
      task.id === updatedTodo.id ? updatedTodo : task
    );
    setToDoList(updatedList);
  };

  const filterToDoList = () => {
    switch (filter) {
      case 'completed':
        return toDoList.filter((task) => task.complete);
      case 'uncompleted':
        return toDoList.filter((task) => !task.complete);
      default:
        return toDoList;
    }
  };

  const handleFilterChange = (filterType) => {
    setFilter(filterType);
  };

  const handleSearchInputChange = (e) => {
    setSearchInput(e.currentTarget.value);
  };

  const handleSearch = () => {
    const searchResults = toDoList.filter((task) =>
      task.task.toLowerCase().includes(searchInput.toLowerCase())
    );
    setToDoList(searchResults);
  };

  return (
    <div className="App">
      <h3>TO DO LIST</h3>
      <div>
        <button onClick={() => handleFilterChange('all')}>All</button>
        <button onClick={() => handleFilterChange('completed')}>Completed</button>
        <button onClick={() => handleFilterChange('uncompleted')}>Uncompleted</button>
      </div>
      <div>
        <input
          type="text"
          value={searchInput}
          onChange={handleSearchInputChange}
          placeholder="Search..."
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <ToDoList toDoList={filterToDoList()} onDelete={deleteTask} onUpdate={updateTask} />
      <ToDoForm addTask={addTask}
      />
    </div>
  );
}

export default App;
