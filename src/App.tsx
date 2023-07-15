import React from 'react';
import Frontpage from './component/frontpage';
import Table from './component/table';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import TodoList from './component/todolist';
import Navbar from './component/Navbar';

function App() {
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' Component={Frontpage} />
        <Route path='table' Component={Table} />
        <Route path='todoapp' Component={TodoList} />
      </Routes>
    </div>
  );
}

export default App;
