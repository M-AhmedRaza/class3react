import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  return (
    <div className="App">

      <Dinner Dishname="Chicken Birayani"/>
      <br/>
      <Dinner Dishname="Mutton Karahi"/>
      <br/>
      <Dinner Dishname="Aloo Chips"/>

      
    </div>
  )
}

export default App;
