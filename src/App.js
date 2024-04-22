
import Home from './Pages/Home/Home';
import Sign from './Pages/Sign/Sign';
import './App.css';
import React from "react";


import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/Netflix' element = {<Home/>}/>
          <Route path='/sign' element = {<Sign/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
