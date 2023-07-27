import React from "react";
import {NavLink, Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";




function TravelNav() {
    return (
      <>
          <nav>
        <ul>
            <Link style={{ textDecoration: 'none'}} to="/travel/american">
              <li>American</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/british">
              <li>British</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/chinese">
              <li>Chinese</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/indian">
              <li>Indian</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/french">
              <li>French</li>
            </Link>  
            <Link style={{ textDecoration: 'none'}} to="/travel/jamaican">
              <li>Jamaican</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/italian">
              <li>Italian</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/moroccan">
              <li>Moroccan</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/greek">
              <li>Greek</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/travel/portuguese">
              <li>Portuguese</li>
            </Link>
        </ul>
      </nav>
      </>
    );
  }
  
  export default TravelNav;