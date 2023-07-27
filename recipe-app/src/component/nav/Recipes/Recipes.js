import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import RecipesNav from "./RecipesNav";

function Recipes() {
    return (
      <>
      <div className="drinks-nav">
        <RecipesNav />
      </div>
      <div className="drinks-main">
      </div>
      <Outlet />
      </>
    );
  }
  
  export default Recipes;