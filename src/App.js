<<<<<<< HEAD
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./helper/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
=======
import './App.css';
import React from 'react'
import Section1 from './components/Section1'
import Section2 from './components/Section2'
import Header from './components/header'
import PaiementCb from './components/paiementcb';

function App() {
  return (
    <div className="App">
    <Header />
    <Section1 />
    <Section2 />       
    <PaiementCb />
     
    </div>
>>>>>>> e9521392effc6911a19e85c8224354092687966e
  );
}

export default App;
