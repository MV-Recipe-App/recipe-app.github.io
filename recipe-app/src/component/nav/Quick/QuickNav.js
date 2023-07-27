import React from "react";
import {NavLink, Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";

function QuickNav() {
    return (
      <>
          <nav>
        <ul>
            <Link style={{ textDecoration: 'none'}} to="/quick_easy/starter">
              <li>Starter</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/quick_easy/side">
              <li>Side</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/quick_easy/vegan">
              <li>Vegan</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/quick_easy/vegetarian">
              <li>Vegetarian</li>
            </Link>
        </ul>
      </nav>
      </>
    );
  }
  
  export default QuickNav;