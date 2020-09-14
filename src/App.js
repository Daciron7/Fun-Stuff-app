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

     <Button variant="contained" color="primary">Happy Button!</Button>
     <Button variant="contained" color="primary">Another Button!</Button>
    </div>
  );
}

export default App;
