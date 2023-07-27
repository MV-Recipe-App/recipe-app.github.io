import React from "react";
import {NavLink, Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Beer from "./components/Beer";



function DrinksNav() {
    return (
      <>
          <nav>
        <ul>
            <Link style={{ textDecoration: 'none'}} to="/drinks/cocktail">
              <li>Cocktail</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/beer">
              <li>Beer</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/coffee_tea">
              <li>Coffee/Tea</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/cocoa">
              <li>Cocoa</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/homemade">
              <li>Homemade</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/ordinary">
              <li>Ordinary</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/party">
              <li>Party Drinks</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/shake">
              <li>Shakes</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/shot">
              <li>Shots</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/softdrink">
              <li>Soft Drinks</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/drinks/more">
              <li>More</li>
            </Link>
        </ul>
      </nav>
      {/* <h1>Drinks Nav</h1> */}
      </>
    );
  }
  
  export default DrinksNav;