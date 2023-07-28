import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import {NavLink, Link} from "react-router-dom";

function QuickOverview() {
  return (
    <>
    <div className="content">
    <Link style={{ textDecoration: 'none'}} to="/quick_easy/side">
    <img src='https://www.acouplecooks.com/wp-content/uploads/2021/06/Vegetable-Kabobs-001.jpg'className='breakfast'/>
    <div className="child">
    Looking for sides that steal the show? We've got you covered, from simple grains and veggies creations. No matter what the season or the main dish, there's a perfect side in this list of 101 recipes for you.
    <ul>
    <li className='more-break'>
      Click To View More Side Dishes
    </li>
    </ul>
    </div>
    </Link>
    </div>
    </>
  );
}

export default QuickOverview;