import './App.css';
import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Header from './components/header'
import PaiementCb from './components/paiementcb';

function App() {
  return (
    <div className="App">
     <Section1 />
     <Section2 />
     
     <Header />
     <PaiementCb />
     
    </div>
  );
}

export default App;
