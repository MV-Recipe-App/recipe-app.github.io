import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from './component/Home'
import Nav from "./component/nav/Nav"
import Drinks from './component/nav/Drinks/Drinks';
import Cocktail from './component/nav/Drinks/components/Cocktail'
import DrinksOverview from './component/nav/Drinks/DrinksOverview';

function App() {
  return (
    <>
    <div className='app-NavBar'>
    <Nav />
      </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/drinks' element={<Drinks/>}>
      <Route path="" element={<DrinksOverview />} />
      <Route path="cocktail" element={<Cocktail />} />
    </Route>
    <Route path="*" element={<Navigate replace to="/"/>} />
    </Routes>
    </>
  );
}

export default App;
