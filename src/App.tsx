import React from 'react';

import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
    </div>
  );
}

export default App;
