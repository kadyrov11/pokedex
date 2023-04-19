import React from 'react';

import './App.css'

import Router from './navigation';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <>
      <Navbar/>
      <div className='container'>
          <Router/>
      </div>
    </>
  );
}

export default App;