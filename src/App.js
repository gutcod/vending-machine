import React from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Mashine from "./components/Machine/Machine";

const App = () => {
  return (
    <div className='App'>
      <span>vending mashine</span>
      <div className='container'>
        <div className='row'>
          <div className='col bg-info'>
            <CardList />
          </div>
          <div className='col-3 bg-warning'>
            <span>formati codul produsului</span>
            <Mashine />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
