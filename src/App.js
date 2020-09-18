import React from 'react';
import './App.css';

import WordCard from './WordCard';
function App() {
 return (
  <div>
      <p>
        Word card game
      </p>
        <p>ผสมตัวอักษรทั้งหมดให้เป็นคำ</p>
  <WordCard value="hello"/>
  </div>
 );
}
export default App;
