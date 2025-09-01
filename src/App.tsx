import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Application } from './component/application/application';
import Skllis from './component/skills/Skllis';
import Counter from './component/counter/Counter';

import { AppProviders } from './providers/AppProviders';
import { MuiMode } from './component/mui/MuiMode';

function App() {
  const skills = ['HTML', ' CSS', 'JavasScript']

  return (
    <AppProviders>
      <div className="App">
        {/* <Application /> */}
        {/* <Skllis skills={skills} /> */}
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
