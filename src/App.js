import React from 'react';
import './App.css';
import Warships from './Warships'
import Facts from './warshipFacts'
import { Button } from '@material-ui/core';




function App() {
  return (
    <div className="App">
      
     <Warships />
     <Facts />

     
    </div>
  );
}

export default App;
