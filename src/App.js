import React from 'react';
import './App.css';
import { Header } from './components/Header';
import TaskLayout from './components/TaskComponents/TaskLayout';

export const App = () => {

  return (
      <div className="App">
        <Header/>
        <TaskLayout/>
      </div>
  );
}

