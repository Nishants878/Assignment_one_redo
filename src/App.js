import React from 'react';
import MainContainer from './MainContainer/MainContainer';
import './App.css';
import classes from './App.module.css';
import Topbar from './TopBar/TopBar';

function App() {
  return (
    <div className={classes.App}>
      
       <Topbar/>
       <MainContainer/>
    </div>
  );
}

export default App;
