import React from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Mashine from "./components/Machine/Machine";

const App = () => {
  return (
    <div className='App'>
      <div className='boxA'>
        <CardList />
      </div>
      <div className='boxB'>
        <Mashine />
      </div>
    </div>
  );
};

export default App;
