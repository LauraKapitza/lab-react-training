import React from 'react';
import IdCard from './IdCard/IdCard.js';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>Iteration 1 - Id Cards</h2>
      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        birth={new Date("1992-07-14")}
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        birth={new Date("1988-05-11")}
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <hr />

      <h2>Iteration 2 - Greetings</h2>


      <hr />
    
    
    
    </div>
  );
}

export default App;
