import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import AddToDo from './components/AddToDo/AddToDo.js';
import ToDoList from './components/ToDoList/ToDoList';


function App() {

  const [todo, setToDo] = useState ([])

  return (
    <div className="App">
      <Header />
      <AddToDo todo = {todo} setToDo = {setToDo} />
      <ToDoList todo = {todo} setToDo = {setToDo} />
    </div>
  )
}

export default App;
 