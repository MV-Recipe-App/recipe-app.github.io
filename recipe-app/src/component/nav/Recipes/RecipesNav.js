import React from "react";
import {NavLink, Link} from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";




function TravelNav() {
    return (
      <>
          <nav>
        <ul>
            <Link style={{ textDecoration: 'none'}} to="/recipe/breakfast">
              <li>Breakfast</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/recipe/beef">
              <li>Beef</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/recipe/chicken">
              <li>Chicken</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/recipe/lamb">
              <li>Lamb</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/recipe/pasta">
              <li>Pasta</li>
            </Link>  
            <Link style={{ textDecoration: 'none'}} to="/recipe/pork">
              <li>Pork</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/recipe/seafood">
              <li>Seafood</li>
            </Link>
            <Link style={{ textDecoration: 'none'}} to="/recipe/more">
              <li>More</li>
            </Link>
        </ul>
      </nav>
      </>
    );
  }
  
  export default TravelNav;