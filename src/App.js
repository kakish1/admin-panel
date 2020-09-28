import React from 'react';
import { StateContext, StateProvider } from './api/state';
import './App.css';
import { SideBar } from './components/Sidebar';
import { Test } from './components/Test';



const App = () => {
  return (
    <div>
      <StateProvider>
        <SideBar />
        {/* <Test /> */}
      </StateProvider>
    </div>
  );
}

export default App;
