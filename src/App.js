import React from "react";
import "./App.css";
import CardList from "./components/CardList/CardList";
import Mashine from "./components/Machine/Machine";

const App = () => {
  return (
    <div className='App'>
      <div className='mw9 center ph3-ns'>
        <div className='cf ph2-ns'>
          <div className='fl w-75 pa2'>
            <div>
              <CardList />
            </div>
          </div>
          <div className='fl w-25  pa2'>
            <div className='outline bg-washed-green pv4'>
              <Mashine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
