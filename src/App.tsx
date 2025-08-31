import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './component/application/application';
import Skllis from './component/skills/Skllis';
import Counter from './component/counter/Counter';

function App() {
  const skills = ['HTML', ' CSS', 'JavasScript']

  return (
    <div className="App">
      {/* <Application /> */}
      {/* <Skllis skills={skills} /> */}
      <Counter />
    </div>
  );
}

export default App;
