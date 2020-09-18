import React from 'react';
import './App.css';

import WordCard from './WordCard';
function App() {
 return (
  <div>
      <header className="App-header">
        <p>
          Word card game
        </p>
        <p>Mix all letters into words</p>
        <p>A hint of "Hardest Pure Carbon" ?</p><p>|---|</p>
        <p>\__|---|__/</p><p>\-----/</p><p>\---/</p><p>\/</p>
      </header>
  <WordCard value="Diamond"/>
  </div>
 );
}
export default App;
