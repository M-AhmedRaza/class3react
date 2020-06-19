import React from 'react';
import Dinner from './dinner.js';
import './App.css';

function App() {
  return (
    <div className="App">

      <Dinner Dishname="Chicken Birayani"/>
      <Dinner Dishname="Mutton Karahi"/>
      <Dinner Dishname="Aloo Chips"/>

      
    </div>
  )
}

export default App;
