import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import DrinksNav from "./DrinksNav";
import Cocktail from "./components/Cocktail"

function Drinks() {
    return (
      <>
      <div className="drinks-nav">
        <DrinksNav />
      </div>
      <div className="drinks-main">
      </div>
      <Outlet />
      </>
    );
  }
  
  export default Drinks;