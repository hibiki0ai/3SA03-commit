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
        <p>ผสมตัวอักษรทั้งหมดให้เป็นคำ</p>
        <p>|---|</p><p>|---|</p><p>\_|---|_/</p><p>\---/</p><p>\-/</p><p>\/</p>
      </header>
  <WordCard value="hello"/>
  </div>
 );
}
export default App;
