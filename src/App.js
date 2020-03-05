import React, { Component } from 'react'
import style from './app.scss';

const App = () => {  
    return (
      <div className={style.app}>
      React Starter 
      <span role="img" aria-label="rocket ship">
        🚀
      </span>
   
       <div className={style.sassyDiv}>Get Sassy!</div>
    </div>

    )
  }

  export default App;