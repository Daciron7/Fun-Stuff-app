import React from 'react';
import {Route, Switch} from 'react-router-dom'
//import './App.css';

import WarshipFacts from './warshipFacts'
import Layout from './Layout'
import Esports from './esports';

//import {FunStuffContextProvider} from './contexts/FunStuffContext'





function App() {
  return (
    
    <div className="App">
      <Layout />
      <Switch>
     <Route path="/esports" component={Esports} />
     <Route path="/warshipfacts" component={WarshipFacts} />
     
      </Switch>
     
    </div>
    
  );
}

export default App;
