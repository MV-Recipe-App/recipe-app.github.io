import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";
import QuickNav from "./QuickNav";

function Quick() {
    return (
      <>
      <div className="drinks-nav">
        <QuickNav />
      </div>
      <div className="drinks-main">
      </div>
      <Outlet />
      </>
    );
  }
  
  export default Quick;