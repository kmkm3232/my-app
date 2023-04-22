import React from 'react';
import logo from './logo.svg';
import Frontpage from './component/frontpage';
import Table from './component/table';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      Title
      <Routes>
        <Route path='/' Component={Frontpage} />
        <Route path='table' Component={Table} />
      </Routes>
    </div>
  );
}

export default App;
