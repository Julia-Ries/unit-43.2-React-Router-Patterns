import React from "react";
import {BrowserRouter, Switch, Route,Routes, Redirect} from 'react-router-dom';
import ColorsList from "./ColorsList";
import './App.css';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <switch>

        <Route exact path='/colors'>
          <ColorsList /> </Route>
      
        <Route exact path='/colors/new'>
          <ColorsForm /> </Route>
   

        <Route exact path='/colors/:color'>
          <ColorDetail /> </Route>

          <Redirect to='/colors' />
    

      </switch>
    </BrowserRouter>

    </div>
  );
}

export default App;
