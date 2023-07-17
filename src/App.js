import './App.css';
import ToDoList  from './components/ToDoList/ToDoList';
import ToDoForm  from './components/ToDoForm/ToDoForm';
import {AddList} from './components/ToDo/ToDo';
import { useState } from 'react';

function App() {
  const [toDoList, setToDoList] = useState([])

  const addTask = (userInput) => {
    let copy = [...toDoList];
    copy = [...copy, { id: Math.random()*1000, task: userInput, complete: false }];
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

  const filterTasks = (showCompleted) => {
    const filteredList = showCompleted
      ? toDoList.filter((task) => task.complete)
      : toDoList.filter((task) => !task.complete);
    setToDoList(filteredList);
  };


  return (
    <div className="App">
          <h3>TO DO LIST</h3>
           <ToDoList toDoList={toDoList} onDelete={deleteTask} onUpdate={updateTask}/>
           <ToDoForm addTask={addTask} filterTasks={filterTasks}/>        
    </div>
  );
}

export default App;
