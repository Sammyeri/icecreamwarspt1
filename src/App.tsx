import React from 'react';

import './App.css';
import Header from './components/Header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/Votes';
import Ad from "./components/Ad";



function App() {
  return (
    <div className="App">
      <Header user="Grant Chirpus"></Header>
      <div className='Ads-wrapper'>
      <Ad flavor="Chocolate" fontSize= {24} darkTheme= {true}></Ad>
      <Ad flavor="Vanilla" fontSize= {24} darkTheme= {false}></Ad>
      <Ad flavor="Strawberry" fontSize= {24} darkTheme= {true}></Ad>
      </div>
      <AdDesigner></AdDesigner>
      <Votes></Votes>
    </div>
  );
}

export default App;
