import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import TravelNav from "./TravelNav";

function Travel() {
    return (
      <>
      <div className="drinks-nav">
        <TravelNav />
      </div>
      <div className="drinks-main">
      </div>
      <Outlet />
      </>
    );
  }
  
  export default Travel;