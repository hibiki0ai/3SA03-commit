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
        <p>คำใบ้ "คาร์บอนบริสุทธิที่มีความแข็งที่สุด"</p><p>|---|</p>
        <p>\__|---|__/</p><p>\-----/</p><p>\---/</p><p>\/</p>
      </header>
  <WordCard value="Diamond"/>
  </div>
 );
}
export default App;
